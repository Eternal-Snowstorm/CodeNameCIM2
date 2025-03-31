ServerEvents.recipes((event) =>{
  let { kubejs } = event.recipes
	let mech = "ue_addons:stone_mechanism"
  //焦黑排液孔
  kubejs.shaped("tconstruct:seared_drain", [
		"B B",
		"CAC",
		"B B"
	], {
		A: mech,
		B: 'tconstruct:seared_brick',
		C: 'minecraft:copper_ingot'
	}).id("tconstruct:smeltery/seared/drain")
  //焦黑滑槽
  kubejs.shaped("tconstruct:seared_chute", [
		"BCB",
		" A ",
		"BCB"
	], {
		A: mech,
		B: 'tconstruct:seared_brick',
		C: 'minecraft:copper_ingot'
	}).id("tconstruct:smeltery/seared/chute")
  //焦黑输导孔
  kubejs.shaped("tconstruct:seared_duct", [
		"B B",
		"CAC",
		"B B"
	], {
		A: mech,
		B: 'tconstruct:seared_brick',
		C: 'minecraft:gold_ingot'
	}).id("tconstruct:smeltery/seared/duct")
  //焦黑铸件台
  kubejs.shaped("tconstruct:seared_table", [
		"BBB",
		"BAB",
		"B B"
	], {
		A: mech,
		B: 'tconstruct:seared_brick'
	}).id("tconstruct:smeltery/seared/table")
  //焦黑浇筑盆
  kubejs.shaped("tconstruct:seared_basin", [
		"B B",
		"BAB",
		"BBB"
	], {
		A: mech,
		B: 'tconstruct:seared_brick'
	}).id("tconstruct:smeltery/seared/basin")
  //焦黑加热器
  kubejs.shaped("tconstruct:seared_heater", [
		"BBB",
		"B B",
		"BAB"
	], {
		A: mech,
		B: 'tconstruct:seared_brick'
	}).id("tconstruct:smeltery/seared/heater")
  //焦黑熔化炉
  kubejs.shaped("tconstruct:seared_melter", [
		"BCB",
		"BAB",
		"   "
	], {
		A: mech,
		B: 'tconstruct:seared_brick',
		C: '#tconstruct:gauge'
	}).id("tconstruct:smeltery/seared/melter")
  //铸模箱
	kubejs.shaped("tconstruct:cast_chest", [
		" C ",
		"DBD",
		"DAD"
	], {
		A: mech,
		B: '#forge:chests/wooden',
		C: '#tconstruct:casts/gold',
		D: 'tconstruct:seared_brick'
	}).id("tconstruct:tables/cast_chest")
	//炉灶
  kubejs.shaped("farmersdelight:stove", [
		"BBB",
		"DAD",
		"DCD"
	], {
		A: mech,
		B: 'minecraft:iron_ingot',
		C: 'minecraft:campfire',
    D: 'minecraft:bricks'
	}).id("farmersdelight:stove")
})