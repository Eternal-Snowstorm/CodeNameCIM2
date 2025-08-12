ServerEvents.recipes((event) => {
	let inputs = [
		["minecraft:copper_ingot", "#forge:ingots/copper"],
		["create:powdered_obsidian", "#forge:dusts/obsidian"],
		["create:andesite_alloy", "#forge:ingots/andesite_alloy"],
		["mekanism:salt", "#forge:dusts/salt"],
		["ratatouille:salt", "#forge:dusts/salt"]
	]
	inputs.forEach(([from, to]) => {
		// 同步遍历所有配方
		event.forEachRecipe({}, recipe => {
			try {
				recipe.replaceInput(from, to)
			} catch (error) {
				console.error(`替换出错: ${from} => ${to}`)
				console.error(error)
			}
		})
	})
})
