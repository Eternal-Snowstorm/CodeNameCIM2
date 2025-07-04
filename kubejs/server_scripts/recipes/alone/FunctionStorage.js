ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes
	const DRAWER = "#functionalstorage:drawer"

	// 紫水晶青铜
	kubejs.shaped("functionalstorage:copper_upgrade", [
		"AAA",
		"ABA",
		"AAA"
	], {
		A: "#forge:ingots/amethyst_bronze",
		B: DRAWER
	}).id("functionalstorage:copper_upgrade")

	// 生铁
	kubejs.shaped("functionalstorage:iron_downgrade", [
		"AAA",
		"ABA",
		"AAA"
	], {
		A: "#forge:ingots/pig_iron",
		B: DRAWER
	}).id("functionalstorage:iron_downgrade")

	// 玫瑰金
	kubejs.shaped("functionalstorage:gold_upgrade", [
		"AAA",
		"ABA",
		"AAA"
	], {
		A: "#forge:ingots/rose_gold",
		B: DRAWER
	}).id("functionalstorage:gold_upgrade")

	// 钢
	kubejs.shaped("functionalstorage:diamond_upgrade", [
		"ABA",
		"ACA",
		"ABA"
	], {
		A: "#forge:gems/diamond",
		B: "#forge:plates/steel",
		C: DRAWER
	}).id("functionalstorage:diamond_upgrade")
})