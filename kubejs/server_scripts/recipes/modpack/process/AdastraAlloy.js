ServerEvents.recipes((event) => {
    let { create, vintageimprovements, mekanism } = event.recipes

    event.custom({
        "type": "ad_astra:alloying",
        "cookingtime": 100,
        "energy": 20,
        "ingredients": [
            Ingredient.of("#forge:desh/raw").toJson(),
            Ingredient.of("#forge:ingots/aluminum").toJson()
        ],
        "result": {
            "count": 1,
            "id": "ad_astra:desh_ingot",
            "count": 4
        }
    })
    event.custom({
        "type": "ad_astra:alloying",
        "cookingtime": 100,
        "energy": 20,
        "ingredients": [
            Ingredient.of("#forge:ostrum/raw").toJson(),
            Ingredient.of("#forge:ingots/scarlet_neodymium").toJson(),
            Ingredient.of("#forge:ingots/azure_neodymium").toJson()
        ],
        "result": {
            "count": 1,
            "id": "ad_astra:ostrum_ingot",
            "count": 6
        }
    })
    event.custom({
        "type": "ad_astra:alloying",
        "cookingtime": 100,
        "energy": 20,
        "ingredients": [
            Ingredient.of("#forge:calorite/raw").toJson(),
            Ingredient.of("#forge:ingots/osmium").toJson()
        ],
        "result": {
            "count": 1,
            "id": "ad_astra:calorite_ingot",
            "count": 6
        }
    })

    // 钨钢 from 粉
    mekanism.metallurgic_infusing(
        "cmi:tungsten_steel_dust",
        "#forge:dusts/tungsten",
        { amount: 20, tag: "mekanism:carbon" },
    )

    // 钨钢 from 锭
    mekanism.metallurgic_infusing(
        "cmi:tungsten_steel_dust",
        "#forge:ingots/tungsten",
        { amount: 20, tag: "mekanism:carbon" },
    )
})