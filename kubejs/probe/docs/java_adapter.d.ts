declare class JavaAdapter {
	constructor(javaClass: JavaClass<T> | T, overrides: Partial<T>, ...constructor: any): T
}