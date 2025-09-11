BlockEvents.rightClicked("cmi:accelerator", (event) => {
	let { level, player, item, block } = event

	// 安山构件
	addAccelerateEvent("cmi:andesite_mechanism", "minecraft:stone")
		.addBlock("minecraft:andesite", 0.2)
		.addBlock("minecraft:iron_ore", 0.05)
		.addBlock("create:zinc_ore", 0.05)

	addAccelerateEvent("cmi:andesite_mechanism", "minecraft:deepslate")
		.addBlock("minecraft:andesite", 0.15)
		.addBlock("minecraft:deepslate_iron_ore", 0.1)
		.addBlock("create:deepslate_zinc_ore", 0.1)

	// 钴质构件
	addAccelerateEvent("cmi:cobalt_mechanism", "minecraft:netherrack")
		.addBlock("tconstruct:cobalt_ore", 0.2)

	// 铜质构件
	addAccelerateEvent("cmi:copper_mechanism", "minecraft:stone")
		.addBlock("minecraft:copper_ore", 0.2)
		.addBlock("minecraft:gold_ore", 0.05)
		.addBlock("minecraft:clay", 0.05)
		.addBlock("thermal:sulfur_ore", 0.05)

	addAccelerateEvent("cmi:copper_mechanism", "minecraft:deepslate")
		.addBlock("minecraft:deepslate_copper_ore", 0.15)
		.addBlock("minecraft:deepslate_gold_ore", 0.1)
		.addBlock("minecraft:clay", 0.1)
		.addBlock("thermal:deepslate_sulfur_ore", 0.05)

	// 贰级科技航天构件
	addAccelerateEvent("cmi:tier_2_aviation_mechanism", "ad_astra:moon_stone")
		.addBlock("ad_astra:moon_desh_ore", 0.2)
		.addBlock("ad_astra:moon_ice_shard_ore", 0.05)
		.addBlock("thermal:steel_block", 0.05)

	addAccelerateEvent("cmi:tier_2_aviation_mechanism", "minecraft:deepslate")
		.addBlock("ad_astra:deepslate_desh_ore", 0.15)
		.addBlock("minecraft:deepslate_iron_ore", 0.1)
		.addBlock("thermal:deepslate_silver_ore", 0.1)

	// 附魔构件
	addAccelerateEvent("cmi:enchanted_mechanism", "minecraft:stone")
		.addBlock("minecraft:lapis_ore", 0.2)
		.addBlock("create:experience_block", 0.01)

	addAccelerateEvent("cmi:enchanted_mechanism", "minecraft:deepslate")
		.addBlock("minecraft:deepslate_lapis_ore", 0.2)
		.addBlock("create:experience_block", 0.01)

	// 金质构件
	addAccelerateEvent("cmi:gold_mechanism", "minecraft:stone")
		.addBlock("minecraft:gold_ore", 0.2)
		.addBlock("thermal:cinnabar_ore", 0.05)
		.addBlock("cmi:quartz_ore", 0.05)

	addAccelerateEvent("cmi:gold_mechanism", "minecraft:deepslate")
		.addBlock("minecraft:deepslate_gold_ore", 0.15)
		.addBlock("thermal:deepslate_cinnabar_ore", 0.1)
		.addBlock("cmi:deepslate_quartz_ore", 0.1)

	// 铁质构件
	addAccelerateEvent("cmi:iron_mechanism", "minecraft:stone")
		.addBlock("minecraft:iron_ore", 0.2)
		.addBlock("minecraft:redstone_ore", 0.05)
		.addBlock("thermal:nickel_ore", 0.05)

	addAccelerateEvent("cmi:iron_mechanism", "minecraft:deepslate")
		.addBlock("minecraft:deepslate_iron_ore", 0.15)
		.addBlock("minecraft:deepslate_redstone_ore", 0.1)
		.addBlock("thermal:deepslate_nickel_ore", 0.1)

	// 下界构件
	addAccelerateEvent("cmi:nether_mechanism", "minecraft:netherrack")
		.addBlock("minecraft:blackstone", 0.1)
		.addBlock("minecraft:magma_block", 0.03)
		.addBlock("minecraft:soul_sand", 0.03)
		.addBlock("minecraft:soul_soil", 0.03)
		.addBlock("minecraft:gilded_blackstone", 0.03)
		.addBlock("minecraft:nether_gold_ore", 0.03)
		.addBlock("minecraft:ancient_debris", 0.03)
		.addBlock("minecraft:nether_quartz_ore", 0.03)
		.addBlock("minecraft:glowstone", 0.03)
		.addBlock("cmi:nether_uranium_ore", 0.03)

	// 叁级科技航天构件
	addAccelerateEvent("cmi:tier_3_aviation_mechanism", "ad_astra:mars_stone")
		.addBlock("ad_astra:mars_ostrum_ore", 0.2)
		.addBlock("ad_astra:mars_iron_ore", 0.05)
		.addBlock("ad_astra:desh_block", 0.05)

	addAccelerateEvent("cmi:tier_3_aviation_mechanism", "minecraft:deepslate")
		.addBlock("ad_astra:deepslate_ostrum_ore", 0.15)
		.addBlock("minecraft:deepslate_iron_ore", 0.1)
		.addBlock("thermal:deepslate_silver_ore", 0.1)

	// 精密构件
	addAccelerateEvent("cmi:precision_mechanism", "minecraft:stone")
		.addBlock("minecraft:copper_ore", 0.15)
		.addBlock("create:zinc_ore", 0.15)
		.addBlock("minecraft:redstone_ore", 0.1)

	addAccelerateEvent("cmi:precision_mechanism", "minecraft:deepslate")
		.addBlock("minecraft:deepslate_copper_ore", 0.1)
		.addBlock("create:deepslate_zinc_ore", 0.1)
		.addBlock("minecraft:deepslate_redstone_ore", 0.15)

	// 红石构件
	addAccelerateEvent("vintageimprovements:redstone_module", "minecraft:stone")
		.addBlock("minecraft:redstone_ore", 0.2)

	addAccelerateEvent("vintageimprovements:redstone_module", "minecraft:deepslate")
		.addBlock("minecraft:deepslate_redstone_ore", 0.25)

	// 智能构件
	addAccelerateEvent("cmi:smart_mechanism", "minecraft:stone")
		.addBlock("minecraft:diamond_ore", 0.1)
		.addBlock("minecraft:gold_ore", 0.2)
		.addBlock("cmi:certus_quartz_ore", 0.2)
		.addBlock("thermal:ruby_ore", 0.01)
		.addBlock("thermal:sapphire_ore", 0.01)
		.addBlock("minecraft:emerald_ore", 0.01)

	addAccelerateEvent("cmi:smart_mechanism", "minecraft:deepslate")
		.addBlock("minecraft:deepslate_diamond_ore", 0.15)
		.addBlock("minecraft:deepslate_gold_ore", 0.2)
		.addBlock("cmi:deepslate_certus_quartz_ore", 0.2)
		.addBlock("thermal:deepslate_ruby_ore", 0.01)
		.addBlock("thermal:deepslate_sapphire_ore", 0.01)
		.addBlock("minecraft:deepslate_emerald_ore", 0.01)

	// 石质构件
	addAccelerateEvent("cmi:stone_mechanism", "minecraft:stone")
		.addBlock("minecraft:andesite", 0.1)
		.addBlock("minecraft:diorite", 0.1)
		.addBlock("minecraft:granite", 0.1)
		.addBlock("create:limestone", 0.1)
		.addBlock("tconstruct:seared_stone", 0.1)

	addAccelerateEvent("cmi:stone_mechanism", "minecraft:deepslate")
		.addBlock("tconstruct:seared_stone", 0.1)
		.addBlock("minecraft:tuff", 0.1)
		.addBlock("create:scoria", 0.1)
		.addBlock("minecraft:dripstone_block", 0.1)
		.addBlock("minecraft:smooth_basalt", 0.1)

	// 木质构件
	addAccelerateEvent("cmi:wooden_mechanism", "minecraft:stone")
		.addBlock("minecraft:coal_ore", 0.2)

	addAccelerateEvent("cmi:wooden_mechanism", "minecraft:deepslate")
		.addBlock("minecraft:deepslate_coal_ore", 0.15)
		.addBlock("minecraft:deepslate_diamond_ore", 0.01)

	/**
	 * 添加构件催生器事件 (链式调用版)
	 * @param {string} input 构件物品ID
	 * @param {string} stone 所需方块ID
	 */
	function addAccelerateEvent(input, stone) {
		let blocks = []

		let api = {
			addBlock(id, chance) {
				blocks.push(Item.of(id).withChance(chance))
				return api
			},
			run() {
				if (event.hand === "OFF_HAND") {
					return
				}
				if (player === null) {
					return
				}
				if (!item.is(input)) {
					return
				}

				let { x, y, z } = event.block.pos
				let numx = x
				let numz = z
				let num = [-2, -1, 0, 1, 2]
				let count = 0

				// 判断周围的石头数量
				for (let m = 0; m <= 4; m++) {
					for (let n = 0; n <= 4; n++) {
						let pos = new BlockPos(numx + num[m], y, numz + num[n])
						if (level.getBlock(pos).getId() === stone) {
							count++
						}
					}
				}

				if (count <= 5) {
					return
				}

				// 随机转化
				for (let m = 0; m <= 4; m++) {
					for (let n = 0; n <= 4; n++) {
						let pos = new BlockPos(numx + num[m], y, numz + num[n])
						if (level.getBlock(pos).getId() === stone) {
							let rand = Math.random()
							let value = 0
							for (let b of blocks) {
								if (b.item.block) {
									value += b.getChance()
									if (rand <= value) {
										level.getBlock(pos).set(b.item.getId())
										break
									}
								}
							}
						}
					}
				}

				player.swing()
				player.playNotifySound("create:crafter_craft", "voice", 2, 1)
				let command =
					`particle minecraft:dust 0 0.4 0.3 1 ${block.x + 0.5} ${block.y + 1} ${block.z + 0.5} 0.5 0.5 0.5 0.1 30`
				level.server.runCommandSilent(command)

				if (!player.isCreative()) {
					item.shrink(1)
				}
			}
		}
		api.run()
		return api
	}
})