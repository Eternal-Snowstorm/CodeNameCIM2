StartupEvents.registry("item", (event) => {
	function addItem(name) {
		return event.create(`${global.namespace}:${name}`)
	}
	// mek未完成电路板
	addItem("incomplete_advanced_control_circuit")
		.texture(`${global.namespace}:item/material/advanced_control_circuit`)

	addItem("incomplete_elite_control_circuit")
		.texture(`${global.namespace}:item/material/elite_control_circuit`)

	addItem("incomplete_ultimate_control_circuit")
		.texture(`${global.namespace}:item/material/ultimate_control_circuit`)

	// 扫描器(半成品)
	addItem("incomplete_scanner")
		.texture("scannable:item/scanner")

	// 扫描模块(半成品)
	addItem("incomplete_scanning_module")
		.texture("scannable:item/blank_module")

	// 电子管(半成品)
	addItem("incomplete_electron_tube")
		.texture(`${global.namespace}:item/material/electron_tube`)

	// 升级组件
	addItem("incomplete_upgrade_augment_1")
		.texture(`${global.namespace}:item/material/upgrade/1`)

	addItem("incomplete_upgrade_augment_2")
		.texture(`${global.namespace}:item/material/upgrade/2`)

	addItem("incomplete_upgrade_augment_3")
		.texture(`${global.namespace}:item/material/upgrade/3`)

	// 航天硬盘(半成品)
	addItem("incomplete_aviation_cell")
		.texture(`${global.namespace}:item/material/incomplete_aviation_cell`)
})