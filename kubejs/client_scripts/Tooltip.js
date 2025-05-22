ItemEvents.tooltip((event) => {
	addCommonTooltip("cmi:wooden_mechanism")
	addCommonTooltip("cmi:stone_mechanism")
	addCommonTooltip("cmi:copper_mechanism")
	addCommonTooltip("cmi:nature_mechanism")
	addCommonTooltip("cmi:ender_mechanism")
	addCommonTooltip("cmi:photosensitive_mechanism")
	addCommonTooltip("cmi:cobalt_mechanism")
	addCommonTooltip("cmi:nether_mechanism")
	addCommonTooltip("cmi:pigiron_mechanism")
	addCommonTooltip("cmi:enchanted_mechanism")
	addCommonTooltip("cmi:nuclear_mechanism")
	addCommonTooltip("cmi:sculk_mechanism")
	addCommonTooltip("cmi:charged_amethyst")

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

	addCommonTooltip("cmi:fecl2")
	addCommonTooltip("cmi:feso4")
	addCommonTooltip("cmi:cucl2")
	addCommonTooltip("cmi:cuso4")
	addCommonTooltip("cmi:zncl2")
	addCommonTooltip("cmi:znso4")
	addCommonTooltip("cmi:alcl3")
	addCommonTooltip("cmi:al2so43")
	addCommonTooltip("cmi:aucl3")
	addCommonTooltip("cmi:au2so43")
	addCommonTooltip("cmi:agcl")
	addCommonTooltip("cmi:ag2so4")
	addCommonTooltip("cmi:pbcl2")
	addCommonTooltip("cmi:pbso4")
	addCommonTooltip("cmi:crcl3")
	addCommonTooltip("cmi:cr2so43")
	addCommonTooltip("cmi:sncl2")
	addCommonTooltip("cmi:snso4")
	addCommonTooltip("cmi:vocl2")
	addCommonTooltip("cmi:voso4")
	addCommonTooltip("cmi:uo2cl2")
	addCommonTooltip("cmi:uo2so4")
	addCommonTooltip("cmi:nicl2")
	addCommonTooltip("cmi:niso4")
	addCommonTooltip("cmi:cocl2")
	addCommonTooltip("cmi:coso4")
	addCommonTooltip("cmi:oscl3")
	addCommonTooltip("cmi:os2so43")
	addCommonTooltip("cmi:na2so4")
	addCommonTooltip("cmi:nacl")
	addCommonTooltip("cmi:caso4")
	addCommonTooltip("cmi:cacl2")
	addCommonTooltip("cmi:k2so4")
	addCommonTooltip("cmi:kcl")
	addCommonTooltip("cmi:ptcl4")
	addCommonTooltip("cmi:ptso42")

	addCommonTooltip("cmi:fecl2_solution_bucket")
	addCommonTooltip("cmi:feso4_solution_bucket")
	addCommonTooltip("cmi:cucl2_solution_bucket")
	addCommonTooltip("cmi:cuso4_solution_bucket")
	addCommonTooltip("cmi:zncl2_solution_bucket")
	addCommonTooltip("cmi:znso4_solution_bucket")
	addCommonTooltip("cmi:alcl3_solution_bucket")
	addCommonTooltip("cmi:al2so43_solution_bucket")
	addCommonTooltip("cmi:aucl3_solution_bucket")
	addCommonTooltip("cmi:au2so43_solution_bucket")
	addCommonTooltip("cmi:agcl_solution_bucket")
	addCommonTooltip("cmi:ag2so4_solution_bucket")
	addCommonTooltip("cmi:pbcl2_solution_bucket")
	addCommonTooltip("cmi:pbso4_solution_bucket")
	addCommonTooltip("cmi:crcl3_solution_bucket")
	addCommonTooltip("cmi:cr2so43_solution_bucket")
	addCommonTooltip("cmi:sncl2_solution_bucket")
	addCommonTooltip("cmi:snso4_solution_bucket")
	addCommonTooltip("cmi:vocl2_solution_bucket")
	addCommonTooltip("cmi:voso4_solution_bucket")
	addCommonTooltip("cmi:uo2cl2_solution_bucket")
	addCommonTooltip("cmi:uo2so4_solution_bucket")
	addCommonTooltip("cmi:nicl2_solution_bucket")
	addCommonTooltip("cmi:niso4_solution_bucket")
	addCommonTooltip("cmi:cocl2_solution_bucket")
	addCommonTooltip("cmi:coso4_solution_bucket")
	addCommonTooltip("cmi:oscl3_solution_bucket")
	addCommonTooltip("cmi:os2so43_solution_bucket")
	addCommonTooltip("cmi:na2so4_solution_bucket")
	addCommonTooltip("cmi:nacl_solution_bucket")
	addCommonTooltip("cmi:caso4_solution_bucket")
	addCommonTooltip("cmi:cacl2_solution_bucket")
	addCommonTooltip("cmi:k2so4_solution_bucket")
	addCommonTooltip("cmi:kcl_solution_bucket")
	addCommonTooltip("#minecraft:pickaxes")

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
	event.addAdvanced("cmi:geological_hammer",
		(item, advanced, text) => {
			if (global.isDeveloper) {
				text.add(Component.translate("tooltip.cmi.geographycal_hammer.developer1"))
				text.add(Component.translate("tooltip.cmi.geographycal_hammer.developer2"))
			} else {
				text.add(Component.translate("tooltip.cmi.geographycal_hammer.not_developer"))
			}
		})

	// 初始套件的Tooltip
	event.addAdvanced("cmi:initial_item_kit",
		(item, advanced, text) => {
			if (event.shift) {
				text.add(Component.translate("tooltip.cmi.initial_item_kit.shift"))
			} else {
				text.add(Component.translate("tooltip.cmi.initial_item_kit.tip"))
			}
		})
})