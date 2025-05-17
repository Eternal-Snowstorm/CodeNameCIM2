ServerEvents.recipes((event) => {
	let { create } = event.recipes
	let inc_railc = "create:railway_casing"
	let inc_stus = "ue_addons:dense_sturdy_sheet"

	create.sequenced_assembly("2x railways:track_coupler", [
		inc_railc
	], [
		create.cutting(inc_railc, inc_railc),
		create.deploying(inc_railc, [inc_railc, "ue_addons:railway_mechanism"]),
		create.deploying(inc_railc, [inc_railc, "create:belt_connector"]),
		create.deploying(inc_railc, [inc_railc, "minecraft:redstone_torch"]),
		create.deploying(inc_railc, [inc_railc, "minecraft:heavy_weighted_pressure_plate"]),
	]).transitionalItem(inc_railc).loops(1).id("railways:crafting/track_coupler")

	create.sequenced_assembly("8x create:schedule", [
		inc_stus
	], [
		create.cutting(inc_stus, inc_stus),
		create.deploying(inc_stus, [inc_stus, "ue_addons:railway_mechanism"]),
		create.deploying(inc_stus, [inc_stus, "minecraft:book"]),
	]).transitionalItem(inc_stus).loops(1).id("create:crafting/kinetics/schedule")

	create.sequenced_assembly("8x create:track_station", [
		inc_railc
	], [
		create.deploying(inc_railc, [inc_railc, "minecraft:stone_pressure_plate"]),
		create.cutting(inc_railc, inc_railc),
		create.deploying(inc_railc, [inc_railc, "ue_addons:railway_mechanism"]),
		create.deploying(inc_railc, [inc_railc, "minecraft:redstone"]),
		create.deploying(inc_railc, [inc_railc, "ue_addons:dense_sturdy_sheet"]),
	]).transitionalItem(inc_railc).loops(1).id("create:crafting/kinetics/track_station")

	create.sequenced_assembly("4x create:track_signal", [
		inc_railc
	], [
		create.pressing(inc_railc, inc_railc),
		create.deploying(inc_railc, [inc_railc, "ue_addons:railway_mechanism"]),
		create.deploying(inc_railc, [inc_railc, "create:copper_sheet"]),
		create.deploying(inc_railc, [inc_railc, "create:electron_tube"]),
		create.deploying(inc_railc, [inc_railc, "create:electron_tube"]),
	]).transitionalItem(inc_railc).loops(1).id("create:crafting/kinetics/track_signal")

	create.sequenced_assembly("4x create:track_observer", [
		inc_railc
	], [
		create.deploying(inc_railc, [inc_railc, "minecraft:observer"]),
		create.cutting(inc_railc, inc_railc),
		create.deploying(inc_railc, [inc_railc, "ue_addons:railway_mechanism"]),
		create.deploying(inc_railc, [inc_railc, "minecraft:redstone"]),
	]).transitionalItem(inc_railc).loops(1).id("create:crafting/kinetics/track_observer")

	create.sequenced_assembly("4x create:controls", [
		inc_railc
	], [
		create.deploying(inc_railc, [inc_railc, "create:cogwheel"]),
		create.deploying(inc_railc, [inc_railc, "create:cogwheel"]),
		create.deploying(inc_railc, [inc_railc, "ue_addons:railway_mechanism"]),
		create.deploying(inc_railc, [inc_railc, "minecraft:lever"]),
		create.deploying(inc_railc, [inc_railc, "minecraft:lever"]),
		create.deploying(inc_railc, [inc_railc, "create:electron_tube"]),
	]).transitionalItem(inc_railc).loops(1).id("create:crafting/kinetics/controls")
})