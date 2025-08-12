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

	// 工业铁
	addTConMaterial(event, `${global.namespace}:industrial_iron`, (builder) => {
		builder.visibility(2, false)
			.craftable(false)
			.sortOrder(2)
			.head(250, 2, 4, "minecraft:iron")
			.binding()
			.handle(0.1, -0.1, 0.05, 0)
			.limb(0, 0.05, 250, 0.2)
			.grip(0.1, 0.1, 0)
			.maille()
			.platingHelmet(2, 165, 0, 1)
			.platingChestplate(4, 240, 0, 2)
			.platingLeggings(3, 225, 0, 2)
			.platingBoots(2, 195, 0, 1)
			.platingShield(270, 0, 2)
			.setTraits((builder) => {
				builder.addTrait("default", "tconstruct:magnetic", 1)
					.addTrait("tconstruct:armor", "tconstruct:projectile_protection", 1)
			})
	})

	// 铸铁
	addTConMaterial(event, `${global.namespace}:cast_iron`, (builder) => {
		builder.visibility(3, false)
			.craftable(false)
			.sortOrder(7)
			.head(265, 6, 8, "minecraft:iron")
			.binding()
			.handle(0.1, 0.1, 0, 0.05)
			.limb(-0.2, -0.3, 120, -0.2)
			.grip(-0.2, 0.1, 2)
			.maille()
			.platingHelmet(3, 180, 1, 0)
			.platingChestplate(6, 285, 2, 0)
			.platingLeggings(5, 240, 2, 0)
			.platingBoots(3, 225, 1, 0)
			.platingShield(300, 2, 0)
			.setTraits((builder) => {
				builder.addTrait("default", "tconstruct:magnetic", 1)
					.addTrait("tconstruct:armor", "tconstruct:projectile_protection", 1)
			})
	})

	// 不锈钢
	addTConMaterial(event, `${global.namespace}:stainless_steel`, (builder) => {
		builder.visibility(4, false)
			.craftable(false)
			.sortOrder(7)
			.head(775, 2.75, 6, "minecraft:diamond")
			.binding()
			.handle(0.05, 0, 0.05, 0.05)
			.limb(0.1, -0.3, 775, +0.2)
			.grip(0.05, -0.05, 2.75)
			.maille()
			.platingHelmet(2, 319, 0, 2)
			.platingChestplate(7, 464, 0, 2)
			.platingLeggings(5, 435, 0, 2)
			.platingBoots(2, 377, 0, 2)
			.platingShield(522, 0, 2)
			.setTraits((builder) => {
				builder.addTrait("default", "tconstruct:ductile", 1)
					.addTrait("default", "tconstruct:tanned", 1)
			})
	})

	// 戴斯
	addTConMaterial(event, `${global.namespace}:desh`, (builder) => {
		builder.visibility(4, false)
			.craftable(false)
			.sortOrder(7)
	})

	// 紫金
	addTConMaterial(event, `${global.namespace}:ostrum`, (builder) => {
		builder.visibility(4, false)
			.craftable(false)
			.sortOrder(7)
	})

	// 耐热金属
	addTConMaterial(event, `${global.namespace}:calorite`, (builder) => {
		builder.visibility(4, false)
			.craftable(false)
			.sortOrder(7)
	})

	// 暗影钢
	addTConMaterial(event, `${global.namespace}:shadow_steel`, (builder) => {
		builder.visibility(4, false)
			.craftable(false)
			.sortOrder(7)
	})

	// 光辉石
	addTConMaterial(event, `${global.namespace}:refined_radiance`, (builder) => {
		builder.visibility(4, false)
			.craftable(false)
			.sortOrder(7)
	})
})