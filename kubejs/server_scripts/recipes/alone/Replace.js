ServerEvents.recipes((event) => {
	event.replaceInput({}, "#forge:stripped_logs", "#minecraft:logs")
	event.replaceInput({}, "minecraft:copper_ingot", "#forge:ingots/copper")
	event.replaceInput({}, "create:powdered_obsidian", "#forge:dusts/obsidian")
	event.replaceInput({}, "create:andesite_alloy", "#forge:ingots/andesite_alloy")

	event.replaceInput({}, "mekanism:basic_control_circuit", "cmi:basic_mekanism_mechanism")
	event.replaceInput({}, "mekanism:advanced_control_circuit", "cmi:advanced_mekanism_mechanism")
	event.replaceInput({}, "mekanism:elite_control_circuit", "cmi:elite_mekanism_mechanism")
	event.replaceInput({}, "mekanism:ultimate_control_circuit", "cmi:ultimate_mekanism_mechanism")
	
	event.replaceInput({}, "mekanism:salt", "#forge:salt")
	event.replaceInput({}, "ratatouille:salt", "#forge:salt")
	event.replaceInput({}, "cmi:nacl", "#forge:salt")
})