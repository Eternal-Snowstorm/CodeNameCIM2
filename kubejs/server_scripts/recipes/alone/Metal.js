let metalGroup = [
	"andesite_alloy",
	"aluminum",
	"brass",
	"bronze",
	"cobalt",
	"constantan",
	"copper",
	"electrum",
	"gold",
	"invar",
	"iron",
	"lead",
	"lumium",
	"netherite",
	"nickel",
	"osmium",
	"signalum",
	"silver",
	"steel",
	"tin",
	"zinc",
	"rose_gold",
	"hepatizon",
	"manyullyn",
	"amethyst_bronze",
	"vanadium",
	"chromium",
	"enderium",
	"platinum",
	"uranium",
	"desh",
	"ostrum",
	"calorite",
	"prismalium",
	"melodium",
	"stellarium",
	"soul_infused",
	"shellite",
	"twinite",
	"dragonsteel",
	"abyssal",
	"stainless_steel",
	"slimesteel",
	"pig_iron",
	"cinderslime",
	"queens_slime"
]
ServerEvents.recipes((event) => {
	let { minecraft, kubejs, create, createaddition, thermal } = event.recipes

	metalGroup.forEach((metal) => {
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
			thermal.smelter([
				`#forge:ingots/${metal}`,
				Item.of(Ingredient.of(`#forge:ingots/${metal}`).itemIds[0]).withChance(0.5)
			], `#forge:raw_materials/${metal}`)
		} else {
			console.warn(`No raw material found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:plates/${metal}`).itemIds.length === 0)) {
			create.pressing(`#forge:plates/${metal}`, `#forge:ingots/${metal}`)
			thermal.press(`#forge:plates/${metal}`, `#forge:ingots/${metal}`)
			thermal.smelter(`#forge:ingots/${metal}`, `#forge:plates/${metal}`).energy(1600)
		} else {
			console.warn(`No plate found for ${metal}!`)
		}

		if (!(Ingredient.of(`#forge:dusts/${metal}`).itemIds.length === 0)) {
			minecraft.smelting(`#forge:ingots/${metal}`, `#forge:dusts/${metal}`)
			minecraft.blasting(`#forge:ingots/${metal}`, `#forge:dusts/${metal}`)
			thermal.pulverizer(`#forge:dusts/${metal}`, `#forge:ingots/${metal}`).energy(2000)
			thermal.smelter(`#forge:ingots/${metal}`, `#forge:dusts/${metal}`).energy(1600)
			if (!(Ingredient.of(`#forge:raw_materials/${metal}`).itemIds.length === 0)) {
				thermal.pulverizer([
					`#forge:dusts/${metal}`,
					Item.of(Ingredient.of(`#forge:dusts/${metal}`).itemIds[0]).withChance(0.25)
				], `#forge:raw_materials/${metal}`)
			} else {
				console.warn(`No raw material found for ${metal}!`)
			}
			if (!(Ingredient.of(`#forge:ores/${metal}`).itemIds.length === 0)) {
				thermal.pulverizer(`2x #forge:dusts/${metal}`, `#forge:ores/${metal}`)
			} else {
				console.warn(`No ore found for ${metal}!`)
			}
		} else {
			console.warn(`No dust found for ${metal}!`)
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