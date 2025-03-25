ServerEvents.recipes(event =>{  //这段是117458866249那个人写的 不会用event.recipes.create.item_applycation方法 教程网站都连不上 666这个入是桂
    event.custom({
        "type": "create:item_application",
        "ingredients": [
          {
            "item": 'create:item_vault'
          },
          {
            "item": 'ue_addons:creative_mechanism'
          }
        ],
        "results": [
          {
            "item": 'create:creative_crate'
          }
        ]
    });
    event.custom({
        "type": "create:item_application",
        "ingredients": [
          {
            "item": 'create:fluid_tank'
          },
          {
            "item": 'ue_addons:creative_mechanism'
          }
        ],
        "results": [
          {
            "item": 'create:creative_fluid_tank'
          }
        ]
    });
    event.custom({
        "type": "create:item_application",
        "ingredients": [
          {
            "item": 'createaddition:electric_motor'
          },
          {
            "item": 'ue_addons:creative_mechanism'
          }
        ],
        "results": [
          {
            "item": 'create:creative_motor'
          }
        ]
    });
    event.custom({
        "type": "create:item_application",
        "ingredients": [
          {
            "item": 'createaddition:modular_accumulator'
          },
          {
            "item": 'ue_addons:creative_mechanism'
          }
        ],
        "results": [
          {
            "item": 'createaddition:creative_energy'
          }
        ]
    });
    event.recipes.create.deploying('create:creative_blaze_cake',['create:blaze_cake','ue_addons:creative_mechanism']).keepHeldItem()
    event.custom({
        "type": "create:item_application",
        "ingredients": [
          {
            "item": 'ae2:dense_energy_cell'
          },
          {
            "item": 'ue_addons:creative_mechanism'
          }
        ],
        "results": [
          {
            "item": 'ae2:creative_energy_cell'
          }
        ]
    });
    event.custom({
        "type": "create:item_application",
        "ingredients": [
          {
            "item": 'immersiveengineering:capacitor_hv'
          },
          {
            "item": 'ue_addons:creative_mechanism'
          }
        ],
        "results": [
          {
            "item": 'immersiveengineering:capacitor_creative'
          }
        ]
    });
    event.custom({
        "type": "create:item_application",
        "ingredients": [
          {
            "item": 'mekanism:ultimate_energy_cube'
          },
          {
            "item": 'ue_addons:creative_mechanism'
          }
        ],
        "results": [
          {
            "item": 'mekanism:creative_energy_cube'
          }
        ]
    });
    event.custom({
        "type": "create:item_application",
        "ingredients": [
          {
            "item": 'create_connected:fluid_vessel'
          },
          {
            "item": 'ue_addons:creative_mechanism'
          }
        ],
        "results": [
          {
            "item": 'create_connected:creative_fluid_vessel'
          }
        ]
    });
    event.custom({
        "type": "create:item_application",
        "ingredients": [
          {
            "item": 'create_connected:encased_chain_cogwheel'
          },
          {
            "item": 'ue_addons:creative_mechanism'
          }
        ],
        "results": [
          {
            "item": 'createcasing:creative_cogwheel'
          }
        ]
    });
});