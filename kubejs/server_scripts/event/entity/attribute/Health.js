EntityEvents.spawned((event) => {
	let { entity } = event

	/**
	 * @type {{ [key: Special.EntityType]: number }}
	 */
	let customHealth = {
		"minecraft:ender_dragon": 2000
	}
	let value = customHealth[entity.getType()]

	if (!entity.isLiving()) {
		return
	}
	if (!value) {
		return
	}

	AttributeOverrideHelper.setMaxHealth(entity, value)
})