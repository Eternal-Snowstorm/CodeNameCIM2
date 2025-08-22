// priority: 1

let $LocalDateTime = Java.loadClass("java.time.LocalDateTime")
let $System = Java.loadClass("java.lang.System")

StartupEvents.postInit((event) => {
	let month = $LocalDateTime.now().getMonthValue()
	let day = $LocalDateTime.now().getDayOfMonth()
	let getSystemOsName = $System.getProperty("os.name").toLowerCase()

	if (Platform.isClientEnvironment()) {
		if (month === 4 && day === 1 && !getSystemOsName.contains("mac")) {
			Client.window.setTitle("Create: Infinity Mechanism")
		} else {
			Client.window.setTitle("Create: Mechanism and Innovation")
		}
	}
})