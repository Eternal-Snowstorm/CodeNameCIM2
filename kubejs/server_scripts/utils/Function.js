// priority: 10
let $MekanismAPI =
	Java.loadClass("mekanism.api.MekanismAPI")
let $Slurry =
	Java.loadClass("mekanism.api.chemical.slurry.Slurry")
let $Gas =
	Java.loadClass("mekanism.api.chemical.gas.Gas")
let $Chemical =
	Java.loadClass("mekanism.api.chemical.Chemical")

/**
 * 设置命名空间优先级
 * 越往前的命名空间优先级越高
 */
let namespacePriority = [
	"cmi",
	"vintageimprovements",
	"thermal",
	"thermalconstruct",
	"thermalendergy",
	"thermal_extra",
	"create",
	"createdeco",
	"ae2",
	"ad_astra",
	"immersiveengineering",
	"mekanism",
	"alexscaves",
	"tconstruct"
]
/**
	 * 
	 * @param {Set<string>} name 
	 * @returns 
	 */
function getHighPriorityItem(name) {
	/**
	 * 设置命名空间优先级
	 * 越往前的命名空间优先级越高
	 */
	let namespacePriority = [
		"cmi",
		"vintageimprovements",
		"thermal",
		"thermalconstruct",
		"thermalendergy",
		"thermal_extra",
		"create",
		"createdeco",
		"ae2",
		"ad_astra",
		"immersiveengineering",
		"mekanism",
		"alexscaves",
		"tconstruct"
	]
	// 引入参数
	let currentNamespace
	let outputId
	let priorityValue

	// 遍历获取到的tag下每个物品的命名空间
	name.forEach((id) => {
		currentNamespace = ResourceLocation.parse(id).getNamespace()

		// 获取命名空间优先级
		for (let i = 0; i < namespacePriority.length; i++) {
			if (currentNamespace === namespacePriority[i]) {
				// 判定命名空间优先级并选择性输出优先级值最小的
				if (i <= priorityValue || priorityValue == null) {
					outputId = id
					priorityValue = i
				}
			}
		}
	})

	return outputId
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
 * @param {Internal.ItemStack_} input 
 * @returns 
 */
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
		let { minecraft } = event.getRecipes()

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
		let { minecraft } = event.getRecipes()

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
		let { minecraft } = event.getRecipes()

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
		player.tell(Ingredient.getFirstFluidId("forge:solutions/iron/chloride"))
	}
})