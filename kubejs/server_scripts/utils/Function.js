// priority: 10
let $MekanismAPI =
	Java.loadClass("mekanism.api.MekanismAPI")
let $Slurry =
	Java.loadClass("mekanism.api.chemical.slurry.Slurry")
let $Gas =
	Java.loadClass("mekanism.api.chemical.gas.Gas")
let $Chemical =
	Java.loadClass("mekanism.api.chemical.Chemical")

let IngrUtils = {
	/**
	 * 获取标签内第一个物品的ID, 若标签下没有物品则返回null
	 * @param {Internal.Ingredient_} tagOrItem 物品标签ID
	 * @param {number | undefined} count 物品数量
	 * @returns {String | null}
	 */
	getFirstItemId: function (tagOrItem, count) {
		let ids = count !== undefined
			? Ingredient.of(tagOrItem, count).getItemIds()
			: Ingredient.of(tagOrItem).getItemIds()

		if (ids.length > 0) {
			return ids[0]
		} else {
			console.warn(`No corresponding item under ${tagOrItem}`)
			return null
		}
	},

	/**
	 * 获取标签内第一个流体的ID, 若标签下没有流体则返回null
	 * @param {ResourceLocation} fluidTag 流体标签ID
	 * @returns {String | null}
	 */
	getFirstFluidId: function (fluidTag) {
		let tag = FluidTags.create(ResourceLocation.parse(fluidTag))
		let optional = BuiltInRegistries.FLUID.getTag(tag)

		if (optional.isPresent()) {
			let fluidHolder = optional.get()
				.stream()
				.findFirst()
				.orElse(null)

			if (fluidHolder !== null) {
				let getFluidKey = BuiltInRegistries.FLUID.getKey(fluidHolder.value()).toString()
				// console.log(`The first fluid is: ${getFluidKey}`)
				return getFluidKey
			}
		}
		console.warn(`No corresponding fluid under ${fluidTag}`)
		return null
	},

	/**
	 * 判断物品标签是否为空
	 * @param {Internal.Ingredient_} tag 物品标签ID
	 */
	isNotNull: function (tag) {
		return Ingredient.of(tag).getItemIds().length > 0
	},
	/**
	 * 
	 * @param {String} name 标签或id
	 * @returns 
	 */
	getPath: function (name) {
		return name.indexOf(":") !== -1 ? name.split(":")[1] : name
	}
}

let MekanismType = {
	Slurry: {
		/**
		 * 
		 * @param {ResourceLocation_} id 
		 * @returns 
		 */
		exists: function (id) {
			return RegistryInfo.of($MekanismAPI.SLURRY_REGISTRY_NAME, $Slurry)
				.hasValue(id)
		},
		of: makeOf("slurry")
	},
	Gas: {
		/**
		 * 
		 * @param {ResourceLocation_} id 
		 * @returns 
		 */
		exists: function (id) {
			return RegistryInfo.of($MekanismAPI.GAS_REGISTRY_NAME, $Gas)
				.hasValue(id)
		},
		of: makeOf("gas")
	}
}

/**
 * 
 * @param {string} type 
 * @returns 
 */
function makeOf(type) {
	/**
	 * 
	 * @param {string} id 
	 * @param {number} amount 
	 * @returns 
	 */
	let func = function (id, amount) {
		let obj = {}
		obj[type] = id
		obj.amount = amount === null ? 1000 : amount
		return obj
	}
	return func
}

/**
 * 
 * @param {Internal.Ingredient_} output 
 * @param {Internal.Ingredient_} input 
 * @returns 
 */
function aeCharger(output, input) {
	return {
		type: "ae2:charger",
		ingredient: Ingredient.of(input).toJson(),
		result: Item.of(IngrUtils.getFirstItemId(output)).toJson()
	}
}

function IEIngredient(input) {
	if (Array.isArray(input)) {
		let count = 0
		let inps = []

		for (let i of input) {
			let item = Item.of(i, 1).toJson()

			if (count === 0) {
				count = Item.of(i)
					.getCount()
			}
			inps.push(item)
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

let SmeltingRecipes = {
	/**
	 * 添加熔炼配方: 熔炉+高炉+烟熏
	 *
	 * @param {Internal.RecipesEventJS} event 配方事件
	 * @param {OutputItem_} output 输出产物
	 * @param {InputItem_} input 输入成分
	 * @returns
	 */
	all: function (event, output, input) {
		let { minecraft } = event.recipes

		let smelting = minecraft
			.smelting(output, input)
			.cookingTime(20 * 10)

		let blasting = minecraft
			.blasting(output, input)
			.cookingTime(20 * 5)

		let smoking = minecraft
			.smoking(output, input)
			.cookingTime(20 * 5)

		return {
			smelting: smelting,
			blasting: blasting,
			smoking: smoking
		}
	},

	/**
	 * 注册：高炉 + 熔炉
	 *
	 * @param {Internal.RecipesEventJS} event 配方事件
	 * @param {OutputItem_} output 输出产物
	 * @param {InputItem_} input 输入成分
	 * @returns 
	 */
	blasting: function (event, output, input) {
		let { minecraft } = event.recipes

		let blasting = minecraft
			.blasting(output, input)
			.cookingTime(20 * 5)

		let smelting = minecraft
			.smelting(output, input)
			.cookingTime(20 * 10)

		return {
			blasting: blasting,
			smelting: smelting
		}
	},

	/**
	 * 注册：烟熏 + 熔炉
	 *
	 * @param {Internal.RecipesEventJS} event 配方事件
	 * @param {OutputItem_} output 输出产物
	 * @param {InputItem_} input 输入成分
	 * @returns 
	 */
	smoking: function (event, output, input) {
		let { minecraft } = event.recipes

		let smelting = minecraft
			.smelting(output, input)
			.cookingTime(20 * 10)

		let smoking = minecraft
			.smoking(output, input)
			.cookingTime(20 * 5)

		return {
			smelting: smelting,
			smoking: smoking
		}
	}
}

// Test Function Event
BlockEvents.rightClicked((event) => {
	let { block, player } = event
	const DEBUG_BLOCK = "cmi:green_screen"

	if (block.id === DEBUG_BLOCK) {
		player.tell(IngrUtils.getFirstFluidId("forge:solutions/iron/chloride"))
	}
})