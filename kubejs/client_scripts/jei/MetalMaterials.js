JEIEvents.hideItems((event) => {

	let materialTypes = [
		"ingot",
		"plate",
		"nugget",
		"storage_block",
		"gear",
		"dust",
		"rod",
		"wire"
	]
	let metals = []

	CmiMetalRegistry.getAll().forEach((metal) => {
		metals.push(metal)
	})
	let registeredItems = collectRegisteredMetalItems()

	materialTypes.forEach((type) => {
		metals.forEach((metal) => {
			let material = String(metal.getId())
			let tag = `#forge:${type}s/${material}`
			let result = findLowPriorityItem(registeredItems, type, material)

			event.hide(result)
		})
	})

	metals.forEach((metal) => {
		let material = String(metal.getId())
		let tag = `#forge:raw_materials/${material}`
		let result = findLowPriorityItem(registeredItems, "raw_material", material)

		event.hide(result)
	})

	metals.forEach((metal) => {
		let material = String(metal.getId())
		let tag = `#forge:storage_blocks/raw_${material}`
		let result = findLowPriorityItem(
			registeredItems,
			"raw_storage_block",
			material
		)

		event.hide(result)
	})
	/**
	 * 
	 * @param {Set<string>} itemsByNamespace 
	 * @param {string} type 
	 * @param {string} material 
	 * @returns 
	 */
	function findLowPriorityItem(itemsByNamespace, type, material) {
		let candidatePaths = getCandidatePaths(type, material)

		for (let namespace of namespacePriority) {
			let registeredPaths = itemsByNamespace[namespace]

			if (registeredPaths === null) {
				continue
			}

			for (let path of candidatePaths) {
				if (registeredPaths.has(path)) {
					let canDelete = itemsByNamespace.delete(`${namespace}:${path}`)
					if (canDelete) {
						return itemsByNamespace
					}
				}
			}
		}

		return null
	}

	/**
	 * 
	 * @param {string} type 
	 * @param {string} material 
	 * @returns 
	 */
	function getCandidatePaths(type, material) {
		switch (type) {
			case "ingot":
				return [
					`${material}_ingot`,
					`ingot_${material}`,
					material
				]
			case "plate":
				return [
					`${material}_plate`,
					`plate_${material}`,
					`${material}_sheet`,
					`sheet_${material}`
				]
			case "storage_block":
				return [
					`${material}_block`,
					`block_${material}`,
					`block_of_${material}`,
					`storage_${material}`
				]
			case "raw_material":
				return [
					`raw_${material}`,
					`${material}_raw`
				]
			case "raw_storage_block":
				return [
					`raw_${material}_block`,
					`${material}_raw_block`,
					`raw_block_${material}`,
					`block_raw_${material}`,
					`block_of_raw_${material}`
				]
			default:
				return [
					`${material}_${type}`,
					`${type}_${material}`
				]
		}
	}
})