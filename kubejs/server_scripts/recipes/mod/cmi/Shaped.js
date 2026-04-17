ServerEvents.recipes((event) => {
	let { kubejs, minecraft } = event.getRecipes()

	// 木齿轮
	kubejs.shaped("cmi:wooden_gear", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#minecraft:planks",
		B: "#forge:rods/wooden"
	})

	// 桶
	kubejs.shaped("minecraft:bucket", [
		"A A",
		" A "
	], {
		A: "#forge:plates/andesite_alloy"
	})

	// 催生器
	kubejs.shaped("cmi:accelerator", [
		"ABA",
		"CDC",
		"AEA"
	], {
		A: "#forge:stone",
		B: "#create:mechanisms/gold",
		C: "#create:mechanisms/stone",
		D: "#forge:gems/charged_amethyst",
		E: "#create:mechanisms/iron"
	}).id("cmi:accelerator")

	// 水泵
	kubejs.shaped("cmi:water_pump", [
		"ACA",
		"ABA",
		"AAA"
	], {
		A: "#forge:treated_wood",
		B: "cmi:copper_mechanism",
		C: "#forge:plates/iron"
	}).id("cmi:water_pump")

	// TNT
	kubejs.shaped("minecraft:tnt", [
		"AA",
		"AA"
	], {
		A: "cmi:trinitrotoluene"
	}).id("minecraft:tnt")

	// 橡胶手
	kubejs.shaped("create:brass_hand", [
		" A ",
		"BBB",
		" B "
	], {
		A: "#forge:ingots/andesite_alloy",
		B: "thermal:cured_rubber"
	}).id("create:crafting/kinetics/brass_hand")

	// 冲击桩
	kubejs.shaped("cmi:impact_pile", [
		"A",
		"B",
		"B"
	], {
		A: "#forge:plates/invar",
		B: "#forge:rods/netherite"
	})

	// 群系指南针
	kubejs.shaped("naturescompass:naturescompass", [
		"AAA",
		"ABA",
		"CDC"
	], {
		A: "#minecraft:leaves",
		B: "minecraft:compass",
		C: "#minecraft:saplings",
		D: "cmi:nature_mechanism"
	}).id("naturescompass:natures_compass")

	// 结构指南针
	kubejs.shaped("explorerscompass:explorerscompass", [
		"AAA",
		"ABA",
		"CDC"
	], {
		A: "#forge:stone",
		B: "minecraft:compass",
		C: "minecraft:flint",
		D: "cmi:stone_mechanism"
	}).id("explorerscompass:explorers_compass")

	// 泥炭块
	kubejs.shaped("cmi:peat_block", [
		"AA",
		"AA"
	], {
		A: "cmi:peat"
	})

	// 红石线圈
	kubejs.shaped("4x immersiveengineering:wirecoil_redstone", [
		" A ",
		"ABA",
		" A "
	], {
		A: "cmi:redstone_wire",
		B: "#forge:rods/wooden"
	}).id("immersiveengineering:crafting/wirecoil_redstone")

	// 红石通量线圈
	kubejs.shaped("2x thermal:rf_coil", [
		"BAC",
		"A A",
		"CAB"
	], {
		A: "#forge:dusts/redstone",
		B: "#forge:rods/gold",
		C: "#forge:plates/gold"
	}).id("thermal:rf_coil")

	// 振动核心
	kubejs.shaped("2x thermalendergy:vibrating_core", [
		"CAB",
		"A A",
		"BAC"
	], {
		A: "#forge:dusts/amethyst",
		B: "#forge:rods/cobalt",
		C: "#forge:plates/cobalt"
	}).id("thermalendergy:vibrating_core")

	// 旗帜
	global.dyeColorGroup.forEach((color) => {
		kubejs.shaped(`ad_astra:${color}_flag`, [
			"RFF",
			"RFF",
			"RD "
		], {
			R: "#forge:rods/iron",
			F: "#forge:fabric_hemp",
			D: `#forge:dyes/${color}`
		}).id(`ad_astra:${color}_flag`)
	})
})