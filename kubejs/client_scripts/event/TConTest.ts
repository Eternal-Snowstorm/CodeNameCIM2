/* Just Debug Use
TConJSEvents.materialColorSprite((event) => {
	event.add("cmi", "ardite", (builder) => {
		builder.color("FFF9CB68")
			.fallback("metal")
			.supportedStats([
				"tconstruct:head",
				"tconstruct:handle",
				"tconstruct:binding",
				"tconstruct:repair_kit",
				"tconstruct:armor_plating",
				"tconstruct:plating_helmet",
				"tconstruct:plating_chestplate",
				"tconstruct:plating_leggings",
				"tconstruct:plating_boots",
				"tconstruct:plating_shield",
				"tconstruct:maille",
				"tconstruct:armor_maille",
				"tconstruct:limb",
				"tconstruct:grip"
			])
			.transformerType("tconstruct:recolor_sprite")
			.colorMappingType("tconstruct:grey_to_color")
			.addPalette(0, "D09F54")
			.addPalette(63, "75452B")
			.addPalette(102, "9759BC")
			.addPalette(140, "B37748")
			.addPalette(178, "F8CA87")
			.addPalette(216, "FCE802")
			.addPalette(255, "F9CB38")
	})
})
*/