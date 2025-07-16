ServerEvents.recipes((event) => {
	let { create } = event.recipes
	let incRailc = "create:railway_casing"
	let incStus = "cmi:dense_sturdy_sheet"

	create.sequenced_assembly("2x railways:track_coupler", [
		incRailc
	], [
		create.cutting(incRailc, incRailc),
		create.deploying(incRailc, [incRailc, "cmi:railway_mechanism"]),
		create.deploying(incRailc, [incRailc, "create:belt_connector"]),
		create.deploying(incRailc, [incRailc, "minecraft:redstone_torch"]),
		create.deploying(incRailc, [incRailc, "minecraft:heavy_weighted_pressure_plate"]),
	]).transitionalItem(incRailc).loops(1).id("railways:crafting/track_coupler")

	create.sequenced_assembly("8x create:schedule", [
		incStus
	], [
		create.cutting(incStus, incStus),
		create.deploying(incStus, [incStus, "cmi:railway_mechanism"]),
		create.deploying(incStus, [incStus, "minecraft:book"]),
	]).transitionalItem(incStus).loops(1).id("create:crafting/kinetics/schedule")

	create.sequenced_assembly("8x create:track_station", [
		incRailc
	], [
		create.deploying(incRailc, [incRailc, "minecraft:stone_pressure_plate"]),
		create.cutting(incRailc, incRailc),
		create.deploying(incRailc, [incRailc, "cmi:railway_mechanism"]),
		create.deploying(incRailc, [incRailc, "minecraft:redstone"]),
		create.deploying(incRailc, [incRailc, "cmi:dense_sturdy_sheet"]),
	]).transitionalItem(incRailc).loops(1).id("create:crafting/kinetics/track_station")

	create.sequenced_assembly("4x create:track_signal", [
		incRailc
	], [
		create.pressing(incRailc, incRailc),
		create.deploying(incRailc, [incRailc, "cmi:railway_mechanism"]),
		create.deploying(incRailc, [incRailc, "create:copper_sheet"]),
		create.deploying(incRailc, [incRailc, "create:electron_tube"]),
		create.deploying(incRailc, [incRailc, "create:electron_tube"]),
	]).transitionalItem(incRailc).loops(1).id("create:crafting/kinetics/track_signal")

	create.sequenced_assembly("4x create:track_observer", [
		incRailc
	], [
		create.deploying(incRailc, [incRailc, "minecraft:observer"]),
		create.cutting(incRailc, incRailc),
		create.deploying(incRailc, [incRailc, "cmi:railway_mechanism"]),
		create.deploying(incRailc, [incRailc, "minecraft:redstone"]),
	]).transitionalItem(incRailc).loops(1).id("create:crafting/kinetics/track_observer")

	create.sequenced_assembly("4x create:controls", [
		incRailc
	], [
		create.deploying(incRailc, [incRailc, "create:cogwheel"]),
		create.deploying(incRailc, [incRailc, "create:cogwheel"]),
		create.deploying(incRailc, [incRailc, "cmi:railway_mechanism"]),
		create.deploying(incRailc, [incRailc, "minecraft:lever"]),
		create.deploying(incRailc, [incRailc, "minecraft:lever"]),
		create.deploying(incRailc, [incRailc, "create:electron_tube"]),
	]).transitionalItem(incRailc).loops(1).id("create:crafting/kinetics/controls")
})