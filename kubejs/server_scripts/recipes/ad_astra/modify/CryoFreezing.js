ServerEvents.recipes((event) => {
	let { ad_astra } = event.recipes

	// 寒冰碎片(按理说一个寒冰碎片应该是2.5mb...但是很明显写小数不太好, 所以只能四舍五入了)
	ad_astra.cryo_freezing(Fluid.of("ad_astra:cryo_fuel", 3), [
		"ad_astra:ice_shard"
	]).energy(125).cookingtime(25).id("ad_astra:cryo_freezing/cryo_fuel_from_cryo_freezing_ice_shard")

	// 浮冰
	ad_astra.cryo_freezing(Fluid.of("ad_astra:cryo_fuel", 90), [
		"minecraft:packed_ice"
	]).energy(1500).cookingtime(200).id("ad_astra:cryo_freezing/cryo_fuel_from_cryo_freezing_packed_ice")

	// 蓝冰
	ad_astra.cryo_freezing(Fluid.of("ad_astra:cryo_fuel", 100), [
		"minecraft:blue_ice"
	]).energy(2500).cookingtime(100).id("ad_astra:cryo_freezing/cryo_fuel_from_cryo_freezing_blue_ice")

	ad_astra.cryo_freezing(Fluid.of("ad_astra:cryo_fuel", 10), [
		"minecraft:ice"
	]).energy(500).cookingtime(100).id("ad_astra:cryo_freezing/cryo_fuel_from_cryo_freezing_ice")
})