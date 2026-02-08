ServerEvents.recipes((event) => {
	let { thermal } = event.recipes

	// 宝石
	thermal.centrifuge([
		"5x immersiveengineering:dust_aluminum",
		"cmi:chromium_dust"
	], "6x #forge:dusts/ruby").energy(4000)

	thermal.centrifuge([
		"15x immersiveengineering:dust_aluminum",
		"5x cmi:chromium_dust"
	], "20x #forge:dusts/emerald").energy(4000)

	thermal.centrifuge([
		"9x immersiveengineering:dust_aluminum",
		"cmi:chromium_dust"
	], "10x #forge:dusts/sapphire").energy(4000)

	// 淤泥处理
	thermal.centrifuge([
		Fluid.of("minecraft:water", 100),
		"minecraft:dirt",
		Item.of("2x cmi:siltsteel_dust").withChance(0.5),
		Item.of("3x cmi:siltsteel_nugget").withChance(0.3)
	], "4x cmi:sludge_extract").energy(4000)
})