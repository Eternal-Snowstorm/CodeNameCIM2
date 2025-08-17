// ServerEvents.highPriorityData((event) => {
// 	let materialType = [
// 		"ingots",
// 		"plates",
// 		"nuggets",
// 		"storage_blocks",
// 		"gears",
// 		"dusts",
// 		"rods"
// 	]
// 	materialType.forEach((type) => {
// 		global.metalGroup.forEach((material) => {
// 			let ids = Ingredient.of(`#forge:${type}/${material}`).getItemIds()
// 			if (ids.length > 0) {
// 				event.addJson(`oei:replacements/${material}_${type}.json`, {
// 					"matchItems": [`#forge:${type}/${material}`],
// 					"resultItems": ids[0]
// 				})
// 				console.log("aaa")
// 			}
// 		})
// 	})
// })
