ServerEvents.recipes((event) => {
	let { create } = event.recipes

	// tier1
	create.sequenced_assembly("cmi:tier_1_rocket_frame", [
		"cmi:rocket_patten"
	], [
		create.deploying("cmi:incomplete_tier_1_rocket_frame", [
			"cmi:incomplete_tier_1_rocket_frame",
			"#forge:storage_blocks/steel"
		]),
		create.deploying("cmi:incomplete_tier_1_rocket_frame", [
			"cmi:incomplete_tier_1_rocket_frame",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:incomplete_tier_1_rocket_frame", [
			"cmi:incomplete_tier_1_rocket_frame",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:incomplete_tier_1_rocket_frame", [
			"cmi:incomplete_tier_1_rocket_frame",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:incomplete_tier_1_rocket_frame", [
			"cmi:incomplete_tier_1_rocket_frame",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:incomplete_tier_1_rocket_frame", [
			"cmi:incomplete_tier_1_rocket_frame",
			"#forge:storage_blocks/steel"
		]),
		create.deploying("cmi:incomplete_tier_1_rocket_frame", [
			"cmi:incomplete_tier_1_rocket_frame",
			"ad_astra:rocket_nose_cone"
		]),
	]).loops(1).transitionalItem("cmi:incomplete_tier_1_rocket_frame")



    //tier2
	create.sequenced_assembly("cmi:tier_2_rocket_frame", [
		"cmi:rocket_patten"
	], [
		create.deploying("cmi:incomplete_tier_2_rocket_frame", [
			"cmi:incomplete_tier_2_rocket_frame",
			"#forge:storage_blocks/desh"
		]),
		create.deploying("cmi:incomplete_tier_2_rocket_frame", [
			"cmi:incomplete_tier_2_rocket_frame",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:incomplete_tier_2_rocket_frame", [
			"cmi:incomplete_tier_2_rocket_frame",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:incomplete_tier_2_rocket_frame", [
			"cmi:incomplete_tier_2_rocket_frame",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:incomplete_tier_2_rocket_frame", [
			"cmi:incomplete_tier_2_rocket_frame",
			"ad_astra:rocket_fin"
		]),
		create.deploying("cmi:incomplete_tier_2_rocket_frame", [
			"cmi:incomplete_tier_2_rocket_frame",
			"#forge:storage_blocks/desh"
		]),
		create.deploying("cmi:incomplete_tier_2_rocket_frame", [
			"cmi:incomplete_tier_2_rocket_frame",
			"ad_astra:rocket_nose_cone"
		]),
	]).loops(1).transitionalItem("cmi:incomplete_tier_2_rocket_frame")


    //tier3
    create.sequenced_assembly("cmi:tier_3_rocket_frame", [
        "cmi:rocket_patten"
    ], [
        create.deploying("cmi:incomplete_tier_3_rocket_frame", [
            "cmi:incomplete_tier_3_rocket_frame",
            "#forge:storage_blocks/ostrum"
        ]),
        create.deploying("cmi:incomplete_tier_3_rocket_frame", [
            "cmi:incomplete_tier_3_rocket_frame",
            "ad_astra:rocket_fin"
        ]),
        create.deploying("cmi:incomplete_tier_3_rocket_frame", [
            "cmi:incomplete_tier_3_rocket_frame",
            "ad_astra:rocket_fin"
        ]),
        create.deploying("cmi:incomplete_tier_3_rocket_frame", [
            "cmi:incomplete_tier_3_rocket_frame",
            "ad_astra:rocket_fin"
        ]),
        create.deploying("cmi:incomplete_tier_3_rocket_frame", [
            "cmi:incomplete_tier_3_rocket_frame",
            "ad_astra:rocket_fin"
        ]),
        create.deploying("cmi:incomplete_tier_3_rocket_frame", [
            "cmi:incomplete_tier_3_rocket_frame",
            "#forge:storage_blocks/ostrum"
        ]),
        create.deploying("cmi:incomplete_tier_3_rocket_frame", [
            "cmi:incomplete_tier_3_rocket_frame",
            "ad_astra:rocket_nose_cone"
        ]),
    ]).loops(1).transitionalItem("cmi:incomplete_tier_3_rocket_frame")
    
    //tier4
    create.sequenced_assembly("cmi:tier_4_rocket_frame", [
        "cmi:rocket_patten"
    ], [
        create.deploying("cmi:incomplete_tier_4_rocket_frame", [
            "cmi:incomplete_tier_4_rocket_frame",
            "#forge:storage_blocks/calorite"
        ]),
        create.deploying("cmi:incomplete_tier_4_rocket_frame", [
            "cmi:incomplete_tier_4_rocket_frame",
            "ad_astra:rocket_fin"
        ]),
        create.deploying("cmi:incomplete_tier_4_rocket_frame", [
            "cmi:incomplete_tier_4_rocket_frame",
            "ad_astra:rocket_fin"
        ]),
        create.deploying("cmi:incomplete_tier_4_rocket_frame", [
            "cmi:incomplete_tier_4_rocket_frame",
            "ad_astra:rocket_fin"
        ]),
        create.deploying("cmi:incomplete_tier_4_rocket_frame", [
            "cmi:incomplete_tier_4_rocket_frame",
            "ad_astra:rocket_fin"
        ]),
        create.deploying("cmi:incomplete_tier_4_rocket_frame", [
            "cmi:incomplete_tier_4_rocket_frame",
            "#forge:storage_blocks/calorite"
        ]),
        create.deploying("cmi:incomplete_tier_4_rocket_frame", [
            "cmi:incomplete_tier_4_rocket_frame",
            "ad_astra:rocket_nose_cone"
        ]),
    ]).loops(1).transitionalItem("cmi:incomplete_tier_4_rocket_frame")

    
    //tier1 r
    /*
    //unfinished

    create.sequenced_assembly("ad_astra:tier_1_rocket", [
        "cmi:tier_1_rocket_frame"
    ], [
        create.deploying("cmi:incomplete_tier_1_rocket", [
            "cmi:incomplete_tier_1_rocket",
            "cmi:tier_1_aviation_mechanism"
        ]),
        create.deploying("cmi:incomplete_tier_1_rocket", [
            "cmi:incomplete_tier_1_rocket",
            "ad_astra:steel_engine"
        ])

        //激光
    ]).loops(1).transitionalItem("cmi:incomplete_tier_1_rocket")
*/

})