ServerEvents.recipes((event) => {

    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "middle": {
                "tag": "forge:ingots/etrium"
            },
            "top": {
                "item": "ae2:engineering_processor_press"
            }
        },
        "mode": "inscribe",
        "result": {
            "item": "ae2:printed_engineering_processor"
        }
    }).id("ae2:inscriber/engineering_processor_print")

    event.custom({
        "type": "expatternprovider:circuit_cutter",
        "fluid_input": {
            "amount": 100,
            "ingredient": {
                "fluid": "minecraft:water"
            }
        },
        "item_input": {
            "amount": 1,
            "ingredient": {
                "tag": "forge:storage_blocks/etrium"
            }
        },
        "output": {
            "count": 9,
            "item": "ae2:printed_engineering_processor"
        }
    }).id("expatternprovider:cutter/engineering")
    
})