ItemEvents.tooltip((event) => {
	addCommonTooltip('ue_addons:stone_mechanism')
	addCommonTooltip('ue_addons:copper_mechanism')
	addCommonTooltip('ue_addons:nature_mechanism')
	addCommonTooltip('ue_addons:ender_mechanism')
	addCommonTooltip('ue_addons:pigiron_mechanism')
	addCommonTooltip('ue_addons:enchanted_mechanism')

	addAccelerateTooltip('ue_addons:stone_mechanism')
	addAccelerateTooltip('ue_addons:andesite_mechanism')
	addAccelerateTooltip('ue_addons:copper_mechanism')
	addAccelerateTooltip('ue_addons:iron_mechanism')
	addAccelerateTooltip('ue_addons:gold_mechanism')
	addAccelerateTooltip('ue_addons:ender_mechanism')

	function addCommonTooltip(item) {
		event.add(item, Component.translate(`tooltip.${item}`.replace(`:`, `.`)))
	}

	function addAccelerateTooltip(item) {
		event.addAdvanced(`${item}`, (text) => {
			if (event.shift) {
				text.add(Component.translate(`tooltip.${item}.accelerate`.replace(`:`, `.`)))
			}
			else {
				text.add(Component.translate(`tooltip.${global.namespace}.acceleratable`))

			}
		})
	}
})