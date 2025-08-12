ServerEvents.recipes((event) => {
	let { thermal, kubejs } = event.recipes

    thermal.smelter(
        "thermal:enderium_ingot",
        [
            "#forge:dusts/diamond",
        ["#forge:dusts/lead","#forge:ingots/lead"],
        ["#forge:dusts/ender_pearl","minecraft:ender_pearl"]
    ])
})