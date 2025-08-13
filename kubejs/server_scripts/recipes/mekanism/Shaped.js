ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes

	// 基础流体储罐
	kubejs.shaped("mekanism:basic_fluid_tank", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: "#forge:dusts/redstone",
		B: "#forge:ingots/iron",
		C: "#forge:glass"
	})

	// 高级流体储罐
	kubejs.shaped("mekanism:advanced_fluid_tank", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: "#forge:alloys/advanced",
		B: "#forge:ingots/iron",
		C: "mekanism:basic_fluid_tank"
	})

	// 精英流体储罐
	kubejs.shaped("mekanism:elite_fluid_tank", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: "#forge:alloys/elite",
		B: "#forge:ingots/iron",
		C: "mekanism:advanced_fluid_tank"
	})

	// 终极流体储罐
	kubejs.shaped("mekanism:ultimate_fluid_tank",[
		"ABA",
		"BCB",
		"ABA"
	], {
		A: "#forge:alloys/ultimate",
		B: "#forge:ingots/iron",
		C: "mekanism:elite_fluid_tank"
	})
})