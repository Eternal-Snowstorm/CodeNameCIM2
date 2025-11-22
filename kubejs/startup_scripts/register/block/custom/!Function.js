let customBlockDefs = []

function defineCustomBlock(id, blockClass, properties) {
	let newId = id.includes(":") ? id : `${global.namespace}:${id}`

	customBlockDefs.push({
		id: newId,
		blockClass: blockClass,
		props: properties
	})
}

StartupEvents.registry("block", (event) => {
	customBlockDefs.forEach((entry) => {
		event.createCustom(entry.id, () => {
			let props = entry.props()
			return new entry.blockClass(props)
		})
	})
})

StartupEvents.registry("item", (event) => {
	customBlockDefs.forEach((entry) => {
		event.createCustom(entry.id, () => {
			let getBlockId = Block.getBlock(entry.id)
			return new $BlockItem(getBlockId, new $Item$Properties())
		})
	})
})