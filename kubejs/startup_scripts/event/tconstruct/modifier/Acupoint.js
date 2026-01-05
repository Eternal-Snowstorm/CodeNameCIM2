// let $LivingHurtEvent =
// 	Java.loadClass("net.minecraftforge.event.entity.living.LivingHurtEvent")

// nativeEvent($LivingHurtEvent, (event) => {
// 	try {
// 		let { entity, source } = event

// 		// 添加空值检查
// 		if (!entity || !source) {
// 			return
// 		}

// 		let attacker = source.getActual()

// 		// 检查attacker是否为空
// 		if (!attacker || !(attacker instanceof Player)) {
// 			return
// 		}

// 		if (!(entity instanceof LivingEntity)) {
// 			return
// 		}

// 		/** 
// 		 * @type {LivingEntity}
// 		 */
// 		let living = entity

// 		// 检查SimpleTCon是否存在
// 		if (typeof SimpleTCon === 'undefined') {
// 			console.error("SimpleTCon is not defined!")
// 			return
// 		}

// 		const HAS_MODIFIER = SimpleTCon.hasModifier(
// 			attacker.getMainHandItem(),
// 			"cmi:acupoint"
// 		)

// 		// 如果没有修改器，直接返回
// 		if (!HAS_MODIFIER) {
// 			return
// 		}

// 		const TOTAL_HEALTH = 1

// 		// 创建标签键，注意确保标签存在
// 		let bossTag = TagKey.create(
// 			ForgeRegistries.ENTITY_TYPES,
// 			ResourceLocation.parse("forge:bosses")
// 		)

// 		// 检查是否为boss
// 		let isBoss = entity.getType().is(bossTag)

// 		if (!isBoss) {
// 			if (living.getHealth() >= living.getMaxHealth() * TOTAL_HEALTH) {
// 				if (Math.random() < 0.15) {
// 					event.setAmount(living.getHealth())
// 				}
// 			}
// 		} else {
// 			if (living.getHealth() >= living.getMaxHealth() * TOTAL_HEALTH / 2) {
// 				if (Math.random() < 0.15) {
// 					event.setAmount(living.getHealth())
// 				}
// 			}
// 		}
// 	} catch (e) {
// 		console.error("Error in LivingHurtEvent handler: ", e)
// 	}
// })