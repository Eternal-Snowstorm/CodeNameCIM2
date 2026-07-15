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

	materialTypes.forEach((type) => {
		CmiMetalRegistry.getAll().forEach((metal) => {
			let material = metal.getId()
			let tag = `#forge:${type}s/${material}`

			addMetalUnification(`${material}_${type}`, tag)
		})
	})

	CmiMetalRegistry.getAll().forEach((metal) => {
		let material = metal.getId()
		let tag = `#forge:raw_materials/${material}`

		addMetalUnification(`raw_${material}`, tag)
	})

	CmiMetalRegistry.getAll().forEach((metal) => {
		let material = metal.getId()
		let tag = `#forge:storage_blocks/raw_${material}`

		addMetalUnification(`raw_${material}_block`, tag)
	})

	function addMetalUnification(name, tag) {
		let ids = getValidItemIds(tag)

		if (ids.size <= 0) {
			return
		}

		let result = getHighPriorityItem(ids)

		if (result == null || result === "minecraft:barrier") {
			return
		}

		addJsonFile(name, addUnification(tag, result))
	}

	function addUnification(match, item) {
		return {
			matchItems: [match],
			resultItems: item
		}
	}

	function addJsonFile(name, unification) {
		return event.addJson(`oei:replacements/${name}.json`, unification)
	}

	function getValidItemIds(tag) {
		let validIds = new Set()

		if (!Ingredient.isNotNull(tag)) {
			return validIds
		}

		Ingredient.of(tag).getItemIds().forEach((id) => {
			let itemId = id.toString()

			if (itemId !== "minecraft:barrier") {
				validIds.add(itemId)
			}
		})

		return validIds
	}
})
