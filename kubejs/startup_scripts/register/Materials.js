let addColorMaterial = [
	["andesite_alloy", 0xC7C8B8, "wooden"],
	["cobalt", 0x2375DA, "iron"]
]

let addAloneMaterial = []
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

/* 未启用(如果需要直接取消注释便是)
StartupEvents.registry("fluid", (event) => {
	addColorMaterial.forEach(([name, color]) => {
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

	addAloneMaterial.forEach(([name]) => {
		event.create(`${global.namespace}:molten_${name}`)
			.flowingTexture(`${global.namespace}:block/fluid/alone/${name}_flowing`)
			.stillTexture(`${global.namespace}:block/fluid/alone/${name}_still`)
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
*/