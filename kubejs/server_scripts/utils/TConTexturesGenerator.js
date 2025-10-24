addTConTexture(
	"andesite_alloy",
	"A9AFA1",
	"A9AFA1",
	"E6E6DB",
	"C9CABA",
	"829789",
	"5E6963",
	"4A5451",
	"2B3635"
)
addTConTexture(
	"brass",
	"F9CB68",
	"F9CB68",
	"FCE892",
	"F8CA67",
	"B37748",
	"97593C",
	"75452C",
	"D09F54"
)
addTConTexture(
	"industrial_iron",
	"444444",
	"444444",
	"989797",
	"757171",
	"676161",
	"444444",
	"494848",
	"3F3E42"
)
addTConTexture(
	"cast_iron",
	"4C4C4C",
	"4C4C4C",
	"4C4C4C",
	"3C3C3C",
	"343434",
	"2B2B2B",
	"232323",
	"1A1A1A"
)
addTConTexture(
	"stainless_steel",
	"708090",
	"708090",
	"708090",
	"75452C",
	"97593C",
	"B37748",
	"D09F54",
	"F8CA67"
)
addTConTexture(
	"desh",
	"9E4539",
	"9E4539",
	"E9BA5D",
	"D68D4D",
	"C77142",
	"9E4539",
	"7A3045",
	"9E4539"
)
addTConTexture(
	"ostrum",
	"775360",
	"775360",
	"A86C73",
	"925E64",
	"775360",
	"553E4B",
	"42313D",
	"553E4B"
)
addTConTexture(
	"calorite",
	"9E1F3F",
	"9E1F3F",
	"DF6D5C",
	"CB4E4F",
	"B83145",
	"9E1F3F",
	"6A1534",
	"470D2F"
)
addTConTexture(
	"shadow_steel",
	"38304D",
	"38304D",
	"635D71",
	"575366",
	"4D4861",
	"38304D",
	"221C34",
	"140E2A"
)
addTConTexture(
	"refined_radiance",
	"FFFFF6",
	"FFFFF6",
	"FFFFF6",
	"FFFFF6",
	"F5FAE1",
	"D5DEC8",
	"BBC4A2",
	"A2A98C"
)

function addTConTexture(name, colour, first, second, third, forth, fifth, sixth, seventh) {
	let paletteColors = [
		first,
		second,
		third,
		forth,
		fifth,
		sixth,
		seventh
	]
	paletteColors.map((color) => {
		return color.startsWith("FF") ? color : `FF${color}`
	})

	const FILE_PATH = `kubejs/assets/${global.namespace}/tinkering/materials/${name}.json`
	JsonIO.writeAndCreateDirectories(FILE_PATH, {
		"color": colour.startsWith("FF") ? colour : `FF${colour}`,
		"fallbacks": [
			"metal"
		],
		"generator": {
			"supported_stats": [
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
			],
			"transformer": {
				"type": "tconstruct:recolor_sprite",
				"color_mapping": {
					"type": "tconstruct:grey_to_color",
					"palette": [
						{ "color": paletteColors[6], "grey": 0 },
						{ "color": paletteColors[5], "grey": 63 },
						{ "color": paletteColors[4], "grey": 102 },
						{ "color": paletteColors[3], "grey": 140 },
						{ "color": paletteColors[2], "grey": 178 },
						{ "color": paletteColors[1], "grey": 216 },
						{ "color": paletteColors[0], "grey": 255 }
					]
				}
			},
			"variant": true
		}
	})
}