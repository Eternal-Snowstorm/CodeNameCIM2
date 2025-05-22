ServerEvents.recipes((event) => {
	let { mekanism } = event.recipes

	// 铂碎片处理
	mekanism.purifying(
		"cmi:platinum_crystal_nucleus",
		"4x cmi:platinum_shard",
		{ "gas": "mekanism:hydrogen", "amount": 500 }
	)
})