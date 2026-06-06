ServerEvents.recipes((event) => {
    let { vintageimprovements, create } = event.getRecipes()

    event.remove({
        type: "immersiveindustry:electrolyzer",
        output: "immersiveengineering:dust_aluminum"
    })

    event.custom({
        "type": "immersiveindustry:electrolyzer",
        "fluid": {
            "tag": "cmi:sea_water",
            "amount": 1000
        },
        "result_fluid": {
            "fluid": "cmi:caustic_soda_solution",
            "amount": 200
        },
        "result": {
            "item": "mekanism:salt",
            "count": 1
        },
        "large_only": true,
        "time": 200
    })

    create.mixing([Fluid.of("cmi:sodium_aluminate_solution", 200),"cmi:red_mud"], [
        "#create:crushed_raw_materials/aluminum", Fluid.of("cmi:caustic_soda_solution", 1000)
    ])


    vintageimprovements.pressurizing([
        "cmi:aluminum_oxide", Fluid.of("cmi:turbid_waste_liquid", 100)
    ], [
        Fluid.of("cmi:sodium_aluminate_solution", 100)
    ]).heated()

    event.custom({
        "type": "immersiveindustry:electrolyzer",
        "input": {
            "tag": "cmi:aluminum_oxide"
        },
        "result": {
            "item": "immersiveengineering:dust_aluminum",
            "count": 1
        },
        "large_only": true,
        "time": 200
    })
})