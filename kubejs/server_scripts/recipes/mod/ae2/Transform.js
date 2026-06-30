ServerEvents.recipes((event) => {
	/**
	 * 
	 * @param {Internal.ItemStack_} output 
	 * @param {number} count 
	 */
	function TransformRecipe(output, count) {
		this.recipe = {
			type: "ae2:transform",
			ingredients: [],
			result: Item.of(output, count || 1).toJson()
		}
	}

	TransformRecipe.prototype.explosion = function () {
		this.recipe.circumstance = {
			type: "explosion"
		}
		return this
	}

	/**
	 * 
	 * @param {Special.FluidTag} tag 
	 * @returns 
	 */
	TransformRecipe.prototype.fluidTag = function (tag) {
		this.recipe.circumstance = {
			type: "fluid",
			tag: tag
		}
		return this
	}

	/**
	 * 
	 * @param {Internal.Ingredient_} input 
	 * @returns 
	 */
	TransformRecipe.prototype.input = function (input) {
		if (input instanceof Array) {
			this.recipe.ingredients.push(input.map((i) => {
				return Item.of(i).toJson()
			}))
		} else {
			this.recipe.ingredients.push(Ingredient.of(input).toJson())
		}

		return this
	}

	/**
	 * 
	 * @param {ResourceLocation} [id] 
	 * @returns 
	 */
	TransformRecipe.prototype.build = function (id) {
		let recipe = event.custom(this.recipe)

		if (id) {
			recipe.id(id)
		}

		return recipe
	}

	// 量子缠绕态奇点
	new TransformRecipe("ae2:quantum_entangled_singularity", 4)
		.input("ae2:singularity")
		.input("cmi:ender_mechanism")
		.explosion()
		.build("ae2:transform/entangled_singularity")

	// 砖泥
	new TransformRecipe("tconstruct:grout", 2)
		.fluidTag("minecraft:water")
		.input("#minecraft:sand")
		.input("#forge:clay")
		.input("minecraft:gravel")
		.build("cmi:ae2/transform/tconstruct/grout")

	// 下界砖泥
	new TransformRecipe("tconstruct:nether_grout", 2)
		.fluidTag("tconstruct:liquid_soul")
		.input(["minecraft:soul_sand", "minecraft:soul_soil"])
		.input("minecraft:magma_cream")
		.input("minecraft:gravel")
		.build("cmi:ae2/transform/tconstruct/nether_grout")
})