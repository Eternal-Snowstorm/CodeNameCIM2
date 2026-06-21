StartupEvents.registry("sound_event", (event) => {
	/**
	 * 
	 * @param {string} name 注册id
	 * @returns 
	 */
	function addRecordSoundEvent(name) {
		return event.create(`${Cmi.MODID}:record.${name}`)
	}

	addRecordSoundEvent("mechanism")
	addRecordSoundEvent("togni_leets")
})

StartupEvents.registry("item", (event) => {
	/**
	 * 
	 * @param {string} name 注册id
	 * @param {number} time 时间(单位秒)
	 * @returns 
	 */
	function addMusicDiscItem(name, time) {
		let builder =
			event.create(`${Cmi.MODID}:${name}`, "music_disc")

		builder.song(`${Cmi.MODID}:record.${name}`, time)
		builder.texture(`${Cmi.MODID}:item/discs/${name}`)
		builder.tag("minecraft:music_discs")

		return builder
	}

	addMusicDiscItem("mechanism", 120 + 34)
	addMusicDiscItem("togni_leets", 180 + 32)
		.maxStackSize(64)
		.modelJson(defineModels("ingot", true))
		.color(0, 0xA7A7A7)
		.color(1, 0x121C37)
		.rarity(Rarity.COMMON)
		.tag("forge:ingots")
})