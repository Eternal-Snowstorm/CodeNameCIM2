ServerEvents.recipes((event) => {
	let { thermal, tconstruct } = event.getRecipes()

	CmiMetalRegistry.getAll().forEach((material) => {
		let metal = material.getId()
		let fluid = `tconstruct:molten_${metal}`

		if (fluid === null) {
			// console.warn(`No molten metal found for ${metal}!`)
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
			.fluid(Fluid.tag("tag", fluid, 90))
			.cooling_time(20 * 3)

		tconstruct.casting_table(INGOT)
			.cast(`${SINGLE_USE_CAST}/ingot`)
			.fluid(Fluid.tag("tag", fluid, 90))
			.cooling_time(20 * 3)
			.cast_consumed(true)

		thermal.chiller(INGOT, [
			Fluid.tag("fluidTag", fluid, 90),
			`${MULTI_USE_CAST}/ingot`
		]).energy(4800)

		if (Ingredient.isNotNull(NUGGET)) {
			tconstruct.casting_table(NUGGET)
				.cast(`${MULTI_USE_CAST}/nugget`)
				.fluid(Fluid.tag("tag", fluid, 10))
				.cooling_time(20 * 1)

			tconstruct.casting_table(NUGGET)
				.cast(`${SINGLE_USE_CAST}/nugget`)
				.fluid(Fluid.tag("tag", fluid, 10))
				.cooling_time(20 * 1)
				.cast_consumed(true)

			thermal.chiller(NUGGET, [
				Fluid.tag("fluidTag", fluid, 10),
				`${MULTI_USE_CAST}/nugget`
			]).energy(600)
		} else {
			// console.warn(`No nugget found for ${metal}!`)
		}

		if (Ingredient.isNotNull(BLOCK)) {
			tconstruct.casting_basin(BLOCK)
				.fluid(Fluid.tag("fluidTag", fluid, 90 * 9))
				.cooling_time(20 * 9)
		} else {
			// console.warn(`No storage block found for ${metal}!`)
		}

		if (Ingredient.isNotNull(PLATE)) {
			tconstruct.casting_table(PLATE)
				.cast(`${MULTI_USE_CAST}/plate`)
				.fluid(Fluid.tag("tag", fluid, 90))
				.cooling_time(20 * 3)

			tconstruct.casting_table(PLATE)
				.cast(`${SINGLE_USE_CAST}/plate`)
				.fluid(Fluid.tag("tag", fluid, 90))
				.cooling_time(20 * 3)
				.cast_consumed(true)

			thermal.chiller(PLATE, [
				Fluid.tag("fluidTag", fluid, 90),
				`${MULTI_USE_CAST}/plate`
			]).energy(4800)
		} else {
			// console.warn(`No plate found for ${metal}!`)
		}

		if (Ingredient.isNotNull(ROD)) {
			tconstruct.casting_table(ROD)
				.cast(`${MULTI_USE_CAST}/rod`)
				.fluid(Fluid.tag("tag", fluid, 45))
				.cooling_time(20 * 1.5)

			tconstruct.casting_table(ROD)
				.cast(`${SINGLE_USE_CAST}/rod`)
				.fluid(Fluid.tag("tag", fluid, 45))
				.cooling_time(20 * 1.5)
				.cast_consumed(true)

			thermal.chiller(ROD, [
				Fluid.tag("fluidTag", fluid, 45),
				`${SINGLE_USE_CAST}/rod`
			]).energy(2400)
		} else {
			// console.warn(`No rod found for ${metal}!`)
		}

		if (Ingredient.isNotNull(GEAR)) {
			tconstruct.casting_table(GEAR)
				.cast(`${MULTI_USE_CAST}/gear`)
				.fluid(Fluid.tag("tag", fluid, 90 * 4))
				.cooling_time(20 * 7.5)

			tconstruct.casting_table(GEAR)
				.cast(`${SINGLE_USE_CAST}/gear`)
				.fluid(Fluid.tag("tag", fluid, 90 * 4))
				.cooling_time(20 * 7.5)
				.cast_consumed(true)

			thermal.chiller(GEAR, [
				Fluid.tag("fluidTag", fluid, 90 * 4),
				`${MULTI_USE_CAST}/gear`
			]).energy(9600)
		} else {
			// console.warn(`No gear found for ${metal}!`)
		}

		if (Ingredient.isNotNull(COIN)) {
			tconstruct.casting_table(COIN)
				.cast(`${MULTI_USE_CAST}/coin`)
				.fluid(Fluid.tag("tag", fluid, 30))
				.cooling_time(20 * 1.5)

			tconstruct.casting_table(COIN)
				.cast(`${SINGLE_USE_CAST}/coin`)
				.fluid(Fluid.tag("tag", fluid, 30))
				.cooling_time(20 * 1.5)
				.cast_consumed(true)

			thermal.chiller(COIN, [
				Fluid.tag("fluidTag", fluid, 30),
				`${MULTI_USE_CAST}/coin`
			]).energy(1600)
		} else {
			// console.warn(`No coins found for ${metal}!`)
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