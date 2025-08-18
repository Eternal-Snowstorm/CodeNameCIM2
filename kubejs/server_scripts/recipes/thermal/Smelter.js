ServerEvents.recipes((event) => {
	let { thermal } = event.recipes

	thermal.smelter("thermal:enderium_ingot", [
		"#forge:dusts/diamond",
		["#forge:dusts/siltsteel", "#forge:ingots/siltsteel"],
		["#forge:dusts/ender_pearl", "minecraft:ender_pearl"]
	])

	thermal.smelter("2x thermal:electrum_ingot", [
		["#forge:dusts/gold","#forge:ingots/gold"],
		["#forge:dusts/silver","#forge:ingots/silver"],
	])

	thermal.smelter("2x thermal:constantan_ingot", [
		["#forge:dusts/copper","#forge:ingots/copper"],
		["#forge:dusts/nickel","#forge:ingots/nickel"],
	])

	thermal.smelter("4x thermal:bronze_ingot", [
		"3x #forge:ingots/copper",
		"#forge:ingots/tin",
	])

	thermal.smelter("thermalendergy:prismalium_ingot", [
		["minecraft:prismarine_shard"],
		["#forge:dusts/silver","#forge:ingots/silver"],
		["minecraft:prismarine_crystals"],
	])

	thermal.smelter("thermalendergy:melodium_ingot", [
		["minecraft:amethyst_shard"],
		["#forge:dusts/chromium","#forge:ingots/chromium"],
		["minecraft:glowstone"],
	])

	thermal.smelter("thermalendergy:stellarium_ingot", [
		["minecraft:diamond","#forge:dusts/diamond"],
		["#forge:dusts/gold","#forge:ingots/gold"],
		["#forge:dusts/platinum","#forge:ingots/platinum"],
	])

	thermal.smelter("2x thermal_extra:dragonsteel_ingot", [
		["thermal_extra:ancient_dust"],
		["minecraft:netherite_scarp"],
		["#forge:dusts/ender_pearl","minecraft:ender_pearl"],
	])

	thermal.smelter("2x thermal_extra:abyssal_ingot", [
		["#forge:dusts/diamond"],
		["minecraft:netherite_scarp"],
		["minecraft:echo_shard"],
	])

	thermal.smelter("3x thermal:invar_ingot", [
		"2x #forge:ingots/iron",
		"#forge:ingots/nickel",
	])

	thermal.smelter("4x thermal:signalum_ingot", [
		"3x #forge:ingots/copper",
		"#forge:ingots/silver",
		"4x minecraft:redstone",
	])

	thermal.smelter("4x thermal:lumium_ingot", [
		"3x #forge:ingots/tin",
		"#forge:ingots/silver",
		"2x minecraft:glowstone_dust",
	])

	thermal.smelter('tconstruct:cinderslime_ingot', [
		['tconstruct:ichor_slime_ball'],
		["#forge:dusts/gold","#forge:ingots/gold"],
		['tconstruct:scorched_brick'],
	])
})