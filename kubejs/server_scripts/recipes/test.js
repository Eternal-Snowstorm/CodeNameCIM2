ServerEvents.recipes((event) => {
    event.custom(
        {
        "type": "buildcraftsilicon:programming",
        "energyCost": 12800000000,
        "input": {
            "item": "minecraft:stone"
        },
        "output": {
            "item": "buildcraftrobotics:board_robot_bomber"
        }
    })
})