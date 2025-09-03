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
		let fluid = IngredientUtils.getFirstFluidId(`forge:molten_${metal}`)

		if (fluid === null) {
			console.warn(`No molten metal found for ${metal}!`)
			return
		}

		const INGOT = `#forge:ingots/${metal}`
		const NUGGET = `#forge:nuggets/${metal}`
		const BLOCK = `#forge:storage_blocks/${metal}`
		const RAW_ORE = `#forge:raw_materials/${metal}`
		const RAW_BLOCK = `#forge:storage_blocks/raw_${metal}`
		const ORE = `#forge:ores/${metal}`
		const DUST = `#forge:dusts/${metal}`
		const PLATE = `#forge:plates/${metal}`
		const ROD = `#forge:rods/${metal}`
		const GEAR = `#forge:gears/${metal}`
		const COIN = `#forge:coins/${metal}`

		const MULTI_USE_CAST = "#tconstruct:casts/multi_use"
		const SINGLE_USE_CAST = "#tconstruct:casts/single_use"

		const TEMPERATURE = 800

		tconstruct.melting(Fluid.of(fluid, 90))
			.ingredient(INGOT)
			.temperature(TEMPERATURE)
			.time(20 * 3)
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
			tconstruct.melting(Fluid.of(fluid, 10))
				.ingredient(NUGGET)
				.temperature(TEMPERATURE)
				.time(20 * 1)
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
			tconstruct.melting(Fluid.of(fluid, 810))
				.ingredient(BLOCK)
				.temperature(TEMPERATURE)
				.time(20 * 9)
			tconstruct.casting_basin(BLOCK)
				.fluid(Fluid.of(fluid, 810))
				.cooling_time(20 * 9)
		} else {
			console.warn(`No storage block found for ${metal}!`)
		}

		if (IngredientUtils.isNotNull(PLATE)) {
			tconstruct.melting(Fluid.of(fluid, 90))
				.ingredient(PLATE)
				.temperature(TEMPERATURE)
				.time(20 * 3)

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

		if (IngredientUtils.isNotNull(DUST)) {
			tconstruct.melting(Fluid.of(fluid, 90))
				.ingredient(DUST)
				.temperature(TEMPERATURE)
				.time(20 * 3)
		} else {
			console.warn(`No dust found for ${metal}!`)
		}

		if (IngredientUtils.isNotNull(ROD)) {
			tconstruct.melting(Fluid.of(fluid, 45))
				.ingredient(ROD)
				.temperature(TEMPERATURE)
				.time(20 * 1.5)

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
			tconstruct.melting(Fluid.of(fluid, 360))
				.ingredient(GEAR)
				.temperature(TEMPERATURE)
				.time(20 * 7.5)

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
			tconstruct.melting(Fluid.of(fluid, 30))
				.ingredient(COIN)
				.temperature(TEMPERATURE)
				.time(20 * 1.5)

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

		if (IngredientUtils.isNotNull(RAW_ORE)) {
			event.custom({
				"type": "tconstruct:ore_melting",
				"ingredient": {
					"tag": RAW_ORE
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

		if (IngredientUtils.isNotNull(RAW_BLOCK)) {
			event.custom({
				"type": "tconstruct:ore_melting",
				"ingredient": {
					"tag": RAW_BLOCK
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

		if (IngredientUtils.isNotNull(ORE)) {
			event.custom({
				"type": "tconstruct:ore_melting",
				"ingredient": {
					"tag": ORE
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

		const INGOT = `#forge:ingots/${metal}`
		const NUGGET = `#forge:nuggets/${metal}`
		const BLOCK = `#forge:storage_blocks/${metal}`
		const RAW_ORE = `#forge:raw_materials/${metal}`
		const RAW_BLOCK = `#forge:storage_blocks/raw_${metal}`
		const CRUSHED = `#create:crushed_raw_materials/${metal}`
		const ORE = `#forge:ores/${metal}`
		const DUST = `#forge:dusts/${metal}`
		const PLATE = `#forge:plates/${metal}`
		const ROD = `#forge:rods/${metal}`
		const GEAR = `#forge:gears/${metal}`
		const COIN = `#forge:coins/${metal}`
		const DIRTY = `#mekanism:dirty_dusts/${metal}`
		const CLUMP = `#mekanism:clumps/${metal}`
		const SHARD = `#mekanism:shards/${metal}`
		const CRYSTAL = `#mekanism:crystals/${metal}`

		const EXP_NUGGET = "create:experience_nugget"

		if (IngredientUtils.isNotNull(BLOCK)) {
			kubejs.shapeless(`9x ${INGOT}`, [
				BLOCK
			])
			kubejs.shaped(BLOCK, [
				"AAA",
				"AAA",
				"AAA"
			], {
				A: INGOT
			})
		} else {
			console.warn(`No storage block found for ${metal}!`)
		}

		if (IngredientUtils.isNotNull(NUGGET)) {
			kubejs.shapeless(`9x ${NUGGET}`, [
				INGOT
			])
			kubejs.shaped(INGOT, [
				"AAA",
				"AAA",
				"AAA"
			], {
				A: NUGGET
			})
		} else {
			console.warn(`No nugget found for ${metal}!`)
		}

		if (IngredientUtils.isNotNull(ORE)) {
			minecraft.smelting(INGOT, ORE)
			minecraft.blasting(INGOT, ORE)

			thermal.smelter([
				`2x ${INGOT}`,
				Item.of("thermal:rich_slag").withChance(0.2)
			], ORE)

			immersiveengineering.arc_furnace(`2x #forge:ingots/${metal}`)
				.input(ORE)
				.slag("immersiveengineering:slag")
				.time(200)
				.energy(102400)
				.additives([])
		} else {
			console.warn(`No ore found for ${metal}!`)
		}

		if (IngredientUtils.isNotNull(RAW_ORE)) {
			if (IngredientUtils.isNotNull(RAW_BLOCK)) {
				kubejs.shapeless(`9x ${RAW_ORE}`, [
					RAW_BLOCK
				])

				kubejs.shaped(RAW_BLOCK, [
					"AAA",
					"AAA",
					"AAA"
				], {
					A: RAW_ORE
				})
			} else {
				console.warn(`No storage block found for raw ${metal}!`)
			}
			minecraft.smelting(INGOT, RAW_ORE)
			minecraft.blasting(INGOT, RAW_ORE)

			thermal.smelter(Item.of(IngredientUtils.getFirstItemId(INGOT)).withChance(1.5), [
				RAW_ORE
			])

			immersiveengineering.arc_furnace(INGOT)
				.secondaries(Item.of(IngredientUtils.getFirstItemId(INGOT)).withChance(0.5))
				.input(RAW_ORE)
				.time(900)
				.energy(230400)
				.additives([])
		} else {
			console.warn(`No raw material found for ${metal}!`)
		}

		if (IngredientUtils.isNotNull(RAW_BLOCK)) {
			immersiveengineering.arc_furnace(`13x #forge:ingots/${metal}`)
				.secondaries(Item.of(IngredientUtils.getFirstItemId(INGOT)).withChance(0.5))
				.input(RAW_BLOCK)
				.energy(25600)
				.additives([])
		} else {
			console.warn(`No storage block found for raw ${metal}!`)
		}

		if (IngredientUtils.isNotNull(CRUSHED)) {
			if (IngredientUtils.isNotNull(RAW_BLOCK)) {
				create.crushing([
					`9x ${CRUSHED}`,
					Item.of(`9x ${EXP_NUGGET}`).withChance(0.75)
				], RAW_BLOCK)
			} else {
				console.warn(`No storage block found for raw ${metal}!`)
			}
			if (IngredientUtils.isNotNull(RAW_ORE)) {
				create.crushing([
					CRUSHED,
					Item.of(EXP_NUGGET).withChance(0.75)
				], RAW_ORE)
			} else {
				console.warn(`No raw material found for ${metal}!`)
			}
			if (IngredientUtils.isNotNull(ORE)) {
				create.crushing([
					CRUSHED,
					Item.of(IngredientUtils.getFirstItemId(CRUSHED)).withChance(0.75),
					Item.of(EXP_NUGGET).withChance(0.75),
					Item.of("minecraft:cobblestone").withChance(0.125)
				], ORE)
			} else {
				console.warn(`No ore found for ${metal}!`)
			}
			minecraft.smelting(INGOT, CRUSHED)
			minecraft.blasting(INGOT, CRUSHED)
		} else {
			console.warn(`No crushed raw material found for ${metal}!`)
		}

		if (IngredientUtils.isNotNull(DUST)) {
			minecraft.smelting(INGOT, [
				DUST
			])
			minecraft.blasting(INGOT, [
				DUST
			])
			thermal.pulverizer(DUST, [
				INGOT
			]).energy(2000)

			thermal.smelter(INGOT, [
				DUST
			]).energy(1600)

			immersiveengineering.crusher(DUST)
				.secondaries([])
				.input(INGOT)

			immersiveengineering.arc_furnace(INGOT)
				.secondaries([])
				.input(DUST)
				.additives([])

			mekanism.crushing(DUST, INGOT)
			if (IngredientUtils.isNotNull(RAW_ORE)) {
				thermal.pulverizer(Item.of(IngredientUtils.getFirstItemId(DUST)).withChance(1.25), [
					RAW_ORE
				])

				immersiveengineering.crusher(DUST, RAW_ORE)
					.secondaries(Item.of(IngredientUtils.getFirstItemId(DUST)).withChance(1 / 3))

				mekanism.enriching(`4x ${DUST}`, `3x ${RAW_ORE}`)
			} else {
				console.warn(`No raw material found for ${metal}!`)
			}
			if (IngredientUtils.isNotNull(ORE)) {
				thermal.pulverizer(`2x ${DUST}`, [
					ORE
				])

				immersiveengineering.crusher(`2x ${DUST}`)
					.secondaries([])
					.input(ORE)

				mekanism.enriching(`2x ${DUST}`, ORE)
			} else {
				console.warn(`No ore found for ${metal}!`)
			}
			if (IngredientUtils.isNotNull(RAW_BLOCK)) {
				immersiveengineering.crusher(`12x ${DUST}`)
					.secondaries([])
					.input(RAW_BLOCK)

				mekanism.enriching(`12x ${DUST}`, RAW_BLOCK)
			} else {
				console.warn(`No storage block found for raw ${metal}!`)
			}
		} else {
			console.warn(`No dust found for ${metal}!`)
		}

		if (IngredientUtils.isNotNull(PLATE)) {
			create.pressing(PLATE, [
				INGOT
			])
			thermal.press(PLATE, [
				INGOT
			])
			thermal.smelter(INGOT, [
				PLATE
			]).energy(1600)

			immersiveengineering.metal_press(PLATE)
				.input(INGOT)
				.mold("immersiveengineering:mold_plate")
		} else {
			console.warn(`No plate found for ${metal}!`)
		}

		if (IngredientUtils.isNotNull(ROD)) {
			createaddition.rolling(`2x ${ROD}`, [
				INGOT
			])

			thermal.press(`2x ${ROD}`, [
				INGOT,
				"thermal_extra:press_rod_die"
			])

			immersiveengineering.metal_press(`2x ${ROD}`)
				.input(INGOT)
				.mold("immersiveengineering:mold_rod")
		} else {
			console.warn(`No rod found for ${metal}!`)
		}

		if (IngredientUtils.isNotNull(GEAR)) {
			kubejs.shaped(GEAR, [
				" A ",
				"A A",
				" A "
			], {
				A: INGOT
			})

			thermal.press(GEAR, [
				`4x ${INGOT}`,
				"thermal:press_gear_die"
			])

			thermal.smelter(`4x ${INGOT}`, [
				GEAR
			])

			immersiveengineering.metal_press(GEAR)
				.input(`4x ${INGOT}`)
				.mold("immersiveengineering:mold_gear")
		} else {
			console.warn(`No gear found for ${metal}!`)
		}

		if (IngredientUtils.isNotNull(COIN)) {
			thermal.press(`3x ${COIN}`, [
				INGOT,
				"thermal:press_coin_die"
			])
			if (IngredientUtils.isNotNull(NUGGET)) {
				thermal.press(COIN, [
					`3x ${NUGGET}`,
					"thermal:press_coin_die"
				]).energy(800)

				thermal.smelter(`3x ${NUGGET}`, [
					COIN
				]).energy(800)
			} else {
				console.warn(`No nuggets found for ${metal}!`)
			}
		} else {
			console.warn(`No coin found for ${metal}!`)
		}

		moltenMetalRecipeWithCondition(metal)

		// 由于暂时无法判断浆液标签是否为空，因此搁置
		// if (IngredientUtils.isNotNull(DUST)) {
		// 	if (IngredientUtils.isNotNull(DIRTY)) {
		// 		mekanism.enriching(DUST, DIRTY)
		// 	} else {
		// 		console.warn(`no dirty dust found for ${metal}!`)
		// 	}
		// } else {
		// 	console.warn(`no dust found for ${metal}`)
		// }

		// if (IngredientUtils.isNotNull(DIRTY)) {
		// 	if (IngredientUtils.isNotNull(CLUMP)) {
		// 		mekanism.crushing(DIRTY, CLUMP)
		// 	} else {
		// 		console.warn(`no clump found for ${metal}!`)
		// 	}
		// } else {
		// 	console.warn(`no dirty dust found for ${metal}!`)
		// }

		// if (IngredientUtils.isNotNull(CLUMP)) {
		// 	if (IngredientUtils.isNotNull(SHARD)) {
		// 		mekanism.purifying(CLUMP, SHARD,
		// 			IngredientUtils.ofMekanismGas("mekanism:oxygen", 200))
		// 	} else {
		// 		console.warn(`no shard found for ${metal}!`)
		// 	}
		// 	if (IngredientUtils.isNotNull(ORE)) {
		// 		mekanism.purifying(`3x ${CLUMP}`, ORE,
		// 			IngredientUtils.ofMekanismGas("mekanism:oxygen", 200))
		// 	} else {
		// 		console.warn(`no ore found for ${metal}!`)
		// 	}
		// 	if (IngredientUtils.isNotNull(RAW_ORE)) {
		// 		mekanism.purifying(`2x ${CLUMP}`, RAW_ORE,
		// 			IngredientUtils.ofMekanismGas("mekanism:oxygen", 200))
		// 	} else {
		// 		console.warn(`no raw material found for ${metal}!`)
		// 	}
		// 	if (IngredientUtils.isNotNull(RAW_BLOCK)) {
		// 		mekanism.purifying(`18x ${CLUMP}`, RAW_BLOCK,
		// 			IngredientUtils.ofMekanismGas("mekanism:oxygen", 400))
		// 	} else {
		// 		console.warn(`no storage block found for raw ${metal}!`)
		// 	}
		// } else {
		// 	console.warn(`no clump found for ${metal}!`)
		// }

		// if (IngredientUtils.isNotNull(SHARD)) {
		// 	if (IngredientUtils.isNotNull(CRYSTAL)) {
		// 		mekanism.injecting(SHARD, CRYSTAL,
		// 			IngredientUtils.ofMekanismGas("mekanism:hydrogen_chloride", 200))
		// 	} else {
		// 		console.warn(`no crystal found for raw ${metal}!`)
		// 	}
		// 	if (IngredientUtils.isNotNull(ORE)) {
		// 		mekanism.injecting(SHARD, ORE, 
		// 			IngredientUtils.ofMekanismGas("mekanism:hydrogen_chloride", 200))
		// 	} else {
		// 		console.warn(`no ores found for ${metal}`)
		// 	}
		// 	if(IngredientUtils.isNotNull(RAW_ORE)) {
		// 		mekanism.injecting(`8x ${SHARD}`, `3x ${RAW_ORE}`,
		// 			IngredientUtils.ofMekanismGas("mekanism:hydrogen_chloride", 200))
		// 	} else {
		// 		console.warn(`no raw material found for ${metal}!`)
		// 	}
		// 	if(IngredientUtils.isNotNull(RAW_BLOCK)) {
		// 		mekanism.injecting(`24x ${SHARD}`, RAW_BLOCK,
		// 			IngredientUtils.ofMekanismGas("mekanism:hydrogen_chloride", 400))
		// 	} else {
		// 		console.warn(`no storage block found for raw ${metal}!`)
		// 	}
		// } else {
		// 	console.warn(`no shard found for ${metal}!`)
		// }
	})
})