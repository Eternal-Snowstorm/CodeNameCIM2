// priority: 100

/**
  * 
  * @template T
  * @param {T} event 
  * @param {Internal.Consumer_<InstanceType<T>>} handler 
  * @returns
  */
function nativeEvent(event, handler) {
	NativeEvents.onEvent(event, handler)
}