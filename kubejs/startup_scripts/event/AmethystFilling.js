CreateEvents.spoutHandler((event) => {
	const WATER = "cmi:crystal_catalyt"

	event.add("cmi:amethyst_spawn", "minecraft:budding_amethyst", (block, fluid, simulate) => {
		for (let d of ["up", "north", "west", "south", "east", "down"]) {
			if (block[d].id === "minecraft:air") {
				if (fluid.id === WATER && fluid.amount >= 250) {
					if (!simulate) {
						block.level.server.runCommandSilent(`playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
						block.level.server.runCommandSilent(`particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
						block.level.server.runCommandSilent(`setblock ${block[d].x} ${block[d].y} ${block[d].z} minecraft:small_amethyst_bud[facing=${d}]`)
					}
					return 250
				}
				break
			}
		}
		return 0
	})

	event.add("cmi:small_amethyst_bud", "minecraft:small_amethyst_bud", (block, fluid, simulate) => {
		if (fluid.id === WATER && fluid.amount >= 250) {
			if (!simulate) {
				let f = block.properties.facing
				block.level.server.runCommandSilent(`playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
				block.level.server.runCommandSilent(`particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
				block.level.server.runCommandSilent(`setblock ${block.x} ${block.y} ${block.z} minecraft:medium_amethyst_bud[facing=${f}]`)
			}
			return 250
		}
		return 0
	})

	event.add("cmi:medium_amethyst_bud", "minecraft:medium_amethyst_bud", (block, fluid, simulate) => {
		if (fluid.id === WATER && fluid.amount >= 250) {
			if (!simulate) {
				let f = block.properties.facing
				block.level.server.runCommandSilent(`playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
				block.level.server.runCommandSilent(`particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
				block.level.server.runCommandSilent(`setblock ${block.x} ${block.y} ${block.z} minecraft:large_amethyst_bud[facing=${f}]`)
			}
			return 250
		}
		return 0
	})

	event.add("cmi:large_amethyst_bud", "minecraft:large_amethyst_bud", (block, fluid, simulate) => {
		if (fluid.id === WATER && fluid.amount >= 250) {
			if (!simulate) {
				let f = block.properties.facing
				block.level.server.runCommandSilent(`playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
				block.level.server.runCommandSilent(`particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
				block.level.server.runCommandSilent(`setblock ${block.x} ${block.y} ${block.z} minecraft:amethyst_cluster[facing=${f}]`)
			}
			return 250
		}
		return 0
	})

	// 赛特斯石英
	event.add("cmi:small_certus_bud", "ae2:small_quartz_bud", (block, fluid, simulate) => {
		if (fluid.id === WATER && fluid.amount >= 250) {
			if (!simulate) {
				let f = block.properties.facing
				block.level.server.runCommandSilent(`playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
				block.level.server.runCommandSilent(`particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
				block.level.server.runCommandSilent(`setblock ${block.x} ${block.y} ${block.z} ae2:medium_quartz_bud[facing=${f}]`)
			}
			return 250
		}
		return 0
	})

	event.add("cmi:medium_certus_bud", "ae2:medium_quartz_bud", (block, fluid, simulate) => {
		if (fluid.id === WATER && fluid.amount >= 250) {
			if (!simulate) {
				let f = block.properties.facing
				block.level.server.runCommandSilent(`playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
				block.level.server.runCommandSilent(`particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
				block.level.server.runCommandSilent(`setblock ${block.x} ${block.y} ${block.z} ae2:large_quartz_bud[facing=${f}]`)
			}
			return 250
		}
		return 0
	})

	event.add("cmi:large_certus_bud", "ae2:large_quartz_bud", (block, fluid, simulate) => {
		if (fluid.id === WATER && fluid.amount >= 250) {
			if (!simulate) {
				let f = block.properties.facing
				block.level.server.runCommandSilent(`playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
				block.level.server.runCommandSilent(`particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
				block.level.server.runCommandSilent(`setblock ${block.x} ${block.y} ${block.z} ae2:quartz_cluster[facing=${f}]`)
			}
			return 250
		}
		return 0
	})

	// 大地粘液
	event.add("cmi:small_earth_bud", "tconstruct:small_earth_slime_crystal_bud", (block, fluid, simulate) => {
		if (fluid.id === WATER && fluid.amount >= 250) {
			if (!simulate) {
				let f = block.properties.facing
				block.level.server.runCommandSilent(`playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
				block.level.server.runCommandSilent(`particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
				block.level.server.runCommandSilent(`setblock ${block.x} ${block.y} ${block.z} tconstruct:medium_earth_slime_crystal_bud[facing=${f}]`)
			}
			return 250
		}
		return 0
	})

	event.add("cmi:medium_earth_bud", "tconstruct:medium_earth_slime_crystal_bud", (block, fluid, simulate) => {
		if (fluid.id === WATER && fluid.amount >= 250) {
			if (!simulate) {
				let f = block.properties.facing
				block.level.server.runCommandSilent(`playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
				block.level.server.runCommandSilent(`particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
				block.level.server.runCommandSilent(`setblock ${block.x} ${block.y} ${block.z} tconstruct:large_earth_slime_crystal_bud[facing=${f}]`)
			}
			return 250
		}
		return 0
	})

	event.add("cmi:large_earth_bud", "tconstruct:large_earth_slime_crystal_bud", (block, fluid, simulate) => {
		if (fluid.id === WATER && fluid.amount >= 250) {
			if (!simulate) {
				let f = block.properties.facing
				block.level.server.runCommandSilent(`playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
				block.level.server.runCommandSilent(`particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
				block.level.server.runCommandSilent(`setblock ${block.x} ${block.y} ${block.z} tconstruct:earth_slime_crystal_cluster[facing=${f}]`)
			}
			return 250
		}
		return 0
	})

	// 碧空粘液
	event.add("cmi:small_sky_bud", "tconstruct:small_sky_slime_crystal_bud", (block, fluid, simulate) => {
		if (fluid.id === WATER && fluid.amount >= 250) {
			if (!simulate) {
				let f = block.properties.facing
				block.level.server.runCommandSilent(`playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
				block.level.server.runCommandSilent(`particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
				block.level.server.runCommandSilent(`setblock ${block.x} ${block.y} ${block.z} tconstruct:medium_sky_slime_crystal_bud[facing=${f}]`)
			}
			return 250
		}
		return 0
	})

	event.add("cmi:medium_sky_bud", "tconstruct:medium_sky_slime_crystal_bud", (block, fluid, simulate) => {
		if (fluid.id === WATER && fluid.amount >= 250) {
			if (!simulate) {
				let f = block.properties.facing
				block.level.server.runCommandSilent(`playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
				block.level.server.runCommandSilent(`particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
				block.level.server.runCommandSilent(`setblock ${block.x} ${block.y} ${block.z} tconstruct:large_sky_slime_crystal_bud[facing=${f}]`)
			}
			return 250
		}
		return 0
	})

	event.add("cmi:large_sky_bud", "tconstruct:large_sky_slime_crystal_bud", (block, fluid, simulate) => {
		if (fluid.id === WATER && fluid.amount >= 250) {
			if (!simulate) {
				let f = block.properties.facing
				block.level.server.runCommandSilent(`playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
				block.level.server.runCommandSilent(`particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
				block.level.server.runCommandSilent(`setblock ${block.x} ${block.y} ${block.z} tconstruct:sky_slime_crystal_cluster[facing=${f}]`)
			}
			return 250
		}
		return 0
	})

	// 灵浆粘液
	event.add("cmi:small_ichor_bud", "tconstruct:small_ichor_slime_crystal_bud", (block, fluid, simulate) => {
		if (fluid.id === WATER && fluid.amount >= 250) {
			if (!simulate) {
				let f = block.properties.facing
				block.level.server.runCommandSilent(`playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
				block.level.server.runCommandSilent(`particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
				block.level.server.runCommandSilent(`setblock ${block.x} ${block.y} ${block.z} tconstruct:medium_ichor_slime_crystal_bud[facing=${f}]`)
			}
			return 250
		}
		return 0
	})

	event.add("cmi:medium_ichor_bud", "tconstruct:medium_ichor_slime_crystal_bud", (block, fluid, simulate) => {
		if (fluid.id === WATER && fluid.amount >= 250) {
			if (!simulate) {
				let f = block.properties.facing
				block.level.server.runCommandSilent(`playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
				block.level.server.runCommandSilent(`particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
				block.level.server.runCommandSilent(`setblock ${block.x} ${block.y} ${block.z} tconstruct:large_ichor_slime_crystal_bud[facing=${f}]`)
			}
			return 250
		}
		return 0
	})

	event.add("cmi:large_ichor_bud", "tconstruct:large_ichor_slime_crystal_bud", (block, fluid, simulate) => {
		if (fluid.id === WATER && fluid.amount >= 250) {
			if (!simulate) {
				let f = block.properties.facing
				block.level.server.runCommandSilent(`playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
				block.level.server.runCommandSilent(`particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
				block.level.server.runCommandSilent(`setblock ${block.x} ${block.y} ${block.z} tconstruct:ichor_slime_crystal_cluster[facing=${f}]`)
			}
			return 250
		}
		return 0
	})

	// 末影粘液
	event.add("cmi:small_ender_bud", "tconstruct:small_ender_slime_crystal_bud", (block, fluid, simulate) => {
		if (fluid.id === WATER && fluid.amount >= 250) {
			if (!simulate) {
				let f = block.properties.facing
				block.level.server.runCommandSilent(`playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
				block.level.server.runCommandSilent(`particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
				block.level.server.runCommandSilent(`setblock ${block.x} ${block.y} ${block.z} tconstruct:medium_ender_slime_crystal_bud[facing=${f}]`)
			}
			return 250
		}
		return 0
	})

	event.add("cmi:medium_ender_bud", "tconstruct:medium_ender_slime_crystal_bud", (block, fluid, simulate) => {
		if (fluid.id === WATER && fluid.amount >= 250) {
			if (!simulate) {
				let f = block.properties.facing
				block.level.server.runCommandSilent(`playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
				block.level.server.runCommandSilent(`particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
				block.level.server.runCommandSilent(`setblock ${block.x} ${block.y} ${block.z} tconstruct:large_ender_slime_crystal_bud[facing=${f}]`)
			}
			return 250
		}
		return 0
	})

	event.add("cmi:large_ender_bud", "tconstruct:large_ender_slime_crystal_bud", (block, fluid, simulate) => {
		if (fluid.id === WATER && fluid.amount >= 250) {
			if (!simulate) {
				let f = block.properties.facing
				block.level.server.runCommandSilent(`playsound create:spout block @a ${block.pos.x} ${block.pos.y} ${block.pos.z}`)
				block.level.server.runCommandSilent(`particle minecraft:block ${block.id} ${block.pos.x} ${block.pos.y} ${block.pos.z} 0.25 0.25 0.25 0.3 8`)
				block.level.server.runCommandSilent(`setblock ${block.x} ${block.y} ${block.z} tconstruct:ender_slime_crystal_cluster[facing=${f}]`)
			}
			return 250
		}
		return 0
	})

})
// By 史莱姆li