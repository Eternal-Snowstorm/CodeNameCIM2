StartupEvents.registry("item", (event) => {
	addColorNuggetMaterials("andesite_alloy", 0xA9AFA1)
	addColorPlateMaterials("cinderslime", 0xF47B78)

	function addColorIngotMaterials(name, color) {
		event.create(`${global.namespace}:${name}_ingot`)
			.color(color)
			.texture(`${global.namespace}:item/material/color/ingot`)
			.tag(`forge:ingots/${name}`)
			.tag("forge:ingots")
	}

	function addColorNuggetMaterials(name, color) {
		event.create(`${global.namespace}:${name}_nugget`)
			.color(color)
			.texture(`${global.namespace}:item/material/color/nugget`)
			.tag(`forge:nuggets/${name}`)
			.tag("forge:nuggets")
	}

	function addColorPlateMaterials(name, color) {
		event.create(`${global.namespace}:${name}_plate`)
			.color(color)
			.texture(`${global.namespace}:item/material/color/plate`)
			.tag(`forge:plates/${name}`)
			.tag("forge:plates")
	}

	function addColorCrystalMaterials(name, color) {
		event.create(`${global.namespace}:${name}_crystal`)
			.color(color)
			.texture(`${global.namespace}:item/material/color/crystal`)
			.tag(`forge:gems/${name}`)
			.tag("forge:gems")
	}

	function addAloneIngotMaterials(name) {
		event.create(`${global.namespace}:${name}_ingot`)
			.texture(`${global.namespace}:item/material/alone/${name}/ingot`)
			.tag(`forge:ingots/${name}`)
			.tag("forge:ingots")
	}

	function addAlonePlateMaterials(name) {
		event.create(`${global.namespace}:${name}_plate`)
			.texture(`${global.namespace}:item/material/alone/${name}/plate`)
			.tag(`forge:plates/${name}`)
			.tag("forge:plates")
	}

	function addAloneCrystalMaterials(name) {
		event.create(`${global.namespace}:${name}_crystal`)
			.texture(`${global.namespace}:item/material/alone/${name}/crystal`)
			.tag(`forge:gems/${name}`)
			.tag("forge:gems")
	}
})

StartupEvents.registry("block", (event) => {



	function addColorBlockMaterials(name, color) {
		event.create(`${global.namespace}:${name}_block`)
			.color(color)
			.texture(`${global.namespace}:item/material/color/block`)
			.tag(`forge:storage_blocks/${name}`)
			.tag("forge:storage_blocks")
	}

})
