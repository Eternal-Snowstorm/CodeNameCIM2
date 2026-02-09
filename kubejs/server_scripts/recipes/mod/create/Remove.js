ServerEvents.recipes((event) => {
	let removeRecipeIds = []
	removeRecipeIds.forEach((id) => {
		event.remove({
			id: id
		})
	})

	let removeOutput = [
		"vintageimprovements:belt_grinder"
	]
	removeOutput.forEach((output) => {
		event.remove({
			output: output
		})
	})

	event.remove({
		type: "vintageimprovements:polishing"
	})
})