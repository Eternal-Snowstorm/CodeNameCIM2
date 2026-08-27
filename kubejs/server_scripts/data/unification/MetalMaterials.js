// priority: 9
let materialTypes = [
	"plate",
	"nugget",
	"storage_block",
	"gear",
	"dust",
	"rod",
	"wire"
]
CmiMetalRegistry.getAll().forEach((metal) => {
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

	let validUnification = unification
		.filter((entry) => {
			entry.resultItems != null && entry.resultItems !== "cmi:cmi_icon"
		})

	console.log(validUnification)
	JsonIO.writeAndCreateDirectories(`kubejs/data/oei/replacements/${material}.json`, validUnification)
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