ServerEvents.highPriorityData((event) => {

    function addStationREcipe(namespace, name, tier) {
        let stationRecipe = {
            type: "ad_astra:space_station_recipe",
            dimension: `${namespace}:${name}_orbit`,
            ingredients: [{
                "count": 32,
                "ingredient": {
                    "tag": "forge:plates/stainless_steel"
                }
            },
            {
                "count": 32,
                "ingredient": {
                    "tag": "forge:rods/aluminum"
                }
            },
            {
                "count": 32,
                "ingredient": {
                    "tag": "forge:plates/polyolefin"
                }
            },
            {
                "count": 32,
                "ingredient": {
                    "tag": `cmi:tier_${tier}_aviation_mechanism`
                }
            }],
            structure: "ad_astra:space_station"
        }
        event.addJson(`${namespace}:recipes/space_station/${name}_orbit_space_station`, stationRecipe)
    }

    addStationREcipe("ad_astra", "earth", 1)
    addStationREcipe("ad_astra", "moon", 1)
    addStationREcipe("cmi", "dionysus", 1)
    addStationREcipe("ad_astra", "mars", 2)
    addStationREcipe("cmi", "hephaestus", 2)
    addStationREcipe("ad_astra", "venus", 3)
    addStationREcipe("ad_astra", "mercury", 3)
    addStationREcipe("ad_astra", "glacio", 4)

})