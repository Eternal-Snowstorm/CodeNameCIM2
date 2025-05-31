ServerEvents.recipes((event) => {
	let { ad_astra } = event.recipes

	ad_astra.alloying("tconstruct:steel_block", [
		"#forge:storage_blocks"
	]).energy(5).cookingtime(20)
})