EntityEvents.spawned((event) => {
	let { entity } = event

	let healthMap = {}

	/**
	 * @param {Special.EntityType} id
	 * @param {number} value
	 */
	function setCustomHealth(id, value) {
		return healthMap[id] = value
	}

	// 注册
	setCustomHealth("minecraft:ender_dragon", 2000)

	if (!entity.isLiving()) {
		return
	}

	let value = healthMap[entity.getType()]

	if (!value) {
		return
	}

	AttributeOverrideHelper.setMaxHealth(entity, value)
})