ServerEvents.recipes((event) => {
	let { create } = event.recipes

	create.deploying("4x ad_astra:steel_cable", [
		"#forge:rods/copper",
		"#forge:plates/steel"
	])
	create.deploying("4x ad_astra:desh_cable", [
		"#forge:rods/copper",
		"#forge:plates/desh"
	])
	create.deploying("4x ad_astra:desh_fluid_pipe", [
		"create:fluid_pipe",
		"#forge:plates/desh"
	])
	create.deploying("4x ad_astra:ostrum_fluid_pipe", [
		"create:fluid_pipe",
		"#forge:plates/ostrum"
	])

	create.deploying("ad_astra:gas_tank", [
		"minecraft:bucket",
		"#forge:rods/iron"
	])
	create.deploying("ad_astra:steel_tank", [
		"ad_astra:gas_tank",
		"#forge:plates/steel"
	])
	create.deploying("ad_astra:desh_tank", [
		"ad_astra:gas_tank",
		"#forge:plates/desh"
	])
	create.deploying("ad_astra:ostrum_tank", [
		"ad_astra:gas_tank",
		"#forge:plates/ostrum"
	])
	create.deploying("ad_astra:calorite_tank", [
		"ad_astra:gas_tank",
		"#forge:plates/calorite"
	])

	create.deploying("minecraft:lightning_rod", [
		"#forge:rods/copper",
		"#forge:ingots/copper"
	])
	create.deploying("ad_astra:rocket_nose_cone", [
		"#forge:plates/steel",
		"minecraft:lightning_rod"
	])

	create.deploying("ad_astra:desh_engine", [
		"ad_astra:steel_engine",
		"#forge:plates/desh"
	])
	create.deploying("ad_astra:ostrum_engine", [
		"ad_astra:steel_engine",
		"#forge:plates/ostrum"
	])
	create.deploying("ad_astra:calorite_engine", [
		"ad_astra:steel_engine",
		"#forge:plates/calorite"
	])
})