const materials = []

function addMaterial(name) {
	const material = {
		name: name,
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
		})
	})
})
/* Example
addMaterial("iron")
	.ingot()
	.dust()
	.plate()
*/