ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 锇砖瓦
	kubejs.shaped("ue_addons:osmium_tile", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#forge:plates/osmium",
		B: "#forge:ingots/vanadium"
	})
})