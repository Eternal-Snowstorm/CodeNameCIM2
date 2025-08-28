// priority: 100

let FluidBucketItemModel = {
	generate: function (name) {
		if (Platform.isClientEnvironment()) {
			let file = `kubejs/assets/${global.namespace}/models/item/${name}_bucket.json`
			JsonIO.write(file, {
				"parent": "forge:item/bucket_drip",
				"loader": "forge:fluid_container",
				"fluid": `${global.namespace}:${name}`
			})
		}
	}
}