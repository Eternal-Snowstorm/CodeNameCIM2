ServerEvents.recipes((event) => {
	// event.recipeStream({
	// 	type: "createbigcannons:melting"
	// }).forEach((recipe) => {
	// 	let tag = recipe.json.get("ingredients").get(0).get("tag")
	// 	let result = recipe.json.get("results").get(0)
	// 	let fluid = result.get("fluid")
	// 	let amount = result.get("amount")
	// 	let time = Math.floor(recipe.json.get("processingTime") / 5)

	// 	event.custom({
	// 		"type": "tconstruct:melting",
	// 		"ingredient": { "tag": tag },
	// 		"result": { "amount": amount, "fluid": fluid },
	// 		"temperature": 1000,
	// 		"time": time
	// 	}).id(`${recipe.getId()}_kubejs_tconstruct_melting`)
	// })

	// event.custom({
	// 	// 定义安山合金在炉子里融化
	// 	"type": "tconstruct:melting",
	// 	"ingredient": {
	// 		// 所需物品
	// 		"item": "cmi:andesite_alloy_ingot"
	// 	},
	// 	"result": {
	// 		// 结果
	// 		"amount": 810,//900mb
	// 		//  你定义的流体
	// 		"fluid": "createbigcannons:molten_nethersteel"
	// 	},
	// 	"temperature": 800,//温度 800是常规燃料 1000是岩浆 1500是烈焰血
	// 	"time": 100//时间 100是25秒
	// }).id("kubejs:test")
})