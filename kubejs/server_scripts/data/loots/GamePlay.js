ServerEvents.genericLootTables((event) => {
	event.addGeneric("cmi:gameplay/torn_parchment_a", (builder) => {
		builder.addPool((pool) => {
			pool.addItem("cmi:torn_parchment_a")
				.randomChance(1)
			pool.setUniformRolls(1, 1)
		})
	})
	event.addGeneric("cmi:gameplay/torn_parchment_b", (builder) => {
		builder.addPool((pool) => {
			pool.addItem("cmi:torn_parchment_b")
				.randomChance(1)
			pool.setUniformRolls(1, 1)
		})
	})
	event.addGeneric("cmi:gameplay/academic_fraud", (builder) => {
		builder.addPool((pool) => {
			let count = 64 * 36
			pool.addItem("minecraft:iron_ingot", 100, count)
		})
	})
})