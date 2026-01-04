TConJSEvents.modifierRegistry((event) => {
	// 因果截断
	addModifier("causal_truncation", (builder) => {
		builder.getMeleeDamage((
			view,
			modifierLevel,
			context,
			baseDamage,
			finalDamage
		) => {
			let { livingTarget } = context

			if (!livingTarget || !livingTarget.isAlive()) {
				return finalDamage
			}

			// 封顶5级
			let level = Math.min(modifierLevel, 5)

			// 默认25%, 每级+1%, 概率最多75%
			let chance = Math.min(0.25 + modifierLevel * 0.01, 0.75)
			if (Math.random() > chance) {
				return finalDamage
			}

			let currentHealth = livingTarget.getHealth()
			if (currentHealth <= 0) {
				return finalDamage
			}

			let damage = currentHealth * 0.33

			// 防止真斩杀
			if (damage >= currentHealth) {
				damage = currentHealth - 1
			}

			// 覆盖最终伤害
			return damage
		})
	})

	// 狂乱
	addEmptyModifier("frenzy")

	/**
	 * 
	 * @param {string} name 
	 * @param {Internal.Consumer_<Internal.ModifierBuilder>} handler 
	 * @returns 
	 */
	function addModifier(name, handler) {
		event.createNew(`${global.namespace}:${name}`, handler)
	}

	/**
	 * 
	 * @param {string} name 
	 */
	function addEmptyModifier(name){
		event.createEmpty(`${global.namespace}:${name}`)
	}
})