let $FluidIngredient =
	Java.loadClass("com.simibubi.create.foundation.fluid.FluidIngredient")

/**
 * 
 * @param {GsonObject_} json 
 * @param {string} key 
 * @param {number} fallback 
 * @returns 
 */
function getInt(json, key, fallback) {
	return json.has(key) ? json.get(key).getAsInt() : fallback
}

/**
 * 
 * @param {GsonObject_} json 
 * @param {string} key 
 * @param {number} fallback 
 * @returns 
 */
function getFloat(json, key, fallback) {
	return json.has(key) ? json.get(key).getAsFloat() : fallback
}

/**
 * 
 * @param {string} id 
 * @param {number} count 
 * @returns 
 */
function stackString(id, count) {
	return count > 1 ? `${count}x ${id}` : id
}

/**
 * 
 * @param {Internal.JsonElement_} entry 
 * @returns 
 */
function itemIngredientOf(entry) {
	if (entry.isJsonArray()) {
		let alternatives = []

		for (let alternative of entry.getAsJsonArray()) {
			let ingredient = itemIngredientOf(alternative)

			if (ingredient !== null) {
				alternatives.push(ingredient)
			}
		}

		return alternatives
	}

	if (!entry.isJsonObject()) {
		return null
	}

	let json = entry.getAsJsonObject()
	let count = getInt(json, "count", 1)

	if (json.has("item")) {
		return stackString(json.get("item").getAsString(), count)
	}
	if (json.has("tag")) {
		return stackString(`#${json.get("tag").getAsString()}`, count)
	}

	return null
}

/**
 * 
 * @param {Internal.JsonElement_} entry 
 * @returns 
 */
function inputFluidOf(entry) {
	if (!entry.isJsonObject()) {
		return null
	}

	let json = entry.getAsJsonObject()
	let amount = getInt(json, "amount", 1000)

	if (json.has("fluid")) {
		return Fluid.of(json.get("fluid").getAsString(), amount)
	}
	if (json.has("fluidTag")) {
		let fluidTag = json.get("fluidTag").getAsString()
		let location = ResourceLocation.tryParse(fluidTag)
		let tag = FluidTags.create(location)

		return $FluidIngredient.fromTag(tag, amount)
	}

	return null
}

/**
 * 
 * @param {Internal.JsonElement_} entry 
 * @returns 
 */
function outputFluidOf(entry) {
	if (!entry.isJsonObject()) {
		return null
	}

	let json = entry.getAsJsonObject()

	if (!json.has("fluid")) {
		return null
	}

	return Fluid.of(
		json.get("fluid").getAsString(),
		getInt(json, "amount", 1000)
	)
}

/**
 * 
 * @param {Internal.MBDRecipeSchema$MBDRecipeJS} builder 
 * @param {Internal.Iterable_<Internal.JsonElement_>} ingredients 
 */
function addIngredients(builder, ingredients) {
	for (let entry of ingredients) {
		let inputFluid = inputFluidOf(entry)

		if (inputFluid !== null) {
			builder.inputFluids(inputFluid)
			continue
		}

		let inputItem = itemIngredientOf(entry)

		if (inputItem !== null) {
			builder.inputItems(inputItem)
		}
	}
}

/**
 * 
 * @param {Internal.MBDRecipeSchema$MBDRecipeJS} builder 
 * @param {Internal.Iterable_<Internal.JsonElement_>} results 
 */
function addResults(builder, results) {
	for (let entry of results) {
		let outputFluid = outputFluidOf(entry)

		if (outputFluid !== null) {
			builder.outputFluids(outputFluid)
			continue
		}

		let outputItem = itemIngredientOf(entry)

		if (outputItem !== null) {
			let chance = entry.isJsonObject()
				? getFloat(entry.getAsJsonObject(), "chance", 1)
				: 1

			if (chance !== 1) {
				builder.chance(chance)
			}

			builder.outputItems(outputItem)

			if (chance !== 1) {
				builder.chance(1)
			}
		}
	}
}

function clearChemicalReactorProxy() {
	let chemicalReactor = Cmi.loadResource("chemical_reactor")
	let recipeType = MBDRegistries.RECIPE_TYPES.get(chemicalReactor)
	if (recipeType === null) {
		return
	}

	let field = recipeType.getClass().getDeclaredField("proxyRecipeTypes")
	field.setAccessible(true)
	field.get(recipeType).clear()
}

ServerEvents.recipes((event) => {
	let { cmi } = event.getRecipes()

	clearChemicalReactorProxy()

	event.forEachRecipe({
		type: "create:mixing"
	}, (recipe) => {
		let json = recipe.json
		let builder = cmi.chemical_reactor()

		if (json.has("ingredients")) {
			addIngredients(builder, json.get("ingredients").getAsJsonArray())
		}

		if (json.has("results")) {
			addResults(builder, json.get("results").getAsJsonArray())
		} else if (json.has("result")) {
			addResults(builder, [json.get("result")])
		}

		if (json.has("processingTime")) {
			builder.duration(json.get("processingTime").getAsInt())
		}

		builder.id(recipe.getId() + "_mbd2_proxy")
	})
})