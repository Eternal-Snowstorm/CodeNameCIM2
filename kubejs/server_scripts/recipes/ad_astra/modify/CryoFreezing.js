ServerEvents.recipes((event) => {
	// 寒冰碎片
	event.custom({
		"type": "ad_astra:cryo_freezing",
		"cookingtime": 25,
		"energy": 125,
		"ingredient": {
			"item": "ad_astra:ice_shard"
		},
		"result": {
			"fluid": "ad_astra:cryo_fuel",
			"millibuckets": 3
		}
	}).id("ad_astra:cryo_freezing/cryo_fuel_from_cryo_freezing_ice_shard")

	// 浮冰
	event.custom({
		"type": "ad_astra:cryo_freezing",
		"cookingtime": 200,
		"energy": 1500,
		"ingredient": {
			"item": "minecraft:packed_ice"
		},
		"result": {
			"fluid": "ad_astra:cryo_fuel",
			"millibuckets": 90
		}
	}).id("ad_astra:cryo_freezing/cryo_fuel_from_cryo_freezing_packed_ice")

	// 蓝冰
	event.custom({
		"type": "ad_astra:cryo_freezing",
		"cookingtime": 100,
		"energy": 2500,
		"ingredient": {
			"item": "minecraft:blue_ice"
		},
		"result": {
			"fluid": "ad_astra:cryo_fuel",
			"millibuckets": 100
		}
	}).id("ad_astra:cryo_freezing/cryo_fuel_from_cryo_freezing_blue_ice")

	event.custom({
		"type": "ad_astra:cryo_freezing",
		"cookingtime": 100,
		"energy": 500,
		"ingredient": {
			"item": "minecraft:ice"
		},
		"result": {
			"fluid": "ad_astra:cryo_fuel",
			"millibuckets": 10
		}
	}).id("ad_astra:cryo_freezing/cryo_fuel_from_cryo_freezing_ice")
})