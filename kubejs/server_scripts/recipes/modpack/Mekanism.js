ServerEvents.recipes((event) => {
	let { mekanism } = event.recipes

	// 铂碎片处理
	mekanism.purifying(
		"ue_addons:aluminum_crystal_nucleus",
		"4x ue_addons:aluminum_shard",
		{ "gas": "mekanism:hydrogen", "amount": 500 }
	)
})