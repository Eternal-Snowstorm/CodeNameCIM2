ServerEvents.recipes((event) => {
	let { mbd2 } = event.recipes

	// 铜1
	mbd2.accelerator()
		.inputFE(2000)
		.inputItems(["25x minecraft:stone", "cmi:copper_mechanism"])
		.outputItems([Item.of("minecraft:copper_ore", 10),
		Item.of("minecraft:clay", 2),
		Item.of("minecraft:gold_ore", 2)])

	// 铜2	
	mbd2.accelerator()
		.inputFE(2000)
		.inputItems(["25x minecraft:deepslate", "cmi:copper_mechanism"])
		.outputItems([Item.of("minecraft:deepslate_copper_ore", 15),
		Item.of("minecraft:clay", 5),
		Item.of("minecraft:deepslate_gold_ore", 5)])

	// 铁1
	mbd2.accelerator()
		.inputFE(2000)
		.inputItems(["25x minecraft:stone", "cmi:iron_mechanism"])
		.outputItems([Item.of("minecraft:iron_ore", 10),
		Item.of("minecraft:redstone_ore", 2),
		Item.of("thermal:nickel_ore", 2)])

	// 铁2
	mbd2.accelerator()
		.inputFE(2000)
		.inputItems(["25x minecraft:deepslate", "cmi:iron_mechanism"])
		.outputItems([Item.of("minecraft:deepslate_iron_ore", 15),
		Item.of("minecraft:deepslate_redstone_ore", 5),
		Item.of("thermal:deepslate_nickel_ore", 5)])

	// 木1
	mbd2.accelerator()
		.inputFE(2000)
		.inputItems(["25x minecraft:stone", "cmi:wooden_mechanism"])
		.outputItems([Item.of("minecraft:deepslate_coal_ore", 10)])

	// 木2
	mbd2.accelerator()
		.inputFE(2000)
		.inputItems(["25x minecraft:deepslate", "cmi:wooden_mechanism"])
		.outputItems([Item.of("minecraft:deepslate_coal_ore", 15),
		Item.of("minecraft:deepslate_diamond_ore", 5)])

})