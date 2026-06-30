ServerEvents.recipes((event) => {
	/**
	 * 
	 * @param {Internal.JsonElement_} output 
	 */
	function ReactionRecipe(output) {
		this.recipe = {
			type: "advanced_ae:reaction",
			output: output,
			fluid: {
				fluidStack: {}
			},
			input_items: []
		}
	}

	/**
	 * 至少为1000
	 * 
	 * @param {number} energy 
	 * @returns 
	 */
	ReactionRecipe.prototype.energy = function (energy) {
		this.recipe.energy = energy
		return this
	}

	/**
	 * 
	 * @param {Internal.FluidStackJS_} fluid 
	 * @param {number} amount 
	 * @returns 
	 */
	ReactionRecipe.prototype.fluid = function (fluid, amount) {
		this.recipe.fluid = {
			fluidStack: {
				FluidName: fluid,
				Amount: amount
			}
		}
		return this
	}

	/**
	 * 
	 * @param {Internal.ItemStack_} input 
	 * @param {number} [count] 
	 * @returns 
	 */
	ReactionRecipe.prototype.input = function (input, count) {
		this.recipe.input_items.push({
			amount: count || 1,
			ingredient: Ingredient.of(input).toJson()
		})
		return this
	}

	/**
	 * 
	 * @param {ResourceLocation_} [id] 
	 * @returns 
	 */
	ReactionRecipe.prototype.build = function (id) {
		let recipe = event.custom(this.recipe)

		if (id) {
			recipe.id(id)
		}

		return recipe
	}

	/**
	 * 
	 * @param {Internal.ItemStack_} item 
	 * @param {number} [count] 
	 * @returns 
	 */
	function item(item, count) {
		return {
			"#c": "ae2:i",
			id: item,
			"#": count || 1
		}
	}

	/**
	 * 
	 * @param {Internal.FluidStackJS_} fluid 
	 * @param {number} [amount] 
	 * @returns 
	 */
	function fluid(fluid, amount) {
		return {
			"#c": "ae2:f",
			id: fluid,
			"#": amount || 1000
		}
	}

	// 基础通用构件基座
	new ReactionRecipe(item("cmi:basic_mekanism_mechanism_basement"))
		.energy(2000)
		.fluid("immersiveengineering:redstone_acid", 100)
		.input("ae2:logic_processor")
		.input("cmi:enriched_alloy")
		.input("mekanism:basic_control_circuit")
		.build()

	// 碳聚合催化片
	new ReactionRecipe(item("cmi:carbon_polymerization_catalytic_plate"))
		.energy(2000)
		.fluid("tconstruct:molten_chromium", 45)
		.input("cmi:titanium_alloy_mesh")
		.input("#forge:wires/aluminum")
		.build()

	// 航空构件基座
	new ReactionRecipe(item("cmi:aeronautic_mechanism_basement"))
		.fluid("immersiveengineering:redstone_acid", 100)
		.energy(2000)
		.input("cmi:smart_mechanism_augment")
		.input("cmi:graphene")
		.build()

	// 钨钢板
	new ReactionRecipe(item("cmi:incomplete_tungsten_steel_plate"))
		.energy(2000)
		.fluid("immersiveengineering:redstone_acid", 100)
		.input("#forge:plates/tungsten")
		.input("cmi:titanium_alloy_mesh")
		.input("#forge:plates/alumium_alloy")
		.build()

	// 复合板
	new ReactionRecipe(item("cmi:incomplete_reinforced_composite_plate"))
		.energy(2000)
		.fluid("cmi:structural_plastic", 50)
		.input("cmi:composite_tungsten_steel_plate")
		.input("cmi:carbon_nanotube")
		.build()

	// 空燃料棒
	new ReactionRecipe(item("cmi:empty_fuel_rod"))
		.energy(2000)
		.fluid("tconstruct:molten_lead", 90 * 8)
		.input("#forge:ingots/hop_graphite")
		.input("alexscaves:polymer_plate")
		.input("mekanism:reprocessed_fissile_fragment")
		.build()
})