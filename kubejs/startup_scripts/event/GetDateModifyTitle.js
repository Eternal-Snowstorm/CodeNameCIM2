// priority: 1

let $LocalDateTime = Java.loadClass("java.time.LocalDateTime")
let $System = Java.loadClass("java.lang.System")

StartupEvents.postInit((event) => {
	let month = $LocalDateTime.now().getMonthValue()
	let day = $LocalDateTime.now().getDayOfMonth()
	function getSystemOsName(name) {
		return $System.getProperty("os.name").toLowerCase().contains(name)
	}

	if (Platform.isClientEnvironment()) {
		if (!getSystemOsName("mac")) {
			if (month === 4 && day === 1) {
				Client.window.setTitle("Create: Infinity Mechanism")
			} else {
				Client.window.setTitle("Create: Mechanism and Innovation")
			}
		}
	}
})