ServerEvents.recipes((event) => {
	// 寒冰碎片
	event.custom({
		"type": "ad_astra:cryo_fuel_conversion",
		"input": { "item": "ad_astra:ice_shard" },
		"output": "ad_astra:cryo_fuel",
		"conversion_ratio": 0.00025
	}).id("ad_astra:conversion/cryo_fuel_from_ice_shard")

	// 浮冰
	event.custom({
		"type": "ad_astra:cryo_fuel_conversion",
		"input": { "item": "minecraft:packed_ice" },
		"output": "ad_astra:cryo_fuel",
		"conversion_ratio": 0.009
	}).id("ad_astra:conversion/cryo_fuel_from_packed_ice")

	// 蓝冰
	event.custom({
		"type": "ad_astra:cryo_fuel_conversion",
		"input": { "item": "minecraft:blue_ice" },
		"output": "ad_astra:cryo_fuel",
		"conversion_ratio": 0.081
	}).id("ad_astra:conversion/cryo_fuel_from_blue_ice")
})