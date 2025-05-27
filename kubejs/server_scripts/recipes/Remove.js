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
		"tconstruct:smeltery/seared/chute_retextured",
		"tconstruct:__default",
		"functionalstorage:void_upgrade",
		"create:milling/compat/ae2/sky_stone_block",
		"ae2:blasting/sky_stone_block",
		"create:sequenced_assembly/precision_mechanism"
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
	})

	let removeItemOutputRecipes = [
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
		"portality:generator"
	]
	removeItemOutputRecipes.forEach((item) => {
		event.remove({
			output: item
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
		"vintageimprovements:laser_cutting"
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
				type: "thermal:press",
				output: `#forge:plates/${metal}`
			}, {
				type: "thermal:pulverizer",
				output: `#forge:dusts/${metal}`
			}, {
				type: "createaddition:rolling",
				output: `#forge:rods/${metal}`
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
			}
		])
	})

	event.remove({
		type: "minecraft:crafting_shapeless",
		output: "#minecraft:planks"
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
})