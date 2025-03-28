 let addColorMaterial = [
	// 安山合金
	["andesite_alloy", 0xA9AFA1, "wooden"],
	// 铝
	["aluminum", 0xD6DEE5, "stone"],
	// 黄铜
	["brass", 0xFCE892, "iron"],
	// 青铜
	["bronze", 0xF1A82D, "stone"],
	// 钴
	["cobalt", 0x2375DA, "iron"],
	// 康铜
	["constantan", 0xECBF62, "stone"],
	// 铜
	["copper", 0xFAD384, "stone"],
	// 琥珀金
	["electrum", 0xFCCE50, "iron"],
	// 金
	["gold", 0xFFFF40, "iron"],
	// 殷钢
	["invar", 0xD4DBD6, "iron"],
	// 铁
	["iron", 0xFFFFFF, "stone"],
	// 铅
	["lead", 0x5D5975, "iron"],
	// 下界合金
	["netherite", 0x595659, "diamond"],
	// 镍
	["nickel", 0xE4D196, "stone"],
	// 锇
	["osmium", 0xD6F0F9, "stone"],
	// 银
	["silver", 0xE1FFFF, "iron"],
	// 钢
	["steel", 0x808080, "iron"],
	// 锡
	["tin", 0xE1FFFF, "stone"],
	// 锌
	["zinc", 0xB9E9C1, "iron"],
	// 玫瑰金
	["rose_gold", 0xFDD3C1, "iron"],
	// 黑色科斯林青铜
	["hepatizon", 0x5F486A, "diamond"],
	// 玛玉灵
	["manyullyn", 0x9060CA, "diamond"],
	// 紫水晶青铜
	["amethyst_bronze", 0xEBC4DB, "iron"],
	// 钒
	["vanadium", 0xF0FFFF, "iron"]
]

let addAloneMaterial = []

let addPlate = [
	// 流明
	["lumium", 0xFCEEA8],
	// 信素 
	["signalum", 0xF86014],
	// 末影
	["enderium", 0x1D7D8A]
]
let addAlonePlate = []

let addMoltenFluid = [
	["andesite_alloy", 0xA9AFA1],
	["vanadium", 0xF0FFFF]
]

let addAloneMoltenFluid = []
StartupEvents.registry("item", (event) => {
	addColorMaterial.forEach(([name, color]) => {
		event.create(`${global.namespace}:${name}_ingot`)
			.color(color)
			.texture(`${global.namespace}:item/material/color/ingot`)
			.tag("forge:ingots")
			.tag(`forge:ingots/${name}`)
			.tag("forge:ingots/metal")
			.tag(`forge:ingots/metal/${name}`)

		event.create(`${global.namespace}:${name}_nugget`)
			.color(color)
			.texture(`${global.namespace}:item/material/color/nugget`)
			.tag("forge:nuggets")
			.tag(`forge:nuggets/${name}`)
			.tag("forge:nuggets/metal")
			.tag(`forge:nuggets/metal/${name}`)

		event.create(`${global.namespace}:${name}_plate`)
			.color(color)
			.texture(`${global.namespace}:item/material/color/plate`)
			.tag("forge:plates")
			.tag(`forge:plates/${name}`)
			.tag("forge:plates/metal")
			.tag(`forge:plates/metal/${name}`)
	})

	addAloneMaterial.forEach(([name]) => {
		event.create(`${global.namespace}:${name}_ingot`)
			.texture(`${global.namespace}:item/material/alone/${name}/ingot`)
			.tag("forge:ingots")
			.tag(`forge:ingots/${name}`)
			.tag("forge:ingots/metal")
			.tag(`forge:ingots/metal/${name}`)

		event.create(`${global.namespace}:${name}_nugget`)
			.texture(`${global.namespace}:item/material/alone/${name}/nugget`)
			.tag("forge:nuggets")
			.tag(`forge:nuggets/${name}`)
			.tag("forge:nuggets/metal")
			.tag(`forge:nuggets/metal/${name}`)

		event.create(`${global.namespace}:${name}_plate`)
			.texture(`${global.namespace}:item/material/alone/${name}/plate`)
			.tag("forge:plates")
			.tag(`forge:plates/${name}`)
			.tag("forge:plates/metal")
			.tag(`forge:plates/metal/${name}`)
	})
	addPlate.forEach(([name,color])=>{
		event.create(`${global.namespace}:${name}_plate`)
			.color(color)
			.texture(`${global.namespace}:item/material/color/plate`)
			.tag("forge:plates")
			.tag(`forge:plates/${name}`)
			.tag("forge:plates/metal")
			.tag(`forge:plates/metal/${name}`)
	})
	addAlonePlate.forEach(([name])=>{
		event.create(`${global.namespace}:${name}_plate`)
			.texture(`${global.namespace}:item/material/alone/${name}/plate`)
			.tag("forge:plates")
			.tag(`forge:plates/${name}`)
			.tag("forge:plates/metal")
			.tag(`forge:plates/metal/${name}`)
	})
})

StartupEvents.registry("block", (event) => {
	addColorMaterial.forEach(([name, color, level]) => {
		event.create(`${global.namespace}:${name}_block`)
			.color(color)
			.hardness(5)
			.resistance(5)
			.soundType(SoundType.METAL)
			.textureAll(`${global.namespace}:block/material/color/storage_blocks`)
			.tag("forge:storage_blocks")
			.tag(`forge:storage_blocks/${name}`)
			.tag("forge:storage_blocks/metal")
			.tag(`forge:storage_blocks/metal/${name}`)
			.tagBlock(global.toolType["pickaxe"])
			.tagBlock(global.miningLevel[level])
			.requiresTool(true)
			.item((event) => {
				event.color(color)
			})
	})

	addAloneMaterial.forEach(([name, level]) => {
		event.create(`${global.namespace}:${name}_block`)
			.hardness(5)
			.resistance(5)
			.soundType(SoundType.METAL)
			.textureAll(`${global.namespace}:block/material/alone/${name}/storage_blocks`)
			.tag("forge:storage_blocks")
			.tag(`forge:storage_blocks/${name}`)
			.tag("forge:storage_blocks/metal")
			.tag(`forge:storage_blocks/metal/${name}`)
			.tagBlock(global.toolType["pickaxe"])
			.tagBlock(global.miningLevel[level])
			.requiresTool(true)
	})
})

StartupEvents.registry("fluid", (event) => {
	addMoltenFluid.forEach(([name, color]) => {
		event.create(`${global.namespace}:molten_${name}`)
			.thinTexture(color)
			.bucketColor(color)
			.flowingTexture(`${global.namespace}:block/fluid/flowing`)
			.stillTexture(`${global.namespace}:block/fluid/still`)
			.tag("forge:molten_materials")
			.tag(`forge:molten_${name}`)
			.tag(`tconstruct:molten_${name}`)

		// 生成Json模型文件
		JsonIO.write(`kubejs/assets/${global.namespace}/models/item/molten_${name}_bucket.json`, {
			"parent": "forge:item/bucket_drip",
			"loader": "forge:fluid_container",
			"fluid": `${global.namespace}:molten_${name}`
		})
	})

	addAloneMoltenFluid.forEach(([name]) => {
		event.create(`${global.namespace}:molten_${name}`)
			.flowingTexture(`${global.namespace}:block/fluid/alone/${name}/flowing`)
			.stillTexture(`${global.namespace}:block/fluid/alone/${name}/still`)
			.tag("forge:molten_materials")
			.tag(`forge:molten_${name}`)
			.tag(`tconstruct:molten_${name}`)

		JsonIO.write(`kubejs/assets/${global.namespace}/models/item/molten_${name}_bucket.json`, {
			"parent": "forge:item/bucket_drip",
			"loader": "forge:fluid_container",
			"fluid": `${global.namespace}:molten_${name}`
		})
	})
})