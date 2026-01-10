StartupEvents.registry("item", (event) => {
	function addItem(name, type) {
		let item = type
			? event.create(`${global.namespace}:${name}`, type)
			: event.create(`${global.namespace}:${name}`)
		return item
	}

	// 生铁构件
	addItem("pig_iron_mechanism")
		.texture(`${global.namespace}:item/mechanism/complete/pig_iron`)
		.food((food) => {
			food.hunger(8)
			food.saturation(1)
			food.alwaysEdible()
			food.eaten((event) => {
				let { player, item } = event

				if (!player.isCreative()) {
					item.grow(1)
				}
			})
		})
		.tag("create:mechanisms")
		.tag(`create:mechanisms/pig_iron`)

	addItem("incomplete_pig_iron_mechanism", "create:sequenced_assembly")
		.texture(`${global.namespace}:item/mechanism/incomplete/pig_iron`)
		.tag("create:incomplete_mechanisms")

	addItem("incomplete_nuclear_mechanism", "create:sequenced_assembly")
		.texture(`${global.namespace}:item/mechanism/incomplete/nuclear`)
		.tag("create:incomplete_mechanisms")
})