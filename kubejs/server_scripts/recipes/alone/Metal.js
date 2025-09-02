ServerEvents.recipes((event) => {
	let {
		minecraft,
		kubejs,
		create,
		createaddition,
		thermal,
		immersiveengineering,
		mekanism,
		tconstruct
	} = event.recipes

	function moltenMetalRecipeWithCondition(metal) {
		let namespace = ["cmi", "thermalconstruct", "tconstruct"]
		let fluid = ""

		namespace.forEach((modid) => {
			if (Fluid.exists(`${modid}:molten_${metal}`)) {
				fluid = `${modid}:molten_${metal}`
			}
		})

		if (fluid === "") {
			console.warn(`No molten metal found for ${metal}!`)
			return
		}

		const ingot = `#forge:ingots/${metal}`
		const nugget = `#forge:nuggets/${metal}`
		const block = `#forge:storage_blocks/${metal}`
		const raw_ore = `#forge:raw_materials/${metal}`
		const raw_block = `#forge:storage_blocks/raw_${metal}`
		const ore = `#forge:ores/${metal}`
		const dust = `#forge:dusts/${metal}`
		const plate = `#forge:plates/${metal}`
		const rod = `#forge:rods/${metal}`
		const gear = `#forge:gears/${metal}`
		const coin = `#forge:coins/${metal}`

		const multi_use_cast = "#tconstruct:casts/multi_use"
		const single_use_cast = "#tconstruct:casts/single_use"

		const TEMPERATURE = 800

		tconstruct.melting(Fluid.of(fluid, 90))
			.ingredient(ingot)
			.temperature(TEMPERATURE)
			.time(20 * 3)
		tconstruct.casting_table(ingot)
			.cast(`${multi_use_cast}/ingot`)
			.fluid(Fluid.of(fluid, 90))
			.cooling_time(20 * 3)
		tconstruct.casting_table(ingot)
			.cast(`${single_use_cast}/ingot`)
			.fluid(Fluid.of(fluid, 90))
			.cooling_time(20 * 3)
			.cast_consumed(true)
		thermal.chiller(ingot, [
			Fluid.of(fluid, 90),
			"thermal:chiller_ingot_cast"
		]).energy(4800)

		if(IngredientUtils.isNotNull(nugget)) {
			tconstruct.melting(Fluid.of(fluid, 10))
				.ingredient(nugget)
				.temperature(TEMPERATURE)
				.time(20 * 1)
			tconstruct.casting_table(nugget)
				.cast(`${multi_use_cast}/nugget`)
				.fluid(Fluid.of(fluid, 10))
				.cooling_time(20 * 1)
			tconstruct.casting_table(nugget)
				.cast(`${single_use_cast}/nugget`)
				.fluid(Fluid.of(fluid, 10))
				.cooling_time(20 * 1)
				.cast_consumed(true)
			thermal.chiller(nugget, [
				Fluid.of(fluid, 10),
				"cmi:bronze_nugget_cast"
			]).energy(600)
		} else {
			console.warn(`No nugget found for ${metal}!`)
		}

		if(IngredientUtils.isNotNull(block)) {
			tconstruct.melting(Fluid.of(fluid, 810))
				.ingredient(block)
				.temperature(TEMPERATURE)
				.time(20 * 9)
			tconstruct.casting_basin(block)
				.fluid(Fluid.of(fluid, 810))
				.cooling_time(20 * 9)
		} else {
			console.warn(`No storage block found for ${metal}!`)
		}

		if(IngredientUtils.isNotNull(plate)) {
			tconstruct.melting(Fluid.of(fluid, 90))
				.ingredient(plate)
				.temperature(TEMPERATURE)
				.time(20 * 3)

			tconstruct.casting_table(plate)
				.cast(`${multi_use_cast}/plate`)
				.fluid(Fluid.of(fluid, 90))
				.cooling_time(20 * 3)

			tconstruct.casting_table(plate)
				.cast(`${single_use_cast}/plate`)
				.fluid(Fluid.of(fluid, 90))
				.cooling_time(20 * 3)
				.cast_consumed(true)

			thermal.chiller(plate, [
				Fluid.of(fluid, 90),
				"thermal_extra:chiller_plate_cast"
			]).energy(4800)
		} else {
			console.warn(`No plate found for ${metal}!`)
		}

		if(IngredientUtils.isNotNull(dust)) {
			tconstruct.melting(Fluid.of(fluid, 90))
				.ingredient(dust)
				.temperature(TEMPERATURE)
				.time(20 * 3)
		} else {
			console.warn(`No dust found for ${metal}!`)
		}

		if(IngredientUtils.isNotNull(rod)) {
			tconstruct.melting(Fluid.of(fluid, 45))
				.ingredient(rod)
				.temperature(TEMPERATURE)
				.time(20 * 1.5)

			tconstruct.casting_table(rod)
				.cast(`${multi_use_cast}/rod`)
				.fluid(Fluid.of(fluid, 45))
				.cooling_time(20 * 1.5)

			tconstruct.casting_table(rod)
				.cast(`${single_use_cast}/rod`)
				.fluid(Fluid.of(fluid, 45))
				.cooling_time(20 * 1.5)
				.cast_consumed(true)

			thermal.chiller(rod, [
				Fluid.of(fluid, 45),
				"thermal:chiller_rod_cast"
			]).energy(2400)
		} else {
			console.warn(`No rod found for ${metal}!`)
		}

		if(IngredientUtils.isNotNull(gear)) {
			tconstruct.melting(Fluid.of(fluid, 360))
				.ingredient(gear)
				.temperature(TEMPERATURE)
				.time(20 * 7.5)

			tconstruct.casting_table(gear)
				.cast(`${multi_use_cast}/gear`)
				.fluid(Fluid.of(fluid, 360))
				.cooling_time(20 * 7.5)

			tconstruct.casting_table(gear)
				.cast(`${single_use_cast}/gear`)
				.fluid(Fluid.of(fluid, 360))
				.cooling_time(20 * 7.5)
				.cast_consumed(true)

			thermal.chiller(gear, [
				Fluid.of(fluid, 360),
				"thermalconstruct:bronze_cast_gear"
			]).energy(9600)
		} else {
			console.warn(`No gear found for ${metal}!`)
		}

		if(IngredientUtils.isNotNull(coin)) {
			tconstruct.melting(Fluid.of(fluid, 30))
				.ingredient(coin)
				.temperature(TEMPERATURE)
				.time(20 * 1.5)

			tconstruct.casting_table(coin)
				.cast(`${multi_use_cast}/coin`)
				.fluid(Fluid.of(fluid, 30))
				.cooling_time(20 * 1.5)

			tconstruct.casting_table(coin)
				.cast(`${single_use_cast}/coin`)
				.fluid(Fluid.of(fluid, 30))
				.cooling_time(20 * 1.5)
				.cast_consumed(true)

			thermal.chiller(coin, [
				Fluid.of(fluid, 30),
				"thermalconstruct:bronze_cast_coin"
			]).energy(1600)
		} else {
			console.warn(`No coins found for ${metal}!`)
		}

		if(IngredientUtils.isNotNull(raw_ore)) {
			event.custom({
				"type": "tconstruct:ore_melting",
				"ingredient": {
					"tag": raw_ore
				},
				"rate": "metal",
				"result": {
					"amount": 90,
					"fluid": fluid
				},
				"temperature": TEMPERATURE,
				"time": 20 * 4.5
			})
		} else {
			console.warn(`No raw material found for ${metal}!`)
		}

		if(IngredientUtils.isNotNull(raw_block)) {
			event.custom({
				"type": "tconstruct:ore_melting",
				"ingredient": {
					"tag": raw_block
				},
				"rate": "metal",
				"result": {
					"amount": 810,
					"fluid": fluid
				},
				"temperature": TEMPERATURE,
				"time": 20 * 18
			})
		} else {
			console.warn(`No storage block found for raw ${metal}!`)
		}

		if(IngredientUtils.isNotNull(ore)) {
			event.custom({
				"type": "tconstruct:ore_melting",
				"ingredient": {
					"tag": ore
				},
				"rate": "metal",
				"result": {
					"amount": 180,
					"fluid": fluid
				},
				"temperature": TEMPERATURE,
				"time": 20 * 7.5
			})
		} else {
			console.warn(`No ore found for ${metal}!`)
		}
	}

	global.metalGroup.forEach((metal) => {

		const ingot = `#forge:ingots/${metal}`
		const nugget = `#forge:nuggets/${metal}`
		const block = `#forge:storage_blocks/${metal}`
		const raw_ore = `#forge:raw_materials/${metal}`
		const raw_block = `#forge:storage_blocks/raw_${metal}`
		const crushed = `#create:crushed_raw_materials/${metal}`
		const ore = `#forge:ores/${metal}`
		const dust = `#forge:dusts/${metal}`
		const plate = `#forge:plates/${metal}`
		const rod = `#forge:rods/${metal}`
		const gear = `#forge:gears/${metal}`
		const coin = `#forge:coins/${metal}`
		const exp_nugget = "create:experience_nugget"

		if(IngredientUtils.isNotNull(block)) {
			kubejs.shapeless(`9x ${ingot}`, [
				block
			])
			kubejs.shaped(block, [
				"AAA",
				"AAA",
				"AAA"
			], {
				A: ingot
			})
		} else {
			console.warn(`No storage block found for ${metal}!`)
		}

		if(IngredientUtils.isNotNull(nugget)) {
			kubejs.shapeless(`9x ${nugget}`, [
				ingot
			])
			kubejs.shaped(ingot, [
				"AAA",
				"AAA",
				"AAA"
			], {
				A: nugget
			})
		} else {
			console.warn(`No nugget found for ${metal}!`)
		}

		if(IngredientUtils.isNotNull(ore)) {
			// minecraft.smelting(ingot, ore)
			// minecraft.blasting(ingot, ore)

			thermal.smelter([
				`2x ${ingot}`,
				Item.of("thermal:rich_slag").withChance(0.2)
			], ore)

			immersiveengineering.arc_furnace(`2x #forge:ingots/${metal}`)
				.input(ore)
				.slag("immersiveengineering:slag")
				.time(200)
				.energy(102400)
				.additives([])
		} else {
			console.warn(`No ore found for ${metal}!`)
		}

		if(IngredientUtils.isNotNull(raw_ore)) {
			if(IngredientUtils.isNotNull(raw_block)) {
				kubejs.shapeless(`9x ${raw_ore}`, [
					raw_block
				])

				kubejs.shaped(raw_block, [
					"AAA",
					"AAA",
					"AAA"
				], {
					A: raw_ore
				})
			} else {
				console.warn(`No storage block found for raw ${metal}!`)
			}
			// minecraft.smelting(ingot, raw_ore)
			// minecraft.blasting(ingot, raw_ore)

			thermal.smelter(Item.of(IngredientUtils.getFirstItemId(ingot)).withChance(1.5), [
				raw_ore
			])

			immersiveengineering.arc_furnace(ingot)
				.secondaries(Item.of(IngredientUtils.getFirstItemId(ingot)).withChance(0.5))
				.input(raw_ore)
				.time(900)
				.energy(230400)
				.additives([])
		} else {
			console.warn(`No raw material found for ${metal}!`)
		}

		if(IngredientUtils.isNotNull(raw_block)) {
			immersiveengineering.arc_furnace(`13x #forge:ingots/${metal}`)
				.secondaries(Item.of(IngredientUtils.getFirstItemId(ingot)).withChance(0.5))
				.input(raw_block)
				.energy(25600)
				.additives([])
		} else {
			console.warn(`No storage block found for raw ${metal}!`)
		}

		if(IngredientUtils.isNotNull(crushed)) {
			if(IngredientUtils.isNotNull(raw_block)) {
				create.crushing([
					`9x ${crushed}`,
					Item.of(`9x ${exp_nugget}`).withChance(0.75)
				], raw_block)
			} else {
				console.warn(`No storage block found for raw ${metal}!`)
			}
			if(IngredientUtils.isNotNull(raw_ore)) {
				create.crushing([
					crushed,
					Item.of(exp_nugget).withChance(0.75)
				], raw_ore)
			} else {
				console.warn(`No raw material found for ${metal}!`)
			}
			if(IngredientUtils.isNotNull(ore)) {
				create.crushing([
					crushed,
					Item.of(IngredientUtils.getFirstItemId(crushed)).withChance(0.75),
					Item.of(exp_nugget).withChance(0.75),
					Item.of("minecraft:cobblestone").withChance(0.125)
				], ore)
			} else {
				console.warn(`No ore found for ${metal}!`)
			}
			minecraft.smelting(ingot, crushed)
			minecraft.blasting(ingot, crushed)
		} else {
			console.warn(`No crushed raw material found for ${metal}!`)
		}

		if(IngredientUtils.isNotNull(dust)) {
			minecraft.smelting(ingot, [
				dust
			])
			minecraft.blasting(ingot, [
				dust
			])
			thermal.pulverizer(dust, [
				ingot
			]).energy(2000)

			thermal.smelter(ingot, [
				dust
			]).energy(1600)

			immersiveengineering.crusher(dust)
				.secondaries([])
				.input(ingot)

			immersiveengineering.arc_furnace(ingot)
				.secondaries([])
				.input(dust)
				.additives([])

			mekanism.crushing(dust, ingot)
			if(IngredientUtils.isNotNull(raw_ore)) {
				thermal.pulverizer(Item.of(IngredientUtils.getFirstItemId(dust)).withChance(1.25), [
					raw_ore
				])

				immersiveengineering.crusher(dust, raw_ore)
					.secondaries(Item.of(IngredientUtils.getFirstItemId(dust)).withChance(1 / 3))

				mekanism.enriching(`4x ${dust}`, `3x ${raw_ore}`)
			} else {
				console.warn(`No raw material found for ${metal}!`)
			}
			if(IngredientUtils.isNotNull(ore)) {
				thermal.pulverizer(`2x ${dust}`, [
					ore
				])

				immersiveengineering.crusher(`2x ${dust}`)
					.secondaries([])
					.input(ore)

				mekanism.enriching(`2x ${dust}`, ore)
			} else {
				console.warn(`No ore found for ${metal}!`)
			}
			if(IngredientUtils.isNotNull(raw_block)) {
				immersiveengineering.crusher(`12x ${dust}`)
					.secondaries([])
					.input(raw_block)

				mekanism.enriching(`12x ${dust}`, raw_block)
			} else {
				console.warn(`No storage block found for raw ${metal}!`)
			}
		} else {
			console.warn(`No dust found for ${metal}!`)
		}

		if(IngredientUtils.isNotNull(plate)) {
			create.pressing(plate, [
				ingot
			])
			thermal.press(plate, [
				ingot
			])
			thermal.smelter(ingot, [
				plate
			]).energy(1600)

			immersiveengineering.metal_press(plate)
				.input(ingot)
				.mold("immersiveengineering:mold_plate")
		} else {
			console.warn(`No plate found for ${metal}!`)
		}

		if(IngredientUtils.isNotNull(rod)) {
			createaddition.rolling(`2x ${rod}`, [
				ingot
			])

			thermal.press(`2x ${rod}`, [
				ingot,
				"thermal_extra:press_rod_die"
			])

			immersiveengineering.metal_press(`2x ${rod}`)
				.input(ingot)
				.mold("immersiveengineering:mold_rod")
		} else {
			console.warn(`No rod found for ${metal}!`)
		}

		if(IngredientUtils.isNotNull(gear)) {
			kubejs.shaped(gear, [
				" A ",
				"A A",
				" A "
			], {
				A: ingot
			})

			thermal.press(gear, [
				`4x ${ingot}`,
				"thermal:press_gear_die"
			])

			thermal.smelter(`4x ${ingot}`, [
				gear
			])

			immersiveengineering.metal_press(gear)
				.input(`4x ${ingot}`)
				.mold("immersiveengineering:mold_gear")
		} else {
			console.warn(`No gear found for ${metal}!`)
		}

		if(IngredientUtils.isNotNull(coin)) {
			thermal.press(`3x ${coin}`, [
				ingot,
				"thermal:press_coin_die"
			])
			if(IngredientUtils.isNotNull(nugget)) {
				thermal.press(coin, [
					`3x ${nugget}`,
					"thermal:press_coin_die"
				]).energy(800)

				thermal.smelter(`3x ${nugget}`, [
					coin
				]).energy(800)
			} else {
				console.warn(`No nuggets found for ${metal}!`)
			}
		} else {
			console.warn(`No coin found for ${metal}!`)
		}

		moltenMetalRecipeWithCondition(metal)
	})
})