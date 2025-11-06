StartupEvents.registry("fluid", (event) => {
	event.create("minecraft:milk")
		.flowingTexture("forge:block/milk_flowing")
		.stillTexture("forge:block/milk_still")
		.translationKey("fluid.cmi.milk")

	function addAloneFluid(name) {
		let registerAloneFluid =
			event.create(`${global.namespace}:${name}`)
				.flowingTexture(`${global.namespace}:fluid/${name}/flow`)
				.stillTexture(`${global.namespace}:fluid/${name}/still`)

		FluidBucketItemModel.generate(name)

		console.log(`${global.namespace}:${name}已注册!`)

		return registerAloneFluid
	}

	function addColorFluid(name, color) {
		let registerColorFluid =
			event.create(`${global.namespace}:${name}`)
				.thinTexture(color)
				.bucketColor(color)
				.flowingTexture(`${global.namespace}:fluid/solution/flow`)
				.stillTexture(`${global.namespace}:fluid/solution/still`)

		FluidBucketItemModel.generate(name)

		return registerColorFluid
	}

	addColorFluid("eletriced_source_emeraid", 0x117458)
	addColorFluid("platinum_solution", 0xE1FFFF)
	addColorFluid("tetrachlorosilane", 0xDDFF6E)
	addColorFluid("sulfric_diesel", 0xFFDA69)
	addColorFluid("benzene", 0xFFF4AD)
	addColorFluid("fatty_acid", 0xFFFE9B)
	addColorFluid("glycerin", 0xFFFCB8)
	addColorFluid("nitric_acid", 0xD6B000)
	addColorFluid("trinitrotoluene_solution", 0xFFEFA8)
	addColorFluid("crystal_catalyt", 0x90EE90)
	addColorFluid("fluid_nitroglycerine", 0xFFFBD3)
	addColorFluid("geyser_jet", 0x3D57FF)
	addColorFluid("photosyn_fluid", 0x00FA9A)
	addColorFluid("xenon", 0x1E90FF)
	addColorFluid("radon", 0x00FF00)
	addColorFluid("mercury", 0xA9C0FF)

	addAloneFluid("oil_shale_steam")
		.noBlock()
		.gaseous()
	addAloneFluid("blood")
	addAloneFluid("sludge_suspension")
	addAloneFluid("delta_unstable_solution")
	addAloneFluid("turbid_waste_liquid")
	addAloneFluid("cured_rubber")
	addAloneFluid("pure_sand")
		.noBlock()
	addAloneFluid("molten_bitumen")
	addAloneFluid("naphtha")
	addAloneFluid("kerosene")
	addAloneFluid("lubricating_oil")
	addAloneFluid("sea_water")
	addAloneFluid("concentrated_sea_water")
	addAloneFluid("hydrochloric_acid")
	addAloneFluid("alkaline_concentrated_sea_water")
	addAloneFluid("acidic_concentrated_sea_water")
	addAloneFluid("bromine")
	addAloneFluid("sodium_hydroxide")
	addAloneFluid("syrup")
})