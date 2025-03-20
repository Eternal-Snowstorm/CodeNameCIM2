ServerEvents.recipes((event) => {
	let { create } = event.recipes
	
	create.deploying("minecraft:sculk_sensor", [
		"minecraft:sculk",
		"minecraft:redstone_block"
	])

	create.deploying("minecraft:sculk_shrieker", [
		"minecraft:sculk",
		"minecraft:ender_pearl"
	])
	create.deploying("minecraft:sculk_catalyst", [
		"minecraft:sculk",
		"create:experience_block"
	])
	create.mixing("2x ae2:quantum_entangled_singularity", [
		"ae2:singularity",
		"minecraft:ender_pearl"
	])
	create.mixing("2x ae2:quantum_entangled_singularity", [
		"ae2:singularity",
		"#forge:dusts/ender_pearl"
	])
})