ServerEvents.recipes((event) => {
	let { create, vintageimprovements } = event.recipes

	/** 
	 * 第一大章节的配方
	 * @constructor
	 * @param {OutputItem_[]} result 产出构件
	 * @param {OutputItem_} transit 未完成构件
	 * @param {InputItem_} ingredient 构件材料
	 * @param {InputItem_} part 构件零件
	 */
	function BasicMechRecipe(result, transit, ingredient, part) {
		this.process1 = vintageimprovements.curving(transit, transit)
			.itemAsHead("cmi:mechanism_curving_head")
		this.process2 = create.cutting(transit, transit)
		this.process3 = null
		this.process4 = vintageimprovements.vibrating(transit, transit)

		this.result = result
		this.transit = transit
		this.ingredient = ingredient
		this.part = part

		this.sequence = [0, 1, 2, 3, 4]
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
	 * @param {Internal.InputFluid_} fluid 
	 */
	BasicMechRecipe.prototype.filling3 = function (fluid) {
		this.process3 = create.filling(this.transit, [this.transit, fluid])
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

		return create.sequenced_assembly(this.result, this.ingredient, seq)
			.transitionalItem(this.transit)
			.loops(1)
	}

	new BasicMechRecipe(Mechanism.WOODEN.COM, Mechanism.WOODEN.INC, Ingredient.of("#minecraft:planks"), Item.of("cmi:basic_mechanism_part"))
		.deploying1(Ingredient.of("#forge:rods/wooden"))
		.deploying3(Item.of("farmersdelight:tree_bark"))
		.deploying4(Ingredient.of("#minecraft:logs"))
		.build()
})