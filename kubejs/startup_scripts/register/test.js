let materials = []

function addMaterial(name, color) {
	let material = {
		name: name,
		color: color,
		types: [],
		ingot: function () {
			this.types.push("ingot")
			return this
		},
		dust: function () {
			this.types.push("dust")
			return this
		},
		plate: function () {
			this.types.push("plate")
			return this
		}
	}

	materials.push(material)
	return material
}

StartupEvents.registry("item", (event) => {
	materials.forEach((material) => {
		material.types.forEach((type) => {
			event.create(`${global.namespace}:${material.name}_${type}`)
				.texture(`${global.namespace}:item/material/color/${type}`)
				.color(0, material.color)
				.tag(`forge:${type}s/${material.name}`)
		})
	})
})
/* Example
addMaterial("iron", 0xFFFFFF)
	.ingot()
	.dust()
	.plate()
*/