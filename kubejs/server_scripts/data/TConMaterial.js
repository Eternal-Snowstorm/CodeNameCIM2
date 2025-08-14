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
			.head(250, 2, 6, "minecraft:iron")
			.binding()
			.handle(0.1, 0, 0, 0)
			.limb(0, -0.2, 250, 0.1)
			.grip(0, 0.1, 2)
			.maille()
			.platingShield(226, 1.0, 1.0, 1.0)
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
			.handle(0.2, 0.0, 0.2, 0.1)
			.limb(0.1, 0.1, 600, 0.05)
			.maille()
			.platingBoots(1.2, 138, 0, 1.5)
			.platingChestplate(0.2, 240, 0, 1.5)
			.platingHelmet(0.2, 142, 0, 1.5)
			.platingLeggings(0.2, 231, 0, 1.5)
			.platingShield(238, 1.3, 1.5)
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
		builder.visibility(3, false)
			.craftable(false)
			.sortOrder(7)
			.head(800, 2.75, 6, "minecraft:diamond")
			.binding()
			.handle(0.05, 0, 0.05, 0.05)
			.limb(0.1, -0.3, 800, +0.2)
			.grip(0.05, -0.05, 2.75)
			.maille()
			.platingHelmet(2, 380, 0, 2)
			.platingChestplate(7, 490, 0, 2)
			.platingLeggings(5, 475, 0, 2)
			.platingBoots(2, 400, 0, 2)
			.platingShield(550, 0, 2)
			.setTraits((builder) => {
				builder.addTrait("default", "tconstruct:ductile", 1)
					.addTrait("tconstruct:melee_harvest", "tconstruct:tanned", 1)
					.addTrait("tconstruct:ranged", "tconstruct:tanned", 1)
			})
	})

	// 戴斯
	addTConMaterial(event, `${global.namespace}:desh`, (builder) => {
		builder.visibility(3, false)
			.craftable(false)
			.sortOrder(7)
			.head(900, 2.75, 7, "minecraft:diamond")
			.binding()
			.handle(0.05, 0, 0.1, 0)
			.limb(0.1, 0, 900, 0.05)
			.grip(0.05, 0, 2.5)
			.maille()
			.platingShield(820, 0, 2)
			.setTraits((builder) => {
				builder.addTrait("default", "tconstruct:reinforced", 1)
					.addTrait("tconstruct:melee_harvest", "tconstruct:haste", 1)
					.addTrait("tconstruct:armor", "tconstruct:speedy", 1)
			})
	})

	// 紫金
	addTConMaterial(event, `${global.namespace}:ostrum`, (builder) => {
		builder.visibility(4, false)
			.craftable(false)
			.sortOrder(7)
			.head(1380, 3.25, 7, "minecraft:netherite")
			.binding()
			.handle(0.1, 0.1, 0, 0.05)
			.limb(0.2, 0, 1380, 0)
			.grip(0.2, 0, 2.5)
			.maille()
			.platingShield(1420, 0, 4)
			.setTraits((builder) => {
				builder.addTrait("default", "tconstruct:heavy", 1)
					.addTrait("tconstruct:melee_harvest", "tconstruct:flamestance", 1)
					.addTrait("tconstruct:ranged", "tconstruct:flamestance", 1)
			})
	})

	// 耐热金属
	addTConMaterial(event, `${global.namespace}:calorite`, (builder) => {
		builder.visibility(4, false)
			.craftable(false)
			.sortOrder(7)
			.head(1500, 4.5, 7.5, "minecraft:netherite")
			.binding()
			.handle(0.15, 0.25, 0.05, 0.15)
			.limb(0, -0.3, 1500, +0.4)
			.grip(0, 0.15, 2.75)
			.maille()
			.platingHelmet(2, 1200, 0.2, 3)
			.platingChestplate(7, 1420, 0.4, 3)
			.platingLeggings(5, 1380, 0.3, 3)
			.platingBoots(2, 1200, 0.2, 3)
			.platingShield(1420, 0.5, 4)
			.setTraits((builder) => {
				builder.addTrait("default", "tconstruct:enhanced", 1)
					.addTrait("tconstruct:melee_harvest", "tconstruct:conducting", 1)
					.addTrait("tconstruct:ranged", "tconstruct:conducting", 1)
					.addTrait("tconstruct:armor", "tconstruct:fire_protection", 1)
			})
	})

	// 暗影钢
	addTConMaterial(event, `${global.namespace}:shadow_steel`, (builder) => {
		builder.visibility(4, false)
			.craftable(true)
			.sortOrder(7)
			.head(1420, 5, 6, "minecraft:netherite")
			.binding()
			.handle(0.1, -0.1, 0.05, -0.05)
			.limb(0.35, 0.25, 1420, 0.4)
			.grip(0.3, 0.1, 4.5)
			.maille()
			.setTraits((builder) => {
				builder.addTrait("default", "tconstruct:raging", 1)
					.addTrait("tconstruct:melee_harvest", "tconstruct:searing", 1)
					.addTrait("tconstruct:ranged", "tconstruct:necrotic", 1)
			})
	})

	// 光辉石
	addTConMaterial(event, `${global.namespace}:refined_radiance`, (builder) => {
		builder.visibility(4, false)
			.craftable(true)
			.sortOrder(7)
			.head(1380, 7, 6.5, "minecraft:netherite")
			.binding()
			.handle(-0.1, 0.3, 0.25, 0.35)
			.limb(-0.2, -0.3, 1380, -0.1)
			.grip(-0.2, -0.05, 6.5)
			.maille()
			.setTraits((builder) => {
				builder.addTrait("default", "tconstruct:crystalstrike", 1)
					.addTrait("tconstruct:melee_harvest", "tconstruct:lightspeed", 1)
					.addTrait("tconstruct:armor", "tconstruct:lightspeed", 1)
			})
	})
})