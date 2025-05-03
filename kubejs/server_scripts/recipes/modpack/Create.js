ServerEvents.recipes((event) => {
	let { create } = event.recipes

	create.compacting("ue_addons:dense_sturdy_sheet", [
		"4x #forge:plates/obsidian"
	]).heated()
})