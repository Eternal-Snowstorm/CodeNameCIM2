MMEvents.createStructures((event) => {
	event.create("cmi:large_steam_boiler")
		.controllerId("mm:large_steam_boiler")
		.name("")
		.layout((builder) => {
			builder
				.layer([
					"DDD",
					"DDD",
					"DDD"
				])
				.layer([
					"DDD",
					"D D",
					"DDD"
				])
				.layer([
					"DDD",
					"G F",
					"DCD"
				])
				.layer([
					"AAA",
					"AAA",
					"ABA"
				])
				.key("B", {
					block: "mm:large_steam_boiler_item_input"
				})
				.key("F", {
					block: "mm:large_steam_boiler_fluid_output"
				})
				.key("A", {
					block: "tconstruct:seared_bricks"
				})
				.key("G", {
					block: "mm:large_steam_boiler_fluid_input"
				})
				.key("D", {
					block: "cmi:bronze_casing"
				})
		})
})