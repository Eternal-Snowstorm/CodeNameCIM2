ServerEvents.recipes((event) => {
	let { minecraft, kubejs, create, createaddition, thermal, immersiveengineering, mekanism, tconstruct } = event.recipes

	function moltenMetalRecipeWithCondition(metal) {
		let namespace = ["cmi","thermalconstruct" , "tconstruct"]
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
		const TEMPERATURE = 800

		tconstruct.melting(Fluid.of(fluid, 90))
			.ingredient(`#forge:ingots/${metal}`)
			.temperature(TEMPERATURE)
			.time(60)
		tconstruct.casting_table(`#forge:ingots/${metal}`)
			.cast("#tconstruct:casts/multi_use/ingot")
			.fluid(Fluid.of(fluid, 90))
			.cooling_time(60)
		tconstruct.casting_table(`#forge:ingots/${metal}`)
			.cast("#tconstruct:casts/single_use/ingot")
			.fluid(Fluid.of(fluid, 90))
			.cooling_time(60)
			.cast_consumed(true)
		thermal.chiller(`#forge:ingots/${metal}`, [
			Fluid.of(fluid, 90),
			"thermal:chiller_ingot_cast"
		]).energy(4800)

		if (!(Ingredient.of(`#forge:nuggets/${metal}`).itemIds.length === 0)) {
			tconstruct.melting(Fluid.of(fluid, 10))
				.ingredient(`#forge:nuggets/${metal}`)
				.temperature(TEMPERATURE)
				.time(20)
			tconstruct.casting_table(`#forge:nuggets/${metal}`)
				.cast("#tconstruct:casts/multi_use/nugget")
				.fluid(Fluid.of(fluid, 10))
				.cooling_time(20)
			tconstruct.casting_table(`#forge:nuggets/${metal}`)
				.cast("#tconstruct:casts/single_use/nugget")
				.fluid(Fluid.of(fluid, 10))
				.cooling_time(20)
				.cast_consumed(true)
			thermal.chiller(`#forge:plates/${metal}`, [
				Fluid.of(fluid, 10),
				"cmi:bronze_nugget_cast"
			]).energy(600)
		} else {
			console.warn(`No nugget found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:storage_blocks/${metal}`).itemIds.length === 0)) {
			tconstruct.melting(Fluid.of(fluid, 810))
				.ingredient(`#forge:storage_blocks/${metal}`)
				.temperature(TEMPERATURE)
				.time(180)
			tconstruct.casting_basin(`#forge:storage_blocks/${metal}`)
				.fluid(Fluid.of(fluid, 810))
				.cooling_time(180)
		} else {
			console.warn(`No storage block found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:plates/${metal}`).itemIds.length === 0)) {
			tconstruct.melting(Fluid.of(fluid, 90))
				.ingredient(`#forge:plates/${metal}`)
				.temperature(TEMPERATURE)
				.time(60)
			tconstruct.casting_table(`#forge:plates/${metal}`)
				.cast("#tconstruct:casts/multi_use/plate")
				.fluid(Fluid.of(fluid, 90))
				.cooling_time(60)
			tconstruct.casting_table(`#forge:plates/${metal}`)
				.cast("#tconstruct:casts/single_use/plate")
				.fluid(Fluid.of(fluid, 90))
				.cooling_time(60)
				.cast_consumed(true)
			thermal.chiller(`#forge:plates/${metal}`, [
				Fluid.of(fluid, 90),
				"thermal_extra:chiller_plate_cast"
			]).energy(4800)
		} else {
			console.warn(`No plate found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:dusts/${metal}`).itemIds.length === 0)) {
			tconstruct.melting(Fluid.of(fluid, 90))
				.ingredient(`#forge:dusts/${metal}`)
				.temperature(TEMPERATURE)
				.time(60)
		} else {
			console.warn(`No dust found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:rods/${metal}`).itemIds.length === 0)) {
			tconstruct.melting(Fluid.of(fluid, 45))
				.ingredient(`#forge:rods/${metal}`)
				.temperature(TEMPERATURE)
				.time(30)
			tconstruct.casting_table(`#forge:rods/${metal}`)
				.cast("#tconstruct:casts/multi_use/rod")
				.fluid(Fluid.of(fluid, 45))
				.cooling_time(30)
			tconstruct.casting_table(`#forge:rods/${metal}`)
				.cast("#tconstruct:casts/single_use/rod")
				.fluid(Fluid.of(fluid, 45))
				.cooling_time(30)
				.cast_consumed(true)
			thermal.chiller(`#forge:rods/${metal}`, [
				Fluid.of(fluid, 45),
				"thermal:chiller_rod_cast"
			]).energy(2400)
		} else {
			console.warn(`No rod found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:gears/${metal}`).itemIds.length === 0)) {
			tconstruct.melting(Fluid.of(fluid, 360))
				.ingredient(`#forge:gears/${metal}`)
				.temperature(TEMPERATURE)
				.time(150)
			tconstruct.casting_table(`#forge:gears/${metal}`)
				.cast("#tconstruct:casts/multi_use/gear")
				.fluid(Fluid.of(fluid, 360))
				.cooling_time(150)
			tconstruct.casting_table(`#forge:gears/${metal}`)
				.cast("#tconstruct:casts/single_use/gear")
				.fluid(Fluid.of(fluid, 360))
				.cooling_time(150)
				.cast_consumed(true)
			thermal.chiller(`#forge:gears/${metal}`, [
				Fluid.of(fluid, 360),
				"thermalconstruct:chiller_gear_cast"
			]).energy(9600)
		} else {
			console.warn(`No gear found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:coins/${metal}`).itemIds.length === 0)) {
			tconstruct.melting(Fluid.of(fluid, 30))
				.ingredient(`#forge:coins/${metal}`)
				.temperature(TEMPERATURE)
				.time(30)
			tconstruct.casting_table(`#forge:coins/${metal}`)
				.cast("#tconstruct:casts/multi_use/coin")
				.fluid(Fluid.of(fluid, 30))
				.cooling_time(30)
			tconstruct.casting_table(`#forge:coins/${metal}`)
				.cast("#tconstruct:casts/single_use/coin")
				.fluid(Fluid.of(fluid, 30))
				.cooling_time(30)
				.cast_consumed(true)
			thermal.chiller(`#forge:coins/${metal}`, [
				Fluid.of(fluid, 30),
				"thermalconstruct:chiller_coin_cast"
			]).energy(1600)
		} else {
			console.warn(`No coins found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:raw_materials/${metal}`).itemIds.length === 0)) {
			event.custom({
				"type": "tconstruct:ore_melting",
				"ingredient": {
					"tag": `forge:raw_materials/${metal}`
				},
				"rate": "metal",
				"result": {
					"amount": 90,
					"tag": `forge:molten_${metal}`
				},
				"temperature": TEMPERATURE,
				"time": 90
			})
		} else {
			console.warn(`No raw material found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:storage_blocks/raw_${metal}`).itemIds.length === 0)) {
			event.custom({
				"type": "tconstruct:ore_melting",
				"ingredient": {
					"tag": `forge:storage_blocks/raw_${metal}`
				},
				"rate": "metal",
				"result": {
					"amount": 810,
					"tag": `forge:molten_${metal}`
				},
				"temperature": TEMPERATURE,
				"time": 360
			})
		} else {
			console.warn(`No storage block found for raw ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:ores/${metal}`).itemIds.length === 0)) {
			event.custom({
				"type": "tconstruct:ore_melting",
				"ingredient": {
					"tag": `forge:ores/${metal}`
				},
				"rate": "metal",
				"result": {
					"amount": 180,
					"tag": `forge:molten_${metal}`
				},
				"temperature": TEMPERATURE,
				"time": 150
			})
		} else {
			console.warn(`No ore found for ${metal}!`)
		}
	}


	global.metalGroup.forEach((metal) => {
		if (!(Ingredient.of(`#forge:storage_blocks/${metal}`).itemIds.length === 0)) {
			kubejs.shapeless(`9x #forge:ingots/${metal}`, [`#forge:storage_blocks/${metal}`])
			kubejs.shaped(`#forge:storage_blocks/${metal}`, [
				"AAA",
				"AAA",
				"AAA"
			], {
				A: `#forge:ingots/${metal}`
			})
		} else {
			console.warn(`No storage block found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:nuggets/${metal}`).itemIds.length === 0)) {
			kubejs.shapeless(`9x #forge:nuggets/${metal}`, [`#forge:ingots/${metal}`])
			kubejs.shaped(`#forge:ingots/${metal}`, [
				"AAA",
				"AAA",
				"AAA"
			], {
				A: `#forge:nuggets/${metal}`
			})
		} else {
			console.warn(`No nugget found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:ores/${metal}`).itemIds.length === 0)) {
			// minecraft.smelting(`#forge:ingots/${metal}`, `#forge:ores/${metal}`)
			// minecraft.blasting(`#forge:ingots/${metal}`, `#forge:ores/${metal}`)
			thermal.smelter([
				`2x #forge:ingots/${metal}`,
				Item.of("thermal:rich_slag").withChance(0.2)
			], `#forge:ores/${metal}`)
			immersiveengineering.arc_furnace(`2x #forge:ingots/${metal}`)
				.input(`#forge:ores/${metal}`)
				.slag("immersiveengineering:slag")
				.time(200)
				.energy(102400)
				.additives([])
		} else {
			console.warn(`No ore found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:raw_materials/${metal}`).itemIds.length === 0)) {
			if (!(Ingredient.of(`#forge:storage_blocks/raw_${metal}`).itemIds.length === 0)) {
				kubejs.shapeless(`9x #forge:raw_materials/${metal}`, [`#forge:storage_blocks/raw_${metal}`])
				kubejs.shaped(`#forge:storage_blocks/raw_${metal}`, [
					"AAA",
					"AAA",
					"AAA"
				], {
					A: `#forge:raw_materials/${metal}`
				})
			} else {
				console.warn(`No storage block found for raw ${metal}!`)
			}
			// minecraft.smelting(`#forge:ingots/${metal}`, `#forge:raw_materials/${metal}`)
			// minecraft.blasting(`#forge:ingots/${metal}`, `#forge:raw_materials/${metal}`)
			thermal.smelter(Item.of(Ingredient.of(`#forge:ingots/${metal}`).itemIds[0]).withChance(1.5), [
				`#forge:raw_materials/${metal}`
			])
			immersiveengineering.arc_furnace(`#forge:ingots/${metal}`)
				.secondaries(Item.of(Ingredient.of(`#forge:ingots/${metal}`).itemIds[0]).withChance(0.5))
				.input(`#forge:raw_materials/${metal}`)
				.time(900)
				.energy(230400)
				.additives([])
		} else {
			console.warn(`No raw material found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:storage_blocks/raw_${metal}`).itemIds.length === 0)) {
			immersiveengineering.arc_furnace(`13x #forge:ingots/${metal}`)
				.secondaries(Item.of(Ingredient.of(`#forge:ingots/${metal}`).itemIds[0]).withChance(0.5))
				.input(`#forge:storage_blocks/raw_${metal}`)
				.energy(25600)
				.additives([])
		} else {
			console.warn(`No storage block found for raw ${metal}!`)
		}

		if (!(Ingredient.of(`#create:crushed_raw_materials/${metal}`).itemIds.length === 0)) {
			if (!(Ingredient.of(`#forge:storage_blocks/raw_${metal}`).itemIds.length === 0)) {
				create.crushing([
					`9x #create:crushed_raw_materials/${metal}`,
					Item.of("9x create:experience_nugget").withChance(0.75)
				], `#forge:storage_blocks/raw_${metal}`)
			} else {
				console.warn(`No storage block found for raw ${metal}!`)
			}
			if (!(Ingredient.of(`#forge:raw_materials/${metal}`).itemIds.length === 0)) {
				create.crushing([
					`#create:crushed_raw_materials/${metal}`,
					Item.of("create:experience_nugget").withChance(0.75)
				], `#forge:raw_materials/${metal}`)
			} else {
				console.warn(`No raw material found for ${metal}!`)
			}
			if (!(Ingredient.of(`#forge:ores/${metal}`).itemIds.length === 0)) {
				create.crushing([
					`#create:crushed_raw_materials/${metal}`,
					Item.of(Ingredient.of(`#create:crushed_raw_materials/${metal}`).itemIds[0])
						.withChance(0.75),
					Item.of("create:experience_nugget").withChance(0.75),
					Item.of("minecraft:cobblestone").withChance(0.125)
				], `#forge:ores/${metal}`)
			} else {
				console.warn(`No ore found for ${metal}!`)
			}
			minecraft.smelting(`#forge:ingots/${metal}`, `#create:crushed_raw_materials/${metal}`)
			minecraft.blasting(`#forge:ingots/${metal}`, `#create:crushed_raw_materials/${metal}`)
		} else {
			console.warn(`No crushed raw material found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:dusts/${metal}`).itemIds.length === 0)) {
			minecraft.smelting(`#forge:ingots/${metal}`, `#forge:dusts/${metal}`)
			minecraft.blasting(`#forge:ingots/${metal}`, `#forge:dusts/${metal}`)
			thermal.pulverizer(`#forge:dusts/${metal}`, `#forge:ingots/${metal}`).energy(2000)
			thermal.smelter(`#forge:ingots/${metal}`, `#forge:dusts/${metal}`).energy(1600)
			immersiveengineering.crusher(`#forge:dusts/${metal}`)
				.secondaries([])
				.input(`#forge:ingots/${metal}`)
			immersiveengineering.arc_furnace(`#forge:ingots/${metal}`)
				.secondaries([])
				.input(`#forge:dusts/${metal}`)
				.additives([])
			mekanism.crushing(`#forge:dusts/${metal}`, `#forge:ingots/${metal}`)
			if (!(Ingredient.of(`#forge:raw_materials/${metal}`).itemIds.length === 0)) {
				thermal.pulverizer(Item.of(Ingredient.of(`#forge:dusts/${metal}`).itemIds[0]).withChance(1.25)
					, `#forge:raw_materials/${metal}`
				)
				immersiveengineering.crusher(`#forge:dusts/${metal}`, `#forge:raw_materials/${metal}`)
					.secondaries(Item.of(Ingredient.of(`#forge:dusts/${metal}`).itemIds[0]).withChance(1 / 3))
				mekanism.enriching(`4x #forge:dusts/${metal}`, `3x #forge:raw_materials/${metal}`)
			} else {
				console.warn(`No raw material found for ${metal}!`)
			}
			if (!(Ingredient.of(`#forge:ores/${metal}`).itemIds.length === 0)) {
				thermal.pulverizer(`2x #forge:dusts/${metal}`, `#forge:ores/${metal}`)
				immersiveengineering.crusher(`2x #forge:dusts/${metal}`)
					.secondaries([])
					.input(`#forge:ores/${metal}`)
				mekanism.enriching(`2x #forge:dusts/${metal}`, `#forge:ores/${metal}`)
			} else {
				console.warn(`No ore found for ${metal}!`)
			}
			if (!(Ingredient.of(`#forge:storage_blocks/raw_${metal}`).itemIds.length === 0)) {
				immersiveengineering.crusher(`12x #forge:dusts/${metal}`)
					.secondaries([])
					.input(`#forge:storage_blocks/raw_${metal}`)
				mekanism.enriching(`12x #forge:dusts/${metal}`, `#forge:storage_blocks/raw_${metal}`)
			} else {
				console.warn(`No storage block found for raw ${metal}!`)
			}
		} else {
			console.warn(`No dust found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:plates/${metal}`).itemIds.length === 0)) {
			create.pressing(`#forge:plates/${metal}`, `#forge:ingots/${metal}`)
			thermal.press(`#forge:plates/${metal}`, `#forge:ingots/${metal}`)
			thermal.smelter(`#forge:ingots/${metal}`, `#forge:plates/${metal}`)
				.energy(1600)
			immersiveengineering.metal_press(`#forge:plates/${metal}`)
				.input(`#forge:ingots/${metal}`)
				.mold("immersiveengineering:mold_plate")
		} else {
			console.warn(`No plate found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:rods/${metal}`).itemIds.length === 0)) {
			createaddition.rolling(`2x #forge:rods/${metal}`, `#forge:ingots/${metal}`)
			thermal.press(`2x #forge:rods/${metal}`, [
				`#forge:ingots/${metal}`,
				"thermal_extra:press_rod_die"
			])
			immersiveengineering.metal_press(`2x #forge:rods/${metal}`)
				.input(`#forge:ingots/${metal}`)
				.mold("immersiveengineering:mold_rod")
		} else {
			console.warn(`No rod found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:gears/${metal}`).itemIds.length === 0)) {
			kubejs.shaped(`#forge:gears/${metal}`, [
				" A ",
				"A A",
				" A "
			], {
				A: `#forge:ingots/${metal}`
			})
			thermal.press(`#forge:gears/${metal}`, [
				`4x #forge:ingots/${metal}`,
				"thermal:press_gear_die"
			])
			thermal.smelter(`4x #forge:ingots/${metal}`, `#forge:gears/${metal}`)
			immersiveengineering.metal_press(`#forge:gears/${metal}`)
				.input(`4x #forge:ingots/${metal}`)
				.mold("immersiveengineering:mold_gear")
		} else {
			console.warn(`No gear found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:coins/${metal}`).itemIds.length === 0)) {
			thermal.press(`3x #forge:coins/${metal}`, [
				`#forge:ingots/${metal}`,
				"thermal:press_coin_die"
			])
			if (!(Ingredient.of(`#forge:nuggets/${metal}`).itemIds.length === 0)) {
				thermal.press(`#forge:coins/${metal}`, [
					`3x #forge:nuggets/${metal}`,
					"thermal:press_coin_die"
				]).energy(800)
				thermal.smelter(`3x #forge:nuggets/${metal}`, `#forge:coins/${metal}`)
				.energy(800)
			} else {
				console.warn(`No nuggets found for ${metal}!`)
			}
		} else {
			console.warn(`No coin found for ${metal}!`)
		}

		moltenMetalRecipeWithCondition(metal)
	})
})