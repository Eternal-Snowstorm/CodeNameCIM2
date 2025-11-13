type MiningTier = "minecraft:wood" | "minecraft:stone" | "minecraft:iron" | "minecraft:diamond" | "minecraft:netherite"

type TraitStat = "tconstruct:armor" | "tconstruct:head" | "tconstruct:handle" | "tconstruct:binding" | "tconstruct:limb" | "tconstruct:grip" | "tconstruct:bowstring" | "tconstruct:melee_harvest" | "tconstruct:ranged"

type TConMaterialRegistry = (event: Internal.DataPackEventJS_, name: string, handler: (builder: TConMaterialBuilder) => void) => void

type FluidIngredient = Special.Fluid | `#${Special.FluidTag}`

interface TraitsBuilder {
	addDefault(name: string, level: number): this;
	addTrait(stat: TraitStat, name: string, level: number): this;
}

interface MaterialRecipeBuilder {
	needed(needed: number): this;
	value(value: number): this;
	leftover(leftover: Internal.ItemStack): this;
}

interface MaterialFluidRecipeBuilder {
	amount(amount: number): this;
	temperature(temperature: number): this;
	input(input: string): this;
}

interface MaterialMeltingRecipeBuilder {
	amount(amount: number): this;
	temperature(temperature: number): this;
}

interface TConMaterialBuilder {
	craftable(craftable: boolean): this;
	visibility(tier: number, hidden: boolean): this;
	tier(tier: number): this;
	hidden(hidden: boolean): this;
	sortOrder(sortOrder: number): this;
	head(durability: number, meleeAttack: number, miningSpeed: number, miningTier: MiningTier): this;
	handle(durability: number, meleeDamage: number, meleeSpeed: number, miningSpeed: number): this;
	binding(): this;
	limb(accuracy: number, drawSpeed: number, durability: number, velocity: number): this;
	grip(accuracy: number, durability: number, meleeDamage: number): this;
	bowstring(): this;
	platingHelmet(armor: number, durability: number, knockbackResistance: number, toughness: number): this;
	platingChestplate(armor: number, durability: number, knockbackResistance: number, toughness: number): this;
	platingLeggings(armor: number, durability: number, knockbackResistance: number, toughness: number): this;
	platingBoots(armor: number, durability: number, knockbackResistance: number, toughness: number): this;
	platingShield(durability: number, knockbackResistance: number, toughness: number): this;
	maille(): this;
	shieldCore(): this;
	setTraits(handler: (builder: TraitsBuilder) => void): this;
	addMaterialRecipes(ingredient: Ingredient_, handler: (builder: MaterialRecipeBuilder) => void): this;
	addMaterialFluidRecipes(fluid: FluidIngredient, handler: (builder: MaterialFluidRecipeBuilder) => void): this;
	addMaterialMeltingRecipes(fluid: Special.Fluid, handler: (builder: MaterialMeltingRecipeBuilder) => void): this;
}