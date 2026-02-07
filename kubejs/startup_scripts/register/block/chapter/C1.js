StartupEvents.registry("block", (event) => {
	/**
	 * 
	 * @param {string} name 
	 * @returns 
	 */
	function addBlock(name) {
		let builder = event.create(`${global.namespace}:${name}`)

		return builder
	}
})