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
		let builder = event.create(`${global.namespace}:${name}_cell`)

		builder.color(0, color)
		builder.modelJson(cellModel())
		builder.tag(`${global.namespace}:cells`)

		return builder
	}

	// 空白硬盘
	addCellItem("empty", 0xFFFFFF)
	// 航空硬盘
	addCellItem("tier_1_aviation", 0xBA52FF)
	addCellItem("tier_2_aviation", 0x00FFFF)
	addCellItem("tier_3_aviation", 0xFCD720)
	addCellItem("tier_4_aviation", 0xFFC4F2)
	// 完整硬盘
	addCellItem("tier_1_aviation_complete", 0xBA52FF)
	addCellItem("tier_2_aviation_complete", 0x00FFFF)
	addCellItem("tier_3_aviation_complete", 0xFCD720)
	addCellItem("tier_4_aviation_complete", 0xFFC4F2)
})