ServerEvents.highPriorityData((event) => {
	// 紫水晶
	addTConMaterial(event, `${global.namespace}:amethyst`, (builder) => {
		builder.visibility(1, false)
			.craftable(true)
			.sortOrder(2)
			.head(100, 1.6, 6.2, "minecraft:stone")
			.handle(-0.10, 1.2, 0.7, 1.4)
			.limb(0.1, -0.12, 230, -0.02)
			.grip(0.2, -0.1, 3.2)
			.setTraits((builder) => {
				builder.addTrait("tconstruct:melee_harvest", "tconstruct:luck", 1)
					.addTrait("tconstruct:ranged", "tconstruct:crystalshot", 1)
			})
			.addMaterialRecipes("minecraft:amethyst_block", (builder) => {
				builder.needed(1)
					.value(4)
					.leftover(Item.of("minecraft:amethyst_shard", 1))
			})
			.addMaterialRecipes("minecraft:amethyst_shard", (builder) => {
				builder.needed(1)
					.value(1)
			})
			.addMaterialFluidRecipes("tconstruct:molten_amethyst", (builder) => {
				builder.amount(90)
					.temperature(800)
			})
	})

	// 安山合金
	addTConMaterial(event, `${global.namespace}:andesite_alloy`, (builder) => {
		builder.visibility(2, false)
			.craftable(true)
			.sortOrder(2)
			.head(250, 6, 2, "minecraft:iron")
			.binding()
			.handle(1.0, 1.3, 1.0, 1.0)
			.limb(0.1, -0.2, 250, 0)
			.maille()
			.platingShield(1.0, 1.0, 1.0, 1.0)
			.setTraits((builder) => {
				builder.addTrait("default", "tconstruct:stonebound", 1)
					.addTrait("tconstruct:melee_harvest", "tconstruct:reach", 1)
					.addTrait("tconstruct:armor", "tconstruct:melee_protection", 1)
			})
			.addMaterialRecipes("create:andesite_alloy_block", (builder) => {
				builder.needed(1)
					.value(9)
					.leftover(Item.of("create:andesite_alloy", 1))
			})
			.addMaterialRecipes("create:andesite_alloy", (builder) => {
				builder.needed(1)
					.value(1)
			})
			.addMaterialFluidRecipes("cmi:molten_andesite_alloy", (builder) => {
				builder.amount(90)
					.temperature(800)
			})
	})

	// 黄铜
	addTConMaterial(event, `${global.namespace}:brass`, (builder) => {
		builder.visibility(3, false)
			.craftable(false)
			.sortOrder(7)
			.head(780, 7, 2.5, "minecraft:diamond")
			.binding()
			.handle(1.5, 1.0, 1.0, 1.5)
			.limb(0.1, 0.1, 600, 0.05)
			.maille()
			.platingBoots(1.2, 1.1, 0.7, 1.5)
			.platingChestplate(1.2, 1.1, 0.7, 1.5)
			.platingHelmet(1.2, 1.1, 0.7, 1.5)
			.platingLeggings(1.2, 1.1, 0.7, 1.5)
			.platingShield(1.5, 1.3, 1.2, 1.0)
			.setTraits((builder) => {
				builder.addTrait("default", "tconstruct:harmonious", 1)
					.addTrait("tconstruct:melee_harvest", "tconstruct:expanded", 1)
					.addTrait("tconstruct:ranged", "tconstruct:multishot", 1)
			})
			.addMaterialFluidRecipes("tconstruct:molten_brass", (builder) => {
				builder.amount(90)
					.temperature(810)
			})
	})
})