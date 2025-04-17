ServerEvents.recipes((event) => {
	event.custom({
		"type": "ad_astra:cryo_fuel_conversion",
		"input": { "item": "ad_astra:ice_shard" },
		"output": "ad_astra:cryo_fuel",
		"conversion_ratio": 0.00025
	}).id("ad_astra:conversion/cryo_fuel_from_ice_shard")
})