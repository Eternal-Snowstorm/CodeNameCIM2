ServerEvents.recipes((event) => {
	let { minecraft, kubejs, create, createaddition, thermal, immersiveengineering } = event.recipes

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
			minecraft.smelting(`#forge:ingots/${metal}`, `#forge:ores/${metal}`)
			minecraft.blasting(`#forge:ingots/${metal}`, `#forge:ores/${metal}`)
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
			minecraft.smelting(`#forge:ingots/${metal}`, `#forge:raw_materials/${metal}`)
			minecraft.blasting(`#forge:ingots/${metal}`, `#forge:raw_materials/${metal}`)
			thermal.smelter(
				Item.of(Ingredient.of(`#forge:ingots/${metal}`).itemIds[0]).withChance(1.5)
			, `#forge:raw_materials/${metal}`)
			immersiveengineering.arc_furnace(`#forge:ingots/${metal}`)
			.secondaries([Item.of(Ingredient.of(`#forge:ingots/${metal}`).itemIds[0]).withChance(0.5)])
			.input(`#forge:raw_materials/${metal}`)
			.slag("immersiveengineering:slag")
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
			if(!(Ingredient.of(`#forge:storage_blocks/raw_${metal}`).itemIds.length === 0)) {
				create.crushing([
					`9x #create:crushed_raw_materials/${metal}`,
					Item.of("9x create:experience_nugget").withChance(0.75)],
				`#forge:storage_blocks/raw_${metal}`)
			} else {
				console.warn(`No storage block found for raw ${metal}!`)
			}
			if(!(Ingredient.of(`#forge:raw_materials/${metal}`).itemIds.length === 0)) {
				create.crushing([
					`#create:crushed_raw_materials/${metal}`,
					Item.of("create:experience_nugget").withChance(0.75)],
				`#forge:raw_materials/${metal}`)
			} else {
				console.warn(`No raw material found for ${metal}!`)
			}
			if(!(Ingredient.of(`#forge:ores/${metal}`).itemIds.length === 0)) {
				create.crushing([
					`#create:crushed_raw_materials/${metal}`,
					Item.of(Ingredient.of(`#create:crushed_raw_materials/${metal}`).itemIds[0])
						.withChance(0.75),
					Item.of("create:experience_nugget").withChance(0.75),
					Item.of("minecraft:cobblestone").withChance(0.125)],
				`#forge:ores/${metal}`)
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
			immersiveengineering.arc_furnace(`forge:ingots/${metal}`)
				.secondaries([])
				.input(`#forge:dusts/${metal}`)
				.additives([])
			if (!(Ingredient.of(`#forge:raw_materials/${metal}`).itemIds.length === 0)) {
				thermal.pulverizer(
					Item.of(Ingredient.of(`#forge:dusts/${metal}`).itemIds[0]).withChance(1.25)
					, `#forge:raw_materials/${metal}`
				)
				immersiveengineering.crusher(`#forge:dusts/${metal}`, `#forge:raw_materials/${metal}`)
					.secondaries(Item.of(Ingredient.of(`#forge:dusts/${metal}`).itemIds[0]).withChance(1/3))
			} else {
				console.warn(`No raw material found for ${metal}!`)
			}
			if (!(Ingredient.of(`#forge:ores/${metal}`).itemIds.length === 0)) {
				thermal.pulverizer(`2x #forge:dusts/${metal}`, `#forge:ores/${metal}`)
				immersiveengineering.crusher(`2x #forge:dusts/${metal}`)
					.secondaries([])
					.input(`#forge:ores/${metal}`)
			} else {
				console.warn(`No ore found for ${metal}!`)
			}
			if (!(Ingredient.of(`#forge:storage_blocks/raw_${metal}`).itemIds.length === 0)) {
				immersiveengineering.crusher(`12x #forge:dusts/${metal}`)
					.secondaries([])
					.input(`#forge:storage_blocks/raw_${metal}`)
			} else {
				console.warn(`No storage block found for raw ${metal}!`)
			}
		} else {
			console.warn(`No dust found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:plates/${metal}`).itemIds.length === 0)) {
			create.pressing(`#forge:plates/${metal}`, `#forge:ingots/${metal}`)
			thermal.press(`#forge:plates/${metal}`, `#forge:ingots/${metal}`)
			thermal.smelter(`#forge:ingots/${metal}`, `#forge:plates/${metal}`).energy(1600)
		} else {
			console.warn(`No plate found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:rods/${metal}`).itemIds.length === 0)) {
			createaddition.rolling(`2x #forge:rods/${metal}`, `#forge:ingots/${metal}`)
			thermal.press(`2x #forge:rods/${metal}`, [`#forge:ingots/${metal}`, "thermal_extra:press_rod_die"])
		} else {
			console.warn(`No rod found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:gears/${metal}`).itemIds.length === 0)) {
			kubejs.shaped(`#forge:gears/${metal}`, [
				" A ",
				"ABA",
				" A "
			], {
				A: `#forge:ingots/${metal}`,
				B: "#forge:nuggets/iron"
			})
			thermal.press(`#forge:gears/${metal}`, [
				`4x #forge:ingots/${metal}`,
				"thermal:press_gear_die"
			])
			thermal.smelter(`4x #forge:ingots/${metal}`, `#forge:gears/${metal}`)
		} else {
			console.warn(`No gear found for ${metal}!`)
		}
	})
})