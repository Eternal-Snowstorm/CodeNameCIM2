let $MBDFluidIngredient =
	Java.loadClass("dev.celestiacraft.cmi.compat.mbd2.MBDFluidIngredient")

ServerEvents.recipes((event) => {
	proxyArcFurnace(event)
	proxyMelting(event)
	proxyAlloy(event)
	proxyCarKiln(event)
	proxyRotaryKiln(event)
})

/**
 * 
 * @param {Internal.RecipesEventJS_} event 
 */
function proxyArcFurnace(event) {
	let { cmi } = event.getRecipes()

	event.forEachRecipe({
		type: "immersiveengineering:arc_furnace"
	}, (recipe) => {
		let json = sourceJsonOf(recipe)
		let id = recipe.getId()

		let builder = cmi.electronic_blast_furnace()

		addIngredient(builder, json.get("input"))

		if (json.has("additives")) {
			addIngredients(builder, json.get("additives").getAsJsonArray())
		}

		addResults(builder, json.get("results").getAsJsonArray())

		builder.duration(getInt(json, "time", 200))
			.perTick((recipe) => {
				let energy = getInt(json, "energy", 0)
				let time = getInt(json, "time", 1)

				recipe.inputFE(Math.ceil(energy / time))
			})
			.id(`${id}_mbd2_proxy`)
	})
}

/**
 * 
 * @param {Internal.RecipesEventJS_} event 
 */
function proxyMelting(event) {
	let { cmi } = event.getRecipes()

	forEachOriginalRecipe(event, "tconstruct:melting", (recipe) => {
		let json = sourceJsonOf(recipe)
		let id = recipe.getId()
		let ingredientJson = json.get("ingredient")

		let builder = cmi.electronic_blast_furnace()

		addIngredient(builder, ingredientJson, id)

		addFluidResult(builder, json.get("result"))

		if (json.has("byproducts")) {
			addFluidResults(builder, json.get("byproducts").getAsJsonArray())
		}

		builder.duration(getInt(json, "time", 100))
			.id(`${id}_mbd2_proxy`)
	})
}

/**
 * 
 * @param {Internal.RecipesEventJS_} event 
 */
function proxyAlloy(event) {
	let { cmi } = event.getRecipes()

	event.forEachRecipe({
		type: "tconstruct:alloy"
	}, (recipe) => {
		let json = sourceJsonOf(recipe)
		let id = recipe.getId()

		let builder = cmi.electronic_blast_furnace()

		let inputs = json.get("inputs")

		addFluidIngredients(builder, inputs.getAsJsonArray())

		addFluidResult(builder, json.get("result"))

		builder.id(`${id}_mbd2_proxy`)
	})
}

/**
 *
 * @param {Internal.RecipesEventJS_} event
 */
function proxyCarKiln(event) {
	let { cmi } = event.getRecipes()

	event.forEachRecipe({
		type: "immersiveindustry:car_kiln"
	}, (recipe) => {
		let json = sourceJsonOf(recipe)
		let id = recipe.getId()

		let builder = cmi.electronic_blast_furnace()

		// 单物品输入
		if (json.has("input")) {
			addIngredient(builder, json.get("input"))
		}

		// 多物品输入
		if (json.has("inputs")) {
			addIngredients(builder, json.get("inputs").getAsJsonArray())
		}

		// 流体输入
		if (json.has("input_fluid")) {
			addFluidIngredient(builder, json.get("input_fluid"))
		}

		// 输出
		addResults(builder, json.get("results").getAsJsonArray())

		builder.duration(getInt(json, "time", 200))
			.perTick((recipe) => {
				recipe.inputFE(getInt(json, "tickEnergy", 0))
			})
			.id(`${id}_mbd2_proxy`)
	})
}

/**
 * @param {Internal.RecipesEventJS_} event
 */
function proxyRotaryKiln(event) {
	let { cmi } = event.getRecipes()

	event.forEachRecipe({
		type: "immersiveindustry:rotary_kiln"
	}, (recipe) => {
		let json = sourceJsonOf(recipe)
		let id = recipe.getId()

		let builder = cmi.electronic_blast_furnace()

		addIngredient(builder, json.get("input"))

		addResult(builder, json.get("result"))

		if (json.has("result_fluid")) {
			addFluidResult(builder, json.get("result_fluid"))
		}

		builder.duration(getInt(json, "time", 200))
			.perTick(recipe => {
				recipe.inputFE(getInt(json, "tickEnergy", 0))
			})
			.id(`${id}_mbd2_proxy`)
	})
}

function getInt(json, key, fallback) {
	return json.has(key) ? json.get(key).getAsInt() : fallback
}

function getFloat(json, key, fallback) {
	return json.has(key) ? json.get(key).getAsFloat() : fallback
}

/**
 * 
 * @param {Internal.RecipeJS_} recipe 
 * @returns 
 */
function sourceJsonOf(recipe) {
	return recipe.originalJson == null ? recipe.json : recipe.originalJson
}

/**
 * 
 * @param {Internal.RecipesEventJS_} event
 * @param {string} type
 * @param {Internal.Consumer_<Internal.RecipeJS_} consumer
 */
function forEachOriginalRecipe(event, type, consumer) {
	for (let recipe of event.originalRecipes.values()) {
		if (String(recipe.getType()) === type) {
			consumer(recipe)
		}
	}
}

function stackString(id, count) {
	return count > 1 ? `${count}x ${id}` : id
}

function itemIngredientOf(entry, countMultiplier) {
	if (entry == null) {
		return null
	}

	countMultiplier = countMultiplier == null ? 1 : countMultiplier

	if (entry.isJsonArray()) {
		let list = []

		for (let e of entry.getAsJsonArray()) {
			let ingredient = itemIngredientOf(e, countMultiplier)

			if (ingredient != null) {
				list.push(ingredient)
			}
		}

		return list.length == 0 ? null : list
	}

	if (!entry.isJsonObject()) {
		return null
	}

	let json = entry.getAsJsonObject()
	let count = getInt(json, "count", 1) * countMultiplier

	if (json.has("base_ingredient")) {
		return itemIngredientOf(json.get("base_ingredient"), count)
	}

	if (json.has("ingredient")) {
		return itemIngredientOf(json.get("ingredient"), count)
	}

	if (json.has("match")) {
		return itemIngredientOf(json.get("match"), count)
	}

	if (json.has("children")) {
		return itemIngredientOf(json.get("children"), count)
	}

	if (json.has("ingredients")) {
		return itemIngredientOf(json.get("ingredients"), count)
	}

	if (json.has("input")) {
		return itemIngredientOf(json.get("input"), count)
	}

	if (json.has("output")) {
		return itemIngredientOf(json.get("output"), count)
	}

	if (json.has("value")) {
		return itemIngredientOf(json.get("value"), count)
	}

	if (json.has("item")) {
		return stackString(json.get("item").getAsString(), count)
	}

	if (json.has("tag")) {
		let tag = json.get("tag").getAsString()

		return stackString(`#${tag}`, count)
	}

	return null
}

/**
 * 
 * @param {Internal.JsonElement_} entry 
 * @returns 
 */
function inputFluidOf(entry) {
	if (entry == null || !entry.isJsonObject()) {
		return null
	}

	let json = entry.getAsJsonObject()
	let amount = getInt(json, "amount", 1000)

	if (json.has("fluid")) {
		return Fluid.of(json.get("fluid").getAsString(), amount)
	}

	if (json.has("tag") && json.has("amount")) {
		return $MBDFluidIngredient.ofTagId(
			json.get("tag").getAsString(),
			amount
		)
	}

	if (json.has("fluidTag")) {
		return $MBDFluidIngredient.ofTagId(
			json.get("fluidTag").getAsString(),
			amount
		)
	}

	return null
}

/**
 * 
 * @param {Internal.JsonElement_} entry 
 * @returns 
 */
function outputFluidOf(entry) {
	if (entry == null || !entry.isJsonObject()) {
		return null
	}

	let json = entry.getAsJsonObject()
	let amount = getInt(json, "amount", 1000)

	if (json.has("fluid")) {
		return Fluid.of(json.get("fluid").getAsString(), amount)
	}

	if (json.has("tag") && json.has("amount")) {
		return $MBDFluidIngredient.ofTagId(
			json.get("tag").getAsString(),
			amount
		)
	}

	return null
}

/**
 * 
 * @param {Internal.MBDRecipeSchema$MBDRecipeJS_} builder 
 * @param {Internal.JsonElement_} entry 
 * @returns 
 */
function addIngredient(builder, entry) {
	if (entry == null) {
		return
	}

	let fluid = inputFluidOf(entry)

	if (fluid != null) {
		builder.inputFluids(fluid)
		return
	}

	let ingredient = itemIngredientOf(entry)

	if (ingredient == null) {
		return
	}

	if (Array.isArray(ingredient)) {
		builder.inputItems([ingredient])
		return
	}

	builder.inputItems(ingredient)
}

/**
 * 
 * @param {Internal.MBDRecipeSchema$MBDRecipeJS_} builder
 * @param {Internal.JsonElement_} entry
 */
function addIngredients(builder, ingredients) {
	for (let ingredient of ingredients) {
		addIngredient(builder, ingredient)
	}
}

/**
 * 
 * @param {Internal.MBDRecipeSchema$MBDRecipeJS_} builder 
 * @param {Internal.JsonElement_} entry 
 */
function addFluidIngredient(builder, entry) {
	let fluid = inputFluidOf(entry)

	if (fluid != null) {
		builder.inputFluids(fluid)
	}
}

/**
 * 
 * @param {Internal.MBDRecipeSchema$MBDRecipeJS_} builder
 * @param {Internal.JsonArray_} ingredients
 */
function addFluidIngredients(builder, ingredients) {
	for (let entry of ingredients) {
		addFluidIngredient(builder, entry)
	}
}

/**
 * 
 * @param {Internal.MBDRecipeSchema$MBDRecipeJS_} builder
 * @param {Internal.JsonElement_} entry
 * @returns 
 */
function addResult(builder, entry) {
	let fluid = outputFluidOf(entry)

	if (fluid != null) {
		builder.outputFluids(fluid)
		return
	}

	let item = itemIngredientOf(entry)

	if (item == null) {
		return
	}

	let chance = entry.isJsonObject()
		? getFloat(entry.getAsJsonObject(), "chance", 1)
		: 1

	if (chance != 1) {
		builder.chance(chance)
	}

	builder.outputItems(item)

	if (chance != 1) {
		builder.chance(1)
	}
}

/**
 * 
 * @param {Internal.MBDRecipeSchema$MBDRecipeJS_} builder
 * @param {Internal.JsonArray_} results
 */
function addResults(builder, results) {
	for (let entry of results) {
		addResult(builder, entry)
	}
}

/**
 * 
 * @param {Internal.MBDRecipeSchema$MBDRecipeJS_} builder
 * @param {Internal.JsonElement_} entry
 */
function addFluidResult(builder, entry) {
	let fluid = outputFluidOf(entry)

	if (fluid != null) {
		builder.outputFluids(fluid)
	}
}

/**
 * 
 * @param {Internal.MBDRecipeSchema$MBDRecipeJS_} builder
 * @param {Internal.JsonArray_} results
 */
function addFluidResults(builder, results) {
	for (let entry of results) {
		addFluidResult(builder, entry)
	}
}