ServerEvents.recipes((event) => {
	let { thermal, kubejs } = event.recipes

	// 蓝宝石
	thermal.pulverizer("thermal:sapphire_dust", [
		"#forge:gems/sapphire"
	]).energy(4000)

	kubejs.shaped("thermal:sapphire_gear", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#forge:gems/sapphire",
		B: "#forge:nuggets/iron"
	})

	// 红宝石
	thermal.pulverizer("thermal:ruby_dust", [
		"#forge:gems/ruby"
	]).energy(4000)

	kubejs.shaped("thermal:ruby_gear", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#forge:gems/ruby",
		B: "#forge:nuggets/iron"
	})
})