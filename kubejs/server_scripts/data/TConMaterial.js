let $TinkerModifiers =
	Java.loadClass("slimeknights.tconstruct.tools.TinkerModifiers")
let $ModifierIds =
	Java.loadClass("slimeknights.tconstruct.tools.data.ModifierIds")
let $NTModifier =
	Java.loadClass("dev.celestiacraft.tinker.common.register.NTModifier")
let $ThermalConstructModifierIds =
	Java.loadClass("mrthomas20121.thermalconstruct.ThermalConstructModifierIds")

ServerEvents.highPriorityData((event) => {
	// 紫水晶
	new TConMaterial(event, `${Cmi.MODID}:amethyst`, (builder) => {
		builder.visibility(1, false)
			.craftable(true)
			.sortOrder(12)
			.head(100, 1.6, 6.2, "minecraft:stone")
			.handle(-0.10, 0.05, 0, 0)
			.limb(0.1, -0.12, 230, -0.02)
			.grip(0.2, -0.1, 3.2)
			.setTraits((builder) => {
				builder.addTrait("tconstruct:melee_harvest", id($ModifierIds.luck), 1)
					.addTrait("tconstruct:ranged", id($ModifierIds.crystalshot), 1)
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

	// 工业铁
	new TConMaterial(event, `${Cmi.MODID}:industrial_iron`, (builder) => {
		builder.visibility(2, false)
			.craftable(false)
			.sortOrder(12)
			.head(320, 2, 4, "minecraft:iron")
			.binding()
			.handle(0.1, -0.1, 0.05, 0)
			.limb(0, 0.1, 250, 0.2)
			.grip(0.1, 0.1, 0)
			.maille()
			.platingHelmet(2, 165, 0, 1)
			.platingChestplate(4, 240, 0, 2)
			.platingLeggings(3, 225, 0, 2)
			.platingBoots(2, 195, 0, 1)
			.platingShield(270, 0, 2)
			.setTraits((builder) => {
				builder.addTrait("default", modifier($TinkerModifiers.magnetic), 1)
					.addTrait("tconstruct:armor", id($ModifierIds.projectileProtection), 1)
			})
	})

	// 安山合金
	new TConMaterial(event, `${Cmi.MODID}:andesite_alloy`, (builder) => {
		builder.visibility(2, false)
			.craftable(true)
			.sortOrder(12)
			.head(250, 2, 6, "minecraft:iron")
			.handle(0.1, 0, 0, 0)
			.binding()
			.limb(0, 0, 250, 0.1)
			.grip(0, 0.1, 2)
			.maille()
			.arrowShaft()
			.platingShield(226, 1.0, 1.0, 1.0)
			.setTraits((builder) => {
				builder.addTrait("default", modifier($TinkerModifiers.stonebound), 1)
					.addTrait("tconstruct:melee_harvest", id($ModifierIds.reach), 1)
					.addTrait("tconstruct:armor", id($ModifierIds.meleeProtection), 1)
					.addTrait("tconstruct:ammo", modifier($TinkerModifiers.insatiable), 1)
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
					.temperature(760)
			})
	})

	// 黄铜
	new TConMaterial(event, `${Cmi.MODID}:brass`, (builder) => {
		builder.visibility(3, false)
			.craftable(false)
			.sortOrder(12)
			.head(680, 1.75, 8.5, "minecraft:diamond")
			.binding()
			.handle(0.0, 0.0, 0.05, 0.1)
			.grip(0.2, 0.2, 1.4)
			.maille()
			.platingBoots(1.2, 138, 0, 1.5)
			.platingChestplate(0.2, 240, 0, 1.5)
			.platingHelmet(0.2, 142, 0, 1.5)
			.platingLeggings(0.2, 231, 0, 1.5)
			.platingShield(238, 1.3, 1.5)
			.setTraits((builder) => {
				builder.addTrait("default", id($ModifierIds.harmonious), 1)
					.addTrait("tconstruct:melee_harvest", modifier($NTModifier.CLOCKWORK), 2)
					.addTrait("tconstruct:ranged", modifier($TinkerModifiers.multishot), 1)
			})
			.addMaterialFluidRecipes("tconstruct:molten_brass", (builder) => {
				builder.amount(90)
					.temperature(930)
			})
	})

	// 铸铁
	new TConMaterial(event, `${Cmi.MODID}:cast_iron`, (builder) => {
		builder.visibility(3, false)
			.craftable(false)
			.sortOrder(12)
			.head(528, 2.75, 7.5, "minecraft:diamond")
			.binding()
			.handle(0.15, 0.05, 0, -0.05)
			.grip(-0.05, 0.05, 0)
			.maille()
			.platingHelmet(3, 180, 1, 0)
			.platingChestplate(6, 285, 2, 0)
			.platingLeggings(5, 240, 2, 0)
			.platingBoots(3, 225, 1, 0)
			.platingShield(300, 2, 0)
			.setTraits((builder) => {
				builder.addTrait("default", modifier($TinkerModifiers.magnetic), 1)
					.addTrait("tconstruct:armor", id($ModifierIds.projectileProtection), 1)
					.addTrait("tconstruct:ranged", id($ModifierIds.maintained), 1)
			})
	})

	// 暗影钢
	new TConMaterial(event, `${Cmi.MODID}:shadow_steel`, (builder) => {
		builder.visibility(3, false)
			.craftable(true)
			.sortOrder(12)
			.head(620, 4.3, 7.2, "minecraft:diamond")
			.binding()
			.handle(0.1, -0.1, 0.2, -0.2)
			.grip(0.3, 0.1, 2.5)
			.arrowHead()
			.setTraits((builder) => {
				builder.addTrait("tconstruct:melee_harvest", modifier($NTModifier.SHADOW), 1)
				builder.addTrait("tconstruct:ranged", modifier($NTModifier.SHADOW), 1)
					.addTrait("tconstruct:ranged", modifier($TinkerModifiers.multishot), 2)
					.addTrait("tconstruct:ammo", modifier($TinkerModifiers.impaling), 1)
			})
	})

	// 光辉石
	new TConMaterial(event, `${Cmi.MODID}:refined_radiance`, (builder) => {
		builder.visibility(3, false)
			.craftable(true)
			.sortOrder(12)
			.head(320, 2.5, 2.0, "minecraft:diamond")
			.binding()
			.handle(-0.3, 0.3, 0.25, 0.35)
			.grip(-0.2, -0.3, 1.5)
			.arrowHead()
			.setTraits((builder) => {
				builder.addTrait("tconstruct:melee_harvest", id($ModifierIds.lightspeed), 1)
				builder.addTrait("tconstruct:ranged", id($ModifierIds.lightspeed), 1)
					.addTrait("tconstruct:ammo", id($ModifierIds.keen), 2)
			})
	})

	// 阿迪特
	new TConMaterial(event, `${Cmi.MODID}:ardite`, (builder) => {
		builder.visibility(3, false)
			.craftable(false)
			.sortOrder(12)
			.head(650, 2.75, 8.3, "minecraft:diamond")
			.binding()
			.handle(0.2, -0.05, -0.2, 0.25)
			.setTraits((builder) => {
				builder.addTrait("default", modifier($NTModifier.PETRAMOR), 1)
					.addTrait("tconstruct:handle", modifier($NTModifier.PETRAMOR), 1)
					.addTrait("tconstruct:head", modifier($NTModifier.PETRAMOR), 1)
			})
	})

	// 不锈钢
	new TConMaterial(event, `${Cmi.MODID}:stainless_steel`, (builder) => {
		builder.visibility(3, false)
			.craftable(false)
			.sortOrder(12)
			.head(800, 3.76, 6, "minecraft:diamond")
			.binding()
			.handle(0.05, 0, 0.05, 0.05)
			.limb(-0.05, 0, 800, 0.15)
			.grip(0.05, -0.05, 2.75)
			.maille()
			.platingHelmet(2, 380, 0, 2)
			.platingChestplate(7, 490, 0, 2)
			.platingLeggings(5, 475, 0, 2)
			.platingBoots(2, 400, 0, 2)
			.platingShield(550, 0, 2)
			.setTraits((builder) => {
				builder.addTrait("default", id($ModifierIds.ductile), 2)
					.addTrait("tconstruct:melee_harvest", id($ModifierIds.ductile), 2)
					.addTrait("tconstruct:melee_harvest", id($ModifierIds.blockade), 1)
					.addTrait("tconstruct:ranged", id($ModifierIds.ductile), 2)
			})
	})

	// 戴斯
	new TConMaterial(event, `${Cmi.MODID}:desh`, (builder) => {
		builder.visibility(4, false)
			.craftable(false)
			.sortOrder(12)
			.head(1210, 3.25, 7.5, "minecraft:diamond")
			.binding()
			.handle(0.05, 0.1, 0.15, 0.15)
			.limb(0.15, 0.15, 1280, 0.2)
			.grip(-0.1, 0.25, 2.5)
			.maille()
			.platingShield(820, 0, 2)
			.setTraits((builder) => {
				builder.addTrait("default", id($ModifierIds.reinforced), 1)
					.addTrait("tconstruct:melee_harvest", id($ModifierIds.haste), 1)
					.addTrait("tconstruct:armor", id($ModifierIds.speedy), 1)
					.addTrait("tconstruct:ranged", id($ModifierIds.featherweight), 1)
			})
	})

	// 紫金
	new TConMaterial(event, `${Cmi.MODID}:ostrum`, (builder) => {
		builder.visibility(4, false)
			.craftable(false)
			.sortOrder(12)
			.head(1380, 4.5, 8.0, "minecraft:netherite")
			.binding()
			.handle(0.1, 0.15, 0.3, 0.15)
			.limb(0.35, 0.25, 1420, 0.65)
			.grip(0.2, 0, 3.5)
			.maille()
			.platingShield(1420, 0, 4)
			.setTraits((builder) => {
				builder.addTrait("default", id($ModifierIds.lightweight), 1)
					.addTrait("tconstruct:melee_harvest", id($ModifierIds.flamestance), 1)
					.addTrait("tconstruct:ranged", id($ModifierIds.maintained), 1)
			})
	})

	// 耐热金属
	new TConMaterial(event, `${Cmi.MODID}:calorite`, (builder) => {
		builder.visibility(4, false)
			.craftable(false)
			.sortOrder(12)
			.head(1500, 6.5, 8.5, "minecraft:netherite")
			.binding()
			.handle(0.35, 0.3, -0.15, 0.25)
			.grip(0, 0.4, 2.5)
			.maille()
			.platingHelmet(2, 1200, 0.2, 3)
			.platingChestplate(7, 1420, 0.4, 3)
			.platingLeggings(5, 1380, 0.3, 3)
			.platingBoots(2, 1200, 0.2, 3)
			.platingShield(1420, 0.5, 4)
			.setTraits((builder) => {
				builder.addTrait("default", id($ModifierIds.enhanced), 1)
					.addTrait("tconstruct:melee_harvest", modifier($TinkerModifiers.conducting), 1)
					.addTrait("tconstruct:melee_harvest", id($ModifierIds.solid), 1)
					.addTrait("tconstruct:ranged", id($ModifierIds.ballista), 1)
					.addTrait("tconstruct:armor", id($ModifierIds.fireProtection), 2)
			})
	})
})