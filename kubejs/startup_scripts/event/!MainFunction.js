// priority: 100

/**
  * 
  * @template T
  * @param {T} event 
  * @param {(event: InstanceType<T>) => void} handler 
  * @returns
  */
function nativeEvent(event, handler) {
	NativeEvents.onEvent(event, handler)
}