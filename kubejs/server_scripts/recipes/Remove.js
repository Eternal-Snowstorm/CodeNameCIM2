ServerEvents.recipes((event) => {
	let removeRecipeIds = [
		"thermal:machines/chiller/chiller_water_to_ice",
		"ae2:entropy/cool/water_ice",
		"create:compacting/ice",
		"thermal:machines/press/unpacking/press_packed_ice_unpacking",
		"thermal:machines/press/unpacking/press_blue_ice_unpacking",
		"thermal:machines/press/packing3x3/press_packed_ice_packing",
		"thermal:machines/press/packing3x3/press_blue_ice_packing",
		"minecraft:packed_ice",
		"minecraft:blue_ice",
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
		"vintageimprovements:sequenced_assembly/redstone_module",
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
		"thermal:gourmand_cheese",
		"immersiveengineering:blastfurnace/steel",
		"immersiveengineering:arcfurnace/steel",
		"create:crushing/netherrack",
		"vintageimprovements:craft/vanadium_ingot_to_nuggets",
		"create:crushing/obsidian",
		"createdieselgenerators:crafting/large_diesel_engine",
		"createdieselgenerators:crafting/diesel_engine",
		"createdieselgenerators:crafting/huge_diesel_engine",
		"createdieselgenerators:crafting/huge_diesel_engine",
		"create:crafting/kinetics/flywheel",
		"mekanism:processing/lategame/antimatter/from_pellet",
		"tconstruct:smeltery/melting/fuel/blaze",
		"tconstruct:smeltery/melting/fuel/lava",
		"createaddition:crafting/capacitor_2",
		"mekanism:processing/lategame/antimatter_pellet/from_gas",
		"tconstruct:common/basalt_blast_furnace",
		"tconstruct:common/glass/vanilla/daylight_detector",
		"create:crafting/palettes/scorchia",
		"tconstruct:smeltery/alloys/molten_enderium",
		"thermal_extra:machine/fluid_mixer/polyolefin",
		"createaddition:compacting/seed_oil",
		"vintageimprovements:pressurizing/copper_sulfate",
		"mekanism:evaporating/brine",
		"immersiveengineering:blueprint/electron_tube",
		"cmi:creative_mechanism_flash_drive",
		"create:crafting/materials/andesite_alloy",
		"create:crafting/materials/andesite_alloy_from_zinc",
		"tconstruct:compat/create/andesite_alloy_iron",
		"tconstruct:compat/create/andesite_alloy_zinc",
		"mekanism:processing/gold/slurry/dirty/from_raw_ore",
		"mekanism:processing/gold/slurry/dirty/from_raw_block",
		"mekanism:processing/gold/slurry/dirty/from_ore",
		"mekanism:processing/gold/slurry/clean",
		"mynethersdelight:crafting/tnt_alt",
		"engineered_schematics:crafting/recycle_schematic",
		"thermal_extra:sticky_ball_to_paper",
		"mekanism:paper",
		"immersiveengineering:crafting/paper_from_sawdust",
		"minecraft:paper",
		"minecraft:sugar_from_sugar_cane",
		"create:milling/sugar_cane",
		"farmersdelight:cutting/sugar_cane_alt",
		"mekanism:processing/gold/crystal/from_slurry",
		"mekanism:processing/gold/shard/from_crystal",
		"immersiveengineering:refinery/biodiesel",
		"createdieselgenerators:basin_fermenting/fermentable",
		"createdieselgenerators:basin_fermenting/fermented_spider_eye",
		"createaddition:mixing/bioethanol",
		"thermal:compat/mekanism/smelter_mek_osmium_ore",
		"create:milling/andesite"
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
		"ad_astra:tier_4_rocket",
		"steampowered:alternator",
		"steampowered:pressurized_gas_container",
		"steampowered:pressurized_steam_container",
		"mekanism:tier_installer/basic",
		"mekanism:tier_installer/advanced",
		"mekanism:tier_installer/elite",
		"mekanism:tier_installer/ultimate"
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
		"zinc",
		"desh",
		"cobalt",
		"constantan",
		"ostrum",
		"electrum",
		"platinum",
		"platinum",
		"steel",
		"calorite"
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

	let removeItemInputRecipes = [
	]
	removeItemInputRecipes.forEach((item) => {
		event.remove({
			input: item
		})
	})

	let removeRecipeType = [
		"vintageimprovements:laser_cutting",
		"ad_astra:nasa_workbench",
		"immersiveengineering:fermenter",
		"immersiveengineering:alloy"
	]
	removeRecipeType.forEach((type) => {
		event.remove({
			type: type
		})
	})

	event.remove({
		type: "minecraft:crafting_shaped",
		input: "#forge:ingots",
		output: "#forge:rods"
	})

	event.remove({
		type: "thermal:smelter",
		input: "#forge:dusts",
	})

	event.remove([
		{
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

	event.remove({
		mod: "steampowered"
	})

	global.metalGroup.forEach((metal) => {
		event.remove([
			{
				type: "minecraft:crafting_shaped",
				output: `#forge:gears/${metal}`
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
				input: `#forge:ingots/${metal}`
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
				input: `#forge:ores/${metal}`
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
			}, {
				type: "tconstruct:casting_table",
				output: `#forge:coins/${metal}`
			}, {
				type: "thermal:chilling",
				output: `#forge:ingots/${metal}`
			}, {
				type: "thermal:chilling",
				output: `#forge:plates/${metal}`
			}, {
				type: "thermal:chilling",
				output: `#forge:rods/${metal}`
			}, {
				type: "thermal:chilling",
				output: `#forge:gears/${metal}`
			}, {
				type: "thermal:chilling",
				output: `#forge:coins/${metal}`
			}, {
				type: "immersiveengineering:arc_furnace",
				output: "#forge:ingots/osmium"
			}
		])
	})
})