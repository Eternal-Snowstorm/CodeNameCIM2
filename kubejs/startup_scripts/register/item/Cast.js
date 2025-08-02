StartupEvents.registry("item", (event) => {
	function addCastItem(name) {
		let registerGoldCastItem =
			event.create(`${global.namespace}:${name}_cast`)
				.texture(`${global.namespace}:item/cast/${name}/golden`)
				.tag("tconstruct:casts")
				.tag("tconstruct:casts/gold")
				.tag("tconstruct:casts/multi_use")
				.tag(`tconstruct:casts/multi_use/${name}`)

		let registerSandCastItem =
			event.create(`${global.namespace}:${name}_sand_cast`)
				.texture(`${global.namespace}:item/cast/${name}/sand`)
				.tag("tconstruct:casts")
				.tag("tconstruct:casts/sand")
				.tag("tconstruct:casts/single_use")
				.tag(`tconstruct:casts/single_use/${name}`)

		let registerRedSandCastItem =
			event.create(`${global.namespace}:${name}_red_sand_cast`)
				.texture(`${global.namespace}:item/cast/${name}/red_sand`)
				.tag("tconstruct:casts")
				.tag("tconstruct:casts/red_sand")
				.tag("tconstruct:casts/single_use")
				.tag(`tconstruct:casts/single_use/${name}`)

		return {
			gold: registerGoldCastItem,
			sand: registerSandCastItem,
			sand: registerRedSandCastItem
		}
	}

	addCastItem("mechanism")
	// 单独修改Example
	// addCastItem("mechanism").gold.texture("xxxxxx")
})