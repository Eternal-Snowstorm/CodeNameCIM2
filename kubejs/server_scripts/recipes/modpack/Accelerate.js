ServerEvents.recipes((event) => {
	addRecipe("cmi:iron_mechanism","minecraft:deepslate",[
		setOutput("minecraft:deepslate_iron_ore",0.15),
		setOutput("minecraft:deepslate_redstone_ore",0.15),
		setOutput("thermal:deepslate_nickel_ore",0.15)
	])

	/**
	 * 设置输出项Json
	 * 
	 * @param {Internal.Block_} id 
	 * @param {number} chance 
	 */
	function setOutput(id, chance) {
		return {
			"id": id,
			"chance": chance
		}
	}

	/**
	 * 定义配方轮子
	 * 
	 * @param {Internal.Ingredient_} input 
	 * @param {Internal.Block_} target 
	 * @param {Array<{
	 * 		id: Internal.Block_,
	 * 		chance: number
	 * }>} output
	 * @returns 
	 */
	function addRecipe(input, target, output) {
		return event.custom({
			type: "cmi:accelerator",
			input: Ingredient.of(input).toJson(),
			target: target,
			output: output
		})
	}
})