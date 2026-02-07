StartupEvents.registry("item", (event) => {
	/**
	 * 
	 * @param {string} name 
	 * @returns 
	 */
	function addItem(name) {
		let builder = event.create(`${global.namespace}:${name}`)

		return builder
	}
})