global.altarRecipes = [
	{
		input: [
			{ item: "minecraft:apple", count: 1 },
			{ item: "minecraft:gold_ingot", count: 8 }
		],
		output: Item.of("minecraft:golden_apple")
	},
	{
		input: [
			{ item: "minecraft:diamond", count: 1 },
			{ item: "minecraft:emerald", count: 8 }
		],
		output: Item.of("minecraft:nether_star")
	}
]

// ====================== 物品匹配函数 ======================
function itemMatch(box, items) {
	let availableItems = box.map((item) => item ? item.copy() : null)
	let matchedItems = []

	for (let recipeItem of items) {
		let found = false

		for (let i = 0; i < availableItems.length; i++) {
			let stack = availableItems[i]
			if (!stack || stack.isEmpty()) continue

			// 检查物品是否匹配
			if (stack.id === recipeItem.item &&
				stack.count >= recipeItem.count &&
				(recipeItem.nbt ? stack.nbt.equals(recipeItem.nbt) : true)) {

				// 减少可用数量
				stack.shrink(recipeItem.count)
				matchedItems.push({
					position: i,
					count: recipeItem.count
				})
				found = true
				break
			}
		}

		if (!found) return {
			matched: false,
			matchedItems: []
		}
	}

	return {
		matched: true,
		matchedItems: matchedItems
	}
}

BlockEvents.rightClicked("create:depot", (event) => {
	let { block, player, level } = event
	let { x, y, z } = block.pos

	if (!player.isCrouching() || player.mainHandItem.id !== "minecraft:stick") {
		return
	}

	// 多方块结构定义
	let altarStructure = defineMultiBlockStructure([
		[
			"ABABA",
			"BBBBB",
			"AB0BA",
			"BBBBB",
			"ABABA"
		]
	])
		.where("A", "create:depot")
		.where("B", "minecraft:air")
		.where("0", "create:depot")
		.build()

	// 验证多方块结构
	if (!altarStructure.validate(level, block.pos)) {
		player.tell(Component.translate("altar.invalid_structure"))
		return
	}

	let positions = [
		block.offset(-2, 0, -2),
		block.offset(0, 0, -2),
		block.offset(2, 0, -2),
		block.offset(-2, 0, 0),
		block,
		block.offset(2, 0, 0),
		block.offset(-2, 0, 2),
		block.offset(0, 0, 2),
		block.offset(2, 0, 2)
	]

	// 收集所有置物台上的物品
	let depotItems = positions.map((pos) => {
		// 仅当方块是置物台时获取物品
		if (pos.id === "create:depot") {
			let inv = pos.getInventory(Direction.UP)
			return inv ? inv.getStackInSlot(0) : null
		}
		return null
	})

	// 查找匹配的配方
	let matchedRecipe = null
	for (let recipe of global.altarRecipes) {
		let matchResult = itemMatch(depotItems, recipe.input)
		if (matchResult.matched) {
			matchedRecipe = {
				recipe: recipe,
				matchResult: matchResult
			}
			break
		}
	}

	if (!matchedRecipe) {
		player.tell(Component.translate("altar.no_recipe"))
		return
	}

	// 检查中心置物台是否为空
	let centerInv = block.getInventory(Direction.UP)
	let centerStack = centerInv ? centerInv.getStackInSlot(0) : null

	if (centerStack && !centerStack.isEmpty()) {
		player.tell(Component.translate("altar.center_not_empty"))
		return
	}

	// 消耗物品
	for (let match of matchedRecipe.matchResult.matchedItems) {
		let pos = positions[match.position]
		// 确保位置有效且是置物台
		if (pos && pos.id === "create:depot") {
			let inv = pos.getInventory(Direction.UP)
			if (inv) {
				let stack = inv.getStackInSlot(0)
				// 确保物品存在且数量足够
				if (stack && !stack.isEmpty() && stack.count >= match.count) {
					stack.shrink(match.count)
					// 如果消耗完则清空槽位
					if (stack.isEmpty()) {
						inv.setStackInSlot(0, ItemStack.EMPTY)
					}
				}
			}
		}
	}

	// 放置输出物品到中心
	if (centerInv) {
		centerInv.setStackInSlot(0, matchedRecipe.recipe.output.copy())
	}

	// 播放效果
	level.playSound(block.pos, "minecraft:block.enchantment_table.use", 1, 1)

	player.tell(Component.translate("altar.craft_success"))
})