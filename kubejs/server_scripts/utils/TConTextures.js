addTConTexture(
    "andesite_alloy",
    "FFA9AFA1",
    "FFE6E6DB",
    "FFC9CABA",
    "FF829789",
    "FF5E6963",
    "FF4A5451",
    "FF2B3635",
    "FF000000"
)
addTConTexture(
    "brass",
    "F9CB68",
    "FFFCE892",
    "FFF8CA67",
    "FFB37748",
    "FF97593C",
    "FF75452C",
    "FFD09F54",
    "FF5F2E24"
)
addTConTexture(
    "industrial_iron",
    "444444",
    "FF989797",
    "FF757171",
    "FF676161",
    "FF444444",
    "FF494848",
    "FF3F3E42",
    "FF353438"
)
addTConTexture(
    "cast_iron",
    "4D4D4D",
    "FF757171",
    "FF676161",
    "FF444444",
    "FF494848",
    "FF3F3E42",
    "FF353438",
    "FF2B2B2E"
)
addTConTexture(
    "stainless_steel",
    "708090",
    "FF708090",
    "FF75452C",
    "FF97593C",
    "FFB37748",
    "FFD09F54",
    "FFF8CA67",
    "FFFCE892"
)
addTConTexture(
    "desh",
    "9E4539",
    "FFE9BA5D",
    "FFD68D4D",
    "FFC77142",
    "FF9E4539",
    "FF7A3045",
    "FF9E4539",
    "FF7A3045"
)
addTConTexture(
    "ostrum",
    "775360",
    "FFA86C73",
    "FF925E64",
    "FF775360",
    "FF553E4B",
    "FF42313D",
    "FF553E4B",
    "FF42313D"
)
addTConTexture(
    "calorite",
    "9E1F3F",
    "FFDF6D5C",
    "FFCB4E4F",
    "FFB83145",
    "FF9E1F3F",
    "FF6A1534",
    "FF6A1534",
    "FF470D2F"
)
addTConTexture(
    "shadow_steel",
    "38304D",
    "FF635D71",
    "FF575366",
    "FF4D4861",
    "FF38304D",
    "FF221C34",
    "FF140E2A",
    "FF0B0719"
)
addTConTexture(
    "refined_radiance",
    "FFFFF6",
    "FFFFFFF6",
    "FFFFFFF6",
    "FFFFFFF6",
    "FFF5FAE1",
    "FFD5DEC8",
    "FFBBC4A2",
    "FFA2A98C"
)

function addTConTexture(name, colour, first, second, third, forth, fifth, sixth, seventh) {
    JsonIO.write(`kubejs/assets/${global.namespace}/tinkering/materials/${name}.json`, {
        "color": colour,
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
                        {
                            "color": seventh,
                            "grey": 0
                        },
                        {
                            "color": sixth,
                            "grey": 63
                        },
                        {
                            "color": fifth,
                            "grey": 102
                        },
                        {
                            "color": forth,
                            "grey": 140
                        },
                        {
                            "color": third,
                            "grey": 178
                        },
                        {
                            "color": second,
                            "grey": 216
                        },
                        {
                            "color": first,
                            "grey": 255
                        }
                    ]
                }
            },
            "variant": true
        }
    })
}