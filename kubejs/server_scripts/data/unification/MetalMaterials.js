// priority: 9
ServerEvents.highPriorityData((event) => {
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
			let result = findHighPriorityItem(registeredItems, type, material)

			addMetalUnification(`${material}_${type}`, tag, result)
		})
	})

	metals.forEach((metal) => {
		let material = String(metal.getId())
		let tag = `#forge:raw_materials/${material}`
		let result = findHighPriorityItem(registeredItems, "raw_material", material)

		addMetalUnification(`raw_${material}`, tag, result)
	})

	metals.forEach((metal) => {
		let material = String(metal.getId())
		let tag = `#forge:storage_blocks/raw_${material}`
		let result = findHighPriorityItem(
			registeredItems,
			"raw_storage_block",
			material
		)

		addMetalUnification(`raw_${material}_block`, tag, result)
	})

	/**
	 * Forge 的物品注册表在首次服务器资源重载前已经可用
	 * 这里只收集参与金属优先级选择的命名空间, 避免扫描后续逻辑无关的物品
	 */
	function collectRegisteredMetalItems() {
		let allowedNamespaces = new Set(namespacePriority)
		let itemsByNamespace = {}

		namespacePriority.forEach((namespace) => {
			itemsByNamespace[namespace] = new Set()
		})

		ForgeRegistries.ITEMS.getKeys()
			.toArray()
			.forEach((key) => {
				let namespace = String(key.getNamespace())

				if (allowedNamespaces.has(namespace)) {
					itemsByNamespace[namespace].add(String(key.getPath()))
				}
			})

		return itemsByNamespace
	}

	/**
	 * 
	 * @param {Set<string>} itemsByNamespace 
	 * @param {string} type 
	 * @param {string} material 
	 * @returns 
	 */
	function findHighPriorityItem(itemsByNamespace, type, material) {
		let candidatePaths = getCandidatePaths(type, material)

		for (let namespace of namespacePriority) {
			let registeredPaths = itemsByNamespace[namespace]

			if (registeredPaths === null) {
				continue
			}

			for (let path of candidatePaths) {
				if (registeredPaths.has(path)) {
					return `${namespace}:${path}`
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

	/**
	 * 
	 * @param {string} name 
	 * @param {InputItem_} tag 
	 * @param {inputItem_} result 
	 * @returns 
	 */
	function addMetalUnification(name, tag, result) {
		if (result === null) {
			return
		}

		event.addJson(`oei:replacements/${name}.json`, {
			matchItems: [tag],
			resultItems: result
		})
	}
})