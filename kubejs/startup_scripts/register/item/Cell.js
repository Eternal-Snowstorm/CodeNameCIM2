StartupEvents.registry("item", (event) => {
	function cellModel() {
		return {
			"parent": "minecraft:item/generated",
			"textures": {
				"layer0": "cmi:item/material/cell/cell_inside",
				"layer1": "cmi:item/material/cell/cell_casing"
			}
		}
	}

	function addCellItem(name, color) {
		return event.create(`${global.namespace}:${name}_cell`)
			.color(0, color)
			.modelJson(cellModel())
			.tag(`${global.namespace}:cells`)
	}

	addCellItem("tier_1_aviation", 0x5C585D)
	addCellItem("tier_2_aviation", 0x4A5253)
	addCellItem("tier_3_aviation", 0xCD9360)
	addCellItem("tier_4_aviation", 0x723E49)
})