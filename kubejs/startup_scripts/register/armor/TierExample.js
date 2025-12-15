// /**
//  * 定义命名空间
//  * 包括盔甲的纹理也需要存放在
//  * namespace/textures/models/armor
//  * 具体可以参考Minecraft官方的路径
//  */
// let namespace = "kubejs"
// ItemEvents.armorTierRegistry((event) => {
// 	event.add(`${namespace}:bronze`, (tier) => {
// 		// 耐久系数
// 		tier.setDurabilityMultiplier(100)
// 		// 每件盔甲的保护系数, 分别是靴子, 裤子, 胸甲, 头盔
// 		tier.setSlotProtections([1, 2, 3, 4])
// 		// 盔甲韧性
// 		tier.setToughness(1)
// 		// 击退保护
// 		tier.setKnockbackResistance(0.1)
// 		// 附魔等级
// 		tier.setEnchantmentValue(6)
// 		// 修复材料
// 		tier.setRepairIngredient("#forge:ingots/bronze")
// 		// 穿戴音效
// 		tier.setEquipSound("minecraft:item.armor.equip_iron")
// 	})
// })

// StartupEvents.registry("item", (event) => {
// 	/**
// 	 * 注册盔甲物品
// 	 * 
// 	 * 物品纹理可以直接放在
// 	 * namespace/textures/item下
// 	 * 也可以使用.texture()方法去指定纹理路径
// 	 * 
// 	 * @param {string} name 盔甲材料id
// 	 */
// 	function addArmorItem(name) {
// 		let armorParts = [
// 			"helmet",
// 			"chestplate",
// 			"leggings",
// 			"boots"
// 		]
// 		armorParts.forEach((type) => {
// 			return event.create(`${namespace}:${name}_${type}`, type)
// 				.tier(tier)
// 		})
// 	}

// 	addArmorItem("bronze")
// })