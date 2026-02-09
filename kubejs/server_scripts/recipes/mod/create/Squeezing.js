ServerEvents.recipes((event) => {
    /**
     * 
     * @param {OutputItem_} result 
     */
    function SqueezingRecipe(result) {
        this.input = []
        this.recipe = {
            type: "ratatouille:squeezing",
            ingredients: [],
            results: [result]
        }
    }
    /**
     * @param {InputItem_} item
     * @returns 
     */
    SqueezingRecipe.prototype.inputItem = function (item) {
        this.input.push(item)
        return this
    }
    /**
     * 
     * @param {Fluid} fluid 
     * @returns 
     */
    SqueezingRecipe.prototype.inputFluid = function (fluid) {
        this.input.push(fluid)
        return this
    }
    SqueezingRecipe.prototype.build = function () {
        this.recipe.ingredients = this.input
        return event.custom(this.recipe)
    }

    new SqueezingRecipe("3x minecraft:clay_ball")
        .inputItem("minecraft:mud")
        .build()
})