ServerEvents.recipes((event) => {
	let { tconstruct } = event.recipes

	tconstruct.melting(
		Fluid.of("tconstruct:molten_obsidian", 1000),
		"#forge:obsidian"
	).time(80).temperature(800).id("tconstruct:smeltery/melting/obsidian/block")

	let moltenMaterialGroup = [
		["andesite_alloy", 30]
	]
	moltenMaterialGroup.forEach(([material, moltingTime]) => {
		tconstruct.melting(
			Fluid.of(`ue_addons:molten_${material}`, 90),
			`#forge:ingots/${material}`
		).time(moltingTime).temperature(800)

		tconstruct.melting(
			Fluid.of(`ue_addons:molten_${material}`, 810),
			`#forge:storage_blocks/${material}`
		).time(3 * moltingTime).temperature(800)

		tconstruct.melting(
			Fluid.of(`ue_addons:molten_${material}`, 90),
			`#forge:plates/${material}`
		).time(moltingTime).temperature(800)
	})

	// 充能萤石
	tconstruct.melting(
		Fluid.of("thermal:glowstone", 250),
		"#forge:dusts/glowstone"
	).time(200).temperature(1000)

	tconstruct.melting(
		Fluid.of("thermal:glowstone", 1000),
		"#forge:storage_blocks/glowstone"
	).time(300).temperature(1000)

	// 血液
	tconstruct.melting(
		Fluid.of("ue_addons:blood", 50),
		"minecraft:rotten_flesh"
	).time(30).temperature(36)
})