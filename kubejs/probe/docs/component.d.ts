declare class Component {
	constructor()
	getClass(): typeof any;
	/**
	 * Returns a component of the input, colored light purple
	*/
	static lightPurple(text: any): Internal.MutableComponent;
	/**
	 * Returns a component of the input, colored blue
	*/
	static blue(text: any): Internal.MutableComponent;
	/**
	 * Returns a translatable component of the input key
	*/
	static translatable(key: string): Internal.MutableComponent;
	/**
	 * Returns a ClickEvent of the input
	*/
	static clickEventOf(o: any): Internal.ClickEvent;
	/**
	 * Returns a colorful representation of the input nbt. Useful for displaying NBT to the player
	*/
	static prettyPrintNbt(tag: Internal.Tag_): Internal.Component;
	/**
	 * Returns an empty component
	*/
	static empty(): Internal.MutableComponent;
	/**
	 * Returns a translatable component of the input key, with args of the objects
	*/
	static translatable(key: string, ...objects: any[]): Internal.MutableComponent;
	/**
	 * Returns a component of the input, colored white
	*/
	static white(text: any): Internal.MutableComponent;
	/**
	 * Returns a translatable component of the input key, with args of the objects
	*/
	static translate(key: string, ...objects: any[]): Internal.MutableComponent;
	/**
	 * Returns a plain component of the string, or empty if it is an empty string
	*/
	static ofString(s: string): Internal.MutableComponent;
	/**
	 * Returns a translatable component of the input key
	*/
	static translate(key: string): Internal.MutableComponent;
	notify(): void;
	wait(arg0: number, arg1: number): void;
	/**
	 * Returns a component displaying all entities matching the input selector
	*/
	static selector(selector: string): Internal.MutableComponent;
	/**
	 * Returns a component of the input, colored yellow
	*/
	static yellow(text: any): Internal.MutableComponent;
	/**
	 * Checks if the passed in component, and all its children are empty
	*/
	static isEmpty(component: Internal.Component_): boolean;
	/**
	 * Returns a component of the input, colored dark purple
	*/
	static darkPurple(text: any): Internal.MutableComponent;
	/**
	 * Returns a Component of the input
	*/
	static of(o: any): Internal.MutableComponent;
	/**
	 * Returns a component of the input, colored gray
	*/
	static gray(text: any): Internal.MutableComponent;
	/**
	 * Returns a component of the input, colored dark blue
	*/
	static darkBlue(text: any): Internal.MutableComponent;
	/**
	 * Returns a component of the input, colored dark red
	*/
	static darkRed(text: any): Internal.MutableComponent;
	toString(): string;
	/**
	 * Returns a component of the input, colored gold
	*/
	static gold(text: any): Internal.MutableComponent;
	notifyAll(): void;
	/**
	 * Returns a component of the input, colored red
	*/
	static red(text: any): Internal.MutableComponent;
	/**
	 * Returns a component of the input, colored dark green
	*/
	static darkGreen(text: any): Internal.MutableComponent;
	/**
	 * Returns a component of the input, colored green
	*/
	static green(text: any): Internal.MutableComponent;
	/**
	 * Returns a keybinding component of the input keybinding descriptor
	*/
	static keybind(keybind: string): Internal.MutableComponent;
	/**
	 * Returns a component of the input, colored dark aqua
	*/
	static darkAqua(text: any): Internal.MutableComponent;
	/**
	 * Joins all components
	*/
	static join(...texts: Internal.Component_[]): Internal.MutableComponent;
	hashCode(): number;
	/**
	 * Returns a score component of the input objective, for the provided selector
	*/
	static score(selector: string, objective: string): Internal.MutableComponent;
	/**
	 * Returns a plain component of the passed in string, even if empty
	*/
	static string(text: string): Internal.MutableComponent;
	wait(): void;
	/**
	 * Returns a component of the input, colored aqua
	*/
	static aqua(text: any): Internal.MutableComponent;
	/**
	 * Joins all components in the list with the separator component
	*/
	static join(separator: Internal.MutableComponent_, texts: Internal.Iterable_<Internal.Component>): Internal.MutableComponent;
	/**
	 * Returns a component displaying all entities matching the input selector, with a custom separator
	*/
	static selector(selector: string, separator: Internal.Component_): Internal.MutableComponent;
	/**
	 * Returns a component of the input, colored black
	*/
	static black(text: any): Internal.MutableComponent;
	wait(arg0: number): void;
	/**
	 * Returns a component of the input, colored dark gray
	*/
	static darkGray(text: any): Internal.MutableComponent;
	/**
	 * Returns a plain component of the input
	*/
	static literal(text: string): Internal.MutableComponent;
	equals(arg0: any): boolean;
	get class(): typeof any
}
type Component_ = Component;