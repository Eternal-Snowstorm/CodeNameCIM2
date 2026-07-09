let $MoldType =
	Java.loadClass("com.jesz.createdieselgenerators.content.molds.MoldType")

/*
 * 这BYD自带的Event不能自定义namespace
 * 所以我就直接new MoldType了, 反正效果也一样
 * 用JsonIO生成资源文件就是了, 反正也不麻烦
 */
CDGEvents.molds((event) => {
	/**
	 * 
	 * @param {string} id 
	 */
	function addMold(id) {
		let modelPath = `kubejs/assets/cmi/models/item/mold/${id}.json`

		JsonIO.writeAndCreateDirectories(modelPath, {
			parent: "minecraft:item/generated",
			textures: {
				layer0: "createdieselgenerators:item/mold/blank",
				layer1: `${Cmi.MODID}:item/material/mold/cdg/${id}`
			}
		})

		let langPath = "kubejs/assets/cmi/lang/en_us.json"
		let lang = JsonIO.read(langPath) || {}

		lang[`mold.${Cmi.MODID}.${id}`] = getMoldLang(id)

		JsonIO.write(langPath, lang)

		return new $MoldType(Cmi.loadResource(id))
	}

	/**
	 * @param {string} id
	 */
	function getMoldLang(id) {
		return id.split("_")
			.map((part) => {
				return part.charAt(0).toUpperCase() + part.slice(1)
			})
			.join(" ") + " Mold"
	}

	addMold("plate")
})