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
		"functionalstorage:void_upgrade"
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

	event.remove({
		type: "minecraft:crafting_shapeless",
		output: "#minecraft:planks"
	})

	event.remove({
		type: "minecraft:crafting_shaped",
		output: "#forge:rods"
	})

	event.remove({
		output: "#forge:ingots/metal",
		output: "#forge:storage_blocks/metal",
		output: "#forge:nuggets/metal",
		output: "#forge:plates/metal",

		type: "minecraft:crafting_shaped",
		type: "minecraft:crafting_shapeless",
		type: "create:pressing",
		type: "thermal:press"
	})
})