let $AnvilUpdateEvent =
	Java.loadClass("net.minecraftforge.event.AnvilUpdateEvent")

nativeEvent($AnvilUpdateEvent, (event) => {
	let left = event.getLeft()
	let right = event.getRight()

	if (left.hasTag("forge:ingots") && right.hasTag("forge:dusts")) {
		event.setOutput("minecraft:diamond")
		event.setCost(5)
	}
})