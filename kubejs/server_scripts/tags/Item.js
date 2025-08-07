ServerEvents.tags("item", (event) => {
	event.get("create:mechanisms")
		.add("create:precision_mechanism")
		.add("vintageimprovements:redstone_module")
		.add("cmi:nuclear_mechanism")
	event.get("create:incomplete_mechanisms")
		.add("create:incomplete_precision_mechanism")
		.add("vintageimprovements:incomplete_redstone_module")
		.add("cmi:incomplete_nuclear_mechanism")

	global.dyeColorGroup.forEach((color) => {
		event.get(`forge:dyes/${color}`)
			.add("cmi:colorful_mechanism")
	})

	// 机器核心
	event.get(`${global.namespace}:multiblock_machine_controller`)
		.add("mm:large_steam_boiler")
		.add("mm:steam_ore_processor")
		.add("mm:cracker")
		.add("mm:particle_collision_machine")

	// 奶酪
	event.get("forge:cheese")
		.add("ad_astra:cheese")
		.add("tconstruct:cheese_ingot")

	// 奶酪块
	event.get("forge:cheese_block")
		.add("ad_astra:cheese_block")
		.add("tconstruct:cheese_block")

	// 淤泥产出
	event.get(`${global.namespace}:liquid_output`)
		.add("deepdrilling:sludge_pump")
		.add("deepdrilling:sludge_bucket")

	// 泥炭生成
	event.get(`${global.namespace}:peat_gen`)
		.add("cmi:peat_block")
		.add("cmi:peat")

	// 特殊矿石
	event.get(`${global.namespace}:special_ores`)
		.add("#forge:raw_materials/galena")
		.add("#forge:raw_materials/osmiridium")
		.add("#forge:raw_materials/uraninite")
		.add("#forge:raw_materials/argentite")
		.add("#forge:raw_materials/stannine")
		.add("#forge:raw_materials/veridium")
		.add("#forge:raw_materials/lateritic_nickel")
		.add("#forge:raw_materials/pyrite")
		.add("#forge:raw_materials/sphalerite")
		.add("#forge:raw_materials/variscite")

	// 农夫乐事刀子
	event.get("farmersdelight:tools/knives")
		.add("#forge:tools/knives")
		.add("tconstruct:dagger")

	event.get("forge:tools/knives")
		.add("tconstruct:dagger")

	event.get(`${global.namespace}:tables`)
		.add("#forge:workbenches")
		.add("tconstruct:tinkers_anvil")
		.add("tconstruct:scorched_anvil")
		.add("tconstruct:part_builder")
		.add("tconstruct:tinker_station")
		.add("tconstruct:modifier_worktable")

	event.get(`${global.namespace}:steelmaking_raw_materials`)
		.add("minecraft:calcite")
		.add("create:limestone")

	event.get(`${global.namespace}:nether_crops`)
		.add("minecraft:nether_sprouts")
		.add("minecraft:nether_wart")
		.add("minecraft:weeping_vines")
		.add("minecraft:twisting_vines")
		.add("mynethersdelight:crimson_fungus_colony")
		.add("mynethersdelight:warped_fungus_colony")
		.add("mynethersdelight:powder_cannon")

	event.get(`${global.namespace}:item_container`)
		.add("#forge:chests")
		.add("#forge:barrels")

	event.get(`${global.namespace}:fluid_tanks`)
		.add("create:fluid_tank")
		.add("create_connected:fluid_vessel")
		.add("railways:fuel_tank")
		.add("create:creative_fluid_tank")
		.add("create_connected:creative_fluid_vessel")
		.add("tconstruct:seared_fuel_tank")
		.add("tconstruct:seared_ingot_tank")
		.add("tconstruct:scorched_fuel_tank")
		.add("tconstruct:scorched_ingot_tank")
		.add("mekanism:basic_fluid_tank")
		.add("mekanism:advanced_fluid_tank")
		.add("mekanism:elite_fluid_tank")
		.add("mekanism:ultimate_fluid_tank")
		.add("mekanism:creative_fluid_tank")

	event.get(`${global.namespace}:batteries`)
		.add("mekanism:basic_energy_cube")
		.add("mekanism:advanced_energy_cube")
		.add("mekanism:elite_energy_cube")
		.add("mekanism:ultimate_energy_cube")
		.add("mekanism:creative_energy_cube")
		.add("createaddition:modular_accumulator")
		.add("createaddition:creative_energy")
		.add("immersiveengineering:capacitor_lv")
		.add("immersiveengineering:capacitor_mv")
		.add("immersiveengineering:capacitor_hv")
		.add("thermal:energy_cell")

	event.get("tconstruct:tinkers_anvil")
		.add("tconstruct:tinkers_anvil")
		.add("tconstruct:scorched_anvil")

	event.get("create:shaft")
		.add("create:shaft")
		.add("copycats:copycat_shaft")

	event.get("create:cogwheel")
		.add("create:cogwheel")
		.add("copycats:copycat_cogwheel")

	event.get("create:large_cogwheel")
		.add("create:large_cogwheel")
		.add("copycats:copycat_large_cogwheel")

	event.get("forge:ores")
		.add("ad_astra:moon_cheese_ore")

	event.get("forge:ores/cheese")
		.add("ad_astra:moon_cheese_ore")

	event.get("ad_astra:power_consumption_machines")
		.add("ad_astra:oxygen_distributor")
		.add("ad_astra:gravity_normalizer")
		.add("ad_astra:energizer")
		.add("ad_astra:compressor")
		.add("ad_astra:oxygen_loader")
		.add("ad_astra:fuel_refinery")
		.add("ad_astra:etrionic_blast_furnace")
		.add("ad_astra:cryo_freezer")
		.add("ad_astra:oxygen_sensor")
		.add("ad_astra:water_pump")

	event.get("functionalstorage:upgrades")
		.add("functionalstorage:copper_upgrade")
		.add("functionalstorage:gold_upgrade")
		.add("functionalstorage:diamond_upgrade")
		.add("functionalstorage:netherite_upgrade")
		.add("functionalstorage:iron_downgrade")
		.add("functionalstorage:max_storage_upgrade")
		.add("functionalstorage:collector_upgrade")
		.add("functionalstorage:puller_upgrade")
		.add("functionalstorage:pusher_upgrade")
		.add("functionalstorage:creative_vending_upgrade")
		.add("functionalstorage:void_upgrade")
		.add("functionalstorage:redstone_upgrade")

	event.get("thermal:dynamos")
		.add("thermal:dynamo_stirling")
		.add("thermal:dynamo_magmatic")
		.add("thermal:dynamo_compression")
		.add("thermal_extra:dynamo_frost")
		.add("thermal:dynamo_numismatic")
		.add("thermal:dynamo_lapidary")
		.add("thermal:dynamo_disenchantment")
		.add("thermal:dynamo_gourmand")

	event.get("thermal:machines")
		.add("thermal_extra:advanced_refinery")
		.add("thermal_extra:nitratic_igniter")
		.add("thermal_extra:fluid_mixer")
		.add("thermal_extra:component_assembly")
		.add("thermal_extra:endothermic_dehydrator")

	event.get("curios:mechanisms")
		.add("cmi:cobalt_mechanism")
		.add("cmi:photosensitive_mechanism")
		.add("cmi:nether_mechanism")

	event.get("forge:chests")
		.add("ae2:smooth_sky_stone_chest")

	event.get("forge:sand")
		.add("#minecraft:sand")

	event.get("minecraft:sand")
		.add("#forge:sand")

	event.get("tconstruct:gauge")
		.add("tconstruct:seared_fuel_gauge")
		.add("tconstruct:seared_ingot_gauge")

	event.get("forge:stone")
		.add("#forge:cobblestone")

	event.get("forge:plates")
		.add("createdeco:zinc_sheet")
		.add("createdeco:netherite_sheet")
		.add("createdeco:andesite_sheet")
		.add("createdeco:industrial_iron_sheet")

	event.get("forge:ingots")
		.add("createdeco:industrial_iron_ingot")
		.add("#forge:ingots/prismalium")
		.add("#forge:ingots/melodium")
		.add("#forge:ingots/stellarium")

	event.get("forge:nuggets")
		.add("createdeco:industrial_iron_nugget")

	event.get("forge:storage_blocks")
		.add("create:industrial_iron_block")

	event.get("forge:ingots/andesite_alloy")
		.add("create:andesite_alloy")

	event.get("forge:plates/andesite_alloy")
		.add("vintageimprovements:andesite_sheet")
		.add("createdeco:andesite_sheet")

	event.get("forge:plates/zinc")
		.add("createdeco:zinc_sheet")

	event.get("forge:plates/netherite")
		.add("createdeco:netherite_sheet")

	event.get("forge:plates/industrial_iron")
		.add("createdeco:industrial_iron_sheet")

	event.get("forge:storage_blocks/industrial_iron")
		.add("create:industrial_iron_block")

	event.get("forge:ingots/industrial_iron")
		.add("createdeco:industrial_iron_ingot")

	event.get("forge:nuggets/industrial_iron")
		.add("createdeco:industrial_iron_nugget")

	event.get("forge:plates/polyolefin")
		.add("thermal_extra:polyolefin_plate")

	event.get("forge:plates/andesite")
		.add("#forge:plates/andesite_alloy")

	event.get("forge:rods")
		.add("immersiveengineering:stick_steel")
		.add("immersiveengineering:stick_aluminum")

	event.get("forge:plates/hdpe")
		.add("mekanism:hdpe_sheet")

	event.get("minecraft:pickaxes")
		.add("#forge:tools/paxels")

	event.get("vintageimprovements:curving_heads")
		.add("mekanism:pellet_plutonium")
		.add("mekanism:pellet_antimatter")

	event.get("forge:salt")
		.add("ratatouille:salt")
		.add("cmi:nacl")

	event.get("forge:dusts/salt")
		.add("ratatouille:salt")
		.add("cmi:nacl")

	let crushedMaterialGroup = [
		"iron",
		"gold",
		"copper",
		"zinc",
		"osmium",
		"silver",
		"tin",
		"lead",
		"aluminum",
		"uranium",
		"nickel"
	]
	crushedMaterialGroup.forEach((material) => {
		event.get(`create:crushed_raw_materials/${material}`)
			.add(`create:crushed_raw_${material}`)
	})
})