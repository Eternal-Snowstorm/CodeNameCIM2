StartupEvents.registry("block", (event) => {
	/**
	 * 
	 * @param {string} name 
	 * @returns 
	 */
	function addBlock(name) {
		let chapter = 4
		let builder = event.create(`${global.namespace}:${name}`)
		builder.textureAll(`${global.namespace}:block/chapter/c${chapter.toString()}/${name}`)

		return builder
	}
})