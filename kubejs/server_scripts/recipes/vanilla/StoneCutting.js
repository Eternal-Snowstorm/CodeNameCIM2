ServerEvents.recipes((event) => {
	let { minecraft } = event.recipes

	minecraft.stonecutting("immersiveengineering:sheetmetal_iron", "#forge:plates/iron")
	minecraft.stonecutting("#forge:plates/iron", "immersiveengineering:sheetmetal_iron")

	minecraft.stonecutting("immersiveengineering:sheetmetal_copper", "#forge:plates/copper")
	minecraft.stonecutting("#forge:plates/copper", "immersiveengineering:sheetmetal_copper")

	minecraft.stonecutting("immersiveengineering:sheetmetal_steel", "#forge:plates/steel")
	minecraft.stonecutting("#forge:plates/steel", "immersiveengineering:sheetmetal_steel")

	minecraft.stonecutting("immersiveengineering:sheetmetal_aluminum", "#forge:plates/aluminum")
	minecraft.stonecutting("#forge:plates/aluminum", "immersiveengineering:sheetmetal_aluminum")

	minecraft.stonecutting("immersiveengineering:sheetmetal_lead", "#forge:plates/lead")
	minecraft.stonecutting("#forge:plates/lead", "immersiveengineering:sheetmetal_lead")

	minecraft.stonecutting("immersiveengineering:sheetmetal_silver", "#forge:plates/silver")
	minecraft.stonecutting("#forge:plates/silver", "immersiveengineering:sheetmetal_silver")

	minecraft.stonecutting("immersiveengineering:sheetmetal_uranium", "#forge:plates/uranium")
	minecraft.stonecutting("#forge:plates/uranium", "immersiveengineering:sheetmetal_uranium")

	minecraft.stonecutting("immersiveengineering:sheetmetal_nickel", "#forge:plates/nickel")
	minecraft.stonecutting("#forge:plates/nickel", "immersiveengineering:sheetmetal_nickel")

	minecraft.stonecutting("immersiveengineering:sheetmetal_constantan", "#forge:plates/constantan")
	minecraft.stonecutting("#forge:plates/constantan", "immersiveengineering:sheetmetal_constantan")

	minecraft.stonecutting("immersiveengineering:sheetmetal_electrum", "#forge:plates/electrum")
	minecraft.stonecutting("#forge:plates/electrum", "immersiveengineering:sheetmetal_electrum")

	minecraft.stonecutting("immersiveengineering:sheetmetal_steel", "#forge:plates/steel")
	minecraft.stonecutting("#forge:plates/steel", "immersiveengineering:sheetmetal_steel")

	minecraft.stonecutting("immersiveengineering:sheetmetal_gold", "#forge:plates/gold")
	minecraft.stonecutting("#forge:plates/gold", "immersiveengineering:sheetmetal_gold")
})