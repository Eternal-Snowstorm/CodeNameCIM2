// priority: 100

let RegisterNativeEvents = {
	/**
	 * 
	 * @template T
	 * @param {T} event 
	 * @param {(event: InstanceType<T>) => void} handler 
	 * @returns
	 */
	onEvent: function (event, handler) {
		NativeEvents.onEvent(event, handler)
	}
}

// 此函数是为了将KubeJS包装过的类转为Java反射的野生类
global.toRawClass = (cls) => {
	let clsName = String(cls).match(/[\w\.]+(?=\]?$)/)[0]
	return global.loadRawClass(clsName)
}
global.loadRawClass = (clsName) => {
	Java.class.forName(clsName)
}

// field操作
global.getDeclaredField = (obj, name, isStatic, superCount) => {
	// 超类层数默认为0
	superCount = superCount || 0
	let cls = obj
	if (!isStatic) {
		cls = obj.getClass()
	} else {
		cls = global.toRawClass(obj)
	}
	// 循环向上取超类
	for (let i = 0; i < superCount; i++) {
		cls = cls.getSuperclass()
	}
	let field = cls.getDeclaredField(name)
	field.setAccessible(true)
	return field
}
// 实际操作中获取静态变量此处直接传入类对象自身似乎也没啥问题
global.getField = (obj, name, isStatic, superCount) => {
	return global.getDeclaredField(obj, name, isStatic, superCount).get(obj)
}
global.setField = (obj, name, value, isStatic, superCount) => {
	return global.getDeclaredField(obj, name, isStatic, superCount).set(obj, value)
}
let $ClassFilter = Java.loadClass("dev.latvian.mods.kubejs.util.ClassFilter")
global.unlockClassFilter = (javaWrapper) => {
	let sm = global.getField(javaWrapper, "manager")
	global.setField(sm, "classFilter", $ClassFilter(), 0, sm.scriptType == "SERVER" && Platform.getMcVersion() >= "1.20")
}
global.unlockClassFilter(Java)

// By YukkuriC