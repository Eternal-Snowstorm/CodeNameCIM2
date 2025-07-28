type TConMiningTier = "minecraft:wood" | "minecraft:stone" | "minecraft:iron" | "minecraft:diamond" | "minecraft:netherite"

type TConTraitStat = "tconstruct:armor" | "tconstruct:head" | "tconstruct:handle" | "tconstruct:binding" | "tconstruct:limb" | "tconstruct:grip" | "tconstruct:bowstring" | "tconstruct:melee_harvest" | "tconstruct:ranged"

type TConMaterialRegistry = (event: Internal.DataPackEventJS_, name: string, handler: (builder: TConMaterialBuilder) => void) => void

type FluidIngredient = Special.Fluid | `#${Special.FluidTag}`

interface TConTraitsBuilder {
	addDefault(name: string, level: number): this;
	addTrait(stat: TConTraitStat, name: string, level: number): this;
}

interface TConMaterialRecipeBuilder {
	needed(needed: number): this;
	value(value: number): this;
	leftover(leftover: Internal.ItemStack): this;
}

interface TConMaterialFluidRecipeBuilder {
	amount(amount: number): this;
	temperature(temperature: number): this;
	input(input: string): this;
}

interface TConMaterialMeltingRecipeBuilder {
	amount(amount: number): this;
	temperature(temperature: number): this;
}

interface TConMaterialBuilder {
	craftable(craftable: boolean): this;
	visibility(tier: number, hidden: boolean): this;
	tier(tier: number): this;
	hidden(hidden: boolean): this;
	sortOrder(sortOrder: number): this;
	head(durability: number, meleeAttack: number, miningSpeed: number, miningTier: TConMiningTier): this;
	handle(durability: number, meleeDamage: number, meleeSpeed: number, miningSpeed: number): this;
	binding(): this;
	limb(accuracy: number, drawSpeed: number, durability: number, velocity: number): this;
	grip(accuracy: number, durability: number, meleeDamage: number): this;
	bowstring(): this;
	platingHelmet(armor: number, durability: number, knockbackResistance: number, toughness: number): this;
	platingChestplate(armor: number, durability: number, knockbackResistance: number, toughness: number): this;
	platingLeggings(armor: number, durability: number, knockbackResistance: number, toughness: number): this;
	platingBoots(armor: number, durability: number, knockbackResistance: number, toughness: number): this;
	platingShield(durability: number, blockAmount: number, blockAngle: number): this;
	maille(): this;
	shieldCore(): this;
	setTraits(handler: (builder: TConTraitsBuilder) => void): this;
	addMaterialRecipes(ingredient: Ingredient_, handler: (builder: TConMaterialRecipeBuilder) => void): this;
	addMaterialFluidRecipes(fluid: FluidIngredient, handler: (builder: TConMaterialFluidRecipeBuilder) => void): this;
	addMaterialMeltingRecipes(fluid: Special.Fluid, handler: (builder: TConMaterialMeltingRecipeBuilder) => void): this;
}