ServerEvents.recipes(event => {
    event.custom(
        {
	"type":"vintageimprovements:pressurizing",
	"ingredients": [ 
		{
			"item": "create:crushed_raw_iron",
            "count":4
		},
		{
			"tag": "forge:coal_coke"
		},
		{
			"item": "create:limestone"
		},
	],
	"results": [
		{
			"item": "cmi:cast_iron_ingot"
		},
		{
			"item": "thermal:slag"
		}
	],
	"processingTime": 200,
    "heatRequirement": "superheated",
}
    )




    event.custom(
        {
	"type":"vintageimprovements:pressurizing",
	"ingredients": [ 
		{
			"item": "create:crushed_raw_iron",
            "count":4
		},
		{
			"tag": "forge:coal_coke"
		},
		{
			"item": "minecraft:calcite"
		},
	],
	"results": [
		{
			"item": "cmi:cast_iron_ingot"
		},
		{
			"item": "thermal:slag"
		}
	],
	"processingTime": 200,
    "heatRequirement": "superheated",
}
    )



    event.custom({
  "type": "create:sequenced_assembly",
  "ingredient": [{
    "tag": "forge:plates/cast_iron"
  }],
  "loops": 10,
  "results": [
    {
      "item": "tconstruct:steel_ingot"
    }
  ],
  "sequence": [
    {
      "type": "create:pressing",
      "ingredients": [
        {
          "item": "immersiveengineering:dust_iron"
        }
      ],
      "results": [
        {
          "item": "immersiveengineering:dust_iron"
        }
      ]
    }
  ],
  "transitionalItem": {
    "item": "immersiveengineering:dust_iron"
  }
}
    )


/*
//idk why it error()


    event.custom({
  "type": "ad_astra:alloying",
  "cookingtime": 10,
  "energy": 5,
  "ingredients": [
    {
      "item": "minecraft:iron_block"
    }
  ],
  "result": [
    {
    "count": 1,
    "item": "tconstruct:steel_block"
  }]
}
    )
*/


    event.custom({
        "type":"immersiveengineering:arc_furnace",
        "additives":[],
        "energy":2048,
        "input":{"tag":"forge:ingots/iron"},
        "results":[{"item":"tconstruct:steel_ingot"}],
        "slag":{"item":"thermal:slag"},
        "time":20
    }
    )



    event.custom({
        "type":"immersiveengineering:arc_furnace",
        "additives":[],
        "energy":10240,
        "input":{"tag":"forge:storage_blocks/iron"},
        "results":[{"item":"tconstruct:steel_block"}],
        "slag":{"item":"thermal:slag"},
        "time":100
    }
    )


    
})


