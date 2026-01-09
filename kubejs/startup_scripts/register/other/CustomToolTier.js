// let $TierSortingRegistry =
// 	Java.loadClass("net.minecraftforge.common.TierSortingRegistry")
// let $Tiers =
// 	Java.loadClass("net.minecraft.world.item.Tiers")
// let $ForgeTier =
// 	Java.loadClass("net.minecraftforge.common.ForgeTier")
// let $BlockTags =
// 	Java.loadClass("net.minecraft.tags.BlockTags")

// ItemEvents.toolTierRegistry((event) => {
// 	event.add("bronze", (tier) => {
// 		tier.uses = 250
// 		tier.speed = 6.0
// 		tier.attackDamageBonus = 2.0
// 		tier.enchantmentValue = 14
// 		// tier.level = 1
// 		tier.repairIngredient = "#forge:ingots/bronze"
// 	})

// 	function addForgeTier(level, uses, speed, attackDamageBonus, enchantmentValue, tag, repairIngredient) {
// 		return new $ForgeTier(level, uses, speed, attackDamageBonus, enchantmentValue, tag, repairIngredient)
// 	}

// 	function registerTier(tier, name, after, before) {
// 		return $TierSortingRegistry.registerTier(tier, name, after, before)
// 	}

// 	let CustomTiers = {
// 		BRONZE: addForgeTier(
// 			0,
// 			32,
// 			12,
// 			0,
// 			22,
// 			$BlockTags.create("cmi:needs_bronze_tool"),
// 			() => {
// 				return Ingredient.of("#forge:ingots/bronze")
// 			}
// 		)
// 	}

// 	registerTier(CustomTiers.BRONZE, "bronze", [$Tiers.STONE], [$Tiers.IRON])
// })

// StartupEvents.registry("item", (event) => {
// 	event.create("cmi:bronze_pickaxe", "pickaxe")
// 		.tier("bronze")
// })

// StartupEvents.registry("block", (event) => {
// 	event.create("cmi:test_block")
// 		.requiresTool()
// })