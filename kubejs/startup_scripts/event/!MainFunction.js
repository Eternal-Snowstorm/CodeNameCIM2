/**
 * 
 * @template T
 * @param {T} event 
 * @param {(event: InstanceType<T>) => void} handler 
 * @returns
 */
function RegisterNativeEvents(event, handler) {
	NativeEvents.onEvent(event, handler)
}