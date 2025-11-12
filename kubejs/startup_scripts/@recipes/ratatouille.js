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
	 * @param {boolean | any} [optionalOrDefault]
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