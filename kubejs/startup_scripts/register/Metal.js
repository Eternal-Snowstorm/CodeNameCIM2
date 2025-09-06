let materials = []

/**
 * 函数封装
 * @param {string} name 注册ID
 * @param {Internal.ItemTintFunction_ || Internal.BlockTintFunction_ || Color_} color 颜色
 * @param {MiningLevel} level 挖掘等级
 * @type {RegisterMetalMaterial}
 * @returns 金属材料注册
 */
function addMaterial(name, color, level) {
	let material = {
		name: name,
		color: color,
		level: level,
		types: [],

		ingot: function () {
			this.types.push("ingot")
			return this
		},
		plate: function () {
			this.types.push("plate")
			return this
		},
		nugget: function () {
			this.types.push("nugget")
			return this
		},
		dust: function () {
			this.types.push("dust")
			return this
		},
		rod: function () {
			this.types.push("rod")
			return this
		},
		gear: function () {
			this.types.push("gear")
			return this
		},
		block: function () {
			this.types.push("block")
			return this
		},
		molten: function () {
			this.types.push("molten")
			return this
		},
		dirty: function () {
			this.types.push("dirty")
			return this
		},
		clump: function () {
			this.types.push("clump")
			return this
		},
		shard: function () {
			this.types.push("shard")
			return this
		},
		crystal: function () {
			this.types.push("crystal")
			return this
		},
		dirty_slurry: function () {
			this.types.push("dirty_slurry")
			return this
		},
		slurry: function () {
			this.types.push("slurry")
			return this
		}
	}

	materials.push(material)
	return material
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

			if (type === "block"
				|| type === "molten"
				|| type === "dirty_slurry"
				|| type === "slurry") {
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
addMaterial("andesite_alloy", 0xA9AFA1, "wooden")
	.nugget()
	.molten()

// 不锈钢
addMaterial("stainless_steel", 0x708090, "diamond")
	.ingot()
	.plate()
	.nugget()
	.block()
	.molten()

// 铬
addMaterial("chromium", 0xE4DBDC, "iron")
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
	.dirty_slurry()

// 铂
addMaterial("platinum", 0XA4D4DA, "iron")
	.ingot()
	.nugget()
	.block()
	.dust()
	.dirty()
	.clump()
	.shard()

// 泓钢
addMaterial("siltsteel", 0x48D1CC, "diamond")
	.ingot()
	.plate()
	.nugget()
	.block()
	.dust()
	.molten()

// 铸铁
addMaterial("cast_iron", 0x4D4D4D, "iron")
	.ingot()
	.dust()
	.nugget()
	.block()
	.molten()

// 镁
addMaterial("magnesium", 0xFDC7FF, "stone")
	.ingot()
	.plate()
	.dust()
	.nugget()
	.block()
	.molten()

// 工业铁
addMaterial("industrial_iron", 0x4E4E4E, "iron")
	.molten()

// 戴斯
addMaterial("desh", 0xD38B4C, "wooden")
	.molten()

// 紫金
addMaterial("ostrum", 0xA66B72, "wooden")
	.molten()

// 耐热金属
addMaterial("calorite", 0xC94D4E, "wooden")
	.molten()

// 钠
addMaterial("sodium", 0xD7DDDD, "wooden")
	.ingot()
	.plate()
	.dust()
	.nugget()
	.block()
	.molten()

// 钾
addMaterial("potassium", 0xDADEDF, "wooden")
	.ingot()
	.plate()
	.dust()
	.nugget()
	.block()
	.molten()

// 钙
addMaterial("calcium", 0xF2F2F2, "wooden")
	.ingot()
	.plate()
	.dust()
	.nugget()
	.block()
	.molten()

// 钒
addMaterial("vanadium", 0xF0FFFF, "stone")
	.dust()
	.dirty()
	.clump()
	.shard()
	.crystal()
	.slurry()
	.dirty_slurry()

// 钨
addMaterial("tungsten", 0x5A6C7E, "nether")
	.ingot()
	.plate()
	.dust()
	.rod()
	.block()
	.molten()

// MEK中间产物
// 锌
addMaterial("zinc", 0xA8C0A0, "stone")
	.dirty()
	.clump()
	.shard()
	.crystal()
	.slurry()
	.dirty_slurry()

// 铝
addMaterial("aluminum", 0xB8C0C0, "stone")
	.dirty()
	.clump()
	.shard()
	.crystal()
	.slurry()
	.dirty_slurry()

// 银
addMaterial("silver", 0x788090, "stone")
	.dirty()
	.clump()
	.shard()

// 镍
addMaterial("nickel", 0x989050, "stone")
	.dirty()
	.clump()
	.shard()
	.crystal()
	.slurry()
	.dirty_slurry()

// 钴
addMaterial("cobalt", 0x0098FF, "iron")
	.dirty()
	.clump()
	.shard()
	.crystal()
	.slurry()
	.dirty_slurry()