// priority: 1

let $LocalDateTime = Java.loadClass("java.time.LocalDateTime")

StartupEvents.postInit((event) => {
	let month = $LocalDateTime.now().getMonthValue()
	let day = $LocalDateTime.now().getDayOfMonth()

	if (Platform.isClientEnvironment()) {
		if (month === 4 && day === 1) {
			Client.window.setTitle("Create: Infinity Mechanism")
		} else {
			Client.window.setTitle("Create: Mechanism and Innovation")
		}
	}
})