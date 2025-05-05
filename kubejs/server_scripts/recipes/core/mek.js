ServerEvents.recipes((event) => {
    event.custom(
        {
            "type": "thermal_extra:component_assembly",
            "energy": 5000,
            "ingredients": [
              {
                "count": 1,
                "tag": "forge:dusts/emerald"
              },
              {
                "count": 1,
                "item": "'thermal_extra:polyolefin_plate'"
              }
            ],
            "result": [
              {
                "chance": 1.0,
                "item": "'mekanism:basic_control_circuit'"
              }
            ]
          }
    )
})