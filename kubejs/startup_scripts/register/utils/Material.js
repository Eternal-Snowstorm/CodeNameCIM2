// priority: 102

let materials = []

/**
 * 模型定义
 * 根据 overlay 决定 2 / 3 层
 * 
 * @param {string} type 
 * @param {boolean} overlay 
 * @returns 
 */
function defineModels(type, overlay) {
	let textures = {
		layer0: `cmi:item/material/color/${type}/${type}`,
		layer1: `cmi:item/material/color/${type}/${type}_secondary`
	}

	if (overlay) {
		textures.layer2 = `cmi:item/material/color/${type}/${type}_overlay`
	}

	return {
		parent: "minecraft:item/generated",
		textures: textures
	}
}

/**
 * @constructor
 * @param {string} name
 * @param {MiningLevel} level
 */
function Material(name, level) {
	this.name = name
	this.color1 = 0xFFFFFF
	this.color2 = 0xFFFFFF
	this.metal = false
	this.level = level
	this.types = []
	this.blockSound = null

	materials.push(this)
}
/**
 * 
 * @param {MaterialColor} color1 
 * @param {MaterialColor} color2 
 * @returns 
 */
Material.prototype.color = function (color1, color2) {
	this.color1 = color1
	this.color2 = color2
	return this
}
Material.prototype.isMetal = function () {
	this.metal = true
	return this
}
/**
 * 内部方法: 默认 overlay = true
 * 
 * @param {string} type
 * @param {boolean} overlay
 */
Material.prototype.pushType = function (type, overlay) {
	this.types.push({
		type: type,
		overlay: overlay !== false
	})
	return this
}
Material.prototype.ingot = function (overlay) {
	return this.pushType("ingot", overlay)
}
Material.prototype.plate = function (overlay) {
	return this.pushType("plate", overlay)
}
Material.prototype.nugget = function (overlay) {
	return this.pushType("nugget", overlay)
}
Material.prototype.dust = function (overlay) {
	return this.pushType("dust", overlay)
}
Material.prototype.rod = function (overlay) {
	return this.pushType("rod", overlay)
}
Material.prototype.gear = function (overlay) {
	return this.pushType("gear", overlay)
}
Material.prototype.prism = function (overlay) {
	return this.pushType("prism", overlay)
}
Material.prototype.dirty = function () {
	this.types.push({
		type: "dirty"
	})
	return this
}
Material.prototype.clump = function () {
	this.types.push({
		type: "clump"
	})
	return this
}
Material.prototype.shard = function () {
	this.types.push({
		type: "shard"
	})
	return this
}
Material.prototype.crystal = function () {
	this.types.push({
		type: "crystal"
	})
	return this
}
Material.prototype.dirtySlurry = function () {
	this.types.push({
		type: "dirty_slurry"
	})
	return this
}
Material.prototype.slurry = function () {
	this.types.push({
		type: "slurry"
	})
	return this
}
Material.prototype.block = function () {
	this.types.push({
		type: "block"
	})
	return this
}
Material.prototype.molten = function () {
	this.types.push({
		type: "molten"
	})
	return this
}
/**
 * 
 * @param {SoundType} sound 
 * @returns 
 */
Material.prototype.sound = function (sound) {
	this.blockSound = sound
	return this
}

// Item
StartupEvents.registry("item", (event) => {
	materials.forEach((material) => {
		material.types.forEach((entry) => {
			let type = entry.type
			let overlay = entry.overlay

			if (type === "block" || type === "molten" || type === "dirty_slurry" || type === "slurry") {
				return
			}

			let item = null

			if (type === "dirty") {
				item = event.create(`${CmiCore.MODID}:dirty_${material.name}_dust`)
					.modelJson({
						parent: "minecraft:item/generated",
						textures: {
							layer0: "cmi:item/material/color/dirty/0",
							layer1: "cmi:item/material/color/dirty/1"
						}
					})
					.color(0, material.color1)
					.tag("mekanism:dirty_dusts")
					.tag(`mekanism:dirty_dusts/${material.name}`)
			} else if (type === "clump" || type === "shard" || type === "crystal") {
				item = event.create(`${CmiCore.MODID}:${material.name}_${type}`)
					.texture(`${CmiCore.MODID}:item/material/color/${type}`)
					.color(0, material.color1)
					.tag(`mekanism:${type}s`)
					.tag(`mekanism:${type}s/${material.name}`)
					.tag(`${CmiCore.MODID}:metals`)
				return
			} else {
				item = event.create(`${CmiCore.MODID}:${material.name}_${type}`)
					.modelJson(defineModels(type, overlay))
					.color(0, material.color1)
					.color(1, material.color2)
					.tag(`forge:${type}s`)
					.tag(`forge:${type}s/${material.name}`)
			}

			if (material.metal) {
				item.tag(`${CmiCore.MODID}:metals`)
			}
		})
	})
	console.log("Items已注册完毕!")
})

// Block
StartupEvents.registry("block", (event) => {
	materials.forEach((material) => {
		material.types.forEach((entry) => {
			if (entry.type !== "block") {
				return
			}

			let block = event.create(`${CmiCore.MODID}:${material.name}_block`)

			block.textureAll(`${CmiCore.MODID}:block/material/color/storage_blocks`)
			block.soundType(material.blockSound || SoundType.METAL)
			block.color(0, material.color1)
			block.hardness(5)
			block.resistance(5)
			block.item((builder) => {
				builder.color(0, material.color1)
			})
			block.tagBlock(CmiToolType.PICKAXE)
			block.tagBlock(CmiMiningLevel.from(material.level))
			block.tag("forge:storage_blocks")
			block.tag(`forge:storage_blocks/${material.name}`)

			if (material.metal) {
				block.tag(`${CmiCore.MODID}:metals`)
			}
		})
	})
	console.log("Blocks已注册完毕!")
})

// Fluid
StartupEvents.registry("fluid", (event) => {
	materials.forEach((material) => {
		material.types.forEach((entry) => {
			if (entry.type !== "molten") {
				return
			}

			let molten = event.create(`${CmiCore.MODID}:molten_${material.name}`)

			molten.thinTexture(material.color1)
			molten.bucketColor(material.color1)
			molten.flowingTexture(`${CmiCore.MODID}:fluid/metal/flow`)
			molten.stillTexture(`${CmiCore.MODID}:fluid/metal/still`)
			molten.renderType("translucent")
			molten.tag("forge:molten_materials")
			molten.tag(`tconstruct:molten_${material.name}`)
			molten.tag(`forge:molten_${material.name}`)
			molten.bucketItem.modelJson({
				"parent": "forge:item/bucket_drip",
				"loader": "forge:fluid_container",
				"fluid": `${CmiCore.MODID}:molten_${material.name}`
			})

			// if (Platform.isClientEnvironment()) {
			// 	let file = `kubejs/assets/${CmiCore.MODID}/models/item/molten_${material.name}_bucket.json`
			// 	JsonIO.write(file, {
			// 		parent: "forge:item/bucket_drip",
			// 		loader: "forge:fluid_container",
			// 		fluid: `${CmiCore.MODID}:molten_${material.name}`
			// 	})
			// }
		})
	})
	console.log("Fluid已注册完毕!")
})

// Slurry
StartupEvents.registry("mekanism:slurry", (event) => {
	materials.forEach((material) => {
		material.types.forEach((entry) => {
			if (entry.type === "dirty_slurry") {
				event.create(`${CmiCore.MODID}:dirty_${material.name}_slurry`)
					.texture("mekanism:slurry/dirty")
					.color(material.color1)
					.tag("mekanism:dirty")
					.tag(`mekanism:dirty/${material.name}`)
			} else if (entry.type === "slurry") {
				event.create(`${CmiCore.MODID}:${material.name}_slurry`)
					.texture("mekanism:slurry/clean")
					.color(material.color1)
					.tag("mekanism:clean")
					.tag(`mekanism:clean/${material.name}`)
			}
		})
	})
	console.log("Slurry已注册完毕!")
})