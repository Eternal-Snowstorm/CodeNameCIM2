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
	kubejs.shaped("mekanism:ultimate_fluid_tank", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: "#forge:alloys/ultimate",
		B: "#forge:ingots/iron",
		C: "mekanism:elite_fluid_tank"
	})

	// 基础化学品储罐
	kubejs.shaped("mekanism:basic_chemical_tank", [
		"AOA",
		"O O",
		"AOA"
	], {
		A: "#mekanism:alloys/basic",
		O: "#forge:ingots/osmium"
	})

	// 高级化学品储罐
	kubejs.shaped("mekanism:advanced_chemical_tank", [
		"AOA",
		"OPO",
		"AOA"
	], {
		A: "#mekanism:alloys/infused",
		O: "#forge:ingots/osmium",
		P: "mekanism:basic_chemical_tank"
	})

	// 精英化学品储罐
	kubejs.shaped("mekanism:elite_chemical_tank", [
		"AOA",
		"OPO",
		"AOA"
	], {
		A: "#mekanism:alloys/reinforced",
		O: "#forge:ingots/osmium",
		P: "mekanism:advanced_chemical_tank"
	})

	// 终极化学品储罐
	kubejs.shaped("mekanism:ultimate_chemical_tank", [
		"AOA",
		"OPO",
		"AOA"
	], {
		A: "#mekanism:alloys/atomic",
		O: "#forge:ingots/osmium",
		P: "mekanism:elite_chemical_tank"
	})

	// 基础能量立方
	kubejs.shaped("mekanism:basic_energy_cube", [
		"AEA",
		"IPI",
		"AEA"
	], {
		A: "#mekanism:alloys/basic",
		E: "mekanism:energy_tablet",
		I: "#forge:ingots/iron",
		P: "mekanism:steel_casing"
	})

	// 高级能量立方
	kubejs.shaped("mekanism:advanced_energy_cube", [
		"AEA",
		"IPI",
		"AEA"
	], {
		A: "#mekanism:alloys/infused",
		E: "mekanism:energy_tablet",
		I: "#forge:ingots/osmium",
		P: "mekanism:basic_energy_cube"
	})

	// 精英能量立方
	kubejs.shaped("mekanism:elite_energy_cube", [
		"AEA",
		"IPI",
		"AEA"
	], {
		A: "#mekanism:alloys/reinforced",
		E: "mekanism:energy_tablet",
		I: "#forge:ingots/gold",
		P: "mekanism:advanced_energy_cube"
	})

	// 终极能量立方
	kubejs.shaped("mekanism:ultimate_energy_cube", [
		"AEA",
		"IPI",
		"AEA"
	], {
		A: "#mekanism:alloys/atomic",
		E: "mekanism:energy_tablet",
		I: "#forge:gems/diamond",
		P: "mekanism:elite_energy_cube"
	})
})