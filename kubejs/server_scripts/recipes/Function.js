// priority: 100
let $FluidTags = Java.loadClass("net.minecraft.tags.FluidTags")
let $BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")

let IngredientUtils = {
	/**
	 * 获取标签内第一个物品的ID, 若标签下没有物品则返回null
	 * @param {string} ingredient 物品标签ID
	 * @param {number | undefined} count 物品数量
	 * @returns {string | null}
	 */
	getFirstItemId: function (ingredient, count) {
		let ids = count !== undefined
			? Ingredient.of(ingredient, count).getItemIds()
			: Ingredient.of(ingredient).getItemIds()

		if (ids.length > 0) {
			return ids[0]
		} else {
			console.warn(`${ingredient}下没有对应物品`)
			return null
		}
	},
	/**
	 * 获取标签内第一个流体的ID, 若标签下没有流体则返回null
	 * @param {string} fluidTag 流体标签ID
	 * @returns {string | null}
	 */
	getFirstFluidId: function (fluidTag) {
		let tag = $FluidTags.create(ResourceLocation.parse(fluidTag))
		let optional = $BuiltInRegistries.FLUID.getTag(tag)

		if (optional.isPresent()) {
			let fluidHolder = optional.get().stream().findFirst().orElse(null)
			if (fluidHolder !== null) {
				let getFluidKey = $BuiltInRegistries.FLUID.getKey(fluidHolder.value()).toString()
				// console.log(`The first fluid is: ${getFluidKey}`)
				return getFluidKey
			}
		}
		console.warn(`${fluidTag}下没有对应流体`)
		return null
	},
	/**
	 * 表示通用机械的气体
	 * @param {string} gas 气体ID
	 * @param {number | undefined} amount 数量
	 * @returns 
	 */
	ofMekanismGas: function (gas, amount) {
		if (amount === undefined) {
			return {
				gas: gas,
				amount: 1000
			}
		}
		return {
			gas: gas,
			amount: amount
		}
	},
	/**
	 * 判断物品标签是否为空
	 * @param {string} tag 物品标签ID
	 * @returns {boolean}
	 */
	isNotNull: function (tag) {
		return Ingredient.of(tag).getItemIds().length > 0
	}
}

function aeCharger(output, input) {
	const INPUT = Ingredient.of(input).toJson()

	return {
		"type": "ae2:charger",
		"ingredient": INPUT,
		"result": {
			"item": IngredientUtils.getFirstItemId(output)
		}
	}
}

function IEIngredient(input) {
	if (Array.isArray(input)) {
		let count = 0
		let inps = []
		for (let i of input) {
			if (count === 0) {
				count = Item.of(i)
					.getCount()
			}
			inps.push(Item.of(i)
				.withCount(1)
				.toJson())
		}
		return {
			base_ingredient: inps,
			count: count
		}
	}
	return {
		base_ingredient: Item.of(input)
			.withCount(1)
			.toJson(),
		count: Item.of(input)
			.getCount()
	}
}
function addSmeltingRecipe(event, output, input) {
	event.recipes.minecraft.blasting(output, input)
		.cookingTime(100)

	event.recipes.minecraft.smelting(output, input)
		.cookingTime(200)
}

// Test Function Event
BlockEvents.rightClicked((event) => {
	let { block, player } = event
	const DEBUG_BLOCK = "cmi:green_screen"

	if (block.id === DEBUG_BLOCK) {
		player.tell(IngredientUtils.getFirstFluidId("forge:solutions/iron/chloride"))
	}
})