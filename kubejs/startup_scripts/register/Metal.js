let materials = []

/**
 * 材料类
 * @param {string} name 注册ID
 * @param {Internal.ItemTintFunction_ || Internal.BlockTintFunction_ || Color_} color 颜色
 * @param {MiningLevel} level 挖掘等级
 * @constructor
 */
function Material(name, color, level) {
	this.name = name
	this.color = color
	this.level = level
	this.types = []

	// 注册到全局材料表
	materials.push(this)
}

// 定义链式方法
Material.prototype.ingot = function () {
	this.types.push("ingot")
	return this
}
Material.prototype.plate = function () {
	this.types.push("plate")
	return this
}
Material.prototype.nugget = function () {
	this.types.push("nugget")
	return this
}
Material.prototype.dust = function () {
	this.types.push("dust")
	return this
}
Material.prototype.rod = function () {
	this.types.push("rod")
	return this
}
Material.prototype.gear = function () {
	this.types.push("gear")
	return this
}
Material.prototype.block = function () {
	this.types.push("block")
	return this
}
Material.prototype.molten = function () {
	this.types.push("molten")
	return this
}
Material.prototype.dirty = function () {
	this.types.push("dirty")
	return this
}
Material.prototype.clump = function () {
	this.types.push("clump")
	return this
}
Material.prototype.shard = function () {
	this.types.push("shard")
	return this
}
Material.prototype.crystal = function () {
	this.types.push("crystal")
	return this
}
Material.prototype.dirtySlurry = function () {
	this.types.push("dirty_slurry")
	return this
}
Material.prototype.slurry = function () {
	this.types.push("slurry")
	return this
}

StartupEvents.registry("item", (event) => {
	materials.forEach((material) => {
		material.types.forEach((type) => {
			let MetalTypeModels = {
				dirty: function () {
					return {
						"parent": "minecraft:item/generated",
						"textures": {
							"layer0": "cmi:item/material/color/layer/dirty/0",
							"layer1": "cmi:item/material/color/layer/dirty/1"
						}
					}
				}
			}

			if (type === "block" ||
				type === "molten" ||
				type === "dirty_slurry" ||
				type === "slurry"
			) {
				return
			}

			if (type === "dirty") {
				event.create(`${global.namespace}:dirty_${material.name}_dust`)
					.texture(`${global.namespace}:item/material/color/${type}`)
					.modelJson(MetalTypeModels.dirty())
					.color(0, material.color)
					.tag(`${global.namespace}:metals`)
					.tag(`mekanism:dirty_dusts`)
					.tag(`mekanism:dirty_dusts/${material.name}`)
			} else if (type === "clump" || type === "shard" || type === "crystal") {
				event.create(`${global.namespace}:${material.name}_${type}`)
					.texture(`${global.namespace}:item/material/color/${type}`)
					.color(0, material.color)
					.tag(`${global.namespace}:metals`)
					.tag(`mekanism:${type}s`)
					.tag(`mekanism:${type}s/${material.name}`)
				return
			} else {
				event.create(`${global.namespace}:${material.name}_${type}`)
					.texture(`${global.namespace}:item/material/color/${type}`)
					.color(0, material.color)
					.tag(`${global.namespace}:metals`)
					.tag(`forge:${type}s`)
					.tag(`forge:${type}s/${material.name}`)
			}
		})
	})
	console.log("Items已注册完毕!")
})
StartupEvents.registry("block", (event) => {
	materials.forEach((material) => {
		material.types.forEach((type) => {
			if (type === "block") {
				event.create(`${global.namespace}:${material.name}_block`)
					.textureAll(`${global.namespace}:block/material/color/storage_blocks`)
					.soundType(SoundType.METAL)
					.color(0, material.color)
					.hardness(5)
					.resistance(5)
					.item((item) => {
						item.color(0, material.color)
					})
					.tagBlock(global.ToolType["pickaxe"])
					.tagBlock(global.MiningLevel[material.level])
					.tag(`${global.namespace}:metals`)
					.tag("forge:storage_blocks")
					.tag(`forge:storage_blocks/${material.name}`)
			}
		})
	})
	console.log("Blocks已注册完毕!")
})
StartupEvents.registry("fluid", (event) => {
	materials.forEach((material) => {
		material.types.forEach((type) => {
			if (type === "molten") {
				event.create(`${global.namespace}:molten_${material.name}`)
					.thinTexture(material.color)
					.bucketColor(material.color)
					.flowingTexture(`${global.namespace}:fluid/metal/flow`)
					.stillTexture(`${global.namespace}:fluid/metal/still`)
					.tag("forge:molten_materials")
					.tag(`forge:molten_${material.name}`)
					.tag(`tconstruct:molten_${material.name}`)

				if (Platform.isClientEnvironment()) {
					let file = `kubejs/assets/${global.namespace}/models/item/molten_${material.name}_bucket.json`
					JsonIO.write(file, {
						"parent": "forge:item/bucket_drip",
						"loader": "forge:fluid_container",
						"fluid": `${global.namespace}:molten_${material.name}`
					})
				}
			}
		})
	})
	console.log("Fluid已注册完毕!")
})
StartupEvents.registry("mekanism:slurry", (event) => {
	materials.forEach((material) => {
		material.types.forEach((type) => {
			if (type === "dirty_slurry") {
				event.create(`${global.namespace}:dirty_${material.name}_slurry`)
					.texture("mekanism:slurry/dirty")
					.color(material.color)
					.tag("mekanism:dirty")
					.tag(`mekanism:dirty/${material.name}`)
			} else if (type === "slurry") {
				event.create(`${global.namespace}:${material.name}_slurry`)
					.texture("mekanism:slurry/clean")
					.color(material.color)
					.tag("mekanism:clean")
					.tag(`mekanism:clean/${material.name}`)
			}
		})
	})
	console.log("Slurry已注册完毕!")
})

// 安山合金
new Material("andesite_alloy", 0xA9AFA1, "wood")
	.nugget()
	.molten()

// 不锈钢
new Material("stainless_steel", 0x708090, "diamond")
	.ingot()
	.plate()
	.nugget()
	.block()
	.molten()

// 铬
new Material("chromium", 0xE4DBDC, "iron")
	.ingot()
	.plate()
	.dust()
	.nugget()
	.block()
	.molten()
	.dirty()
	.clump()
	.shard()
	.crystal()
	.slurry()
	.dirtySlurry()

// 铂
new Material("platinum", 0XA4D4DA, "iron")
	.ingot()
	.nugget()
	.block()
	.dust()
	.dirty()
	.clump()
	.shard()

// 泓钢
new Material("siltsteel", 0x48D1CC, "diamond")
	.ingot()
	.plate()
	.nugget()
	.block()
	.dust()
	.molten()

// 铸铁
new Material("cast_iron", 0x4D4D4D, "iron")
	.ingot()
	.dust()
	.nugget()
	.block()
	.molten()

// 镁
new Material("magnesium", 0xFDC7FF, "stone")
	.ingot()
	.plate()
	.dust()
	.nugget()
	.block()
	.molten()

// 工业铁
new Material("industrial_iron", 0x4E4E4E, "iron")
	.molten()

// 埃忒恩
new Material("etrium", 0x32FFD4, "diamond")
	.molten()
	.dust()

// 钠
new Material("sodium", 0xD7DDDD, "wooden")
	.ingot()
	.plate()
	.dust()
	.nugget()
	.block()
	.molten()

// 钾
new Material("potassium", 0xDADEDF, "wooden")
	.ingot()
	.plate()
	.dust()
	.nugget()
	.block()
	.molten()

// 钙
new Material("calcium", 0xF2F2F2, "wooden")
	.ingot()
	.plate()
	.dust()
	.nugget()
	.block()
	.molten()

// 钒
new Material("vanadium", 0xF0FFFF, "stone")
	.dust()
	.dirty()
	.clump()
	.shard()
	.crystal()
	.slurry()
	.dirtySlurry()

// 钨
new Material("tungsten", 0x5A6C7E, "nether")
	.ingot()
	.nugget()
	.plate()
	.dust()
	.rod()
	.block()

// 钨钢
new Material("tungsten_steel", 0x82998C, "diamond")
	.ingot()
	.nugget()
	.plate()
	.block()
	.molten()
	.rod()
	.gear()
	.dust()

// 暗影钢
new Material("shadow_steel", 0x383040, "diamond")
	.nugget()
	.molten()

// 光辉石
new Material("refined_radiance", 0xE8E8F8, "diamond")
	.nugget()
	.molten()

// 戴斯
new Material("desh", 0xD38B4C, "wooden")
	.molten()
	.dust()

// 紫金
new Material("ostrum", 0xA66B72, "wooden")
	.molten()
	.dust()

// 耐热金属
new Material("calorite", 0xC94D4E, "wooden")
	.molten()
	.dust()

// 赤铷合金
new Material("scarlet_neodymium", 0xB91919, "stone")
	.dust()
	.molten()

// 青铷合金
new Material("azure_neodymium", 0x1936B9, "stone")
	.dust()
	.molten()

// MEK中间产物
// 锌
new Material("zinc", 0xA8C0A0, "stone")
	.dirty()
	.clump()
	.shard()
	.crystal()
	.slurry()
	.dirtySlurry()

// 铝
new Material("aluminum", 0xB8C0C0, "stone")
	.dirty()
	.clump()
	.shard()
	.crystal()
	.slurry()
	.dirtySlurry()

// 银
new Material("silver", 0x788090, "stone")
	.dirty()
	.clump()
	.shard()

// 镍
new Material("nickel", 0x989050, "stone")
	.dirty()
	.clump()
	.shard()
	.crystal()
	.slurry()
	.dirtySlurry()

// 钴
new Material("cobalt", 0x0098FF, "iron")
	.dirty()
	.clump()
	.shard()
	.crystal()
	.slurry()
	.dirtySlurry()