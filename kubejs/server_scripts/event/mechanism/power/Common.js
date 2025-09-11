BlockEvents.rightClicked("cmi:accelerator", (event) => {
	// 安山构件
	addAccelerateEvent(event, "cmi:andesite_mechanism", "minecraft:stone", [
		Item.of("minecraft:andesite").withChance(0.2),
		Item.of("minecraft:iron_ore").withChance(0.05),
		Item.of("create:zinc_ore").withChance(0.05)
	])
	addAccelerateEvent(event, "cmi:andesite_mechanism", "minecraft:deepslate", [
		Item.of("minecraft:andesite").withChance(0.15),
		Item.of("minecraft:deepslate_iron_ore").withChance(0.1),
		Item.of("create:deepslate_zinc_ore").withChance(0.1)
	])

	// 钴质构件
	addAccelerateEvent(event, "cmi:cobalt_mechanism", "minecraft:netherrack", [
		Item.of("tconstruct:cobalt_ore").withChance(0.2),
	])

	// 铜质构件
	addAccelerateEvent(event, "cmi:copper_mechanism", "minecraft:stone", [
		Item.of("minecraft:copper_ore").withChance(0.2),
		Item.of("minecraft:gold_ore").withChance(0.05),
		Item.of("minecraft:clay").withChance(0.05),
		Item.of("thermal:sulfur_ore").withChance(0.05)
	])
	addAccelerateEvent(event, "cmi:copper_mechanism", "minecraft:deepslate", [
		Item.of("minecraft:deepslate_copper_ore").withChance(0.15),
		Item.of("minecraft:deepslate_gold_ore").withChance(0.1),
		Item.of("minecraft:clay").withChance(0.1),
		Item.of("thermal:deepslate_sulfur_ore").withChance(0.05)
	])

	// 贰级科技航天构件
	addAccelerateEvent(event, "cmi:tier_2_aviation_mechanism", "ad_astra:moon_stone", [
		Item.of("ad_astra:moon_desh_ore").withChance(0.2),
		Item.of("ad_astra:moon_ice_shard_ore").withChance(0.05),
		Item.of("thermal:steel_block").withChance(0.05)
	])
	addAccelerateEvent(event, "cmi:tier_2_aviation_mechanism", "minecraft:deepslate", [
		Item.of("ad_astra:deepslate_desh_ore").withChance(0.15),
		Item.of("minecraft:deepslate_iron_ore").withChance(0.1),
		Item.of("thermal:deepslate_silver_ore").withChance(0.1)
	])

	// 附魔构件
	addAccelerateEvent(event, "cmi:enchanted_mechanism", "minecraft:stone", [
		Item.of("minecraft:lapis_ore").withChance(0.2),
		Item.of("create:experience_block").withChance(0.01)
	])
	addAccelerateEvent(event, "cmi:enchanted_mechanism", "minecraft:deepslate", [
		Item.of("minecraft:deepslate_lapis_ore").withChance(0.2),
		Item.of("create:experience_block").withChance(0.01)
	])

	// 金质构件
	addAccelerateEvent(event, "cmi:gold_mechanism", "minecraft:stone", [
		Item.of("minecraft:gold_ore").withChance(0.2),
		Item.of("thermal:cinnabar_ore").withChance(0.05),
		Item.of("cmi:quartz_ore").withChance(0.05)
	])
	addAccelerateEvent(event, "cmi:gold_mechanism", "minecraft:deepslate", [
		Item.of("minecraft:deepslate_gold_ore").withChance(0.15),
		Item.of("thermal:deepslate_cinnabar_ore").withChance(0.1),
		Item.of("cmi:deepslate_quartz_ore").withChance(0.1)
	])

	// 铁质构件
	addAccelerateEvent(event, "cmi:iron_mechanism", "minecraft:stone", [
		Item.of("minecraft:iron_ore").withChance(0.2),
		Item.of("minecraft:redstone_ore").withChance(0.05),
		Item.of("thermal:nickel_ore").withChance(0.05)
	])
	addAccelerateEvent(event, "cmi:iron_mechanism", "minecraft:deepslate", [
		Item.of("minecraft:deepslate_iron_ore").withChance(0.15),
		Item.of("minecraft:deepslate_redstone_ore").withChance(0.1),
		Item.of("thermal:deepslate_nickel_ore").withChance(0.1)
	])

	// 下界构件
	addAccelerateEvent(event, "cmi:nether_mechanism", "minecraft:netherrack", [
		Item.of("minecraft:blackstone").withChance(0.1),
		Item.of("minecraft:magma_block").withChance(0.03),
		Item.of("minecraft:soul_sand").withChance(0.03),
		Item.of("minecraft:soul_soil").withChance(0.03),
		Item.of("minecraft:gilded_blackstone").withChance(0.03),
		Item.of("minecraft:nether_gold_ore").withChance(0.03),
		Item.of("minecraft:ancient_debris").withChance(0.03),
		Item.of("minecraft:nether_quartz_ore").withChance(0.03),
		Item.of("minecraft:glowstone").withChance(0.03),
		Item.of("cmi:nether_uranium_ore").withChance(0.03)
	])

	// 叁级科技航天构件
	addAccelerateEvent(event, "cmi:tier_3_aviation_mechanism", "ad_astra:mars_stone", [
		Item.of("ad_astra:mars_ostrum_ore").withChance(0.2),
		Item.of("ad_astra:mars_iron_ore").withChance(0.05),
		Item.of("ad_astra:desh_block").withChance(0.05)
	])
	addAccelerateEvent(event, "cmi:tier_3_aviation_mechanism", "minecraft:deepslate", [
		Item.of("ad_astra:deepslate_ostrum_ore").withChance(0.15),
		Item.of("minecraft:deepslate_iron_ore").withChance(0.1),
		Item.of("thermal:deepslate_silver_ore").withChance(0.1)
	])

	// 精密构件
	addAccelerateEvent(event, "cmi:precision_mechanism", "minecraft:stone", [
		Item.of("minecraft:copper_ore").withChance(0.15),
		Item.of("create:zinc_ore").withChance(0.15),
		Item.of("minecraft:redstone_ore").withChance(0.1)
	])
	addAccelerateEvent(event, "cmi:precision_mechanism", "minecraft:deepslate", [
		Item.of("minecraft:deepslate_copper_ore").withChance(0.1),
		Item.of("create:deepslate_zinc_ore").withChance(0.1),
		Item.of("minecraft:deepslate_redstone_ore").withChance(0.15)
	])

	// 红石构件
	addAccelerateEvent(event, "vintageimprovements:redstone_module", "minecraft:stone", [
		Item.of("minecraft:redstone_ore").withChance(0.2),
	])
	addAccelerateEvent(event, "vintageimprovements:redstone_module", "minecraft:deepslate", [
		Item.of("minecraft:deepslate_redstone_ore").withChance(0.25),
	])

	// 智能构件
	addAccelerateEvent(event, "cmi:smart_mechanism", "minecraft:stone", [
		Item.of("minecraft:diamond_ore").withChance(0.1),
		Item.of("minecraft:gold_ore").withChance(0.2),
		Item.of("cmi:certus_quartz_ore").withChance(0.2),
		Item.of("thermal:ruby_ore").withChance(0.01),
		Item.of("thermal:sapphire_ore").withChance(0.01),
		Item.of("minecraft:emerald_ore").withChance(0.01)
	])
	addAccelerateEvent(event, "cmi:smart_mechanism", "minecraft:deepslate", [
		Item.of("minecraft:deepslate_diamond_ore").withChance(0.15),
		Item.of("minecraft:deepslate_gold_ore").withChance(0.2),
		Item.of("cmi:deepslate_certus_quartz_ore").withChance(0.2),
		Item.of("thermal:deepslate_ruby_ore").withChance(0.01),
		Item.of("thermal:deepslate_sapphire_ore").withChance(0.01),
		Item.of("minecraft:deepslate_emerald_ore").withChance(0.01)
	])

	// 石质构件
	addAccelerateEvent(event, "cmi:stone_mechanism", "minecraft:stone", [
		Item.of("minecraft:andesite").withChance(0.1),
		Item.of("minecraft:diorite").withChance(0.1),
		Item.of("minecraft:granite").withChance(0.1),
		Item.of("create:limestone").withChance(0.1),
		Item.of("tconstruct:seared_stone").withChance(0.1)
	])
	addAccelerateEvent(event, "cmi:stone_mechanism", "minecraft:deepslate", [
		Item.of("tconstruct:seared_stone").withChance(0.1),
		Item.of("minecraft:tuff").withChance(0.1),
		Item.of("create:scoria").withChance(0.1),
		Item.of("minecraft:dripstone_block").withChance(0.1),
		Item.of("minecraft:smooth_basalt").withChance(0.1)
	])

	// 木质构件
	addAccelerateEvent(event, "cmi:wooden_mechanism", "minecraft:stone", [
		Item.of("minecraft:coal_ore").withChance(0.2)
	])
	addAccelerateEvent(event, "cmi:wooden_mechanism",
		Item.of("minecraft:deepslate_coal_ore").withChance(0.15),
		Item.of("minecraft:deepslate_diamond_ore").withChance(0.01)
	)
})

/**
 * 添加构件催生器事件
 * @param {Internal.BlockRightClickedEventJS} event 方块右键事件
 * @param {Internal.ItemStack_} input 催生使用的物品
 * @param {string} stone 催生所需的方块的ID
 * @param {Array<OutputItem>} blocks 催生出的方块(需要添加概率)，没有对应方块的物品会被忽略
 * @returns {BlockRightClickedEventJS} 催生
 */
function addAccelerateEvent(event, input, stone, blocks) {
	// 判定是否主手手持构件
	if (event.hand === "OFF_HAND") {
		return
	}
	let { level, player, item, block } = event
	if (player === null) {
		return
	}
	if (event.getItem().is(input)) {
		let { x, y, z } = event.block.pos
		// 设定扫描所用变量
		let numx = x
		let numz = z
		let outx
		let outz
		let pos
		let rand
		let num = [-2, -1, 0, 1, 2]
		let count = 0
		// 判定周围的石头是否足够
		for (let m = 0; m <= 4; m++) {
			outx = numx + num[m]
			for (let n = 0; n <= 4; n++) {
				outz = numz + num[n]
				pos = new BlockPos(outx, y, outz)

				let block = event.level.getBlock(pos).getId()

				if (block === stone) {
					count = 1 + count
				}
			}
		}
		// 若数量小于等于5则停止该程序
		if (count <= 5) {
			return
		}
		// 若数量大于5则开始抽随机数转化方块
		for (let m = 0; m <= 4; m++) {
			outx = numx + num[m]
			for (let n = 0; n <= 4; n++) {
				outz = numz + num[n]
				pos = new BlockPos(outx, y, outz)
				let block = level.getBlock(pos).getId()

				if (block === stone) {
					rand = Math.random()
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
		// 使玩家挥动手持物品
		player.swing()
		// 给进行操作的玩家播放提示音
		player.playNotifySound("create:crafter_craft", "voice", 2, 1)
		// 召唤效果粒子
		let command = `particle minecraft:dust 0 0.4 0.3 1 ${block.x + 0.5} ${block.y + 1} ${block.z + 0.5} 0.5 0.5 0.5 0.1 30`
		level.server.runCommandSilent(command)
		// 检测玩家是否创造模式
		if (!player.isCreative()) {
			// 若是生存模式则减少一个安山构件
			item.shrink(1)
		}
	}
}