// 全局命名空间定义
declare const global: {
	namespace: string;
	toolType: Record<string, Tag>;
	miningLevel: Record<string, Tag>;
}

// 基础类型定义
type Color = number;
type ResourceLocation = string;
type Tag = string;
type ItemStack = any;
type Fluid = string;
type FluidTag = string;
type Ingredient = any;
type SoundType = string;

// 材料类型定义
type MaterialType = "ingot" | "plate" | "nugget" | "dust" | "rod" | "gear" | "block" | "molten";
// 挖掘等级列表
type MiningLevel = "wood" | "stone" | "iron" | "diamond" | "netherite";

// 材料对象接口
interface Material {
	name: string;
	color: Color;
	level: MiningLevel;
	types: MaterialType[];

	ingot(): this;
	plate(): this;
	nugget(): this;
	dust(): this;
	rod(): this;
	gear(): this;
	block(): this;
	molten(): this;
}

// 注册事件接口
interface RegistryEvent {
	create(id: string): ItemBuilder;
}

interface ItemBuilder {
	texture(texture: string): ItemBuilder;
	color(index: number, color: Color): ItemBuilder;
	tag(...tags: string[]): ItemBuilder;
}

interface BlockBuilder extends ItemBuilder {
	textureAll(texture: string): BlockBuilder;
	soundType(soundType: SoundType): BlockBuilder;
	hardness(value: number): BlockBuilder;
	resistance(value: number): BlockBuilder;
	item(callback: (item: ItemBuilder) => void): BlockBuilder;
	tagBlock(tag: Tag): BlockBuilder;
}

interface FluidBuilder {
	thinTexture(color: Color): FluidBuilder;
	bucketColor(color: Color): FluidBuilder;
	flowingTexture(texture: string): FluidBuilder;
	stillTexture(texture: string): FluidBuilder;
	tag(...tags: string[]): FluidBuilder;
}

// 文件操作接口
interface JsonIO {
	write(filePath: string, data: object): void;
}

// 事件系统声明
declare const StartupEvents: {
	registry(type: "item", handler: (event: RegistryEvent) => void): void;
	registry(type: "block", handler: (event: RegistryEvent) => void): void;
	registry(type: "fluid", handler: (event: RegistryEvent) => void): void;
}

declare const JsonIO: JsonIO

// 材料管理函数
type RegisterMetalMaterial = (name: string, color: Color, level: MiningLevel) => Material;