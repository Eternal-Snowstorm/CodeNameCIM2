CreateEvents.spoutHandler((event) => {
	const WATER = "minecraft:water"

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
})
// By 史莱姆li