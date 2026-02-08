ServerEvents.recipes((event) => {
	let { create, vintageimprovements } = event.recipes

	/** 
	 * 第一大章节的配方
	 * @constructor
	 * @param {key: any} mechanism 产出构件
	 */
	function BasicMechRecipe(mechanism) {
		let { COM, INC } = mechanism
		this.result = COM
		this.transit = INC
		this.ingredient
		this.part

		this.process1 = vintageimprovements.curving(this.transit, this.transit)
			.itemAsHead("cmi:mechanism_curving_head")
		this.process2 = create.cutting(this.transit, this.transit)
		this.process3 = null
		this.process4 = vintageimprovements.vibrating(this.transit, this.transit)
	}
	/**
	 * 
	 * @param {InputItem_} input
	 */
	BasicMechRecipe.prototype.input = function (input) {
		this.input = input
		return this
	}
	/**
	 * 
	 * @param {InputItem_} part
	 */
	BasicMechRecipe.prototype.part = function (part) {
		this.part = part
		return this
	}
	/**
	 * 
	 * @param {InputItem_} ingredient 
	 */
	BasicMechRecipe.prototype.deploying1 = function (ingredient) {
		this.process1 = create.deploying(this.transit, [this.transit, ingredient])
		return this
	}
	/**
	 * 
	 * @param {InputItem_} ingredient 
	 */
	BasicMechRecipe.prototype.deploying2 = function (ingredient) {
		this.process2 = create.deploying(this.transit, [this.transit, ingredient])
		return this
	}
	/**
	 * 
	 * @param {InputItem_} ingredient 
	 */
	BasicMechRecipe.prototype.deploying3 = function (ingredient) {
		this.process3 = create.deploying(this.transit, [this.transit, ingredient])
		return this
	}
	/**
	 * 
	 * @param {string} fluid 
	 * @param {number} amount
	 */
	BasicMechRecipe.prototype.filling3 = function (fluid, amount) {
		this.process3 = create.filling(this.transit, [this.transit, Fluid.of(fluid, amount)])
		return this
	}
	/**
	 * 
	 * @param {InputItem_} ingredient 
	 */
	BasicMechRecipe.prototype.deploying4 = function (ingredient) {
		this.process4 = create.deploying(this.transit, [this.transit, ingredient])
		return this
	}
	BasicMechRecipe.prototype.build = function () {
		let seq = []

		if (this.process1) {
			seq.push(this.process1)
		}
		if (this.process2) {
			seq.push(this.process2)
		}
		if (this.process3) {
			seq.push(this.process3)
		}
		if (this.process4) {
			seq.push(this.process4)
		}

		seq.push(create.deploying(this.transit, [this.transit, this.part]))

		return create.sequenced_assembly(this.result, this.input, seq)
			.transitionalItem(this.transit)
			.loops(1)
	}

	new BasicMechRecipe(Mechanism.WOODEN)
		.input("#minecraft:planks")
		.part(Mechanism.PART.BASIC)
		.deploying1("#forge:rods/wooden")
		.deploying3("farmersdelight:tree_bark")
		.deploying4("#minecraft:logs")
		.build()

	new BasicMechRecipe(Mechanism.STONE)
		.input("#forge:plates/stone")
		.part(Mechanism.PART.BASIC)
		.deploying1("tconstruct:seared_brick")
		.deploying3("#forge:clay")
		.deploying4("#forge:stone")
		.build()

	new BasicMechRecipe(Mechanism.REDSTONE)
		.input("#forge:plates/lead")
		.part(Mechanism.PART.BASIC)
		.deploying1("minecraft:redstone")
		.filling3("thermal:redstone", 100)
		.deploying4("minecraft:redstone_torch")
		.build()

	new BasicMechRecipe(Mechanism.NATURE)
		.input("minecraft:grass_block")
		.part(Mechanism.PART.MAGIC)
		.deploying1("#minecraft:small_flowers")
		.filling3("minecraft:water", 1000)
		.deploying4("#forge:seeds")
		.build()

	new BasicMechRecipe(Mechanism.ANDESITE)
		.input("#forge:plates/andesite")
		.part(Mechanism.PART.MECHA)
		.deploying1("create:shaft")
		.deploying3("#create:incomplete_cogwheels")
		.deploying4("#create:incomplete_large_cogwheels")
		.build()

	new BasicMechRecipe(Mechanism.COPPER)
		.input("#forge:plates/copper")
		.part(Mechanism.PART.MECHA)
		.deploying1("#forge:nuggets/copper")
		.deploying2("#forge:glass")
		.filling3("minecraft:water", 1000)
		.deploying4("thermal:cured_rubber")
		.build()

	new BasicMechRecipe(Mechanism.IRON)
		.input("#forge:plates/iron")
		.part(Mechanism.PART.BASIC)
		.deploying1("#forge:nuggets/iron")
		.deploying3("#vintageimprovements:springs/iron")
		.deploying4("#forge:wires/iron")
		.build()

	new BasicMechRecipe(Mechanism.PIG_IRON)
		.input("#forge:plates/pig_iron")
		.part(Mechanism.PART.MAGIC)
		.filling3("tconstruct:molten_pig_iron", 45)
		.deploying4("#forge:rods/pig_iron")
		.build()

	new BasicMechRecipe(Mechanism.POTION)
		.input("#forge:glass")
		.part(Mechanism.PART.MAGIC)
		.deploying2("minecraft:golden_apple")
		.deploying3("minecraft:golden_carrot")
		.deploying4("minecraft:glistering_melon_slice")
		.build()

	new BasicMechRecipe(Mechanism.STEAM)
		.input("#forge:plates/bronze")
		.part(Mechanism.PART.MECHA)
		.deploying1("cmi:incomplete_bronze_cogwheel")
		.deploying2("#vintageimprovements:small_springs/bronze")
		.deploying3("#forge:nuggets/andesite_alloy")
		.build()

	new BasicMechRecipe(Mechanism.RAILWAY)
		.input("#forge:plates/dense_obsidian")
		.part(Mechanism.PART.MECHA)
		.deploying3("#vintageimprovements:small_springs/brass")
		.deploying4("#forge:plates/brass")
		.build()

	new BasicMechRecipe(Mechanism.NETHER)
		.input("create:cinder_flour")
		.part(Mechanism.PART.MAGIC)
		.deploying2("minecraft:magma_cream")
		.filling3("tconstruct:liquid_soul", 250)
		.deploying4("#forge:nuggets/gold")
		.build()

	new BasicMechRecipe(Mechanism.ENCHANTED)
		.input("#forge:gems/lapis")
		.part(Mechanism.PART.MAGIC)
		.deploying2("create:experience_nugget")
		.filling3("create_enchantment_industry:experience", 50)
		.build()

	new BasicMechRecipe(Mechanism.GOLD)
		.input("#forge:plates/gold")
		.part(Mechanism.PART.FLUX)
		.deploying2("#forge:nuggets/gold")
		.deploying3("#vintageimprovements:springs/gold")
		.build()
})