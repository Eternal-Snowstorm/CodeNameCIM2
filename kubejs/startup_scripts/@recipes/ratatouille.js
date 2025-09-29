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
	 * @param {T} type
	 * @param {string} key
	 * @param {boolean} [optional]
	 */
	function buildRecipeSchema(type, key, optional) {
		let builder = components.get(type)().key(key)
		if (optional !== undefined) {
			builder = builder.defaultOptional()
		}
		return new $RecipeSchema(builder)
	}

	let RecipeTypeSchema = {
		a: {
			b: function () {
				buildRecipeSchema("", "", true)
			}
		}
	}
	// event.register("", RecipeTypeSchema.a.b())
})