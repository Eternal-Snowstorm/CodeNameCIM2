ServerEvents.recipes((event) => {
	let { create , vintageimprovements} = event.recipes

	// 1
	create.filling('minecraft:small_amethyst_bud',
		[Fluid.of("minecraft:water", 200),
            'thermal_extra:amethyst_dust'
        ])
	// 2
	create.filling('minecraft:medium_amethyst_bud',
		[Fluid.of("minecraft:water", 200),
            'minecraft:small_amethyst_bud'
        ])
	// 3
	create.filling('minecraft:large_amethyst_bud',
		[Fluid.of("minecraft:water", 200),
            'minecraft:medium_amethyst_bud'
        ])
	// 4
	create.filling('minecraft:amethyst_cluster',
		[Fluid.of("minecraft:water", 200),
            'minecraft:large_amethyst_bud'
        ])

    //萤石
    vintageimprovements.laser_cutting("minecraft:glowstone_dust",['thermal_extra:amethyst_dust']).energy(50)
})




//[, , , , , 'minecraft:amethyst_shard']