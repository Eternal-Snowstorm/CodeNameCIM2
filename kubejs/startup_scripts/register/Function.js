// priority: 100

let FluidBucketItemModel = {
	generate: function (name) {
		if (Platform.isClientEnvironment()) {
			let file = `kubejs/assets/${global.namespace}/models/item/${name}_bucket.json`
			// 初始化模型文件夹目录
			JSIO.delete(file)
			// 生成模型
			JsonIO.write(file, {
				"parent": "forge:item/bucket_drip",
				"loader": "forge:fluid_container",
				"fluid": `${global.namespace}:${name}`
			})
		}
	}
}