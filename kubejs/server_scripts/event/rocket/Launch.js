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
		builder.block("cmi:loader_rocket_1")
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
	let { player, block, item, level, server } = event

	if (event.getHand() === InteractionHand.MAIN_HAND) {
		return
	}
	if (item.id === "cmi:rocket_launcher") {
		return
	}
	if (!structure.validate(level, block.getPos())) {
		return
	}
	player.swing()
	level.server.runCommandSilent(`title @p title {"text":10,"color":"red"}`)

	server.scheduleInTicks(20, () => {
		level.server.runCommandSilent(`title @p title {"text":9,"color":"red"}`)
		server.scheduleInTicks(20, () => {
			level.server.runCommandSilent(`title @p title {"text":8,"color":"red"}`)
			server.scheduleInTicks(20, () => {
				level.server.runCommandSilent(`title @p title {"text":7,"color":"red"}`)
				server.scheduleInTicks(20, () => {
					level.server.runCommandSilent(`title @p title {"text":6,"color":"red"}`)
					server.scheduleInTicks(20, () => {
						level.server.runCommandSilent(`title @p title {"text":5,"color":"red"}`)
						server.scheduleInTicks(20, () => {
							level.server.runCommandSilent(`title @p title {"text":4,"color":"red"}`)
							server.scheduleInTicks(20, () => {
								level.server.runCommandSilent(`title @p title {"text":3,"color":"red"}`)
								server.scheduleInTicks(20, () => {
									level.server.runCommandSilent(`title @p title {"text":2,"color":"red"}`)
									server.scheduleInTicks(20, () => {
										level.server.runCommandSilent(`title @p title {"text":1,"color":"red"}`)
										server.scheduleInTicks(20, () => {
											level.server.runCommandSilent(`title @p clear`)
											level.server.runCommandSilent(`particle minecraft:explosion_emitter ${block.x} ${block.y} ${block.z+2}`)
										})

									})

								})

							})

						})

					})

				})

			})

		})

	})

	block.offset(0, 0, 0).set("cmi:rocket_controller_running")
	block.offset(1, 0, 0).set("cmi:rocket_display_startup")
	block.offset(2, 0, 0).set("cmi:rocket_display_startup")
	level.server.runCommandSilent(`playsound cmi:rocket.startup voice @p`)
	// player.playNotifySound("cmi:rocket.startup", "voice", 2, 1)
	// level.server.runCommandSilent(`particle minecraft:campfire_cosy_smoke ${block.x-1} ${block.y} ${block.z+2} 0.5 0.5 0.5 0.1 30`)
	server.scheduleInTicks(20 * 10, () => {
		block.offset(0, 1, 2).set("minecraft:air")
		block.offset(0, 2, 2).set("minecraft:air")
		level.server.runCommandSilent(`summon minecraft:block_display ${block.x - 0.25} ${block.y + 1} ${block.z + 1.75} {block_state:{Name:"cmi:loader_rocket_1"},Tags:["1_${block.x}${block.y}${block.z}"]}`)
		level.server.runCommandSilent(`data modify entity @e[tag=1_${block.x}${block.y}${block.z},limit=1] start_interpolation set value 0`)
		level.server.runCommandSilent(`data modify entity @e[tag=1_${block.x}${block.y}${block.z},limit=1] interpolation_duration set value 4000`)
		level.server.runCommandSilent(`data modify entity @e[tag=1_${block.x}${block.y}${block.z},limit=1] transformation set value {translation:[0.0d,320.0d,0.0d], left_rotation:[0.0d,0.0d,0.0d,1.0d], right_rotation:[0.0d,0.0d,0.0d,1.0d], scale:[1.0d,1.0d,1.0d]}`)
		block.offset(1, 0, 0).set("cmi:rocket_display_number_1")
		block.offset(2, 0, 0).set("cmi:rocket_display_launch_1")
		server.scheduleInTicks(20 * 20, () => {
			level.server.runCommandSilent(`kill @e[tag=1_${block.x}${block.y}${block.z}]`)
			block.offset(1, 0, 0).set("cmi:rocket_display_loading")
			block.offset(2, 0, 0).set("cmi:rocket_display_loading")
			server.scheduleInTicks(20 * 1, () => {
				block.offset(1, 0, 0).set("cmi:rocket_display_number_2")
				block.offset(2, 0, 0).set("cmi:rocket_display_launch_2")
				server.scheduleInTicks(20 * 10, () => {
					block.offset(1, 0, 0).set("cmi:rocket_display_loading")
					block.offset(2, 0, 0).set("cmi:rocket_display_loading")
					server.scheduleInTicks(20 * 1, () => {
						block.offset(1, 0, 0).set("cmi:rocket_display_number_3")
						block.offset(2, 0, 0).set("cmi:rocket_display_launch_3")
						server.scheduleInTicks(20 * 10, () => {
							block.offset(1, 0, 0).set("cmi:rocket_display_loading")
							block.offset(2, 0, 0).set("cmi:rocket_display_loading")
							server.scheduleInTicks(20 * 1, () => {
								block.offset(1, 0, 0).set("cmi:rocket_display_type_1")
								block.offset(2, 0, 0).set("cmi:rocket_display_tier_1")
								block.offset(0, 0, 0).set("cmi:rocket_controller_successful")
								block.offset(3, 3, 2).set("cmi:broken_power_supply")
								block.offset(3, 4, 2).set("cmi:broken_transformer")
								block.offset(3, 5, 2).set("cmi:broken_tracking_array")
								block.offset(3, 6, 2).set("cmi:broken_modem")
								block.offset(3, 7, 2).set("cmi:broken_radar")
							})
						})
					})
				})
			})
		})
	})
	let multiblock = MultiblockHandler
		.builder(level, block.pos, () => structure)
		.renderOffset(0, -1, 0)
		.cacheTicks(20)
		.build()


	server.scheduleInTicks(20 * 1, () => {

	})

})