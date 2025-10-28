ServerEvents.highPriorityData((event) => {
	addUnification("uranium", [
		"#forge:ores/uranium"
	], "alexscaves:radrock_uranium_ore")

	addUnification("lead_ore", [
		"thermal:lead_ore",
		"mekanism:lead_ore",
		"immersiveengineering:ore_lead"
	], "thermal:lead_ore")

	addUnification("deepslate_lead_ore", [
		"thermal:deepslate_lead_ore",
		"mekanism:deepslate_lead_ore",
		"immersiveengineering:deepslate_ore_lead"
	], "thermal:deepslate_lead_ore")

	addUnification("nickel_ore", [
		"thermal:nickel_ore",
		"immersiveengineering:ore_nickel"
	], "thermal:nickel_ore")

	addUnification("deepslate_nickel_ore", [
		"thermal:deepslate_nickel_ore",
		"immersiveengineering:deepslate_ore_nickel"
	], "thermal:deepslate_nickel_ore")

	addUnification("silver_ore", [
		"thermal:silver_ore",
		"immersiveengineering:ore_silver"
	], "thermal:silver_ore")

	addUnification("deepslate_silver_ore", [
		"thermal:deepslate_silver_ore",
		"immersiveengineering:deepslate_ore_silver"
	], "thermal:deepslate_silver_ore")

	addUnification("tin_ore", [
		"thermal:tin_ore",
		"mekanism:tin_ore"
	], "thermal:tin_ore")

	addUnification("deepslate_tin_ore", [
		"thermal:deepslate_tin_ore",
		"mekanism:deepslate_tin_ore"
	], "thermal:deepslate_tin_ore")

	function addUnification(name, match, block) {
		let blockUnification = {
			matchBlocks: match,
			resultBlocks: block
		}
		let itemUnification = {
			matchItems: match,
			resultItems: block
		}
		event.addJson(`oeb:replacements/${name}.json`, blockUnification)
		event.addJson(`oei:replacements/${name}.json`, itemUnification)
		return this
	}
})