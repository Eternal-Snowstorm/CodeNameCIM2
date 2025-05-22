ServerEvents.recipes((event) => {
	let { thermal } = event.recipes

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
})