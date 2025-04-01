ServerEvents.recipes((event) => {
	let { create } = event.recipes

	global.mechanismList.forEach((material) => {
		create.sequenced_assembly(`ue_addons:${material}_force_exe`, [
			"ue_addons:empty_exe"
		], [
			create.deploying(`ue_addons:empty_exe`, [
				"ue_addons:empty_exe",
				`ue_addons:${material}_mechanism`
			])
		]).transitionalItem("ue_addons:empty_exe").loops(128)
	})
	create.sequenced_assembly("ue_addons:precision_force_exe", [
		"ue_addons:empty_exe"
	], [
		create.deploying("ue_addons:empty_exe", [
			"ue_addons:empty_exe",
			"create:precision_mechanism"
		])
	]).transitionalItem("ue_addons:empty_exe").loops(128)
})