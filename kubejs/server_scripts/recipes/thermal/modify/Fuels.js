ServerEvents.recipes((event) => {
	let { thermal_extra } = event.recipes

	thermal_extra.cold_fuel("ad_astra:ice_shard")
		.energy(1250)
})