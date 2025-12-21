ServerEvents.recipes((event) => {
	let { create, vintageimprovements } = event.recipes

	let metalTier = [
		"tungsten_steel",
		"desh",
		"ostrum",
		"calorite"
	]

	event.custom({
		"type": "ad_astra:alloying",
		"cookingtime": 100,
		"energy": 20,
		"ingredients": [
			Ingredient.of("#forge:storage_blocks/iron").toJson(),
			Ingredient.of("#forge:coal_coke").toJson()
		],
		"result": {
			"count": 1,
			"id": "tconstruct:steel_block"
		}
	})

	for (let i = 1; i <= 4; i++) {
		let transitionalItem = `cmi:incomplete_tier_${i.toString()}_rocket_frame`

		create.sequenced_assembly(`cmi:tier_${i.toString()}_rocket_frame`, [
			"cmi:rocket_pattern"
		], [
			create.deploying(transitionalItem, [
				transitionalItem,
				`#forge:plates/${metalTier[i - 1]}`
			]),
			create.deploying(transitionalItem, [
				transitionalItem,
				`#forge:rods/${metalTier[i - 1]}`
			]),
			create.deploying(transitionalItem, [
				transitionalItem,
				`#forge:gears/${metalTier[i - 1]}`
			]),
			create.deploying(transitionalItem, [
				transitionalItem,
				`#forge:rods/${metalTier[i - 1]}`
			]),
			create.deploying(transitionalItem, [
				transitionalItem,
				`#forge:plates/${metalTier[i - 1]}`
			]),
			create.deploying(transitionalItem, [
				transitionalItem,
				`cmi:tier_${i.toString()}_rocket_nose_cone`
			]),
		]).loops(1).transitionalItem(transitionalItem)
	}
})