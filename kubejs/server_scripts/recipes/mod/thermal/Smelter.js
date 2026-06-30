ServerEvents.recipes((event) => {
	let { thermal } = event.getRecipes()

	// 末影合金
	thermal.smelter("thermal:enderium_ingot", [
		"#forge:dusts/diamond",
		["#forge:dusts/siltsteel", "#forge:ingots/siltsteel"],
		["#forge:dusts/ender_pearl", "minecraft:ender_pearl"]
	])

	// 琥珀金
	thermal.smelter("2x thermal:electrum_ingot", [
		["#forge:dusts/gold", "#forge:ingots/gold"],
		["#forge:dusts/silver", "#forge:ingots/silver"],
	])

	// 康铜
	thermal.smelter("2x thermal:constantan_ingot", [
		["#forge:dusts/copper", "#forge:ingots/copper"],
		["#forge:dusts/nickel", "#forge:ingots/nickel"],
	])

	// 青铜
	thermal.smelter("4x thermal:bronze_ingot", [
		"3x #forge:ingots/copper",
		"#forge:ingots/tin",
	])

	// 龙钢
	thermal.smelter("2x thermal_extra:dragonsteel_ingot", [
		["thermal_extra:ancient_dust"],
		["minecraft:netherite_scarp"],
		["#forge:dusts/ender_pearl", "minecraft:ender_pearl"],
	])

	// 深渊
	thermal.smelter("2x thermal_extra:abyssal_ingot", [
		["#forge:dusts/diamond"],
		["minecraft:netherite_scarp"],
		["minecraft:echo_shard"],
	])

	// 殷钢
	thermal.smelter("3x thermal:invar_ingot", [
		"2x #forge:ingots/iron",
		"#forge:ingots/nickel",
	])

	// 信素
	thermal.smelter("4x thermal:signalum_ingot", [
		"3x #forge:ingots/copper",
		"#forge:ingots/silver",
		"4x minecraft:redstone",
	])

	// 流明
	thermal.smelter("4x thermal:lumium_ingot", [
		"3x #forge:ingots/tin",
		"#forge:ingots/silver",
		"2x minecraft:glowstone_dust",
	])

	// 余烬粘液
	thermal.smelter("tconstruct:cinderslime_ingot", [
		["tconstruct:ichor_slime_ball"],
		["#forge:dusts/gold", "#forge:ingots/gold"],
		["tconstruct:scorched_brick"],
	])

	// 福鲁伊克斯珍珠
	thermal.smelter("ae2:fluix_pearl", [
		"minecraft:ender_pearl",
		"#forge:dusts/fluix",
		"#forge:gems/fluix"
	]).id("ae2:misc/fluixpearl")

	// 石英玻璃
	thermal.smelter("4x ae2:quartz_glass", [
		"4x #cmi:quartz_glass_material",
		"4x #forge:glass"
	]).energy(5000).id("ae2:decorative/quartz_glass")

	// 耐火砖泥
	thermal.smelter("2x cmi:refractory_grout",[
		"immersiveengineering:dust_hop_graphite",
		"cmi:kaolinite_ball",
		"minecraft:gravel"
	]).energy(50000).id("immersiveindustry:crafting/refractory_kiln_brick")
})