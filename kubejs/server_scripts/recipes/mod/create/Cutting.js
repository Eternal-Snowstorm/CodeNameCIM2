ServerEvents.recipes((event) => {
	let { create } = event.getRecipes()

	create.cutting([
		"ae2:silicon_press",
		"ae2:logic_processor_press",
		"ae2:calculation_processor_press",
		"ae2:engineering_processor_press",
		"cmi:concurrent_processor_press",
		"neoecoae:superconducting_processor_press"
	], [
		"ae2:mysterious_cube"
	])

	create.cutting([
		"4x cmi:optical_fiber",
	], [
		"ae2:quartz_fiber"
	])
})