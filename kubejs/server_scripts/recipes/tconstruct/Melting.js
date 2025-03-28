ServerEvents.recipes((event) => {
	let { tconstruct } = event.recipes

	tconstruct.melting(
		Fluid.of("tconstruct:molten_obsidian", 1000),
		"#forge:obsidian"
	).time(660).temperature(800)
	.id("tconstruct:smeltery/melting/obsidian/block")
	let moltenMaterialGroup = []
	moltenMaterialGroup.forEach(([material,moltingTime])=>{
		tconstruct.melting(
			Fluid.of(`ue_addons:molten_${material}`, 90),
			`#forge:ingots/${material}`
		).time(moltingTime).temperature(800)

		tconstruct.melting(
			Fluid.of(`ue_addons:molten_${material}`, 810),
			`#forge:storage_blocks/${material}`
		).time(3*moltingTime).temperature(800)
		
		tconstruct.melting(
			Fluid.of(`ue_addons:molten_${material}`, 90),
			`#forge:plates/${material}`
		).time(moltingTime).temperature(800)
	})
})