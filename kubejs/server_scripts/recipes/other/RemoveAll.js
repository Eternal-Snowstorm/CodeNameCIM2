ServerEvents.recipes((event) => {
	let removeRecipeIds = [
		"treetap:water_from_crying_obsidian"
	]
	removeRecipeIds.forEach((id) => {
		event.remove({
			id: id
		})
	})

	let removedMods = [
		"steampowered"
	]

	removedMods.forEach((mod) => {
		event.remove({
			mod: mod
		})
	})

	let removeOutput = [
		"pipez:filter_destination_tool",
		"vintageimprovements:belt_grinder",
		"createdieselgenerators:chip_wood_block",
		"steampowered:alternator",
		"steampowered:pressurized_gas_container",
		"steampowered:pressurized_steam_container",
		"#forge:ingots/steel",
		"forge:storage_blocks/steel",
		"quark:grate",
		"@torcherino",
		"tconstruct:nether_grout",
		"tconstruct:grout"
	]
	removeOutput.forEach((output) => {
		event.remove({
			output: output
		})
	})

	let removeRecipeType = [
		"vintageimprovements:laser_cutting",
		"vintageimprovements:polishing",
		"ad_astra:nasa_workbench",
		"immersiveengineering:fermenter",
		"immersiveengineering:alloy",
		"thermal_extra:nitratic_igniter_catalyst"
	]
	removeRecipeType.forEach((type) => {
		event.remove({
			type: type
		})
	})
})