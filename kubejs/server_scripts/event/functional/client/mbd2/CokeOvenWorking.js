let $ServerLevel =
	Java.loadClass("net.minecraft.server.level.ServerLevel")

MBDMachineEvents.onRecipeWorking("cmi:reinforced_coke_oven", (event) => {
	let machine = event.getEvent().getMachine()
	let recipe = event.getEvent().getRecipe()
	let level = machine.getLevel()

	if (recipe.getId() !== "cmi:reinforced_coke_oven") {
		return
	}
	if (!(level instanceof $ServerLevel)) {
		return
	}

	let pos = machine.getPos()

	for (let i = 0; i < 9; i++) {
		level.sendParticles(
			ParticleTypes.CAMPFIRE_COSY_SMOKE,
			pos.getX() - 1 + Math.random() * 3,
			pos.getY() + 3 + Math.random(),
			pos.getZ() + 1 + Math.random() * 3,
			0,
			0,
			0.07,
			0,
			1
		)
	}
})