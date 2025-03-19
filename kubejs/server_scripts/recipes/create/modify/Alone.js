ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	kubejs.shaped("create:empty_blaze_burner", [
		"ABA",
		"A A",
		"CCC"
	], {
		A: "#forge:plates/iron",
		B: "ue_addons:iron_mechanism",
		C: "#forge:netherrack"
	}).id("create:crafting/kinetics/empty_blaze_burner")

	kubejs.shaped("create:blaze_burner", [
		"ABA",
		"ADA",
		"CCC"
	], {
		A: "#forge:plates/iron",
		B: "ue_addons:iron_mechanism",
		C: "#forge:netherrack",
		D: "tconstruct:blaze_head"
	}).id("create:crafting/kinetics/blaze_burner")
})