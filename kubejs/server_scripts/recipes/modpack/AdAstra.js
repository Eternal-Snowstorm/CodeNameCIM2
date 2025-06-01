ServerEvents.recipes((event) => {
	let { ad_astra } = event.recipes

	event.custom({
		"type": "ad_astra:alloying",
		"cookingtime": 100,
		"energy": 20,
		"ingredients": [
			{
				"tag": "forge:storage_blocks/iron"
			},
			{
				"tag": "forge:coal_coke"
			}
		],
		"result": {
			"count": 1,
			"id": "tconstruct:steel_block"
		}
	})
})