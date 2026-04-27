ItemEvents.tooltip((event) => {

	// 制作组fumo
	addAdvancedTooltip("cmi:re_construction")
	addAdvancedTooltip("cmi:dkrkoo_weihe")
	addAdvancedTooltip("cmi:dropper_qwq")
	addAdvancedTooltip("cmi:117458866249")
	addAdvancedTooltip("cmi:random_mechanism")
	addAdvancedTooltip("cmi:eternalsnowstorm")
	addAdvancedTooltip("cmi:qi_month")
	addAdvancedTooltip("cmi:dont_kill_belalus")
	addAdvancedTooltip("cmi:fiber_optics")
	addAdvancedTooltip("cmi:ye_anqing")
	addAdvancedTooltip("cmi:sakura_star_cn")
	addAdvancedTooltip("cmi:qicaijie")
	addAdvancedTooltip("cmi:flash_yi")
	addAdvancedTooltip("cmi:keyxeldesu")
	addAdvancedTooltip("cmi:sergei")

	// 繁星核心
	addAdvancedTooltip("cmi:astral_core")

	/**
	 * 
	 * @param {Internal.Ingredient_} ingredient 
	 */
	function addAdvancedTooltip(ingredient) {
		event.addAdvanced(ingredient, (item, advanced, tooltip) => {
			let itemTooltipTranslateKey = Component.translatable(`tooltip.${ingredient}`
				.replace(":", "."))
			tooltip.add(itemTooltipTranslateKey)
		})
	}

	// 初始套件的Tooltip
	// event.addAdvanced("cmi:initial_item_kit",
	// 	(item, advanced, tooltip) => {
	// 		if (event.shift) {
	// 			let lines = Component.translatable("tooltip.cmi.initial_item_kit.shift")
	// 				.string.split("\n")
	// 			lines.forEach((line) => {
	// 				tooltip.add(line)
	// 			})
	// 		} else {
	// 			tooltip.add(Component.translatable("tooltip.cmi.initial_item_kit.tip"))
	// 		}
	// 	})

	// 电池
	event.addAdvanced("cmi:simple_battery",
		(item, advanced, tooltip) => {
			let stored = item.nbt?.Energy || 0
			let max = 150000
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
					let tranKey = Component.translatable(
						"tooltip.cmi.stored_location",
						dim, x, y, z
					).red()

					tooltip.add(tranKey)
				}
			}
		})

	// 打桩机
	event.addAdvanced("cmi:impact_pile",
		(item, advanced, tooltip) => {
			CreateLang.translate("tooltip.holdForDescription", Component.literal("Shift")
				.withStyle(event.shift ? ChatFormatting.WHITE : ChatFormatting.GRAY))
				.style(ChatFormatting.DARK_GRAY)
				.addTo(tooltip)

			if (event.shift) {
				tooltip.addAll(TooltipHelper.cutStringTextComponent(
					CmiLang.translateDirect("tooltip.impact_pile.behaviour1").getString(),
					TooltipHelper.Palette.STANDARD_CREATE.primary(),
					TooltipHelper.Palette.STANDARD_CREATE.highlight(),
					0
				))

				tooltip.addAll(TooltipHelper.cutStringTextComponent(
					CmiLang.translateDirect("tooltip.impact_pile.behaviour2").getString(),
					TooltipHelper.Palette.STANDARD_CREATE.primary(),
					TooltipHelper.Palette.STANDARD_CREATE.highlight(),
					0
				))
			}
		})

	event.addAdvanced("moreburners:electric_burner",
		(item, advanced, tooltip) => {
			tooltip.add(Component.translatable("tooltip.moreburners.electric_burner.1"))
			tooltip.add(Component.translatable("tooltip.moreburners.electric_burner.2"))
		})
})