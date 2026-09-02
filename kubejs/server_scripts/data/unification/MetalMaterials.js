// priority: 9
ServerEvents.afterRecipes((event) => {
	let materialTypes = [
		"plate",
		"nugget",
		"storage_block",
		"gear",
		"dust",
		"rod",
		"wire"
	]
	CmiMetal.getAll().forEach((metal) => {
		let material = String(metal.getId())
		let ingotTag = `#forge:ingots/${material}`
		let ingotResult = getHighPriorityItem(ingotTag)

		let unification = [
			{
				matchItems: [ingotTag],
				resultItems: ingotResult
			}
		]

		materialTypes.forEach((type) => {
			let tag = `#forge:${type}s/${material}`
			let result = getHighPriorityItem(tag)

			unification.push({
				matchItems: [tag],
				resultItems: result
			})
		})

		let rawTag = `#forge:raw_materials/${material}`
		let rawResult = getHighPriorityItem(rawTag)

		unification.push({
			matchItems: [rawTag],
			resultItems: rawResult
		})

		let blockTag = `#forge:storage_blocks/raw_${material}`
		let blockResult = getHighPriorityItem(blockTag)

		unification.push({
			matchItems: [blockTag],
			resultItems: blockResult
		})

		let validUnification = unification.filter((entry) => {
			return entry.resultItems != null && entry.resultItems !== "cmi:cmi_icon"
		})

		let $Files = Java.loadClass("java.nio.file.Files")
		let $Paths = Java.loadClass("java.nio.file.Paths")
		let filePath = $Paths.get(`kubejs/data/oei/replacements/${material}.json`)

		$Files.createDirectories(filePath.getParent())
		$Files.writeString(filePath, JsonIO.toPrettyString(JsonIO.of(validUnification)))

		console.log(`[OEI] Wrote ${filePath} with ${validUnification.length} replacement(s)`)
	})
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