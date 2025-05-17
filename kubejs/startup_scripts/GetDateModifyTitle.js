// priority: 0

let $LocalDateTime = Java.loadClass("java.time.LocalDateTime")

let foolTitle = "Create: Infinity Mechanism"
let defaultTitle = "Create: Mechanism and Innovation"

StartupEvents.postInit((event) => {
	let date = $LocalDateTime.now()
	if (date.getMonthValue() === 4 && date.getDayOfMonth() === 1) {
		Client.window.setTitle(foolTitle)
	} else {
		Client.window.setTitle(defaultTitle)
	}
})