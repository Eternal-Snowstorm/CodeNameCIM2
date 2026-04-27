StartupEvents.registry("sound_event", (event) => {
	/**
	 * 
	 * @param {string} name 注册id
	 * @returns 
	 */
	function addSoundEvent(name) {
		return event.create(`${Cmi.MODID}:${name}`)
	}

	addSoundEvent("for_sea")
	addSoundEvent("meme.bruh")
	addSoundEvent("final_quest_complete")
	addSoundEvent("rocket.shutdown")
	addSoundEvent("rocket.startup")
	addSoundEvent("rocket.error")
})