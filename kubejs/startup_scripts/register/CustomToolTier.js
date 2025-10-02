let $TierSortingRegistry =
	Java.loadClass("net.minecraftforge.common.TierSortingRegistry")
let $Tiers =
	Java.loadClass("net.minecraft.world.item.Tiers")
let $ForgeTier =
	Java.loadClass("net.minecraftforge.common.ForgeTier")
let $BlockTags =
	Java.loadClass("net.minecraft.tags.BlockTags")

ItemEvents.toolTierRegistry((event) => {
	event.add("cmi:bronze", (tier) => {
		tier.uses = 250
		tier.speed = 6.0
		tier.attackDamageBonus = 2.0
		tier.enchantmentValue = 14
		tier.level = 1
		tier.repairIngredient = "#forge:ingots/bronze"
	})

	function addForgeTier(level, uses, speed, attackDamageBonus, enchantmentValue, tag, repairIngredient) {
		return new $ForgeTier(level, uses, speed, attackDamageBonus, enchantmentValue, tag, repairIngredient)
	}

	let CustomTiers = {
		BRONZE: addForgeTier(
			0,
			32,
			12,
			0,
			22,
			$BlockTags.create("cmi:needs_bronze_tool"),
			() => {
				return Ingredient.of("#forge:ingots/bronze")
			}
		)
	}

	$TierSortingRegistry.registerTier(CustomTiers.BRONZE, "cmi:bronze", [$Tiers.STONE], [$Tiers.IRON])
})

StartupEvents.registry("item", (event) => {
	event.create("cmi:bronze_pickaxe", "pickaxe")
		.tier("cmi:bronze")
})

StartupEvents.registry("block", (event) => {
	event.create("cmi:test_block")
		.requiresTool()
})


// let $TierSortingRegistry = Java.loadClass("net.minecraftforge.common.TierSortingRegistry")
// let $Tiers = Java.loadClass("net.minecraft.world.item.Tiers")
// let $ForgeTier = Java.loadClass("net.minecraftforge.common.ForgeTier")
// let $BlockTags = Java.loadClass("net.minecraft.tags.BlockTags")

// ItemEvents.toolTierRegistry((event) => {
// 	event.add("bronze", (tier) => {
// 		tier.uses = 100
// 		tier.speed = 2.0
// 		tier.attackDamageBonus = 1.0
// 		//You can edit these values however youd like EXCEPT for "tier.level", it must be -1 to work properly
// 		tier.level = -1
// 		tier.enchantmentValue = 5.0
// 		//Make sure to set the "tier.repairIngredient" to the item or tag you want to use in your recipy
// 		tier.repairIngredient = "#forge:ingots/bronze"
// 	})
// 	//The "$BlockTags.create" should contain the name of the tag you want to use to set the material requirment of your block, it's best to folow the name format of "<mod_name>:needs_<material>_tool"
// 	// The "Ingredient.of" should contain the item or tag you want to use in your recipy
// 	const BronzeTier = new $ForgeTier(0, 32, 12, 0, 22, $BlockTags.create("minecraft:needs_bronze_tool"), () => Ingredient.of("#forge:ingots/bronze"))
// 	$TierSortingRegistry.registerTier(BronzeTier, "bronze", [$Tiers.STONE], [$Tiers.IRON])
// })

// //Register the pick with your new tier
// StartupEvents.registry('item', event => {
// 	event.create('bronze_pickaxe', 'pickaxe').tier('bronze')
// })