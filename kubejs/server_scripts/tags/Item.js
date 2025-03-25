ServerEvents.tags("item", (event) => {
	event.get("create:mechanisms")
		.add("create:precision_mechanism")
	event.get("create:incomplete_mechanisms")
		.add("create:incomplete_precision_mechanism")

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

	event.get("curios:mechanisms")
		.add("ue_addons:cobalt_mechanism")
		.add("ue_addons:photosensitive_mechanism")
		.add('ue_addons:nether_mechanism')

	event.get("forge:sand")
		.add("#forge:sand")

	event.get("forge:stone")
		.add("#forge:cobblestone")

	event.get("forge:ingots/andesite_alloy")
		.add("create:andesite_alloy")
})