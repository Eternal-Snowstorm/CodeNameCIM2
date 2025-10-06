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

	addCellItem("tier_1_aviation", 0xBA52FF)
	addCellItem("tier_2_aviation", 0x00FFFF)
	addCellItem("tier_3_aviation", 0xFCD720)
	addCellItem("tier_4_aviation", 0xFFC4F2)
})