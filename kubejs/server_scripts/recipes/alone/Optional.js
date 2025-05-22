ServerEvents.recipes((event) => {
	let { create } = event.recipes

	// 看看玩家自觉性😋
	/*
	if (Platform.isLoaded("torcherino")) {
		create.mechanical_crafting("torcherino:torcherino", [
			"AAAAAAAAA",
			"AAAAAAAAA",
			"AAAAAAAAA",
			"AAAAAAAAA",
			"AAAABAAAA",
			"AAAAAAAAA",
			"AAAAAAAAA",
			"AAAAAAAAA",
			"AAAAAAAAA"
		], {
			A: "cmi:creative_mechanism",
			B: "minecraft:torch"
		}).id("torcherino:torcherino")

		create.mechanical_crafting("torcherino:lantern", [
			"AAAAAAAAA",
			"AAAAAAAAA",
			"AAAAAAAAA",
			"AAAAAAAAA",
			"AAAABAAAA",
			"AAAAAAAAA",
			"AAAAAAAAA",
			"AAAAAAAAA",
			"AAAAAAAAA"
		], {
			A: "cmi:creative_mechanism",
			B: "minecraft:lantern"
		}).id("torcherino:lantern")

		create.mechanical_crafting("torcherino:lanterino", [
			"AAAAAAAAA",
			"AAAAAAAAA",
			"AAAAAAAAA",
			"AAAAAAAAA",
			"AAAABAAAA",
			"AAAAAAAAA",
			"AAAAAAAAA",
			"AAAAAAAAA",
			"AAAAAAAAA"
		], {
			A: "cmi:creative_mechanism",
			B: "minecraft:jack_o_lantern"
		}).id("torcherino:lanterino")
	}
	*/
})