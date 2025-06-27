ServerEvents.recipes((event) => {
	let { minecraft, kubejs, create, createaddition, thermal, immersiveengineering, mekanism } = event.recipes

	function moltenMetalRecipeWithCondition(metal) {
		event.custom({
			"type": "tconstruct:melting",
			"conditions": [
				{
					"type":"mantle:tag_filled",
					"registry": "minecraft:fluid",
					"tag": `#forge:molten_${metal}`
				}
			],
			"ingredient": {
				"tag": `#forge:ingots/${metal}`
			},
			"result": {
				"tag": `forge:molten_${metal}`,
				"amount": 90
			},
			"temperature": 800,
			"time": 60
		})
		
		if (!(Ingredient.of(`#forge:nuggets/${metal}`).itemIds.length === 0)) {
			event.custom({
				"type": "tconstruct:melting",
				"conditions": [
					{
						"type":"mantle:tag_filled",
						"registry": "minecraft:fluid",
						"tag": `#forge:molten_${metal}`
					}
				],
				"ingredient": {
					"tag": `#forge:nuggets/${metal}`
				},
				"result": {
					"tag": `forge:molten_${metal}`,
					"amount": 10
				},
				"temperature": 800,
				"time": 20
			})
		} else {
			console.warn(`No nugget found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:storage_blocks/${metal}`).itemIds.length === 0)) {
			event.custom({
				"type": "tconstruct:melting",
				"conditions": [
					{
						"type":"mantle:tag_filled",
						"registry": "minecraft:fluid",
						"tag": `#forge:molten_${metal}`
					}
				],
				"ingredient": {
					"tag": `#forge:storage_blocks/${metal}`
				},
				"result": {
					"tag": `forge:molten_${metal}`,
					"amount": 810
				},
				"temperature": 800,
				"time": 180
			})
		} else {
			console.warn(`No storage block found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:plates/${metal}`).itemIds.length === 0)) {
			event.custom({
				"type": "tconstruct:melting",
				"conditions": [
					{
						"type":"mantle:tag_filled",
						"registry": "minecraft:fluid",
						"tag": `#forge:molten_${metal}`
					}
				],
				"ingredient": {
					"tag": `#forge:plates/${metal}`
				},
				"result": {
					"tag": `forge:molten_${metal}`,
					"amount": 90
				},
				"temperature": 800,
				"time": 60
			})
		} else {
			console.warn(`No plate found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:dusts/${metal}`).itemIds.length === 0)) {
			event.custom({
				"type": "tconstruct:melting",
				"conditions": [
					{
						"type":"mantle:tag_filled",
						"registry": "minecraft:fluid",
						"tag": `#forge:molten_${metal}`
					}
				],
				"ingredient": {
					"tag": `#forge:dusts/${metal}`
				},
				"result": {
					"tag": `forge:molten_${metal}`,
					"amount": 90
				},
				"temperature": 800,
				"time": 60
			})
		} else {
			console.warn(`No dust found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:rods/${metal}`).itemIds.length === 0)) {
			event.custom({
				"type": "tconstruct:melting",
				"conditions": [
					{
						"type":"mantle:tag_filled",
						"registry": "minecraft:fluid",
						"tag": `#forge:molten_${metal}`
					}
				],
				"ingredient": {
					"tag": `#forge:rods/${metal}`
				},
				"result": {
					"tag": `forge:molten_${metal}`,
					"amount": 45
				},
				"temperature": 800,
				"time": 30
			})
		} else {
			console.warn(`No rod found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:gears/${metal}`).itemIds.length === 0)) {
			event.custom({
				"type": "tconstruct:melting",
				"conditions": [
					{
						"type":"mantle:tag_filled",
						"registry": "minecraft:fluid",
						"tag": `#forge:molten_${metal}`
					}
				],
				"ingredient": {
					"tag": `#forge:gears/${metal}`
				},
				"result": {
					"tag": `forge:molten_${metal}`,
					"amount": 90
				},
				"temperature": 800,
				"time": 150
			})
		} else {
			console.warn(`No gear found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:raw_materials/${metal}`).itemIds.length === 0)) {
			event.custom({
				"type": "tconstruct:ore_melting",
				"conditions": [
					{
						"type":"mantle:tag_filled",
						"registry": "minecraft:fluid",
						"tag": `#forge:molten_${metal}`
					}
				],
				"ingredient": {
					"tag": `forge:raw_materials/${metal}`
				},
				"rate": "metal",
				"result": {
					"amount": 90,
					"tag": `forge:molten_${metal}`
				},
				"temperature": 1000,
				"time": 90
			})
		} else {
			console.warn(`No raw material found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:storage_blocks/raw_${metal}`).itemIds.length === 0)) {
			event.custom({
				"type": "tconstruct:ore_melting",
				"conditions": [
					{
						"type":"mantle:tag_filled",
						"registry": "minecraft:fluid",
						"tag": `#forge:molten_${metal}`
					}
				],
				"ingredient": {
					"tag": `forge:storage_blocks/raw_${metal}`
				},
				"rate": "metal",
				"result": {
					"amount": 810,
					"tag": `forge:molten_${metal}`
				},
				"temperature": 1000,
				"time": 360
			})
		} else {
			console.warn(`No storage block found for raw ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:ores/${metal}`).itemIds.length === 0)) {
			event.custom({
				"type": "tconstruct:ore_melting",
				"conditions": [
					{
						"type":"mantle:tag_filled",
						"registry": "minecraft:fluid",
						"tag": `#forge:molten_${metal}`
					}
				],
				"ingredient": {
					"tag": `forge:ores/${metal}`
				},
				"rate": "metal",
				"result": {
					"amount": 180,
					"tag": `forge:molten_${metal}`
				},
				"temperature": 1000,
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
					Item.of("9x create:experience_nugget").withChance(0.75)],
					`#forge:storage_blocks/raw_${metal}`)
			} else {
				console.warn(`No storage block found for raw ${metal}!`)
			}
			if (!(Ingredient.of(`#forge:raw_materials/${metal}`).itemIds.length === 0)) {
				create.crushing([
					`#create:crushed_raw_materials/${metal}`,
					Item.of("create:experience_nugget").withChance(0.75)],
					`#forge:raw_materials/${metal}`)
			} else {
				console.warn(`No raw material found for ${metal}!`)
			}
			if (!(Ingredient.of(`#forge:ores/${metal}`).itemIds.length === 0)) {
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
			immersiveengineering.arc_furnace(`#forge:ingots/${metal}`)
				.secondaries([])
				.input(`#forge:dusts/${metal}`)
				.additives([])
			mekanism.crushing(`#forge:dusts/${metal}`, `#forge:ingots/${metal}`)
			if (!(Ingredient.of(`#forge:raw_materials/${metal}`).itemIds.length === 0)) {
				thermal.pulverizer(
					Item.of(Ingredient.of(`#forge:dusts/${metal}`).itemIds[0]).withChance(1.25)
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

		moltenMetalRecipeWithCondition(metal)
	})
})