ServerEvents.recipes((event) => {
    let removeRecipeIds = [
		"ad_astra:rocket_nose_cone",
		"ad_astra:rocket_fin",
        "ad_astra:refining/fuel_from_refining_oil",
        "ad_astra:oxygen_loading/oxygen_from_oxygen_loading_water",
        "ad_astra:blasting/desh_ingot_from_blasting_raw_desh",
        "ad_astra:smelting/desh_ingot_from_smelting_raw_desh",
        "ad_astra:blasting/ostrum_ingot_from_blasting_raw_ostrum",
        "ad_astra:smelting/ostrum_ingot_from_smelting_raw_ostrum",
        "ad_astra:blasting/calorite_ingot_from_blasting_raw_calorite",
        "ad_astra:smelting/calorite_ingot_from_smelting_raw_calorite"
    ]
    removeRecipeIds.forEach((id) => {
        event.remove({
            id: id
        })
    })
})