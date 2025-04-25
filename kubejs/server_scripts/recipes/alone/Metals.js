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
		"chrome",
		"enderium",
		"iridium",
		"mithril",
		"platinum",
		"tungsten",
		"uranium",
		"chromium",
		"stainless_steel",
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
        "abyssal"
	]
ServerEvents.recipes((event) => {
let { kubejs, create, thermal } = event.recipes
    Metals.forEach((metal) => {
        kubejs.shapeless(`9x #forge:ingots/${metal}`,[`#forge:storage_blocks/${metal}`])
        kubejs.shapeless(`9x #forge:nuggets/${metal}`,[`#forge:ingots/${metal}`])
        kubejs.shapeless(`9x #forge:raw_materials/${materials}`,[`#forge:storage_blocks/raw_${metal}`])
        kubejs.shapeless(`#forge:storage_blocks/${metal}`,[`9x #forge:ingots/${metal}`])
        kubejs.shapeless(`#forge:ingots/${metal}`,[`9x #forge:nuggets/${metal}`])
        kubejs.shapeless(`#forge:storage_blocks/raw_${metal}`,[`9x #forge:raw_materials/${metal}`])

        create.pressing(`#forge:ingots/${metal}`,`#forge:plates/${metal}`)
        thermal.press(`#forge:ingots/${metal}`,`#forge:plates/${metal}`)
    })
})