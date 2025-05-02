ItemEvents.tooltip((event) => {
	addCommonTooltip("ue_addons:wooden_mechanism")
	addCommonTooltip("ue_addons:stone_mechanism")
	addCommonTooltip("ue_addons:copper_mechanism")
	addCommonTooltip("ue_addons:nature_mechanism")
	addCommonTooltip("ue_addons:ender_mechanism")
	addCommonTooltip("ue_addons:photosensitive_mechanism")
	addCommonTooltip("ue_addons:cobalt_mechanism")
	addCommonTooltip("ue_addons:nether_mechanism")
	addCommonTooltip("ue_addons:pigiron_mechanism")
	addCommonTooltip("ue_addons:enchanted_mechanism")
	addCommonTooltip("ue_addons:nuclear_mechanism")

	addAccelerateTooltip("ue_addons:stone_mechanism")
	addAccelerateTooltip("ue_addons:andesite_mechanism")
	addAccelerateTooltip("ue_addons:copper_mechanism")
	addAccelerateTooltip("ue_addons:iron_mechanism")
	addAccelerateTooltip("ue_addons:gold_mechanism")
	addAccelerateTooltip("ue_addons:ender_mechanism")
	addAccelerateTooltip("vintageimprovements:redstone_module")
	addAccelerateTooltip("ue_addons:enchanted_mechanism")
	addAccelerateTooltip("ue_addons:nether_mechanism")
	addAccelerateTooltip("ue_addons:cobalt_mechanism")
	addAccelerateTooltip("ue_addons:wooden_mechanism")

	function addCommonTooltip(item) {
		event.add(item, Component.translate(`tooltip.${item}`.replace(":", ".")))
	}

	function addAccelerateTooltip(item) {
		event.addAdvanced(item, (item, advanced, text) => {
			if (event.shift) {
				text.add(Component.translate(`tooltip.${item.getId()}.accelerate`.replace(":", ".")))
			} else {
				text.add(Component.translate(`tooltip.${global.namespace}.acceleratable`))
			}
		})
	}

	// 地质锤的tooltip
	event.addAdvanced("ue_addons:geological_hammer",
		(item, advanced, text) => {
			if (global.isDeveloper) {
				text.add(Component.translate(`tooltip.ue_addons.geographycal_hammer.developer1`))
				text.add(Component.translate(`tooltip.ue_addons.geographycal_hammer.developer2`))
			} else {
				text.add(Component.translate(`tooltip.ue_addons.geographycal_hammer.not_developer`))
			}
		})
})