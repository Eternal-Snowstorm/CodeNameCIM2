EntityEvents.spawned((event) => {
	let { entity } = event

	/**
	 * @type {{ [key: Special.EntityType]: ResourceLocation_ }}
	 */
	let customHealth = Object.freeze({
		"minecraft:iron_golem": 1024,
		"minecraft:ender_dragon": 2000
	})
	let value = customHealth[entity.getType()]

	if (!entity.isLiving()) {
		return
	}
	if (!value) {
		return
	}

	AttributeOverrideHelper.setMaxHealth(entity, value)
})