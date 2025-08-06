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
		}
	}

	materials.push(material)
	return material
}

StartupEvents.registry("item", (event) => {
	materials.forEach((material) => {
		material.types.forEach((type) => {
			if (type === "block" || type === "molten") {
				return
			}

			event.create(`${global.namespace}:${material.name}_${type}`)
				.texture(`${global.namespace}:item/material/color/${type}`)
				.color(0, material.color)
				.tag(`${global.namespace}:metals`)
				.tag(`forge:${type}s`)
				.tag(`forge:${type}s/${material.name}`)
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
					.tagBlock(global.toolType["pickaxe"])
					.tagBlock(global.miningLevel[material.level])
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

// 铂
addMaterial("platinum", 0XA4D4DA, "iron")
	.ingot()
	.nugget()
	.block()
	.dust()

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
addMaterial("calorite", 0xC94D4E, "wood")
	.molten()