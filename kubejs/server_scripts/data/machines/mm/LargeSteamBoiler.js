MMEvents.createStructures((event) => {
	event.create("cmi:large_steam_boiler_structure")
		.controllerId("mm:large_steam_boiler")
		.name("")
		.layout((builder) => {
			builder.layer([
				"DDD",
				"DDD",
				"DDD"
			])
			builder.layer([
				"DDD",
				"D D",
				"DDD"
			])
			builder.layer([
				"DCD",
				"E F",
				"DDD"
			])
			builder.layer([
				"ABA",
				"AAA",
				"AAA"
			])
			builder.key("F", {
				block: "mm:large_steam_boiler_fluid_input"
			})
			builder.key("B", {
				block: "mm:large_steam_boiler_item_input"
			})
			builder.key("A", {
				block: "tconstruct:scorched_bricks"
			})
			builder.key("E", {
				block: "mm:large_steam_boiler_fluid_output"
			})
			builder.key("D", {
				block: "cmi:bronze_casing"
			})
		})
})