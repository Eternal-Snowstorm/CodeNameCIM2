ServerEvents.recipes((event) => {
	let { immersiveengineering } = event.getRecipes()

	immersiveengineering.blueprint("4x immersiveengineering:casull", [
		"2x cmi:nitrocellulose",
		"2x #forge:nuggets/lead",
		"4x immersiveengineering:empty_casing"
	]).blueprint("bullet")
		.id("immersiveengineering:blueprint/bullet_casull")

	immersiveengineering.blueprint("4x immersiveengineering:silver", [
		"2x cmi:nitrocellulose",
		"4x immersiveengineering:empty_casing",
		"2x #forge:nuggets/lead",
		"2x #forge:nuggets/silver"
	]).blueprint("bullet")
		.id("immersiveengineering:blueprint/bullet_silver")

	immersiveengineering.blueprint("4x immersiveengineering:armor_piercing", [
		"2x cmi:nitrocellulose",
		"4x immersiveengineering:empty_casing",
		"2x #forge:nuggets/steel",
		"2x #forge:nuggets/constantan"
	]).blueprint("bullet")
		.id("immersiveengineering:blueprint/bullet_armorpiercing")

	immersiveengineering.blueprint("4x immersiveengineering:buckshot", [
		"2x cmi:nitrocellulose",
		"4x immersiveengineering:empty_shell",
		"2x #forge:dusts/steel"
	]).blueprint("bullet")
		.id("immersiveengineering:blueprint/bullet_buckshot")

	immersiveengineering.blueprint("4x immersiveengineering:homing", [
		"2x cmi:nitrocellulose",
		"4x immersiveengineering:empty_casing",
		"2x #forge:nuggets/lead",
		"1x minecraft:ender_eye"
	]).blueprint("specialBullet")
		.id("immersiveengineering:blueprint/bullet_homing")

	immersiveengineering.blueprint("4x immersiveengineering:dragons_breath", [
		"2x cmi:nitrocellulose",
		"4x immersiveengineering:empty_shell",
		"4x #forge:dusts/aluminum"
	]).blueprint("specialBullet")
		.id("immersiveengineering:blueprint/bullet_dragonsbreath")

	immersiveengineering.blueprint("immersiveengineering:wolfpack", [
		"cmi:nitrocellulose",
		"immersiveengineering:empty_shell",
		"6x tconstruct:quartz_shuriken",
		"1x minecraft:ender_eye"
	]).blueprint("specialBullet")
		.id("immersiveengineering:blueprint/bullet_wolfpack")

	immersiveengineering.blueprint("immersiveengineering:he", [
		"cmi:nitrocellulose",
		"immersiveengineering:empty_casing",
		"thermal:explosive_grenade"
	]).blueprint("specialBullet")
		.id("immersiveengineering:blueprint/bullet_explosive")

	immersiveengineering.blueprint("immersiveengineering:potion", [
		"cmi:nitrocellulose",
		"immersiveengineering:empty_casing",
		"minecraft:glass_bottle"
	]).blueprint("specialBullet")
		.id("immersiveengineering:blueprint/bullet_potion")

	// 铁机械零件
	immersiveengineering.blueprint("4x immersiveengineering:component_iron", [
		"4x #forge:plates/iron",
		"#forge:gears/copper"
	]).blueprint("components")
		.id("immersiveengineering:blueprint/component_iron")

	// 钢机械零件
	immersiveengineering.blueprint("4x immersiveengineering:component_steel", [
		"4x #forge:plates/steel",
		"#forge:gears/electrum"
	]).blueprint("components")
		.id("immersiveengineering:blueprint/component_steel")

	// 真空管
	immersiveengineering.blueprint("2x immersiveengineering:electron_tube", [
		"#forge:plates/nickel",
		"#forge:wires/copper",
		"create:polished_rose_quartz"
	]).blueprint("components")
		.id("immersiveengineering:blueprint/electron_tube")

	Ingredient.of("#cmi:molds")
		.getItemIds()
		.forEach((mold) => {
			immersiveengineering.blueprint(mold, [
				"3x #forge:plates/industrial_iron",
				"#forge:wrenches"
			]).blueprint("molds")
				.id(`cmi:blueprint/${mold.replace("cmi:", "")}`)
		})
})