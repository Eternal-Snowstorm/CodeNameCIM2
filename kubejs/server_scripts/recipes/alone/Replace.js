ServerEvents.recipes((event) => {

	global.dyeColorGroup.forEach((dye) => {
		event.replaceInput({}, `minecraft:${dye}_dye`, `#forge:dyes/${dye}`)
	})

	let inputs = [
		["minecraft:copper_ingot", "#forge:ingots/copper"],
		["create:powdered_obsidian", "#forge:dusts/obsidian"],
		["create:andesite_alloy", "#forge:ingots/andesite_alloy"],
		["mekanism:salt", "#forge:dusts/salt"],
		["ratatouille:salt", "#forge:dusts/salt"],
		["create:cogwheel", "#create:cogwheel"],
		["create:large_cogwheel", "#create:large_cogwheel"]
	]
	inputs.forEach(([from, to]) => {
		// 同步遍历所有配方
		event.forEachRecipe({}, (recipe) => {
			try {
				recipe.replaceInput(from, to)
			} catch (error) {
				console.error(`替换出错: ${from} => ${to}`)
				console.error(error)
			}
		})
	})

	event.replaceInput({
		mod: "ad_astra"
	}, "ad_astra:steel_rod", "#forge:rods/steel")

	event.replaceInput({
		mod: "ad_astra"
	}, "ad_astra:iron_rod", "#forge:rods/iron")
})