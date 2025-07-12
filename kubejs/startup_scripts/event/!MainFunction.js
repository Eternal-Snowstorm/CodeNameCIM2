let RegisterNativeEvents = {
	/**
	 * 
	 * @template T
	 * @param {T} event 
	 * @param {(event: InstanceType<T>) => void} handler 
	 * @returns
	 */
	onJavaClassEvent: function (event, handler) {
		NativeEvents.onEvent(event, handler)
	}
}
let Component = {
	translate: function (key) {
		return Component.translate(key)
	},
	translateAndObject: function (key, obj) {
		return Component.translate(key, obj)
	}
}