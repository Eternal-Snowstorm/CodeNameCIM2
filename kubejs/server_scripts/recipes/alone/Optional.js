ServerEvents.recipes((event) => {
	let { create } = event.recipes

	// 看看玩家自觉性😋
	if (Platform.isLoaded("torcherino")) {
		create.mechanical_crafting("torcherino:torcherino", [
			"AAAAA",
			"AAAAA",
			"AABAA",
			"AAAAA",
			"AAAAA"
		], {
			A: "ue_addons:creative_mechanism",
			B: "minecraft:torch"
		}).id("torcherino:torcherino")

		create.mechanical_crafting("torcherino:lantern", [
			"AAAAA",
			"AAAAA",
			"AABAA",
			"AAAAA",
			"AAAAA"
		], {
			A: "ue_addons:creative_mechanism",
			B: "minecraft:lantern"
		}).id("torcherino:lantern")

		create.mechanical_crafting("torcherino:lanterino", [
			"AAAAA",
			"AAAAA",
			"AABAA",
			"AAAAA",
			"AAAAA"
		], {
			A: "ue_addons:creative_mechanism",
			B: "minecraft:jack_o_lantern"
		}).id("torcherino:lanterino")
	}
})