let structure = new StructureBuilder([
	[
		"       ",
		"       ",
		" 5     ",
		"       "
	],
	[
		"       ",
		"       ",
		" 4     ",
		"       "
	],
	[
		"       ",
		"       ",
		" 3     ",
		"       "
	],
	[
		"       ",
		"       ",
		" 2     ",
		"       "
	],
	[
		"       ",
		"       ",
		" 1     ",
		"       "
	],
	[
		"       ",
		"GHG    ",
		"HHH S  ",
		"GHG    "
	],
	[
		"       ",
		"ABA    ",
		"B B R  ",
		"ABA    "
	],
	[
		"  DD0 F",
		"ABACCC ",
		"B BCCC ",
		"ABACCC ",
	]
])
	.define("A", (builder) => {
		builder.block("immersiveengineering:sheetmetal_aluminum")
	})
	.define("B", (builder) => {
		builder.block("immersiveengineering:alu_scaffolding_standard")
	})
	.define("C", (builder) => {
		builder.block("ad_astra:launch_pad")
	})
	.define("D", (builder) => {
		builder.block("cmi:rocket_display")
	})
	.define("0", (builder) => {
		builder.block("cmi:rocket_controller")
	})
	.define("F", (builder) => {
		builder.block("cmi:radar_terminal")
	})
	.define("G", (builder) => {
		builder.block("immersiveengineering:slab_sheetmetal_aluminum")
	})
	.define("H", (builder) => {
		builder.block("immersiveengineering:alu_scaffolding_grate_top")
	})
	.define("R", (builder) => {
		builder.block("custommachinery:custom_machine_block")
	})
	.define("S", (builder) => {
		builder.block("cmi:satellite_1")
	})
	.define("1", (builder) => {
		builder.block("cmi:power_supply")
	})
	.define("2", (builder) => {
		builder.block("cmi:transformer")
	})
	.define("3", (builder) => {
		builder.block("cmi:tracking_array")
	})
	.define("4", (builder) => {
		builder.block("cmi:modem")
	})
	.define("5", (builder) => {
		builder.block("cmi:radar")
	})
	.define(" ", (builder) => {
		builder.any()
	})
	.build()

BlockEvents.rightClicked((event) => {
	let { player, block, item, level } = event

	if (event.getHand() === InteractionHand.MAIN_HAND) {
		return
	}
	if (item.id === "cmi:rocket_launcher") {
		return
	}
	if (!structure.validate(level, block.getPos())) {
		return
	}
	player.tell("ok")

	let multiblock = MultiblockHandler
		.builder(level, block.pos, () => structure)
		.renderOffset(0, -1, 0)
		.cacheTicks(20)
		.build()
})