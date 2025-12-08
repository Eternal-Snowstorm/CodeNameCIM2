ServerEvents.recipes((event) => {
	addRecipe("#forge:gems/diamond", "ad_astra:moon_stone", [
		setOutput("minecraft:iron_block", 0.1),
		setOutput("minecraft:gold_block", 0.2),
		setOutput("minecraft:diamond_block", 0.3),
		setOutput("createaddition:creative_energy", 0.4)
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