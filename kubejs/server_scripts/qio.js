ServerEvents.recipes(event =>{
    const create = event.recipes.create
    event.custom({
        "type": "create:item_application",
        "ingredients": [
          {
            "item": 'ue_addons:qio_empty'
          },
          {
            "item": 'mekanism:qio_drive_base'
          }
        ],
        "results": [
          {
            "item": 'ue_addons:qio_one'
          }
        ]
      });
      event.custom({
        "type": "create:item_application",
        "ingredients": [
          {
            "item": 'ue_addons:qio_empty'
          },
          {
            "item": 'mekanism:qio_drive_hyper_dense'
          }
        ],
        "results": [
          {
            "item": 'ue_addons:qio_two'
          }
        ]
      });
      event.custom({
        "type": "create:item_application",
        "ingredients": [
          {
            "item": 'ue_addons:qio_empty'
          },
          {
            "item": 'mekanism:qio_drive_time_dilating'
          }
        ],
        "results": [
          {
            "item": 'ue_addons:qio_three'
          }
        ]
      });
      event.custom({
        "type": "create:item_application",
        "ingredients": [
          {
            "item": 'ue_addons:qio_empty'
          },
          {
            "item": 'mekanism:qio_drive_supermassive'
          }
        ],
        "results": [
          {
            "item": 'ue_addons:qio_four'
          }
        ]
      });
      create.cutting('mekanism:qio_drive_base','ue_addons:qio_one')
      create.cutting('mekanism:qio_drive_hyper_dense','ue_addons:qio_two')
      create.cutting('mekanism:qio_drive_time_dilating','ue_addons:qio_three')
      create.cutting('mekanism:qio_drive_supermassive','ue_addons:qio_four')
      event.shaped('ue_addons:qio_empty',[
        ['immersiveengineering:plate_steel','ue_addons:coil_mechanism','immersiveengineering:plate_steel'],
        ['immersiveengineering:plate_steel','mekanism:ultimate_control_circuit','immersiveengineering:plate_steel'],
        ['immersiveengineering:plate_steel','immersiveengineering:plate_steel','immersiveengineering:plate_steel']
    ]);
});
BlockEvents.rightClicked(event => {
    const { player, item, block } = event;
    if (item.id === 'ue_addons:nuclear_mechanism' && block.id === 'ue_addons:qio_one') 
        {block.set('ue_addons:qio_two');

    }else if (item.id === 'ue_addons:nuclear_mechanism' && block.id === 'ue_addons:qio_two') 
        {block.set('ue_addons:qio_three');
            
    }else if (item.id === 'ue_addons:nuclear_mechanism' && block.id === 'ue_addons:qio_three') 
        {block.set('ue_addons:qio_four');}
});
