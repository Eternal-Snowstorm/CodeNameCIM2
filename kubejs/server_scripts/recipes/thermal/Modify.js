ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 锯片
	kubejs.shaped("thermal:saw_blade", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#forge:plates/iron",
		B: "#forge:ingots/copper"
	}).id("thermal:saw_blade")

	// 钻头
	kubejs.shaped("thermal:drill_head", [
		"AA ",
		"A A",
		" AA"
	], {
		A: "#forge:plates/iron",
	}).id("thermal:drill_head")
})