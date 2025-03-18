ServerEvents.recipes((event) => {
	let { create } = event.recipes

	create.haunting("ae2:controller", [
		"refinedstorage:controller"
	])
})