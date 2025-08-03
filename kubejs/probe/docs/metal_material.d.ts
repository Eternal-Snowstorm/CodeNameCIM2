// 全局命名空间定义
declare const global: {
	namespace: string;
	toolType: ToolType;
	miningLevel: MiningLevel;
}

// 材料类型定义
type MaterialType = "ingot" | "plate" | "nugget" | "dust" | "rod" | "gear" | "block" | "molten";
// 工具类型
type ToolType = "pickaxe" | "axe" | "shovel" | "hoe" | "sword";
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

// 材料管理函数
type RegisterMetalMaterial = (name: string, color: Color, level: MiningLevel) => Material;