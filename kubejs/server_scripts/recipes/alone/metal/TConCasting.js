ServerEvents.recipes((event) => {
	let {
		thermal,
		tconstruct
	} = event.recipes

	global.metalGroups.forEach((metal) => {
		let fluid = IngredientUtils.getFirstFluidId(`forge:molten_${metal}`)

		if (fluid === null) {
			console.warn(`No molten metal found for ${metal}!`)
			return
		}

		const INGOT = `#forge:ingots/${metal}`
		const NUGGET = `#forge:nuggets/${metal}`
		const BLOCK = `#forge:storage_blocks/${metal}`
		const PLATE = `#forge:plates/${metal}`
		const ROD = `#forge:rods/${metal}`
		const GEAR = `#forge:gears/${metal}`
		const COIN = `#forge:coins/${metal}`

		const MULTI_USE_CAST = "#tconstruct:casts/multi_use"
		const SINGLE_USE_CAST = "#tconstruct:casts/single_use"

		tconstruct.casting_table(INGOT)
			.cast(`${MULTI_USE_CAST}/ingot`)
			.fluid(Fluid.of(fluid, 90))
			.cooling_time(20 * 3)
		tconstruct.casting_table(INGOT)
			.cast(`${SINGLE_USE_CAST}/ingot`)
			.fluid(Fluid.of(fluid, 90))
			.cooling_time(20 * 3)
			.cast_consumed(true)
		thermal.chiller(INGOT, [
			Fluid.of(fluid, 90),
			"thermal:chiller_ingot_cast"
		]).energy(4800)

		if (IngredientUtils.isNotNull(NUGGET)) {
			tconstruct.casting_table(NUGGET)
				.cast(`${MULTI_USE_CAST}/nugget`)
				.fluid(Fluid.of(fluid, 10))
				.cooling_time(20 * 1)
			tconstruct.casting_table(NUGGET)
				.cast(`${SINGLE_USE_CAST}/nugget`)
				.fluid(Fluid.of(fluid, 10))
				.cooling_time(20 * 1)
				.cast_consumed(true)
			thermal.chiller(NUGGET, [
				Fluid.of(fluid, 10),
				"cmi:bronze_nugget_cast"
			]).energy(600)
		} else {
			console.warn(`No nugget found for ${metal}!`)
		}

		if (IngredientUtils.isNotNull(BLOCK)) {
			tconstruct.casting_basin(BLOCK)
				.fluid(Fluid.of(fluid, 810))
				.cooling_time(20 * 9)
		} else {
			console.warn(`No storage block found for ${metal}!`)
		}

		if (IngredientUtils.isNotNull(PLATE)) {
			tconstruct.casting_table(PLATE)
				.cast(`${MULTI_USE_CAST}/plate`)
				.fluid(Fluid.of(fluid, 90))
				.cooling_time(20 * 3)

			tconstruct.casting_table(PLATE)
				.cast(`${SINGLE_USE_CAST}/plate`)
				.fluid(Fluid.of(fluid, 90))
				.cooling_time(20 * 3)
				.cast_consumed(true)

			thermal.chiller(PLATE, [
				Fluid.of(fluid, 90),
				"thermal_extra:chiller_plate_cast"
			]).energy(4800)
		} else {
			console.warn(`No plate found for ${metal}!`)
		}

		if (IngredientUtils.isNotNull(ROD)) {
			tconstruct.casting_table(ROD)
				.cast(`${MULTI_USE_CAST}/rod`)
				.fluid(Fluid.of(fluid, 45))
				.cooling_time(20 * 1.5)

			tconstruct.casting_table(ROD)
				.cast(`${SINGLE_USE_CAST}/rod`)
				.fluid(Fluid.of(fluid, 45))
				.cooling_time(20 * 1.5)
				.cast_consumed(true)

			thermal.chiller(ROD, [
				Fluid.of(fluid, 45),
				"thermal:chiller_rod_cast"
			]).energy(2400)
		} else {
			console.warn(`No rod found for ${metal}!`)
		}

		if (IngredientUtils.isNotNull(GEAR)) {
			tconstruct.casting_table(GEAR)
				.cast(`${MULTI_USE_CAST}/gear`)
				.fluid(Fluid.of(fluid, 360))
				.cooling_time(20 * 7.5)

			tconstruct.casting_table(GEAR)
				.cast(`${SINGLE_USE_CAST}/gear`)
				.fluid(Fluid.of(fluid, 360))
				.cooling_time(20 * 7.5)
				.cast_consumed(true)

			thermal.chiller(GEAR, [
				Fluid.of(fluid, 360),
				"thermalconstruct:bronze_cast_gear"
			]).energy(9600)
		} else {
			console.warn(`No gear found for ${metal}!`)
		}

		if (IngredientUtils.isNotNull(COIN)) {
			tconstruct.casting_table(COIN)
				.cast(`${MULTI_USE_CAST}/coin`)
				.fluid(Fluid.of(fluid, 30))
				.cooling_time(20 * 1.5)

			tconstruct.casting_table(COIN)
				.cast(`${SINGLE_USE_CAST}/coin`)
				.fluid(Fluid.of(fluid, 30))
				.cooling_time(20 * 1.5)
				.cast_consumed(true)

			thermal.chiller(COIN, [
				Fluid.of(fluid, 30),
				"thermalconstruct:bronze_cast_coin"
			]).energy(1600)
		} else {
			console.warn(`No coins found for ${metal}!`)
		}

		event.remove([
			{
				type: "tconstruct:casting_table",
				output: `#forge:ingots/${metal}`,
			}, {
				type: "tconstruct:casting_table",
				output: `#forge:nuggets/${metal}`,
			}, {
				type: "tconstruct:casting_basin",
				output: `#forge:storage_blocks/${metal}`
			}, {
				type: "tconstruct:casting_table",
				output: `#forge:plates/${metal}`
			}, {
				type: "tconstruct:casting_table",
				output: `#forge:rods/${metal}`
			}, {
				type: "tconstruct:casting_table",
				output: `#forge:gears/${metal}`
			}, {
				type: "tconstruct:casting_table",
				output: `#forge:coins/${metal}`
			}, {
				type: "thermal:chilling",
				output: `#forge:ingots/${metal}`
			}, {
				type: "thermal:chilling",
				output: `#forge:plates/${metal}`
			}, {
				type: "thermal:chilling",
				output: `#forge:rods/${metal}`
			}, {
				type: "thermal:chilling",
				output: `#forge:gears/${metal}`
			}, {
				type: "thermal:chilling",
				output: `#forge:coins/${metal}`
			}
		])
	})
})