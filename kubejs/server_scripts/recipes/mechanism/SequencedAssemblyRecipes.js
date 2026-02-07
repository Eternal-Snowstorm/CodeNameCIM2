ServerEvents.recipes((event) => {
    let { create, vintageimprovements } = event.recipes
    /** 
    * 第一大章节的配方
    * @constructor
    * @param {Item} result 产出构件
    * @param {Item} transit 未完成构件
    * @param {Item} ingredient 构件材料
    * @param {Item} part 构件零件
    */
    function BasicMechRecipe(result, transit, ingredient, part) {
        this.process1 = vintageimprovements.curving(transit, transit).itemAsHead("cmi:mechanism_curving_head")
        this.process2 = create.cutting(transit, transit)
        this.process3 = undefined
        this.process4 = vintageimprovements.vibrating(transit, transit)
        this.result = result
        this.transit = transit
        this.ingredient = ingredient

        this.sequence = [
            this.process1,
            this.process2,
            this.process3,
            this.process4,
            create.deploying(transit, [transit, part])
        ]
    }
    /**
     * 
     * @param {Item} ingredient 
     */
    BasicMechRecipe.prototype.deploying1 = function (ingredient) {
        this.process1 = create.deploying(this.transit, [this.transit, ingredient])
        return this
    }
    /**
     * 
     * @param {Item} ingredient 
     */
    BasicMechRecipe.prototype.deploying2 = function (ingredient) {
        this.process2 = create.deploying(this.transit, [this.transit, ingredient])
        return this
    }
    /**
     * 
     * @param {Item} ingredient 
     */
    BasicMechRecipe.prototype.deploying3 = function (ingredient) {
        this.process3 = create.deploying(this.transit, [this.transit, ingredient])
        return this
    }
    /**
     * 
     * @param {Fluid} fluid 
     */
    BasicMechRecipe.prototype.filling3 = function (fluid) {
        this.process3 = create.filling(this.transit, [this.transit, fluid])
        return this
    }
    /**
     * 
     * @param {Item} ingredient 
     */
    BasicMechRecipe.prototype.deploying4 = function (ingredient) {
        this.process4 = create.deploying(this.transit, [this.transit, ingredient])
        return this
    }
    BasicMechRecipe.prototype.build = function () {
        return create.sequenced_assembly(this.result, this.ingredient, this.sequence)
            .transitionalItem(this.transit)
            .loops(1)
    }

    new BasicMechRecipe(Mechanism.WOODEN.COM, Mechanism.WOODEN.INC, Ingredient.of("#minecraft:planks"), Item.of("cmi:basic_mechanism_part"))
        .deploying1(Ingredient.of("#forge:rods/wooden"))
        .deploying3(Item.of("farmersdelight:tree_bark"))
        .deploying4(Ingredient.of("#minecraft:logs"))
        .build()
})