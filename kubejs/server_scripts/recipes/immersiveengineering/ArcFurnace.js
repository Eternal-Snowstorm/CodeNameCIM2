ServerEvents.recipes((event) => {
	// 不锈钢
	event.custom({
		"type": "immersiveengineering:arc_furnace",
		"additives": [
			{ "base_ingredient": { "tag": "forge:ingots/chromium" } },
			{ "base_ingredient": { "tag": "forge:ingots/invar" } }
		],
		"energy": 20000,
		"input": { "base_ingredient": { "tag": "forge:ingots/steel" }, "count": 2 },
		"results": [{ "base_ingredient": { "tag": "forge:ingots/stainless_steel" }, "count": 4 }],
		"slag": { "tag": "forge:slag" },
		"time": 400
	})
})