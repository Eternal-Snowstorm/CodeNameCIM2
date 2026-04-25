ServerEvents.recipes((event) => {
	let removeRecipeIds = [
		"mekanism:processing/gold/shard/from_crystal",
		"mekanism:processing/gold/slurry/dirty/from_raw_ore",
		"mekanism:processing/gold/slurry/dirty/from_raw_block",
		"mekanism:processing/gold/slurry/dirty/from_ore",
		"mekanism:processing/gold/slurry/clean",
		"mekanism:processing/gold/crystal/from_slurry",
		"tconstruct:compat/create/andesite_alloy_iron",
		"tconstruct:compat/create/andesite_alloy_zinc"
	]
	removeRecipeIds.forEach((id) => {
		event.remove({
			id: id
		})
	})
	let removeRecipeExtraIds = [
		"copper",
		"iron",
		"gold",
		"tin",
		"lead",
		"silver",
		"nickel",
		"aluminum",
		"uranium",
		"osmium",
		"zinc",
		"desh",
		"cobalt",
		"constantan",
		"ostrum",
		"electrum",
		"platinum",
		"platinum",
		"steel",
		"calorite",
		"tungsten"
	]
	removeRecipeExtraIds.forEach((id) => {
		event.remove(
			{
				id: `thermal_extra:machine/nitratic_igniter/raw_${id}`
			})
		event.remove({
			id: `thermal_extra:machine/crucible/raw_${id}_from_chunk`
		})
		event.remove({
			id: `thermal_extra:machine/crucible/raw_${id}`
		})
		event.remove({
			id: `thermal_extra:machine/endothermic_dehydrator/raw_${id}`
		})
		event.remove({
			id: `thermal_extra:crafting/${id}_rod`
		})
		event.remove({
			id: `thermal_extra:machine/chiller/raw_${id}`
		})
		event.remove({
			id: `thermal_extra:compat/machine/chiller/raw_${id}`
		})
		event.remove({
			id: `thermal_extra:compat/machine/endothermic_dehydrator/raw_${id}`
		})
		event.remove({
			id: `immersiveengineering:crafting/raw_hammercrushing_${id}`
		})
		event.remove({
			id: `immersiveengineering:crafting/hammercrushing_${id}`
		})
		event.remove({
			id: `immersiveengineering:crafting/plate_${id}_hammering`
		})
		event.remove({
			id: `immersiveengineering:crafting/stick_${id}`
		})
		event.remove({
			id: `ad_astra:${id}_rod`
		})
	})
	event.remove([
		{
			type: "create:splashing",
			input: "#create:crushed_raw_materials"
		}, {
			type: "minecraft:crafting_shaped",
			input: "#forge:ingots",
			output: "#forge:rods"
		}, {
			output: "#forge:nuggets/iron",
			type: "minecraft:smelting"
		}, {
			output: "#forge:nuggets/steel",
			type: "minecraft:smelting"
		}, {
			output: "#forge:nuggets/osmium",
			type: "minecraft:smelting"
		}, {
			output: "#forge:nuggets/refined_obsidian",
			type: "minecraft:smelting"
		}
	])
	CmiMetalRegistry.getAll().forEach((material) => {
		let metal = material.getId().toString()
		event.remove([
			{
				type: "minecraft:crafting_shaped",
				output: `#forge:gears/${metal}`
			},
			{
				type: "mekanism:enriching",
				input: `#forge:raw_materials/${metal}`
			},
			{
				type: "mekanism:enriching",
				input: `#forge:ores/${metal}`
			},
			{
				type: "mekanism:enriching",
				input: `#forge:storage_blocks/raw_${metal}`
			},
			{
				type: "tconstruct:melting",
				input: `#forge:ingots/${metal}`
			},
			{
				type: "tconstruct:melting",
				input: `#forge:nuggets/${metal}`,
			},
			{
				type: "tconstruct:melting",
				input: `#forge:storage_blocks/${metal}`,
			},
			{
				type: "tconstruct:melting",
				input: `#forge:plates/${metal}`,
			},
			{
				type: "tconstruct:melting",
				input: `#forge:dusts/${metal}`,
			},
			{
				type: "tconstruct:melting",
				input: `#forge:rods/${metal}`,
			},
			{
				type: "tconstruct:melting",
				input: `#forge:gears/${metal}`,
			},
			{
				type: "tconstruct:ore_melting",
				input: `#forge:raw_materials/${metal}`,
			},
			{
				type: "tconstruct:ore_melting",
				input: `#forge:storage_blocks/raw_${metal}`,
			},
			{
				type: "tconstruct:ore_melting",
				input: `#forge:ores/${metal}`
			},
			{
				type: "tconstruct:casting_table",
				output: `#forge:ingots/${metal}`,
			},
			{
				type: "tconstruct:casting_table",
				output: `#forge:nuggets/${metal}`,
			},
			{
				type: "tconstruct:casting_basin",
				output: `#forge:storage_blocks/${metal}`
			},
			{
				type: "tconstruct:casting_table",
				output: `#forge:plates/${metal}`
			},
			{
				type: "tconstruct:casting_table",
				output: `#forge:rods/${metal}`
			},
			{
				type: "tconstruct:casting_table",
				output: `#forge:gears/${metal}`
			},
			{
				type: "tconstruct:casting_table",
				output: `#forge:coins/${metal}`
			},
			{
				type: "thermal:chilling",
				output: `#forge:ingots/${metal}`
			},
			{
				type: "thermal:chilling",
				output: `#forge:plates/${metal}`
			},
			{
				type: "thermal:chilling",
				output: `#forge:rods/${metal}`
			},
			{
				type: "thermal:chilling",
				output: `#forge:gears/${metal}`
			},
			{
				type: "thermal:chilling",
				output: `#forge:coins/${metal}`
			},
			{
				type: "immersiveengineering:arc_furnace",
				output: "#forge:ingots/osmium"
			},
			{
				id: `immersiveengineering:arcfurnace/ore_${metal}`
			}
		])
	})
})