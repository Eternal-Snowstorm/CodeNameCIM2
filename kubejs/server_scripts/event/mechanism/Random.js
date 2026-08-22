let $LootParams$Builder =
	Java.loadClass("net.minecraft.world.level.storage.loot.LootParams$Builder")
let $LootContextParams =
	Java.loadClass("net.minecraft.world.level.storage.loot.parameters.LootContextParam")
let $LootContextParamSets =
	Java.loadClass("net.minecraft.world.level.storage.loot.parameters.LootContextParamSets")

ItemEvents.rightClicked((event) => {
	let { player, server, item, level } = event
	let { x, y, z } = player

	let randomMechanisms = [
		"basic",
		"mechanical",
		"engineering",
		"flux",
		"magical",
		"quantum",
		"mekanism",
		"space",
		"random"
	]
	randomMechanisms.forEach((material) => {
		let lootTable = Cmi.loadResource(`gameplay/random_mechanisms/${material}`)

		if (player.mainHandItem.id !== `cmi:${material}_random_mechanism`) {
			return
		}

		let table = server.getLootData().getLootTable(lootTable)

		// 这里生成 LootParams
		let params = new $LootParams$Builder(server)
			.withParameter($LootContextParams.ORIGIN, player.position())
			.withParameter($LootContextParams.THIS_ENTITY, player)
			.create($LootContextParamSets.CHEST)

		let drops = table.getRandomItems(params)

		drops.forEach((stack) => {
			let entity = level.createEntity("minecraft:item")
			entity.item = stack
			entity.setPos(x, y, z)
			entity.spawn()
		})

		player.swing()
		player.playNotifySound("create:crafter_craft", "voice", 2, 1)

		let r = Math.random()
		let g = Math.random()
		let b = Math.random()

		server.runCommandSilent(
			`particle minecraft:dust ${r} ${g} ${b} 1 ${x} ${y + 1.5} ${z} 0.5 0.5 0.5 0.1 30`
		)

		// server.getLevel().sendParticles(
		// 	ParticleTypes.DUST,

		// )

		if (!player.isCreative()) {
			item.shrink(1)
		}
	})
})