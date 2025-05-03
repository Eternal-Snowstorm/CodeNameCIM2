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
		"ad_astra:recipes/iron_rod",
		"create:milling/compat/ae2/sky_stone_block",
		"ae2:blasting/sky_stone_block",
		"create:sequenced_assembly/precision_mechanism"
	]
	removeRecipeIds.forEach((id) => {
		event.remove({ id: id })
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
		event.remove({ id: `thermal_extra:machine/nitratic_igniter/raw_${id}` })
		event.remove({ id: `thermal_extra:machine/crucible/raw_${id}_from_chunk` })
		event.remove({ id: `thermal_extra:machine/crucible/raw_${id}` })
		event.remove({ id: `thermal_extra:machine/endothermic_dehydrator/raw_${id}` })
		event.remove({ id: `thermal_extra:machine/chiller/raw_${id}` })
		event.remove({ id: `thermal_extra:compat/machine/chiller/raw_${id}` })
		event.remove({ id: `thermal_extra:compat/machine/endothermic_dehydrator/raw_${id}` })
	})

	let removeItemOutputRecipes = [
		"ae2:black_lumen_paint_ball",
		"ae2:white_lumen_paint_ball",
		"ae2:red_lumen_paint_ball",
		"ae2:blue_lumen_paint_ball",
		"ae2:green_lumen_paint_ball",
		"pipez:filter_destination_tool",

	]
	removeItemOutputRecipes.forEach((item) => {
		event.remove({ output: item })
	})

	let removeTagsRecipes = [

	]
	removeTagsRecipes.forEach((tag) => {
		event.remove({ output: tag })
	})

	let removeItemInputRecipes = [
	]
	removeItemInputRecipes.forEach((item) => {
		event.remove({ input: item })
	})

	let removeRecipeType = [

	]
	removeRecipeType.forEach((type) => {
		event.remove({ type: type })
	})

	let removeMetalRecipe = [
		"andesite_alloy",
		"aluminum",
		"brass",
		"bronze",
		"cobalt",
		"constantan",
		"copper",
		"electrum",
		"gold",
		"invar",
		"iron",
		"lead",
		"lumium",
		"netherite",
		"nickel",
		"osmium",
		"signalum",
		"silver",
		"steel",
		"tin",
		"zinc",
		"rose_gold",
		"hepatizon",
		"manyullyn",
		"amethyst_bronze",
		"vanadium",
		"chromium",
		"enderium",
		"platinum",
		"uranium",
		"desh",
		"ostrum",
		"calorite",
		"prismalium",
		"melodium",
		"stellarium",
		"soul_infused",
		"shellite",
		"twinite",
		"dragonsteel",
		"abyssal",
		"stainless_steel",
		"slimesteel",
		"pig_iron",
		"cinderslime",
		"queens_slime"
	]
	removeMetalRecipe.forEach((metal) => {
		event.remove([{
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
			input: `#forge:dusts/${metal}`
		}, {
			type: "minecraft:blasting",
			input: `#forge:dusts/${metal}`
		}, {
			type: "thermal:smelter",
			input: `#forge:dusts/${metal}`,
			output: `#forge:ingots/${metal}`
		}, {
			type: "thermal:smelter",
			input: `#forge:plates/${metal}`,
			output: `#forge:ingots/${metal}`
		}])
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
})