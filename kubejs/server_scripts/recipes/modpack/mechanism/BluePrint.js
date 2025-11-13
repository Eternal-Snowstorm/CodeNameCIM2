ServerEvents.recipes((event) => {
	let { immersiveengineering } = event.recipes

	addBasementRecipe("cmi:tier_1_aviation_mechanism_basement", [
		"#forge:plates/tungsten_steel",
		"#forge:circuits/basic",
		"#forge:plates/etrium"
	])

	addBasementRecipe("cmi:basic_mekanism_mechanism_basement", [
		"#forge:plates/stainless_steel",
		"#forge:circuits/basic",
		"#forge:plates/signalum"
	])

	addBasementRecipe("cmi:ender_mechanism_basement", [
		"#forge:plates/obsidian",
		"#forge:dusts/sapphire",
		"#forge:dusts/ender_pearl"
	])

	addBasementRecipe("cmi:tier_2_aviation_mechanism_basement", [
		"#forge:circuits/advanced",
		"#forge:plates/desh",
		"#forge:plates/etrium"
	])

	addBasementRecipe("cmi:advanced_mekanism_mechanism_basement", [
		"#forge:plates/stainless_steel",
		"#forge:circuits/advanced",
		"#forge:plates/twinite"
	])

	addBasementRecipe("cmi:tier_3_aviation_mechanism_basement", [
		"#forge:plates/ostrum",
		"#forge:plates/etrium",
		"#forge:circuits/elite"
	])

	addBasementRecipe("cmi:elite_mekanism_mechanism_basement", [
		"#forge:plates/stainless_steel",
		"#forge:circuits/elite",
		"#forge:plates/dragonsteel"
	])

	addBasementRecipe("cmi:nuclear_mechanism_basement", [
		"#forge:plates/lead",
		"alexscaves:fissile_core",
		"cmi:nuke_cooler"
	])

	addBasementRecipe("cmi:tier_4_aviation_mechanism_basement", [
		"#forge:plates/calorite",
		"#forge:plates/etrium",
		"#forge:circuits/ultimate"
	])

	addBasementRecipe("cmi:ultimate_mekanism_mechanism_basement", [
		"#forge:plates/stainless_steel",
		"#forge:circuits/ultimate",
		"#forge:plates/abyssal"
	])

	addBasementRecipe("cmi:air_tight_mechanism_basement", [
		"#forge:plates/osmium",
		"cmi:chromeplated_steel_gear",
		"steampowered:pressurized_gas_container"
	])

	addBasementRecipe("cmi:computing_mechanism_basement", [
		"#forge:plates/silver",
		"ae2:sky_dust",
		"cmi:single_crystal_silicon"
	])

	addAugmentRecipe("cmi:light_engineering_mechanism_augment", [
		"#forge:plates/copper",
		"immersiveengineering:electron_tube",
		"immersiveengineering:component_iron",
		"#forge:gears/constantan"
	])

	addAugmentRecipe("cmi:heavy_engineering_mechanism_augment", [
		"#forge:plates/electrum",
		"immersiveengineering:component_electronic",
		"immersiveengineering:component_steel",
		"#forge:gears/invar"
	])

	addAugmentRecipe("cmi:coil_mechanism_augment", [
		"#forge:plates/iron",
		"2x immersiveengineering:wirecoil_copper",
		"immersiveengineering:component_iron"
	])

	addAugmentRecipe("cmi:smart_mechanism_augment", [
		"2x immersiveengineering:wirecoil_redstone",
		"ae2:logic_processor",
		"ae2:calculation_processor",
		"ae2:engineering_processor"
	])

	addAugmentRecipe("cmi:thermal_mechanism_augment", [
		"#forge:gears/invar",
		"thermal:rf_coil",
		"create:electron_tube"
	])

	addAugmentRecipe("cmi:reinforced_mechanism_augment", [
		"#forge:gears/signalum",
		"thermal:rf_coil",
		"immersiveengineering:component_electronic"
	])

	addAugmentRecipe("cmi:resonant_mechanism_augment", [
		"#forge:gears/lumium",
		"thermal:rf_coil",
		"immersiveengineering:component_electronic_adv"
	])

	/**
	 * 
	 * @param {Internal.Item_} output 输出物品
	 * @param {Array<Internal.Item_>} inputs 输入物品
	 */
	function addBasementRecipe(output, inputs) {
		return immersiveengineering.blueprint(output, inputs)
			.blueprint("mechanism_basements")
	}

	/**
	 * 
	 * @param {Internal.Item_} output 输出物品
	 * @param {Array<Internal.Item_>} inputs 输入物品
	 */
	function addAugmentRecipe(output, inputs) {
		return immersiveengineering.blueprint(output, inputs)
			.blueprint("mechanism_augments")
	}
})