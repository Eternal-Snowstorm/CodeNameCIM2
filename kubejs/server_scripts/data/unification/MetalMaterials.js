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

			if (Ingredient.isNotNull(tag)) {
				addMetalUnification(`${material}_${type}`, tag)
			}
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
		let ids = Ingredient.of(tag).getItemIds()

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
})
