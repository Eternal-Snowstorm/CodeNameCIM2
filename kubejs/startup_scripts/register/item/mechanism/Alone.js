StartupEvents.registry("item", (event) => {
	function addItem(name, type) {
		let item = type
			? event.create(`${global.namespace}:${name}`, type)
			: event.create(`${global.namespace}:${name}`)
		return item
	}

	// 生铁构件
	addItem("pigiron_mechanism")
		.texture(`${global.namespace}:item/mechanism/complete/pigiron`)
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
		.tag(`create:mechanisms/pigiron`)

	addItem("incomplete_pigiron_mechanism", "create:sequenced_assembly")
		.texture(`${global.namespace}:item/mechanism/incomplete/pigiron`)
		.tag("create:incomplete_mechanisms")

	addItem("incomplete_nuclear_mechanism", "create:sequenced_assembly")
		.texture(`${global.namespace}:item/mechanism/incomplete/nuclear`)
		.tag("create:incomplete_mechanisms")
})