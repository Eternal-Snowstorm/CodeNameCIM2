let Metals = [
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
	"stainless_steel"
]
ServerEvents.recipes((event) => {
let { kubejs, create, thermal } = event.recipes
Metals.forEach((metal) => {
	if(!Ingredient.of(`#forge:storage_blocks/${metal}`).isEmpty())
	{
		kubejs.shapeless(`9x #forge:ingots/${metal}`,[`#forge:storage_blocks/${metal}`])
		kubejs.shapeless(`#forge:storage_blocks/${metal}`,[`9x #forge:ingots/${metal}`])
	}else{
		console.warn(`No storage block found of ${metal}!`)
	}

	if(!Ingredient.of(`#forge:nuggets/${metal}`).isEmpty())
	{
		kubejs.shapeless(`9x #forge:nuggets/${metal}`,[`#forge:ingots/${metal}`])
		kubejs.shapeless(`#forge:ingots/${metal}`,[`9x #forge:nuggets/${metal}`])
	}else{
		console.warn(`No nugget found of ${metal}!`)
	}

	if(!Ingredient.of(`#forge:raw_materials/${metal}`).isEmpty())
	{
		if(!Ingredient.of(`#forge:storage_blocks/raw_${metal}`).isEmpty())
		{
			kubejs.shapeless(`9x #forge:raw_materials/${materials}`,[`#forge:storage_blocks/raw_${metal}`])
			kubejs.shapeless(`#forge:storage_blocks/raw_${metal}`,[`9x #forge:raw_materials/${metal}`])
		}else{
			console.warn(`No storage block found of raw ${metal}!`)
		}
	}else{
		console.warn(`No raw material found of ${metal}!`)
	}

	if(!Ingredient.of(`#forge:plates/${metal}`).isEmpty())
	{
		create.pressing(`#forge:ingots/${metal}`,`#forge:plates/${metal}`)
		thermal.press(`#forge:ingots/${metal}`,`#forge:plates/${metal}`)
	}else{
		console.warn(`No plate found of ${metal}!`)
	}
})
})