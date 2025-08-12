ServerEvents.recipes((event) => {
	event.replaceInput({}, "minecraft:copper_ingot", "#forge:ingots/copper")
	event.replaceInput({}, "create:powdered_obsidian", "#forge:dusts/obsidian")
	event.replaceInput({}, "create:andesite_alloy", "#forge:ingots/andesite_alloy")

	event.replaceInput({}, "mekanism:salt", "#forge:dusts/salt")
	event.replaceInput({}, "ratatouille:salt", "#forge:dusts/salt")
})