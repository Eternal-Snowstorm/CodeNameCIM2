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
	.color(0xC7C8B8, 0xe3e3d8, 0x809587)
	.nugget()
	.molten()

// 不锈钢
new Material("stainless_steel", "diamond")
	.color(0x647280, 0x6f7e8e, 0x4c5661)
	.ingot()
	.plate()
	.nugget()
	.block()
	.molten()

// 铬
new Material("chromium", "iron")
	.color(0xebe3e4, 0xffffff, 0xb2acad)
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
	.color(0x92bdc2, 0xe1d8d9, 0x6f8f93)
	.ingot()
	.nugget()
	.block()
	.dust()
	.dirty()
	.clump()
	.shard()

// 泓钢
new Material("siltsteel", "diamond")
	.color(0x40bab6, 0x47cfca, 0x318d8a)
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
	.color(0xe2b1e3, 0xfac5fc, 0xab86ac)
	.ingot()
	.plate()
	.dust()
	.nugget()
	.block()
	.molten()

// 工业铁
new Material("industrial_iron", "iron")
	.color(0x626262, 0x777575, 0x4e4e4e)
	.molten()

// 埃忒恩
new Material("etrium", "diamond")
	.color(0xbafcf6, 0xfcfcfc, 0x80d8b9)
	.molten()
	.dust()

// 钠
new Material("sodium", "wooden")
	.color(0xc0c5c5, 0xd4dada, 0x919595)
	.ingot()
	.plate()
	.dust()
	.nugget()
	.block()
	.molten()

// 钾
new Material("potassium", "wooden")
	.color(0xc2c6c7, 0xd7dbdc, 0x939696)
	.ingot()
	.plate()
	.dust()
	.nugget()
	.block()
	.molten()

// 钙
new Material("calcium", "wooden")
	.color(0xd8d8d8, 0xefefef, 0xa3a3a3)
	.ingot()
	.plate()
	.dust()
	.nugget()
	.block()
	.molten()

// 钒
new Material("vanadium", "stone")
	.color(0xd4e7e5, 0xfcfcfc, 0xb4ccc8)
	.dust()
	.dirty()
	.clump()
	.shard()
	.crystal()
	.slurry()
	.dirtySlurry()

// 钨
new Material("tungsten", "nether")
	.color(0x506070, 0x596b7d, 0x3d4955)
	.ingot()
	.nugget()
	.plate()
	.dust()
	.rod()
	.block()

// 钨钢
new Material("tungsten_steel", "diamond")
	.color(0x74887d, 0x80978a, 0x58675e)
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
	.color(0x5f5d6a, 0x655c77, 0x3f364c)
	.nugget()
	.molten()

// 光辉石
new Material("refined_radiance", "diamond")
	.color(0xffffff, 0xffffff, 0xdbddde)
	.nugget()
	.molten()

// 戴斯
new Material("desh", "wooden")
	.color(0xd38b4c, 0xe6b85c, 0xc57041)
	.molten()
	.dust()
	.gear()

// 紫金
new Material("ostrum", "wooden")
	.color(0xa66b72, 0xbd7980, 0x76525f)
	.molten()
	.dust()
	.gear()

// 耐热金属
new Material("calorite", "wooden")
	.color(0xc94d4e, 0xdc6c5b, 0x9c1f3e)
	.molten()
	.dust()
	.gear()

// 赤钕合金
new Material("scarlet_neodymium", "stone")
	.color(0xb91919, 0xfc002a, 0x6f2021)
	.dust()
	.nugget()
	.molten()

// 青钕合金
new Material("azure_neodymium", "stone")
	.color(0x1937bb, 0x005fec, 0x202f6f)
	.dust()
	.nugget()
	.molten()

// MEK中间产物
// 锌
new Material("zinc", "stone")
	.color(0xd3fcd9, 0xfcfcfc, 0xa3be9e)
	.dirty()
	.clump()
	.shard()
	.crystal()
	.slurry()
	.dirtySlurry()

// 铝
new Material("aluminum", "stone")
	.color(0xe1eeed, 0xfcfcfc, 0xc1c8cb)
	.dirty()
	.clump()
	.shard()
	.crystal()
	.slurry()
	.dirtySlurry()

// 银
new Material("silver", "stone")
	.color(0x9dabb2, 0xbccad0, 0x748190)
	.dirty()
	.clump()
	.shard()

// 镍
new Material("nickel", "stone")
	.color(0xc5b582, 0xe4d196, 0xae9e74)
	.dirty()
	.clump()
	.shard()
	.crystal()
	.slurry()
	.dirtySlurry()

// 钴
new Material("cobalt", "iron")
	.color(0x2375da, 0x58a4ec, 0x0752b6)
	.dirty()
	.clump()
	.shard()
	.crystal()
	.slurry()
	.dirtySlurry()