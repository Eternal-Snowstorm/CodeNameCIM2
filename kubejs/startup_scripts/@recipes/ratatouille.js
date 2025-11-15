new Schema("ratatouille:demolding")
	.simpleKey("results", "outputItemArray")
	.simpleKey("ingredients", "inputItemArray")

new Schema("ratatouille:freezing")
	.simpleKey("results", "outputItemArray")
	.simpleKey("ingredients", "inputItemArray")

new Schema("ratatouille:squeezing")
	.simpleKey("results", "outputFluidOrItemArray")
	.simpleKey("ingredients", "inputFluidOrItemArray")

new Schema("ratatouille:freezing")
	.simpleKey("results", "outputItemArray")
	.simpleKey("ingredients", "inputItemArray")
	.simpleKey("processingTime", "intNumber", 100)

let $RecipeSchema =
	Java.loadClass("dev.latvian.mods.kubejs.recipe.schema.RecipeSchema")

StartupEvents.recipeSchemaRegistry((event) => {
	let { components } = event

	/**
	 * @template {keyof Special.RecipeComponents} T
	 * @param {T} type 配方组件
	 * @param {string} key 配方键("input", "output"等)
	 * @param {boolean | String | Number} optionalOrDefault 是否可选或默认配置
	 */
	function buildRecipeSchema(type, key, optionalOrDefault) {
		let builder = components.get(type)().key(key)

		if (optionalOrDefault !== undefined) {
			if (optionalOrDefault === true) {
				builder = builder.defaultOptional()
			} else {
				builder = builder.optional(optionalOrDefault)
			}
		}

		return new $RecipeSchema(builder)
	}

	let RecipeTypeSchema = {
		namespace: {
			recipeType: function () {
				return buildRecipeSchema("", "", "")
			}
		}
	}

	// event.register("create:mixing", RecipeTypeSchema.namespace.recipeType())
})