ServerEvents.tags("item", (event) => {
	let colorGroup = [
		"black",
		"blue",
		"brown",
		"cyan",
		"gray",
		"green",
		"light_blue",
		"light_gray",
		"lime",
		"magenta",
		"orange",
		"pink",
		"purple",
		"red",
		"white",
		"yellow"
	]
	colorGroup.forEach((color) => {
		event.get(`forge:dyes/${color}`)
			.add("ue_addons:colorful_mechanism")
	})

	event.get("create:mechanisms")
		.add("create:precision_mechanism")
	event.get("create:incomplete_mechanisms")
		.add("create:incomplete_precision_mechanism")
})