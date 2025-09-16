ItemEvents.tooltip((event) => {
	addAccelerateTooltip("cmi:stone_mechanism")
	addAccelerateTooltip("cmi:andesite_mechanism")
	addAccelerateTooltip("cmi:copper_mechanism")
	addAccelerateTooltip("cmi:iron_mechanism")
	addAccelerateTooltip("cmi:gold_mechanism")
	addAccelerateTooltip("cmi:ender_mechanism")
	addAccelerateTooltip("vintageimprovements:redstone_module")
	addAccelerateTooltip("cmi:enchanted_mechanism")
	addAccelerateTooltip("cmi:nether_mechanism")
	addAccelerateTooltip("cmi:cobalt_mechanism")
	addAccelerateTooltip("cmi:wooden_mechanism")
	addAccelerateTooltip("cmi:smart_mechanism")
	addAccelerateTooltip("cmi:tier_2_aviation_mechanism")
	addAccelerateTooltip("cmi:tier_3_aviation_mechanism")
	addAccelerateTooltip("vintageimprovements:redstone_module")
	addAccelerateTooltip("create:precision_mechanism")

	function addAccelerateTooltip(item) {
		event.addAdvanced(item, (item, advanced, tooltip) => {
			if (event.shift) {
				let lines = Component.translatable(`tooltip.${item.getId()}.accelerate`.replace(":", "."))
					.string.split("\n")
				lines.forEach((line) => {
					tooltip.add(line)
				})
			} else {
				tooltip.add(Component.translatable(`tooltip.${global.namespace}.acceleratable`))
			}
		})
	}

	// 地质锤的tooltip
	event.addAdvanced("cmi:geological_hammer",
		(item, advanced, tooltip) => {
			if (global.isDeveloper) {
				tooltip.add(Component.translatable("tooltip.cmi.geographycal_hammer.developer1"))
				tooltip.add(Component.translatable("tooltip.cmi.geographycal_hammer.developer2"))
			} else {
				tooltip.add(Component.translatable("tooltip.cmi.geographycal_hammer.not_developer"))
			}
		})

	// 初始套件的Tooltip
	event.addAdvanced("cmi:initial_item_kit",
		(item, advanced, tooltip) => {
			if (event.shift) {
				let lines = Component.translatable("tooltip.cmi.initial_item_kit.shift")
					.string.split("\n")
				lines.forEach((line) => {
					tooltip.add(line)
				})
			} else {
				tooltip.add(Component.translatable("tooltip.cmi.initial_item_kit.tip"))
			}
		})

	// 电池
	event.addAdvanced("cmi:simple_battery",
		(stack, advanced, tooltip) => {
			let stored = stack.nbt?.energy || 0
			let max = 10000
			tooltip.add(Component.literal(`§e${stored} / ${max} FE`))
		})

	// 末影构件
	event.addAdvanced("cmi:ender_mechanism",
		(item, advanced, tooltip) => {
			if (item.hasNBT()) {
				let x = item.getNbt().x
				let y = item.getNbt().y
				let z = item.getNbt().z

				let dimId = item.getNbt().dim

				if (dimId) {
					// 转成翻译键
					let dimKey = "dimension." + dimId.replace(":", ".")
					let dim = Component.translatable(dimKey)
					let tranKey =
						Component.translatable("tooltip.cmi.stored_location", dim, x, y, z)
							.red()

					tooltip.add(tranKey)
				}
			}
		})
})