ServerEvents.recipes((event) => {
	let removeRecipeIds = [
		"create:mixing/andesite_alloy_from_zinc",
		"create:mixing/andesite_alloy",
		"create:item_application/andesite_casing_from_wood",
		"create:item_application/copper_casing_from_wood",
		"create:item_application/brass_casing_from_wood",
		"vintageimprovements:grinder_polishing/rose_quartz",
		"tconstruct:smeltery/seared/drain_retextured",
		"tconstruct:smeltery/seared/duct_retextured",
		"createdieselgenerators:crafting/chip_wood_beam",
		"tconstruct:smeltery/seared/chute_retextured",
		"tconstruct:__default",
		"functionalstorage:void_upgrade",
		"immersiveengineering:crafting/treated_wood_horizontal",
		"create:milling/compat/ae2/sky_stone_block",
		"ae2:blasting/sky_stone_block",
		"ae2:blasting/silicon_from_certus_quartz_dust",
		"ae2:smelting/silicon_from_certus_quartz_dust",
		"create:sequenced_assembly/precision_mechanism",
		"immersiveengineering:crafting/gunpowder_from_dusts",
		"thermal:gunpowder_4",
		"ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals",
		"minecraft:stick_from_bamboo_item",
		"immersiveengineering:crafting/coal_coke_to_coke",
		"immersiveengineering:blastfurnace/steel_block",
		"mekanism:control_circuit/basic",
		"mekanism:control_circuit/advanced",
		"mekanism:control_circuit/elite",
		"mekanism:control_circuit/ultimate",
		"thermal:smelting/cured_rubber_from_smelting",
		"tconstruct:common/cheese_block_from_ingot",
		"tconstruct:smeltery/casting/cheese_block",
		"tconstruct:smeltery/casting/cheese_ingot_gold_cast",
		"tconstruct:smeltery/casting/cheese_ingot_sand_cast",
		"tconstruct:common/cheese_ingot_from_block",
		"thermal:gourmand_cheese_ingot",
		"thermal:gourmand_cheese"
	]
	removeRecipeIds.forEach((id) => {
		event.remove({
			id: id
		})
	})

	let removeItemOutputRecipes = [
		"createdieselgenerators:chip_wood_block",
		"pipez:filter_destination_tool",
		"create:schedule",
		"create:track_signal",
		"create:track_observer",
		"create:controls",
		"thermal:fluid_cell_frame",
		"thermal:machine_frame",
		"thermal:device_potion_diffuser",
		"thermal:device_nullifier",
		"thermal:device_xp_condenser",
		"thermal:device_collector",
		"thermal:redstone_servo",
		"thermal:device_composter",
		"thermal:device_fisher",
		"thermal:rf_coil",
		"thermal:dynamo_stirling",
		"thermal:dynamo_compression",
		"thermal:dynamo_disenchantment",
		"thermal:dynamo_magmatic",
		"thermal:dynamo_gourmand",
		"thermal:machine_crafter",
		"thermal:machine_bottler",
		"thermal:machine_crucible",
		"thermal:machine_press",
		"thermal:machine_centrifuge",
		"thermal:machine_furnace",
		"thermal:machine_pyrolyzer",
		"thermal:machine_pulverizer",
		"thermal:machine_sawmill",
		"thermal:dynamo_numismatic",
		"thermal:dynamo_lapidary",
		"thermal_extra:dynamo_frost",
		"immersiveengineering:dynamo",
		"immersiveengineering:thermoelectric_generator",
		"immersiveengineering:generator",
		"portality:generator",
		"#thermal:machines",
		"thermal:device_tree_extractor",
		"thermal:device_fisher",
		"thermal:device_composter",
		"thermal:device_water_gen",
		"thermal:device_rock_gen",
		"thermal:device_collector",
		"thermal:device_xp_condenser",
		"thermal:device_nullifier",
		"thermal:device_potion_diffuser",
		"mekanism:advanced_control_circuit",
		"mekanism:elite_control_circuit",
		"ad_astra:tier_1_rocket",
		"ad_astra:tier_2_rocket",
		"ad_astra:tier_3_rocket",
		"ad_astra:tier_4_rocket"
	]
	removeItemOutputRecipes.forEach((item) => {
		event.remove({
			output: item
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
		"zinc"
	]
	removeRecipeExtraIds.forEach((id) => {
		event.remove({
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
			id: `thermal_extra:machine/chiller/raw_${id}`
		})
		event.remove({
			id: `thermal_extra:compat/machine/chiller/raw_${id}`
		})
		event.remove({
			id: `thermal_extra:compat/machine/endothermic_dehydrator/raw_${id}`
		})
		event.remove({
			id: `immersiveengineering:blastfurnace/steel`
		})
		event.remove({
			id: `immersiveengineering:arcfurnace/steel`
		})
		event.remove({
			id: `create:crushing/netherrack`
		})
		event.remove({
			id: `create:crushing/obsidian`
		})
	})

	let removeItemInputRecipes = [
	]
	removeItemInputRecipes.forEach((item) => {
		event.remove({
			input: item
		})
	})

	let removeRecipeType = [
		"vintageimprovements:laser_cutting",
		"ad_astra:nasa_workbench"
	]
	removeRecipeType.forEach((type) => {
		event.remove({
			type: type
		})
	})

	global.metalGroup.forEach((metal) => {
		event.remove([
			{
				type: "minecraft:crafting_shapeless",
				output: `#forge:ingots/${metal}`
			}, {
				type: "minecraft:crafting_shaped",
				output: `#forge:ingots/${metal}`
			}, {
				type: "minecraft:crafting_shapeless",
				output: `#forge:nuggets/${metal}`
			}, {
				type: "minecraft:crafting_shapeless",
				output: `#forge:storage_blocks/${metal}`
			}, {
				type: "minecraft:crafting_shaped",
				output: `#forge:storage_blocks/${metal}`
			}, {
				type: "minecraft:crafting_shapeless",
				output: `#forge:raw_materials/${metal}`
			}, {
				type: "minecraft:crafting_shapeless",
				output: `#forge:storage_blocks/raw_${metal}`
			}, {
				type: "minecraft:crafting_shaped",
				output: `#forge:storage_blocks/raw_${metal}`
			}, {
				type: "create:pressing",
				output: `#forge:plates/${metal}`
			}, {
				type: "createaddition:rolling",
				output: `#forge:rods/${metal}`
			}, {
				type: "thermal:pulverizer",
				output: `#forge:dusts/${metal}`
			}, {
				type: "thermal:press",
				output: `#forge:plates/${metal}`
			}, {
				type: "thermal:press",
				output: `#forge:rods/${metal}`
			}, {
				type: "thermal:press",
				output: `#forge:gears/${metal}`
			}, {
				type: "minecraft:crafting_shaped",
				output: `#forge:gears/${metal}`
			}, {
				type: "minecraft:smelting",
				output: `#forge:ingots/${metal}`
			}, {
				type: "minecraft:blasting",
				output: `#forge:ingots/${metal}`
			}, {
				type: "thermal:smelter",
				input: `#forge:dusts/${metal}`,
				output: `#forge:ingots/${metal}`
			}, {
				type: "thermal:smelter",
				input: `#forge:plates/${metal}`,
				output: `#forge:ingots/${metal}`
			}, {
				type: "thermal:smelter",
				input: `#forge:ores/${metal}`,
				output: `#forge:ingots/${metal}`
			}, {
				type: "thermal:smelter",
				input: `#forge:raw_materials/${metal}`,
				output: `#forge:ingots/${metal}`
			}, {
				type: "create:crushing",
				output: `#create:crushed_raw_materials/${metal}`
			}, {
				type: "create:crushing",
				output: `#forge:raw_materials/${metal}`
			}, {
				type: "immersiveengineering:arc_furnace",
				input: `#forge:ores/${metal}`
			}, {
				type: "immersiveengineering:arc_furnace",
				input: `#forge:raw_materials/${metal}`
			}, {
				type: "immersiveengineering:arc_furnace",
				input: `#forge:storage_blocks/raw_${metal}`
			}, {
				type: "immersiveengineering:arc_furnace",
				input: `#forge:dusts/${metal}`
			}, {
				type: "immersiveengineering:crusher",
				output: `#forge:dusts/${metal}`
			}, {
				type: "immersiveengineering:metal_press",
				output: `#forge:plates/${metal}`
			}, {
				type: "immersiveengineering:metal_press",
				output: `#forge:rods/${metal}`
			}, {
				type: "immersiveengineering:metal_press",
				output: `#forge:gears/${metal}`
			}, {
				type: "mekanism:crushing",
				output: `#forge:dusts/${metal}`
			}, {
				type: "mekanism:enriching",
				input: `#forge:raw_materials/${metal}`
			}, {
				type: "mekanism:enriching",
				input: `#forge:ores/${metal}`
			}, {
				type: "mekanism:enriching",
				input: `#forge:storage_blocks/raw_${metal}`
			}, {
				type: "tconstruct:melting",
				input: `#forge:ingots/${metal}`,
			}, {
				type: "tconstruct:melting",
				input: `#forge:nuggets/${metal}`,
			}, {
				type: "tconstruct:melting",
				input: `#forge:storage_blocks/${metal}`,
			}, {
				type: "tconstruct:melting",
				input: `#forge:plates/${metal}`,
			}, {
				type: "tconstruct:melting",
				input: `#forge:dusts/${metal}`,
			}, {
				type: "tconstruct:melting",
				input: `#forge:rods/${metal}`,
			}, {
				type: "tconstruct:melting",
				input: `#forge:gears/${metal}`,
			}, {
				type: "tconstruct:ore_melting",
				input: `#forge:raw_materials/${metal}`,
			}, {
				type: "tconstruct:ore_melting",
				input: `#forge:storage_blocks/raw_${metal}`,
			}, {
				type: "tconstruct:ore_melting",
				input: `#forge:ores/${metal}`,
			}, {
				type: "tconstruct:casting_table",
				output: `#forge:ingots/${metal}`,
			}, {
				type: "tconstruct:casting_table",
				output: `#forge:nuggets/${metal}`,
			}, {
				type: "tconstruct:casting_basin",
				output: `#forge:storage_blocks/${metal}`
			}, {
				type: "tconstruct:casting_table",
				output: `#forge:plates/${metal}`
			}, {
				type: "tconstruct:casting_table",
				output: `#forge:rods/${metal}`
			}, {
				type: "tconstruct:casting_table",
				output: `#forge:gears/${metal}`
			}
		])
	})

	event.remove([
		{
			type: "minecraft:crafting_shapeless",
			input: "#minecraft:logs",
			output: "#minecraft:planks"
		}, {
			type: "create:cutting",
			input: "#minecraft:logs",
			output: "#minecraft:planks"
		}, {
			type: "create:cutting",
			output: "#forge:stripped_logs"
		}
	])

	event.remove({
		type: "minecraft:crafting_shaped",
		input: "#forge:ingots",
		output: "#forge:rods"
	})

	event.remove({
		type: "thermal:smelter",
		input: "#forge:dusts",
	})
})