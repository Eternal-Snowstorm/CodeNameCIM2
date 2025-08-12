ServerEvents.recipes((event) => {
	event.replaceInput({}, "minecraft:copper_ingot", "#forge:ingots/copper")
	event.replaceInput({}, "create:powdered_obsidian", "#forge:dusts/obsidian")
	event.replaceInput({}, "create:andesite_alloy", "#forge:ingots/andesite_alloy")

	event.replaceInput({}, "mekanism:basic_control_circuit", "cmi:basic_mekanism_mechanism")
	event.replaceInput({}, "mekanism:advanced_control_circuit", "cmi:advanced_mekanism_mechanism")
	event.replaceInput({}, "mekanism:elite_control_circuit", "cmi:elite_mekanism_mechanism")
	event.replaceInput({}, "mekanism:ultimate_control_circuit", "cmi:ultimate_mekanism_mechanism")

	event.replaceInput({}, "ae2:logic_processor", "cmi:smart_mechanism")
	event.replaceInput({}, "ae2:calculation_processor", "cmi:smart_mechanism")
	event.replaceInput({}, "ae2:engineering_processor", "cmi:smart_mechanism")

	event.replaceInput({ type: "minecraft:crafting_shaped" }, "mekanism:pellet_plutonium", "cmi:nuclear_mechanism")
	event.replaceInput({ type: "minecraft:crafting_shaped" }, "mekanism:pellet_polonium", "cmi:nuclear_mechanism")
	event.replaceInput({ type: "minecraft:crafting_shaped" }, "mekanism:pellet_antimatter", "cmi:antimatter_mechanism")

	event.replaceInput({}, "mekanism:salt", "#forge:dusts/salt")
	event.replaceInput({}, "ratatouille:salt", "#forge:dusts/salt")
})