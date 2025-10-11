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

	// 航天构件
	event.get("cmi:tier_1_aviation_mechanism")
		.add("cmi:tier_1_aviation_mechanism")

	event.get("cmi:tier_2_aviation_mechanism")
		.add("cmi:tier_2_aviation_mechanism")

	event.get("cmi:tier_3_aviation_mechanism")
		.add("cmi:tier_3_aviation_mechanism")

	event.get("cmi:tier_4_aviation_mechanism")
		.add("cmi:tier_4_aviation_mechanism")

	// 榨糖原料
	event.get("cmi:sugar_raw_material")
		.add("minecraft:sugar_cane")
		.add("minecraft:beetroot")

	// 无限燃烧Tooltip
	event.get("minecraft:infiniburn_all")
		.add("cmi:combustion_medium_block")

	// 建筑手杖
	event.get("constructionwand:wand")
		.add("constructionwand:stone_wand")
		.add("constructionwand:iron_wand")
		.add("constructionwand:diamond_wand")
		.add("constructionwand:infinity_wand")

	// 抽屉
	event.get("functionalstorage:drawer")
		.add("functionalstorage:fluid_1")
		.add("functionalstorage:fluid_2")
		.add("functionalstorage:fluid_4")
		.add("functionalstorage:compacting_drawer")
		.add("functionalstorage:simple_compacting_drawer")
		.add("functionalstorage:ender_drawer")

	// 流体抽屉
	event.get("functionalstorage:fluid_drawer")
		.add("functionalstorage:fluid_1")
		.add("functionalstorage:fluid_2")
		.add("functionalstorage:fluid_4")

	// 机器核心
	event.get("cmi:multiblock_machine_controller")
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
	event.get("cmi:liquid_output")
		.add("deepdrilling:sludge_pump")
		.add("deepdrilling:sludge_bucket")

	// 泥炭生成
	event.get("cmi:peat_gen")
		.add("cmi:peat_block")
		.add("cmi:peat")

	// 特殊矿石
	event.get("cmi:special_ores")
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

	// 大型锅炉燃料
	event.get("cmi:large_boiler_fuel")
		.add("#forge:coal_coke")
		.add("#forge:gems/diamond")

	// 锤子
	event.get("forge:hammer")
		.add("thermal_extra:signalum_hammer")
		.add("thermal_extra:lumium_hammer")
		.add("thermal_extra:enderium_hammer")
		.add("thermal_extra:soul_infused_hammer")
		.add("thermal_extra:shellite_hammer")
		.add("thermal_extra:twinite_hammer")
		.add("thermal_extra:dragonsteel_hammer")
		.add("thermal_extra:abyssal_hammer")
		.add("immersiveengineering:hammer")
		.add("tconstruct:sledge_hammer")
		.add("tconstruct:vein_hammer")

	// 农夫乐事刀子
	event.get("farmersdelight:tools/knives")
		.add("#forge:tools/knives")
		.add("tconstruct:dagger")

	event.get("minecraft:pickaxes")
		.add("#forge:tools/paxels")

	event.get("minecraft:hoes")
		.add("tconstruct:mattock")

	event.get("forge:tools/knives")
		.add("tconstruct:dagger")

	event.get("cmi:tables")
		.add("#forge:workbenches")
		.add("tconstruct:tinkers_anvil")
		.add("tconstruct:scorched_anvil")
		.add("tconstruct:part_builder")
		.add("tconstruct:tinker_station")
		.add("tconstruct:modifier_worktable")

	event.get("cmi:steelmaking_raw_materials")
		.add("minecraft:calcite")
		.add("create:limestone")

	event.get("cmi:nether_crops")
		.add("minecraft:nether_sprouts")
		.add("minecraft:nether_wart")
		.add("minecraft:weeping_vines")
		.add("minecraft:twisting_vines")
		.add("mynethersdelight:crimson_fungus_colony")
		.add("mynethersdelight:warped_fungus_colony")
		.add("mynethersdelight:powder_cannon")

	event.get("cmi:item_container")
		.add("#forge:chests")
		.add("#forge:barrels")

	event.get("cmi:fluid_tanks")
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

	event.get("cmi:batteries")
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
		.add("#forge:ingots/andesite_alloy")
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

	event.get("vintageimprovements:curving_heads")
		.add("mekanism:pellet_plutonium")
		.add("mekanism:pellet_antimatter")

	event.get("thermal:crafting/casts")
		.add("thermalconstruct:chiller_gear_cast")
		.add("thermalconstruct:chiller_coin_cast")

	event.get("tconstruct:casts")
		.add("thermal:chiller_ingot_cast")
		.add("thermal_extra:chiller_plate_cast")
		.add("thermal:chiller_rod_cast")

	event.get("tconstruct:casts/multi_use")
		.add("thermal:chiller_ingot_cast")
		.add("thermal_extra:chiller_plate_cast")
		.add("thermal:chiller_rod_cast")

	event.get("tconstruct:casts/multi_use/ingot")
		.add("thermal:chiller_ingot_cast")

	event.get("tconstruct:casts/multi_use/plate")
		.add("thermal_extra:chiller_plate_cast")

	event.get("tconstruct:casts/multi_use/rod")
		.add("thermal:chiller_rod_cast")

	event.get("forge:salt")
		.add("ratatouille:salt")
		.add("cmi:nacl")

	event.get("forge:dusts/salt")
		.add("ratatouille:salt")
		.add("cmi:nacl")

	event.get("forge:ingots/andesite")
		.add("create:andesite_alloy")

	// 催生晶体
	event.get("cmi:crystals")
		.add("minecraft:amethyst_shard")
		.add("minecraft:quartz")
		.add("ae2:certus_quartz_crystal")
		.add("tconstruct:earth_slime_crystal")
		.add("tconstruct:sky_slime_crystal")
		.add("tconstruct:ichor_slime_crystal")
		.add("tconstruct:ender_slime_crystal")

	event.get("forge:dusts/niter")
		.add("immersiveengineering:dust_saltpeter")

	event.get("mekanism:crystals/gold")
		.remove("mekanism:crystal_gold")

	event.get("mekanism:crystals")
		.remove("mekanism:crystal_gold")

	event.add("forge:stripped_logs")
		.add("thermal:stripped_rubberwood_log")

	event.get("create:blaze_burner_fuel/special")
		.add("tconstruct:blazing_blood_bucket")

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
		"nickel",
		"platinum"
	]
	crushedMaterialGroup.forEach((material) => {
		event.get(`create:crushed_raw_materials/${material}`)
			.add(`create:crushed_raw_${material}`)
	})

	function splitTag(tag) {
		let tagList = []
		let splitedTag = tag.split("/")
		tagList.push(splitedTag[0])
		for (let i = 1; i < splitedTag.length; i++) {
			tagList.push(tagList[i - 1] + "/" + splitedTag[i])
		}
		return tagList
	}

	function advancedAdd(tags, target) {
		function tempAddTag(tag) {
			if (tag.includes("/")) {
				let tagList = splitTag(tag)
				tagList.forEach((singleTag) => {
					this.add(singleTag, target)
				})
			} else this.add(tag, target)
		}
		let addTag = tempAddTag.bind(this)
		if (typeof tags == "string") {
			addTag(tags)
		} else {
			tags.forEach((tag) => {
				addTag(tag)
			})
		}
	}

	event.get("forge:storage_blocks/etrium")
		.add("ad_astra:etrium_block")

	let types = [
		"ingot",
		"nugget",
		"plate",
		"rod"
	]

	types.forEach((metal) => {
		event.get(`forge:${metal}s/etrium`)
			.add(`ad_astra:etrium_${metal}`)

		event.get(`forge:${metal}s`)
			.add(`ad_astra:etrium_${metal}`)
	})

	// 构件
	event.get("create:mechanisms/precision")
		.add("create:precision_mechanism")

	event.get("create:mechanisms/redstone")
		.add("vintageimprovements:redstone_module")

	event.get("create:mechanisms/nuclear")
		.add("cmi:nuclear_mechanism")
})


//When you want a block to use your tier, remove the "<mod_name>:needs_<material>_tool" tag if one excist and add the tag you made previusly
ServerEvents.tags("block", (event) => {
	// event.remove("minecraft:needs_stone_tool", "minecraft:iron_ore");
	// event.add("minecraft:needs_bronze_tool", "minecraft:iron_ore");
	// event.remove("minecraft:needs_stone_tool", "minecraft:iron_block");
	// event.add("minecraft:needs_bronze_tool", "minecraft:iron_block");
	// event.remove("minecraft:needs_stone_tool", "minecraft:raw_iron_block")
	// event.add("minecraft:needs_bronze_tool", "minecraft:raw_iron_block");

	event.get("cmi:needs_bronze_tool")
		.add("cmi:test_block")

	event.get("minecraft:mineable/pickaxe")
		.add("cmi:test_block")
})