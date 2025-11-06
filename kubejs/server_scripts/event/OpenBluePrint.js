ItemEvents.rightClicked((event) => {
	let { item, player } = event

	if (item.id === "create:empty_schematic") {
		player.swing()

		if (!player.persistentData.blueprint_open) {
			player.persistentData.blueprint_open = false
		}
		player.persistentData.blueprint_open = !player.persistentData.blueprint_open

		if (player.persistentData.blueprint_open) {
			let texture = "cmi:block/ore_node"
			player.paint({
				blueprint: {
					type: "atlas_texture",
					alignX: "center",
					alignY: "center",
					w: 1099 / 3,
					h: 845 / 3,
					texture: texture,
					draw: "always"
				},
				background_dim: {
					type: "rectangle",
					x: 0,
					y: 0,
					w: "$screenW",
					h: "$screenH",
					color: "#80000000",
					draw: "always"
				}
			})
		} else {
			player.paint({
				background_dim: {
					remove: true
				},
				blueprint: {
					remove: true
				}
			})
		}
	}
})