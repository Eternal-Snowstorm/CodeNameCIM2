// priority: 100
let $FluidTags = Java.loadClass("net.minecraft.tags.FluidTags")
let $BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")

let IngredientUtils = {
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
		return null
	},
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