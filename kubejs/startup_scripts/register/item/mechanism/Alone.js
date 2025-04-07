let $Item$Properties = Java.loadClass("net.minecraft.world.item.Item$Properties")
let $BoneMealItem = Java.loadClass("net.minecraft.world.item.BoneMealItem")
let $TreeFertilizerItem = Java.loadClass("com.simibubi.create.content.equipment.TreeFertilizerItem")

StartupEvents.registry("item", (event) => {
	// 自然构件
	// event.createCustom(`${global.namespace}:nature_mechanism`, () => {
	// 	return new $BoneMealItem(new $Item$Properties)
	// }).tag("create:mechanisms")

	// event.create(`${global.namespace}:incomplete_nature_mechanism`, "create:sequenced_assembly")
	// 	.texture(`${global.namespace}:item/mechanism/incomplete/incomplete_nature_mechanism`)
	// 	.tag("create:incomplete_mechanisms")

	// 木质构件
	// event.createCustom(`${global.namespace}:wooden_mechanism`, () => {
	// 	return new $TreeFertilizerItem(new $Item$Properties)
	// }).tag("create:mechanisms")

	// event.create(`${global.namespace}:incomplete_wooden_mechanism`, "create:sequenced_assembly")
	// 	.texture(`${global.namespace}:item/mechanism/incomplete/incomplete_wooden_mechanism`)
	// 	.tag("create:incomplete_mechanisms")

	// 生铁构件
	event.create(`${global.namespace}:pigiron_mechanism`)
		.texture(`${global.namespace}:item/mechanism/complete/pigiron_mechanism`)
		.food((food) => {
			food.hunger(8)
				.saturation(1)
				.alwaysEdible()
				.eaten((event) => {
					let { player, item } = event

					if (!player.isCreative()) {
						item.grow(1)
					}
				})
		})
		.tag("create:mechanisms")

	event.create(`${global.namespace}:incomplete_pigiron_mechanism`, "create:sequenced_assembly")
		.texture(`${global.namespace}:item/mechanism/incomplete/incomplete_pigiron_mechanism`)
		.tag("create:incomplete_mechanisms")

	// 创造构件
	event.create(`${global.namespace}:creative_mechanism`)
		.texture(`${global.namespace}:item/mechanism/complete/creative_mechanism`)
		.tag("create:mechanisms")

	event.create(`${global.namespace}:incomplete_creative_mechanism`, "create:sequenced_assembly")
		.texture(`${global.namespace}:item/mechanism/incomplete/incomplete_creative_mechanism`)
		.tag("create:incomplete_mechanisms")

	// 生铁与精密驱动
	event.create(`${global.namespace}:pigiron_force_exe`)
		.modelJson({
			"parent": "minecraft:item/generated",
			"textures": {
				"layer0": `${global.namespace}:item/mechanism_force_base`,
				"layer1": `${global.namespace}:item/mechanism/complete/pigiron_mechanism`,
				"layer2": `${global.namespace}:item/mechanism_force_overlay`
			}
		})

	event.create(`${global.namespace}:beta_pigiron_force_exe`)
		.modelJson({
			"parent": "minecraft:item/generated",
			"textures": {
				"layer0": `${global.namespace}:item/beta_mechanism_force_base`,
				"layer1": `${global.namespace}:item/mechanism/incomplete/incomplete_pigiron_mechanism`,
				"layer2": `${global.namespace}:item/beta_mechanism_force_overlay`
			}
		})

	event.create(`${global.namespace}:precision_force_exe`)
		.modelJson({
			"parent": "minecraft:item/generated",
			"textures": {
				"layer0": `${global.namespace}:item/mechanism_force_base`,
				"layer1": `create:item/precision_mechanism`,
				"layer2": `${global.namespace}:item/mechanism_force_overlay`
			}
		})

	event.create(`${global.namespace}:beta_precision_force_exe`)
		.modelJson({
			"parent": "minecraft:item/generated",
			"textures": {
				"layer0": `${global.namespace}:item/beta_mechanism_force_base`,
				"layer1": `create:item/incomplete_precision_mechanism`,
				"layer2": `${global.namespace}:item/beta_mechanism_force_overlay`
			}
		})
})