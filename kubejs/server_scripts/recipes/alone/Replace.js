ServerEvents.recipes((event) => {
	event.replaceInput({}, "#forge:stripped_logs", "#minecraft:logs")
	event.replaceInput({}, "minecraft:copper_ingot", "#forge:ingots/copper")
	event.replaceInput({}, "create:powdered_obsidian", "#forge:dusts/obsidian")
	event.replaceInput({}, "create:andesite_alloy", "#forge:ingots/andesite_alloy")
	event.replaceOutput({}, "create:andesite_alloy", "ue_addons:andesite_alloy_ingot")
})