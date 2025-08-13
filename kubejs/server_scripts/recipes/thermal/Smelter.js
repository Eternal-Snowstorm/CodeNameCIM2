ServerEvents.recipes((event) => {
	let { thermal } = event.recipes

	thermal.smelter("thermal:enderium_ingot", [
		"#forge:dusts/diamond",
		["#forge:dusts/siltsteel", "#forge:ingots/siltsteel"],
		["#forge:dusts/ender_pearl", "minecraft:ender_pearl"]
	])
})