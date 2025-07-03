ServerEvents.recipes((event) => {
    let { vintageimprovements, create } = event.recipes
//我还没写完！！！！！！！！！！！！！！！

//advanced
    event.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": {
                "item": "mekanism:alloy_infused"
            },
            "loops": 1,
            "results": [
                {
                    "item": "mekanism:advanced_control_circuit"
                }
            ],
            "sequence": [
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "cmi:incomplete_advanced_control_circuit"
                        },
                        {
                            "item": "mekanism:basic_control_circuit"
                        }
                    ],
                    "results": [
                        {
                            "item": "cmi:incomplete_advanced_control_circuit"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "cmi:incomplete_advanced_control_circuit"
                        },
                        {
                            "tag": "forge:plates/platinum"
                        }
                    ],
                    "results": [
                        {
                            "item": "cmi:incomplete_advanced_control_circuit"
                        }
                    ]
                },
                {
                    "type": "create:pressing", 
                    "ingredients": [
                        {
                            "item": "cmi:incomplete_advanced_control_circuit"
                        }
                    ],
                    "results": [
                        {
                            "item": "cmi:incomplete_advanced_control_circuit"
                        }
                    ]

                }

            ],
            "transitionalItem": {
                "item": "cmi:incomplete_advanced_control_circuit"
            }
        }
    )
    //elite
        event.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": {
                "item": "mekanism:alloy_reinforced"
            },
            "loops": 1,
            "results": [
                {
                    "item": "mekanism:elite_control_circuit"
                }
            ],
            "sequence": [
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "cmi:incomplete_elite_control_circuit"
                        },
                        {
                            "item": "mekanism:advanced_control_circuit"
                        }
                    ],
                    "results": [
                        {
                            "item": "cmi:incomplete_elite_control_circuit"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "cmi:incomplete_elite_control_circuit"
                        },
                        {
                            "tag": "forge:plates/ostrum"
                        }
                    ],
                    "results": [
                        {
                            "item": "cmi:incomplete_elite_control_circuit"
                        }
                    ]
                },
                {
                    "type": "create:pressing", 
                    "ingredients": [
                        {
                            "item": "cmi:incomplete_elite_control_circuit"
                        }
                    ],
                    "results": [
                        {
                            "item": "cmi:incomplete_elite_control_circuit"
                        }
                    ]

                }

            ],
            "transitionalItem": {
                "item": "cmi:incomplete_elite_control_circuit"
            }
        }
    )
//ultimate
    event.custom(
        {
            "type": "create:sequenced_assembly",
            "ingredient": {
                "item": "mekanism:alloy_atomic"
            },
            "loops": 1,
            "results": [
                {
                    "item": "mekanism:ultimate_control_circuit"
                }
            ],
            "sequence": [
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "cmi:incomplete_ultimate_control_circuit"
                        },
                        {
                            "item": "mekanism:elite_control_circuit"
                        }
                    ],
                    "results": [
                        {
                            "item": "cmi:incomplete_ultimate_control_circuit"
                        }
                    ]
                },
                {
                    "type": "create:deploying",
                    "ingredients": [
                        {
                            "item": "cmi:incomplete_ultimate_control_circuit"
                        },
                        {
                            "tag": "forge:plates/calorite"
                        }
                    ],
                    "results": [
                        {
                            "item": "cmi:incomplete_ultimate_control_circuit"
                        }
                    ]
                },
                {
                    "type": "create:pressing", 
                    "ingredients": [
                        {
                            "item": "cmi:incomplete_ultimate_control_circuit"
                        }
                    ],
                    "results": [
                        {
                            "item": "cmi:incomplete_ultimate_control_circuit"
                        }
                    ]

                }

            ],
            "transitionalItem": {
                "item": "cmi:incomplete_ultimate_control_circuit"
            }
        }
    )
})