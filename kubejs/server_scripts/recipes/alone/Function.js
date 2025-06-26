function aeCharger(output, input) {
	const INPUT = Ingredient.of(input).toJson()
	return {
		"type": "ae2:charger",
		"ingredient": INPUT,
		"result": {
			"item": output
		}
	}
}