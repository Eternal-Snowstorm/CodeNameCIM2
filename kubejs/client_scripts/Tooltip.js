ItemEvents.tooltip((event) => {
	event.add("ue_addons:stone_mechanism", [
		Component.translate("desc.ue_addons.stone_mechanism")
	])
	event.add("ue_addons:copper_mechanism", [
		Component.translate("desc.ue_addons.copper_mechanism")
	])
	event.add("ue_addons:ender_mechanism", [
		Component.translate("desc.ue_addons.ender_mechanism")
	])
	event.add("ue_addons:enchanted_mechanism", [
		Component.translate("desc.ue_addons.enchanted_mechanism")
	])
	event.add("ue_addons:nature_mechanism", [
		Component.translate("desc.ue_addons.nature_mechanism")
	])
	event.addAdvanced("ue_addons:stone_mechanism", (item, advanced, text) => {
		if (event.shift) {
			text.add(Component.translate("desc.ue_addons.accelerate.stone"))
		}
		else {
			text.add(Component.translate("desc.ue_addons.acceleratable"))

		}
	})
	event.addAdvanced("ue_addons:andesite_mechanism", (item, advanced, text) => {
		if (event.shift) {
			text.add(Component.translate("desc.ue_addons.accelerate.andesite"))
		}
		else {
			text.add(Component.translate("desc.ue_addons.acceleratable"))

		}
	})
	event.addAdvanced("ue_addons:copper_mechanism", (item, advanced, text) => {
		if (event.shift) {
			text.add(Component.translate("desc.ue_addons.accelerate.copper"))
		}
		else {
			text.add(Component.translate("desc.ue_addons.acceleratable"))

		}
	})
	event.addAdvanced("ue_addons:iron_mechanism", (item, advanced, text) => {
		if (event.shift) {
			text.add(Component.translate("desc.ue_addons.accelerate.iron"))
		}
		else {
			text.add(Component.translate("desc.ue_addons.acceleratable"))

		}
	})
	event.addAdvanced("ue_addons:gold_mechanism", (item, advanced, text) => {
		if (event.shift) {
			text.add(Component.translate("desc.ue_addons.accelerate.gold"))
		}
		else {
			text.add(Component.translate("desc.ue_addons.acceleratable"))

		}
	})
	event.addAdvanced("ue_addons:ender_mechanism", (item, advanced, text) => {
		if (event.shift) {
			text.add(Component.translate("desc.ue_addons.accelerate.ender"))
		}
		else {
			text.add(Component.translate("desc.ue_addons.acceleratable"))

		}
	})

	function addCommonTooltip(item) {
		event.add(item, Component.translate(`tooltip.${item}`.replace(":", ".")))
	}

	addCommonTooltip("ue_addons:pigiron_mechanism")
})