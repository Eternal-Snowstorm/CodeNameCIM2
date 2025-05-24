ServerEvents.recipes((event)=>{
	let { vintageimprovements, create } = event.recipes
//我不是故意用custom的，但是写别的报错啊啊啊啊啊啊
//当然你不介意的话就留着，介意就改成create js
//——UE
    event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "item": "ae2:charged_certus_quartz_crystal"
    },
    {
      "amount": 100,
      "fluid": "immersiveengineering:redstone_acid",
      "nbt": {}
    }
  ],
  "results": [
    {
      "item": "create:rose_quartz"
    }
  ]
}

    )

    vintageimprovements.polishing([
		Item.of("minecraft:redstone").withChance(0.25),
		'minecraft:amethyst_shard'
	], 'cmi:charged_amethyst')


event.custom({
  "type": "create:deploying",
  "ingredients": [
    {
      "item": "create:polished_rose_quartz"
    },
    {
      "tag": "forge:plates/iron"
    }
  ],
  "results": [
    {
      "item": "create:electron_tube"
    }
  ]
})
    
})