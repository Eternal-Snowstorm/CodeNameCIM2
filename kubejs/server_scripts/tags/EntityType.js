// priority: 11
ServerEvents.tags("entity_type", (event) => {
	event.get("forge:bosses")
		.add("minecraft:iron_golem")
})