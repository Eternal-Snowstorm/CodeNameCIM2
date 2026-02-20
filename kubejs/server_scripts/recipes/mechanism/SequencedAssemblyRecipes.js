ServerEvents.recipes((event) => {
	let { cmi, create, vintageimprovements } = event.recipes

	/**
	 * 第一大章节的序列装配封装
	 *
	 * @constructor
	 * @param {{
	 *  COM: Internal.ItemStack,
	 *  INC: Internal.ItemStack
	 * }} mechanism
	 */
	function BasicMechRecipe(mechanism) {
		let { COM, INC } = mechanism

		this.result = COM
		this.transit = INC

		this.$input = null
		this.$part = null

		// 用数组存步骤函数
		this.$steps = []

		// 默认四步
		this.$steps[0] = () => {
			return vintageimprovements.curving(this.transit, this.transit)
				.itemAsHead("cmi:mechanism_mold")
		}

		this.$steps[1] = () => {
			return create.cutting(this.transit, this.transit)
		}

		this.$steps[2] = null

		this.$steps[3] = () => {
			return cmi.grinding(this.transit, this.transit)
		}
	}

	BasicMechRecipe.prototype.input = function (input) {
		this.$input = input
		return this
	}

	BasicMechRecipe.prototype.part = function (part) {
		this.$part = part
		return this
	}

	BasicMechRecipe.prototype._setStep = function (index, fn) {
		this.$steps[index] = fn
		return this
	}

	BasicMechRecipe.prototype.deploying1 = function (ingredient) {
		return this._setStep(0, () => {
			return create.deploying(this.transit, [this.transit, ingredient])
		})
	}

	BasicMechRecipe.prototype.deploying2 = function (ingredient) {
		return this._setStep(1, () => {
			return create.deploying(this.transit, [this.transit, ingredient])
		})
	}

	BasicMechRecipe.prototype.deploying3 = function (ingredient) {
		return this._setStep(2, () => {
			return create.deploying(this.transit, [this.transit, ingredient])
		})
	}

	BasicMechRecipe.prototype.deploying4 = function (ingredient) {
		return this._setStep(3, () => {
			return create.deploying(this.transit, [this.transit, ingredient])
		})
	}

	BasicMechRecipe.prototype.filling3 = function (fluid, amount) {
		return this._setStep(2, () => {
			return create.filling(this.transit, [
				this.transit,
				Fluid.of(fluid, amount)
			])
		})
	}

	BasicMechRecipe.prototype.vibrating4 = function () {
		return this._setStep(3, () => {
			return vintageimprovements.vibrating(this.transit, this.transit)
		})
	}

	BasicMechRecipe.prototype.build = function () {
		if (!this.$input) {
			console.error("BasicMechRecipe: input 未设置")
		}

		if (!this.$part) {
			console.error("BasicMechRecipe: part 未设置")
		}

		let sequence = []

		this.$steps.forEach((step) => {
			if (step) {
				sequence.push(step())
			}
		})

		// 最终组装
		sequence.push(create.deploying(this.transit, [this.transit, this.$part]))

		return create.sequenced_assembly(this.result, this.$input, sequence)
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
		.id("vintageimprovements:sequenced_assembly/redstone_module")

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
		.vibrating4()
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

	new BasicMechRecipe(Mechanism.COIL)
		.input("#forge:plates/iron")
		.part(Mechanism.PART.ENGIN)
		.deploying2("cmi:motor_rotor")
		.filling3("immersiveengineering:redstone_acid", 200)
		.deploying4("#forge:plates/electrum")
		.build()

	new BasicMechRecipe(Mechanism.PRECISION)
		.input("#forge:plates/brass")
		.part(Mechanism.PART.MECHA)
		.deploying2("create:electron_tube")
		.deploying3("#create:incomplete_large_cogwheels")
		.deploying4("#forge:nuggets/brass")
		.build()
		.id("create:sequenced_assembly/precision_mechanism")

	new BasicMechRecipe(Mechanism.PHOTO)
		.input("#forge:gems/quartz")
		.part(Mechanism.PART.ENGIN)
		.deploying2("cmi:charged_amethyst")
		.deploying3("create:electron_tube")
		.build()

	new BasicMechRecipe(Mechanism.SCULK)
		.input("minecraft:sculk_catalyst")
		.part(Mechanism.PART.MAGIC)
		.deploying2("minecraft:echo_shard")
		.deploying3("cmi:charged_amethyst")
		.build()

	new BasicMechRecipe(Mechanism.COLOR)
		.input("#minecraft:planks")
		.part(Mechanism.PART.MAGIC)
		.deploying2("#forge:dyes/red")
		.deploying3("#forge:dyes/green")
		.deploying4("#forge:dyes/blue")
		.build()
})