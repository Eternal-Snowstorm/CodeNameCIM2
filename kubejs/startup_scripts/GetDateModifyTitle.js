// priority: 0

let $LocalDateTime = Java.loadClass("java.time.LocalDateTime")

StartupEvents.postInit((event) => {
	let date = $LocalDateTime.now()
	if (date.getMonthValue() === 4 && date.getDayOfMonth() === 1) {
		Client.window.setTitle("Create: Infinity Mechanism")
	} else {
		Client.window.setTitle("Create: Mechanism and Innovation")
	}
})