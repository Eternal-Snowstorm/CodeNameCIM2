StartupEvents.registry("sound_event", (event) => {
	/**
	 * 
	 * @param {string} name 注册id
	 * @returns 
	 */
	function addSoundEvent(name) {
		return event.create(`${global.namespace}:${name}`)
	}

	addSoundEvent("for_sea")
	addSoundEvent("meme.bruh")
	addSoundEvent("final_quest_complete")
})