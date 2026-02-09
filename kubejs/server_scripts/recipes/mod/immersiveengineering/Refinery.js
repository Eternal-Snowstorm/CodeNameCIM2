ServerEvents.recipes((event) => {
    // 聚烯烃
    event.custom({
        "type": "immersiveengineering:refinery",
        "catalyst": {
            "tag": "forge:plates/aluminum"
        },
        "energy": 120,
        "input0": {
            "amount": 8,
            "tag": "forge:ethene"
        },
        "result": {
            "amount": 8,
            "fluid": "thermal_extra:polyolefin"
        }
    })

    // 乙醛副配方
    event.custom({
        "type": "immersiveengineering:refinery",
        "catalyst": {
            "tag": "forge:plates/copper"
        },
        "energy": 150,
        "input0": {
            "amount": 8,
            "tag": "forge:ethanol"
        },
        "result": {
            "amount": 8,
            "fluid": "immersiveengineering:acetaldehyde"
        }
    })

    // 三氧化硫
    event.custom({
        "type": "immersiveengineering:refinery",
        "catalyst": {
            "tag": "forge:plates/vanadium"
        },
        "energy": 150,
        "input0": {
            "amount": 8,
            "tag": "forge:sulfur_dioxide"
        },
        "result": {
            "amount": 8,
            "fluid": "mekanism:sulfur_trioxide"
        }
    }).id("vintageimprovements:pressurizing/sulfur_trioxide")

})