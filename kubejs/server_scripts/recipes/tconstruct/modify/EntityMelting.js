ServerEvents.recipes((event) => {
	event.custom({
		"type": "tconstruct:entity_melting",
		"damage": 2,
		"entity": { "type": "minecraft:player" },
		"result": { "fluid": "ue_addons:blood", "amount": 20 }
	})
})