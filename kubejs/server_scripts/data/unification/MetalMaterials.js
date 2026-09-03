function generateOEIReplacements() {
	let materialTypes = [
		"plate",
		"nugget",
		"storage_block",
		"gear",
		"dust",
		"rod",
		"wire"
	]

	let $Files = Java.loadClass("java.nio.file.Files")
	let $Paths = Java.loadClass("java.nio.file.Paths")

	let written = 0
	let cleaned = 0
	let errors = []

	CmiMetal.getAll().forEach((metal) => {
		try {
			let material = String(metal.getId())
			let ingotTag = `#forge:ingots/${material}`
			let ingotResult = getHighPriorityItem(ingotTag)
			let unification = []

			if (Ingredient.of(ingotTag).getItemIds().length > 1) {
				unification.push({
					matchItems: [ingotTag],
					resultItems: ingotResult
				})
			}

			materialTypes.forEach((type) => {
				let tag = `#forge:${type}s/${material}`
				let result = getHighPriorityItem(tag)

				if (Ingredient.of(tag).getItemIds().length > 1) {
					unification.push({
						matchItems: [tag],
						resultItems: result
					})
				}
			})

			let rawTag = `#forge:raw_materials/${material}`
			let rawResult = getHighPriorityItem(rawTag)
			if (Ingredient.of(rawTag).getItemIds().length > 1) {
				unification.push({
					matchItems: [rawTag],
					resultItems: rawResult
				})
			}

			let blockTag = `#forge:storage_blocks/raw_${material}`
			let blockResult = getHighPriorityItem(blockTag)

			if (Ingredient.of(blockTag).getItemIds().length > 1) {
				unification.push({
					matchItems: [blockTag],
					resultItems: blockResult
				})
			}

			let validUnification = unification.filter((entry) => {
				return entry.resultItems != null && entry.resultItems !== "cmi:cmi_icon"
			})

			let filePath = $Paths.get(`kubejs/data/oei/replacements/${material}.json`)

			if (validUnification.length > 0) {
				$Files.createDirectories(filePath.getParent())
				$Files.writeString(filePath, JsonIO.toPrettyString(JsonIO.of(validUnification)))
				console.log(`[OEI] Wrote ${filePath} with ${validUnification.length} replacement(s)`)
				written++
			} else if ($Files.exists(filePath)) {
				$Files.deleteIfExists(filePath)
				console.log(`[OEI] Removed stale ${filePath} (no valid replacement)`)
				cleaned++
			}
		} catch (err) {
			errors.push(`${metal.getId()}: ${err}`)
		}
	})

}

PlayerEvents.chat((event) => {
	let raw = event.message
	if (raw == null) {
		return
	}

	let msg = raw.trim()
	if (msg !== "-unify") {
		return
	}

	event.cancel()
})

/**
 * 
 * @param {string} name 
 * @param {InputItem_} tag 
 * @param {inputItem_} result 
 * @returns {Internal.JsonObject_}
 */
function addMetalUnification(tag, result) {
	if (result === null) {
		return
	}
	return {
		"matchItems": [tag],
		"resultItems": result
	}
}
