let $MBDFluidIngredient =
	Java.loadClass("dev.celestiacraft.cmi.compat.mbd2.MBDFluidIngredient")

ServerEvents.recipes((event) => {
	proxyArcFurnace(event)
	proxyMelting(event)
	proxyAlloy(event)
	proxyCarKiln(event)
	proxyRotaryKiln(event)

	event.getRecipes().cmi.electronic_blast_furnace()
		.inputItems([
			["#minecraft:anvil", "#minecraft:arrows"]
		])
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
		let json = recipe.json
		let id = recipe.getId()

		let builder = cmi.electronic_blast_furnace()

		addIngredient(builder, json.get("input"))

		if (json.has("additives")) {
			addIngredients(builder, json.get("additives").getAsJsonArray())
		}

		addResults(builder, json.get("results").getAsJsonArray())

		builder.duration(getInt(json, "time", 200))
			.perTick((recipe) => {
				recipe.inputFE(
					Math.ceil(getInt(json, "energy", 0) / getInt(json, "time", 1))
				)
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

	event.forEachRecipe({
		type: "tconstruct:melting"
	}, (recipe) => {
		let json = recipe.json
		let id = recipe.getId()

		let builder = cmi.electronic_blast_furnace()

		addIngredient(builder, json.get("ingredient"))

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
		let json = recipe.json
		let id = recipe.getId()

		let builder = cmi.electronic_blast_furnace()

		let inputs = json.get("inputs")

		console.info(inputs)
		console.info(inputs.getClass())

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
		let json = recipe.json
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
		let json = recipe.json
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

function stackString(id, count) {
	return count > 1 ? `${count}x ${id}` : id
}

function itemIngredientOf(entry) {
	if (entry == null) {
		return null
	}

	if (entry.isJsonArray()) {
		let list = []

		for (let e of entry.getAsJsonArray()) {
			let ingredient = itemIngredientOf(e)

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

	if (json.has("base_ingredient")) {
		return itemIngredientOf(json.get("base_ingredient"))
	}

	if (json.has("match")) {
		return itemIngredientOf(json.get("match"))
	}

	if (json.has("children")) {
		return itemIngredientOf(json.get("children"))
	}

	if (json.has("ingredients")) {
		return itemIngredientOf(json.get("ingredients"))
	}

	let count = getInt(json, "count", 1)

	if (json.has("item")) {
		return Item.of(
			json.get("item").getAsString(),
			count
		)
	}

	if (json.has("tag")) {
		return `#${json.get("tag").getAsString()}`
	}

	return null
}

function inputFluidOf(entry) {
	if (entry == null || !entry.isJsonObject()) {
		return null
	}

	let json = entry.getAsJsonObject()
	let amount = getInt(json, "amount", 1000)

	if (json.has("fluid")) {
		return Fluid.of(json.get("fluid").getAsString(), amount)
	}

	if (json.has("tag")) {
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

function outputFluidOf(entry) {
	if (entry == null || !entry.isJsonObject()) {
		return null
	}

	let json = entry.getAsJsonObject()
	let amount = getInt(json, "amount", 1000)

	if (json.has("fluid")) {
		return Fluid.of(json.get("fluid").getAsString(), amount)
	}

	if (json.has("tag")) {
		return $MBDFluidIngredient.ofTagId(
			json.get("tag").getAsString(),
			amount
		)
	}

	return null
}

function addIngredient(builder, entry) {
	if (entry == null) {
		return
	}

	let fluid = inputFluidOf(entry)

	if (fluid != null) {
		builder.inputFluids(fluid)
		return
	}

	console.info("ENTRY = " + entry)

	let ingredient = itemIngredientOf(entry)

	console.info("PARSED = " + ingredient)

	if (ingredient == null) {
		return
	}

	// 一个槽，可选多个
	if (Array.isArray(ingredient)) {
		builder.inputItems([ingredient])
		return
	}

	// 普通单输入
	builder.inputItems(ingredient)
}

function addIngredients(builder, ingredients) {
	for (let ingredient of ingredients) {
		addIngredient(builder, ingredient)
	}
}

function addFluidIngredient(builder, entry) {
	let fluid = inputFluidOf(entry)

	if (fluid != null) {
		builder.inputFluids(fluid)
	}
}

function addFluidIngredients(builder, ingredients) {
	for (let entry of ingredients) {
		console.info(entry)

		addFluidIngredient(builder, entry)
	}
}

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

function addResults(builder, results) {
	for (let entry of results) {
		addResult(builder, entry)
	}
}

function addFluidResult(builder, entry) {
	let fluid = outputFluidOf(entry)

	if (fluid != null) {
		builder.outputFluids(fluid)
	}
}

function addFluidResults(builder, results) {
	for (let entry of results) {
		addFluidResult(builder, entry)
	}
}

function isArray(value) {
	return Array.isArray(value)
}