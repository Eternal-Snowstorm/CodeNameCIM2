let materials = []
let DefineModels = {
	/**
	 * 
	 * @param {string} type 材料类型名称
	 * @returns 
	 */
	oneLayers: function (type) {
		return {
			parent: "minecraft:item/generated",
			textures: {
				layer0: `cmi:item/material/color/${type}/${type}`
			}
		}
	},
	/**
	 * 
	 * @param {string} type 材料类型名称
	 * @returns 
	 */
	twoLayers: function (type) {
		return {
			parent: "minecraft:item/generated",
			textures: {
				layer0: `cmi:item/material/color/${type}/${type}`,
				layer1: `cmi:item/material/color/${type}/${type}_overlay`,
			}
		}
	},
	/**
	 * 
	 * @param {string} type 材料类型名称
	 * @returns 
	 */
	threeLayers: function (type) {
		return {
			parent: "minecraft:item/generated",
			textures: {
				layer0: `cmi:item/material/color/${type}/${type}`,
				layer1: `cmi:item/material/color/${type}/${type}_overlay`,
				layer2: `cmi:item/material/color/${type}/${type}_secondary`,
			}
		}
	}
}

/**
 * 材料类
 * @param {String} name 注册ID
 * @param {MiningLevel} level 挖掘等级
 * @constructor
 */
function Material(name, level) {
	this.name = name
	this.color1 = 0xFFFFFF
	this.color2 = 0xFFFFFF
	this.color3 = 0xFFFFFF
	this.level = level
	this.types = []

	// 注册到全局材料表
	materials.push(this)
}

// 定义链式方法
Material.prototype.color = function (color1, color2, color3) {
	this.color1 = color1
	this.color2 = color2
	this.color3 = color3
	return this
}
// 注册材料
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
							"layer0": "cmi:item/material/color/dirty/0",
							"layer1": "cmi:item/material/color/dirty/1"
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
					.modelJson(MetalTypeModels.dirty())
					.color(0, material.color1)
					.tag(`${global.namespace}:metals`)
					.tag(`mekanism:dirty_dusts`)
					.tag(`mekanism:dirty_dusts/${material.name}`)
			} else if (type === "clump" || type === "shard" || type === "crystal") {
				event.create(`${global.namespace}:${material.name}_${type}`)
					.texture(`${global.namespace}:item/material/color/${type}`)
					.color(0, material.color1)
					.tag(`${global.namespace}:metals`)
					.tag(`mekanism:${type}s`)
					.tag(`mekanism:${type}s/${material.name}`)
				return
			} else {
				event.create(`${global.namespace}:${material.name}_${type}`)
					.modelJson(DefineModels.threeLayers(type))
					.color(0, material.color1)
					.color(1, material.color2)
					.color(2, material.color3)
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
					.color(0, material.color1)
					.hardness(5)
					.resistance(5)
					.item((item) => {
						item.color(0, material.color1)
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
					.thinTexture(material.color1)
					.bucketColor(material.color1)
					.flowingTexture(`${global.namespace}:fluid/metal/flow`)
					.stillTexture(`${global.namespace}:fluid/metal/still`)
					.renderType("translucent")
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
					.color(material.color1)
					.tag("mekanism:dirty")
					.tag(`mekanism:dirty/${material.name}`)
			} else if (type === "slurry") {
				event.create(`${global.namespace}:${material.name}_slurry`)
					.texture("mekanism:slurry/clean")
					.color(material.color1)
					.tag("mekanism:clean")
					.tag(`mekanism:clean/${material.name}`)
			}
		})
	})
	console.log("Slurry已注册完毕!")
})

// 安山合金
new Material("andesite_alloy", "wooden")
	.color(0xC7C8B8, 0xE3E3D8, 0x809587)
	.nugget()
	.molten()

// 不锈钢
new Material("stainless_steel", "diamond")
	.color(0x647280, 0x6F7E8E, 0x4C5661)
	.ingot()
	.plate()
	.nugget()
	.block()
	.molten()

// 铬
new Material("chromium", "iron")
	.color(0xEBE3E4, 0xFFFFFF, 0xB2ACAD)
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
new Material("platinum", "iron")
	.color(0x92BDC2, 0xE1D8D9, 0x6F8F93)
	.ingot()
	.nugget()
	.block()
	.dust()
	.dirty()
	.clump()
	.shard()

// 泓钢
new Material("siltsteel", "diamond")
	.color(0x40BAB6, 0x47CFCA, 0x318D8A)
	.ingot()
	.plate()
	.nugget()
	.block()
	.dust()
	.molten()

// 铸铁
new Material("cast_iron", "iron")
	.color(0x454545, 0x454545, 0x343434)
	.ingot()
	.dust()
	.nugget()
	.block()
	.molten()

// 镁
new Material("magnesium", "stone")
	.color(0xE2B1E3, 0xFAC5FC, 0xAB86AC)
	.ingot()
	.plate()
	.dust()
	.nugget()
	.block()
	.molten()

// 工业铁
new Material("industrial_iron", "iron")
	.color(0x626262, 0x777575, 0x4E4E4E)
	.molten()

// 埃忒恩
new Material("etrium", "diamond")
	.color(0xBAFCF6, 0xFCFCFC, 0x80D8B9)
	.molten()
	.dust()

// 钠
new Material("sodium", "wooden")
	.color(0xC0C5C5, 0xD4DADA, 0x919595)
	.ingot()
	.plate()
	.dust()
	.nugget()
	.block()
	.molten()

// 钾
new Material("potassium", "wooden")
	.color(0xC2C6C7, 0xD7DBDC, 0x939696)
	.ingot()
	.plate()
	.dust()
	.nugget()
	.block()
	.molten()

// 钙
new Material("calcium", "wooden")
	.color(0xD8D8D8, 0xEFEFEF, 0xA3A3A3)
	.ingot()
	.plate()
	.dust()
	.nugget()
	.block()
	.molten()

// 钒
new Material("vanadium", "stone")
	.color(0xD4E7E5, 0xFCFCFC, 0xB4CCC8)
	.dust()
	.dirty()
	.clump()
	.shard()
	.crystal()
	.slurry()
	.dirtySlurry()

// 钨
new Material("tungsten", "nether")
	.color(0x506070, 0x596B7D, 0x3D4955)
	.ingot()
	.nugget()
	.plate()
	.dust()
	.rod()
	.block()

// 钨钢
new Material("tungsten_steel", "diamond")
	.color(0x74887D, 0x80978A, 0x58675E)
	.ingot()
	.nugget()
	.plate()
	.block()
	.molten()
	.rod()
	.gear()
	.dust()

// 暗影钢
new Material("shadow_steel", "diamond")
	.color(0x5F5D6A, 0x655C77, 0x3F364C)
	.nugget()
	.molten()

// 光辉石
new Material("refined_radiance", "diamond")
	.color(0xFFFFFF, 0xFFFFFF, 0xDBDDDE)
	.nugget()
	.molten()

// 戴斯
new Material("desh", "wooden")
	.color(0xD38B4C, 0xE6B85C, 0xC57041)
	.molten()
	.dust()
	.gear()

// 紫金
new Material("ostrum", "wooden")
	.color(0xA66B72, 0xBD7980, 0x76525F)
	.molten()
	.dust()
	.gear()

// 耐热金属
new Material("calorite", "wooden")
	.color(0xC94D4E, 0xDC6C5B, 0x9C1F3E)
	.molten()
	.dust()
	.gear()

// 赤钕合金
new Material("scarlet_neodymium", "stone")
	.color(0xB91919, 0xFC002A, 0x6F2021)
	.dust()
	.nugget()
	.molten()

// 青钕合金
new Material("azure_neodymium", "stone")
	.color(0x1937BB, 0x005FEC, 0x202F6F)
	.dust()
	.nugget()
	.molten()

// MEK中间产物
// 锌
new Material("zinc", "stone")
	.color(0xD3FCD9, 0xFCFCFC, 0xA3BE9E)
	.dirty()
	.clump()
	.shard()
	.crystal()
	.slurry()
	.dirtySlurry()

// 铝
new Material("aluminum", "stone")
	.color(0xE1EEED, 0xFCFCFC, 0xC1C8CB)
	.dirty()
	.clump()
	.shard()
	.crystal()
	.slurry()
	.dirtySlurry()

// 银
new Material("silver", "stone")
	.color(0x9DABB2, 0xBCCAD0, 0x748190)
	.dirty()
	.clump()
	.shard()

// 镍
new Material("nickel", "stone")
	.color(0xC5B582, 0xE4D196, 0xAE9E74)
	.dirty()
	.clump()
	.shard()
	.crystal()
	.slurry()
	.dirtySlurry()

// 钴
new Material("cobalt", "iron")
	.color(0x2375DA, 0x58A4EC, 0x0752B6)
	.dirty()
	.clump()
	.shard()
	.crystal()
	.slurry()
	.dirtySlurry()

// 镀铬钢
new Material("chromeplated_steel", "diamond")
	.color(0xE4DBDC, 0xDBD3D4, 0x726F73)
	.gear()

// 超导汞
new Material("superconducting_mercury", "diamond")
	.color(0xA9C0FF, 0x91AED9, 0x7D84B8)
	.ingot()
	.plate()