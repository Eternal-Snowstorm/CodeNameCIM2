// priority: 0

let $LocalDateTime = Java.loadClass("java.time.LocalDateTime")

let foolTitle = "Create: Infinity Mechanism"
let defaultTitle = "Create: Mechanism and Innovation"

StartupEvents.postInit((event) => {
	let month = $LocalDateTime.now().getMonthValue()
	let day = $LocalDateTime.now().getDayOfMonth()

	if (month === 4 && day === 1) {
		Client.window.setTitle(foolTitle)
	} else {
		Client.window.setTitle(defaultTitle)
	}
})