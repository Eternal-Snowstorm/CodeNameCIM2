let materials = []

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
		block: function () {
			this.types.push("block")
			return this
		}
	}

	materials.push(material)
	return material
}

StartupEvents.registry("item", (event) => {
	materials.forEach((material) => {
		material.types.forEach((type) => {
			if (type === "block") {
				return
			}

			event.create(`${global.namespace}:${material.name}_${type}`)
				.texture(`${global.namespace}:item/material/color/${type}`)
				.color(0, material.color)
				.tag(`forge:${type}s`)
				.tag(`forge:${type}s/${material.name}`)
		})
	})
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
					.tag(`forge:storage_blocks`)
					.tag(`forge:storage_blocks/${material.name}`)
			}
		})
	})
})

addMaterial("andesite_alloy", 0xC7C8B8, "wooden")
	.nugget()

addMaterial("cinderslime", 0xFF6060, "wooden")
	.plate()