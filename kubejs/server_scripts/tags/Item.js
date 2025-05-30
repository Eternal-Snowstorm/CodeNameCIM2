ServerEvents.tags("item", (event) => {
	event.get("create:mechanisms")
		.add("create:precision_mechanism")
		.add("vintageimprovements:redstone_module")
	event.get("create:incomplete_mechanisms")
		.add("create:incomplete_precision_mechanism")
		.add("vintageimprovements:incomplete_redstone_module")

	global.dyeColorGroup.forEach((color) => {
		event.get(`forge:dyes/${color}`)
			.add("cmi:colorful_mechanism")
	})

	event.get(`${global.namespace}:batteries`)
		.add("mekanism:basic_energy_cube")
		.add("mekanism:advanced_energy_cube")
		.add("mekanism:elite_energy_cube")
		.add("mekanism:ultimate_energy_cube")
		.add("mekanism:creative_energy_cube")
		.add("createaddition:modular_accumulator")
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