ServerEvents.recipes((event) => {
	let { createaddition } = event.getRecipes()

	// 玻璃纤维
	createaddition.rolling("2x cmi:glass_wire", [
		"cmi:glass_rod"
	]).id("createaddition:rolling/glass_wire")

})