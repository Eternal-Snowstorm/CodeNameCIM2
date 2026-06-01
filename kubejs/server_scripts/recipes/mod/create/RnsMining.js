ServerEvents.recipes((event) => {

	/**
	 * 
	 * @param {InputItem_} deposit_block 
	 */
	function MiningRecipe(deposit_block) {
		this.recipe = {
			"type": "create_rns:mining",
			"deposit_block": deposit_block.toString(),
			"replace_when_depleted": "create_rns:depleted_deposit_block",
			"durability": {
				"core": 200000,
				"edge": 75000,
				"random_spread": 0.2
			},
			"yields": []
		}
		return this
	}
	MiningRecipe.prototype.dimension = function (dim) {
		this.recipe.dimension = dim
		return this
	}
	/**
	 * 
	 * @param {Array<InputItem_>} item 
	 * @returns 
	 */
	MiningRecipe.prototype.defaultItem = function (item) {
		let defaultItems = {
			items: [
				{
					item: item
				}
			]
		}
		this.recipe.yields.push(defaultItems)
		return this
	}
	/**
	 * 
	 * @param {Number} chance
	 * @param {Array<InputItem_>} item 
	 * @returns 
	 */
	MiningRecipe.prototype.overclockItem = function (chance, item) {
		let overclockItems = {
			"chance": chance,
			"items": [],
			"catalysts": [
				"overclock"
			]
		}
		item.forEach((output) => {
			overclockItems.items.push({
				"item": output
			})
		})
		this.recipe.yields.push(overclockItems)
		return this
	}
	/**
	 * 
	 * @param {Number} chance
	 * @param {Array<InputItem_>} item 
	 * @returns 
	 */
	MiningRecipe.prototype.faintResonanceItem = function (chance, item) {
		let faintResonanceItems = {
			"chance": chance,
			"items": [],
			"catalysts": [
				"faint_resonance",
				"overclock"
			],
			"jei_slot_color": -6910797
		}
		item.forEach((output) => {
			faintResonanceItems.items.push({
				"item": output
			})
		})
		this.recipe.yields.push(faintResonanceItems)
		return this
	}
	/**
	 * 
	 * @param {Number} chance
	 * @param {Array<InputItem_>} item 
	 * @returns 
	 */
	MiningRecipe.prototype.resonanceItem = function (chance, item) {
		let resonanceItems = {
			"chance": chance,
			"items": [],
			"catalysts": [
				"resonance",
				"overclock"
			],
			"jei_slot_color": -8031553
		}
		item.forEach((output) => {
			resonanceItems.items.push({
				"item": output
			})
		})
		this.recipe.yields.push(resonanceItems)
		return this
	}
	/**
	 * 
	 * @param {Number} chance
	 * @param {Array<InputItem_>} item 
	 * @returns 
	 */
	MiningRecipe.prototype.faintShatterItem = function (chance, item) {
		let faintShatterItems = {
			"chance": chance,
			"items": [],
			"catalysts": [
				"faint_shattering_resonance"
			],
			"jei_slot_color": -5075058
		}
		item.forEach((output) => {
			faintShatterItems.items.push({
				"item": output
			})
		})
		this.recipe.yields.push(faintShatterItems)
		return this
	}
	/**
	 * 
	 * @param {Number} chance
	 * @param {Array<InputItem_>} item 
	 * @returns 
	 */
	MiningRecipe.prototype.shatterItem = function (chance, item) {
		let shatterItems = {
			"chance": chance,
			"items": [],
			"catalysts": [
				"shattering_resonance",
				"overclock"
			],
			"jei_slot_color": -4229518
		}
		item.forEach((output) => {
			shatterItems.items.push({
				"item": output
			})
		})
		this.recipe.yields.push(shatterItems)
		return this
	}

	/**
	 * 
	 * @param {Number} chance
	 * @param {Array<InputItem_>} item 
	 * @returns 
	 */
	MiningRecipe.prototype.faintStabilizeItem = function (chance, item) {
		let faintStabilizeItems = {
			"chance": chance,
			"items": [],
			"catalysts": [
				"faint_stabilizing_resonance",
				"overclock"
			],
			"jei_slot_color": -7427662
		}
		item.forEach((output) => {
			faintStabilizeItems.items.push({
				"item": output
			})
		})
		this.recipe.yields.push(faintStabilizeItems)
		return this
	}
	/**
	 * 
	 * @param {Number} chance
	 * @param {Array<InputItem_>} item 
	 * @returns 
	 */
	MiningRecipe.prototype.stabilizeItem = function (chance, item) {
		let stabilizeItems = {
			"chance": chance,
			"items": [],
			"catalysts": [
				"shattering_resonance",
				"overclock"
			],
			"jei_slot_color": -9261889
		}
		item.forEach((output) => {
			stabilizeItems.items.push({
				"item": output
			})
		})
		this.recipe.yields.push(stabilizeItems)
		return this
	}
	/**
	 * 
	 * @param {String} id 
	 */
	MiningRecipe.prototype.build = function (id) {
		let builder = event.custom(this.recipe)
		if (id != null) {
			builder.id(id)
		}
	}

	new MiningRecipe("cmi:vanadium_deposit_block")
		.dimension("minecraft:the_nether")
		.defaultItem(["minecraft:cobblestone"])
		.overclockItem(5.0E-4, ["create_rns:resonant_amethyst"])
		.overclockItem(0.5, ["vintageimprovements:vanadium_nugget"])
		.faintResonanceItem(0.05, ["cmi:raw_vanadium"])
		.resonanceItem(5.0E-4, ["create_rns:resonant_amethyst"])
		.faintShatterItem(1, ["minecraft:tuff", "minecraft:calcite", "create:limestone"])
		.shatterItem(0.3, ["create:crimsite", "create:veridium", "create:asurine", "create:ochrum"])
		.faintStabilizeItem(0.15, ["minecraft:lapis_lazuli", "minecraft:amethyst_shard", "minecraft:emerald"])
		.stabilizeItem(0.06, ["minecraft:redstone", "minecraft:diamond"])
		.build()

	new MiningRecipe("create_rns:copper_deposit_block")
		.defaultItem(["cmi:deposit_dust"])
		.overclockItem(0.3, ["cmi:deposit_dust"])
		.overclockItem(0.5, ["thermal_extra:copper_ore_chunk"])
		.faintResonanceItem(0.05, ["thermal_extra:copper_ore_chunk"])
		.resonanceItem(0.2, ["minecraft:raw_copper"])
		.faintShatterItem(1, ["minecraft:tuff", "minecraft:calcite", "create:limestone", "cmi:deposit_dust"])
		.shatterItem(0.3, ["create:veridium", "minecraft:copper_ore", "minecraft:deepslate_copper_ore"])
		.faintStabilizeItem(0.15, ["minecraft:lapis_lazuli", "minecraft:amethyst_shard", "tconstruct:earth_slime_crystal"])
		.stabilizeItem(0.06, ["minecraft:redstone", "minecraft:diamond"])
		.build("create_rns:copper_deposit_block")
})