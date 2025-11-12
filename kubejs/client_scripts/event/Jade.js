// let $HarvestToolProvider =
// 	Java.loadClass("snownee.jade.addon.harvest.HarvestToolProvider")
// let $SimpleToolHandler =
// 	Java.loadClass("snownee.jade.addon.harvest.SimpleToolHandler")
// let $ItemStack =
// 	Java.loadClass("net.minecraft.world.item.ItemStack")
// let $BlockTags =
// 	Java.loadClass("net.minecraft.tags.BlockTags")
// let $BuiltInRegistries =
// 	Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")

// JadeEvents.onClientRegistration((event) => {
// 	let ToolType = {
// 		PICKAXE: $BlockTags.MINEABLE_WITH_PICKAXE,
// 		AXE: $BlockTags.MINEABLE_WITH_AXE,
// 		SHOVEL: $BlockTags.MINEABLE_WITH_SHOVEL,
// 		HOE: $BlockTags.MINEABLE_WITH_HOE
// 	}

// 	function getToolItem(item) {
// 		return $BuiltInRegistries.ITEM.get(ResourceLocation.parse(item))
// 	}

// 	function registerJadeToolHandler(name, blockTag, item) {
// 		let handler = $HarvestToolProvider.registerHandler(new $SimpleToolHandler(
// 			name,
// 			blockTag,
// 			getToolItem(item)
// 		))

// 		return handler
// 	}

// 	registerJadeToolHandler("bronze_pickaxe", ToolType.PICKAXE, "cmi:bronze_pickaxe")
// })