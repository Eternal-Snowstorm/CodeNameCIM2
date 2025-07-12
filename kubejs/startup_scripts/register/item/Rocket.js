StartupEvents.registry("item", (event) => {
	// 火箭模版
	// 模型待定
	event.create(`${global.namespace}:rocket_pattern`)

	// 火箭框架1-4
	// 模型待定
	event.create(`${global.namespace}:tier_1_rocket_frame`)
	event.create(`${global.namespace}:tier_2_rocket_frame`)
	event.create(`${global.namespace}:tier_3_rocket_frame`)
	event.create(`${global.namespace}:tier_4_rocket_frame`)

	// 未完成火箭框架1-4
	// 模型待定
	event.create(`${global.namespace}:incomplete_tier_1_rocket_frame`)
	event.create(`${global.namespace}:incomplete_tier_2_rocket_frame`)
	event.create(`${global.namespace}:incomplete_tier_3_rocket_frame`)
	event.create(`${global.namespace}:incomplete_tier_4_rocket_frame`)

	// 未完成火箭1-4
	// 模型待定
	event.create(`${global.namespace}:incomplete_tier_1_rocket`)
	event.create(`${global.namespace}:incomplete_tier_2_rocket`)
	event.create(`${global.namespace}:incomplete_tier_3_rocket`)
	event.create(`${global.namespace}:incomplete_tier_4_rocket`)
})