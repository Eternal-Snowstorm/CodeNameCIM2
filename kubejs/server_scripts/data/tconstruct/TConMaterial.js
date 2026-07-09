let $TinkerModifiers =
	Java.loadClass("slimeknights.tconstruct.tools.TinkerModifiers")
let $ModifierIds =
	Java.loadClass("slimeknights.tconstruct.tools.data.ModifierIds")
let $NTModifier =
	Java.loadClass("dev.celestiacraft.tinker.common.register.NTModifier")
let $ThermalConstructModifierIds =
	Java.loadClass("mrthomas20121.thermalconstruct.ThermalConstructModifierIds")

TConJSEvents.materialDefinition((event) => {
	/**
	 * 
	 * @param {string} name 材料名称
	 * @returns 
	 */
	function getMeltingPoint(name) {
		return CmiMetalRegistry.get(name).getMeltingPoint()
	}

	/**
	 * 
	 * @param {string} material 
	 */
	function TConMaterial(material) {
		this.material = material
		this.definitionData = (builder) => { }
		this.statsData = (builder) => { }
		this.traitsData = (builder) => { }
		this.meltingData = (builder) => { }
	}

	/**
	 * @param {Internal.Consumer_<Internal.MaterialDefinitionBuilder>} definition 
	 */
	TConMaterial.prototype.definition = function (definition) {
		this.definitionData = definition
		return this
	}

	/**
	 * @param {Internal.Consumer_<Internal.MaterialStatsBuilder>} stats 
	 */
	TConMaterial.prototype.stats = function (stats) {
		this.statsData = stats
		return this
	}

	/**
	 * @param {Internal.Consumer_<Internal.MaterialTraitsBuilder>} traits 
	 */
	TConMaterial.prototype.traits = function (traits) {
		this.traitsData = traits
		return this
	}

	/**
	 * @param {Internal.Consumer_<MaterialSmeltingRecipeBuilder>} melting 
	 */
	TConMaterial.prototype.melting = function (melting) {
		if (melting) {
			this.meltingData = melting
		}

		event.addMaterialData(
			"cmi",
			this.material,
			this.definitionData,
			this.statsData,
			this.traitsData,
			this.meltingData
		)
		return this
	}

	// 工业铁
	new TConMaterial("industrial_iron")
		.definition((builder) => {
			builder.craftable(false)
				.sortOrder(12)
				.tier(2)
				.hidden(false)
		})
		.stats((builder) => {
			builder.head(320, 2, 4, "minecraft:iron")
				.binding()
				.handle(0.1, -0.1, 0.05, 0)
				.limb(0, 0.1, 250, 0.2)
				.grip(0.1, 0.1, 0)
				.maille()
				.platingHelmet(2, 165, 0)
				.platingChestplate(4, 240, 0)
				.platingLeggings(3, 225, 0)
				.platingBoots(2, 195, 0)
				.platingShield(270, 0)
		})
		.traits((builder) => {
			builder.perStat("default", $TinkerModifiers.magnetic, 1)
				.perStat("tconstruct:armor", $ModifierIds.projectileProtection, 1)
		})
		.melting((builder) => {
			builder.fluid("cmi:molten_industrial_iron")
				.amount(90)
				.temperature(getMeltingPoint("industrial_iron"))
				.material("cmi:industrial_iron")
		})

	// 安山合金
	new TConMaterial("andesite_alloy")
		.definition((builder) => {
			builder.craftable(true)
				.sortOrder(12)
				.tier(2)
				.hidden(false)
				.setCraftOrRepairRecipe((builder) => {
					builder.input("create:andesite_alloy")
				})
		})
		.stats((builder) => {
			builder.head(250, 2, 6, "minecraft:iron")
				.handle(0.1, 0, 0, 0)
				.binding()
				.limb(0, 0, 250, 0.1)
				.grip(0, 0.1, 2)
				.maille()
				.platingShield(226, 1.0)
		})
		.traits((builder) => {
			builder.perStat("default", $TinkerModifiers.stonebound, 1)
				.perStat("tconstruct:melee_harvest", $ModifierIds.reach, 1)
				.perStat("tconstruct:armor", $ModifierIds.meleeProtection, 1)
				.perStat("tconstruct:ammo", $TinkerModifiers.insatiable, 1)
		})
		.melting((builder) => {
			builder.fluid("cmi:molten_andesite_alloy")
				.amount(90)
				.temperature(getMeltingPoint("andesite_alloy"))
				.material("cmi:andesite_alloy")
		})

	// 黄铜
	new TConMaterial("brass")
		.definition((builder) => {
			builder.craftable(false)
				.sortOrder(12)
				.tier(3)
				.hidden(false)
		})
		.stats((builder) => {
			builder.head(680, 1.75, 8.5, "minecraft:diamond")
				.binding()
				.handle(0.0, 0.0, 0.05, 0.1)
				.grip(0.2, 0.2, 1.4)
				.maille()
				.platingBoots(1.2, 138, 0)
				.platingChestplate(0.2, 240, 0)
				.platingHelmet(0.2, 142, 0)
				.platingLeggings(0.2, 231, 0)
				.platingShield(238, 1.3)
		})
		.traits((builder) => {
			builder.perStat("default", $ModifierIds.harmonious, 1)
				.perStat("tconstruct:melee_harvest", $NTModifier.CLOCKWORK, 2)
				.perStat("tconstruct:ranged", $TinkerModifiers.multishot, 1)
		})
		.melting((builder) => {
			builder.fluid("tconstruct:molten_brass")
				.amount(90)
				.temperature(getMeltingPoint("brass"))
				.material("cmi:brass")
		})

	// 铸铁
	new TConMaterial("cast_iron")
		.definition((builder) => {
			builder.craftable(false)
				.sortOrder(12)
				.tier(3)
				.hidden(false)
		})
		.stats((builder) => {
			builder.head(528, 2.75, 7.5, "minecraft:diamond")
				.binding()
				.handle(0.15, 0.05, 0, -0.05)
				.grip(-0.05, 0.05, 0)
				.maille()
				.platingHelmet(3, 180, 1)
				.platingChestplate(6, 285, 2)
				.platingLeggings(5, 240, 2)
				.platingBoots(3, 225, 1)
				.platingShield(300, 2)
		})
		.traits((builder) => {
			builder.perStat("default", $TinkerModifiers.magnetic, 1)
				.perStat("tconstruct:armor", $ModifierIds.projectileProtection, 1)
				.perStat("tconstruct:ranged", $ModifierIds.maintained, 1)
		})
		.melting((builder) => {
			builder.fluid("cmi:molten_cast_iron")
				.amount(90)
				.temperature(getMeltingPoint("cast_iron"))
				.material("cmi:cast_iron")
		})

	// 暗影钢
	new TConMaterial("shadow_steel")
		.definition((builder) => {
			builder.craftable(true)
				.sortOrder(12)
				.tier(3)
				.hidden(false)
		})
		.stats((builder) => {
			builder.head(620, 4.3, 7.2, "minecraft:diamond")
				.binding()
				.handle(0.1, -0.1, 0.2, -0.2)
				.grip(0.3, 0.1, 2.5)
			// .arrowHead()
		})
		.traits((builder) => {
			builder.perStat("tconstruct:melee_harvest", $NTModifier.SHADOW, 1)
				.perStat("tconstruct:ranged", $NTModifier.SHADOW, 2)
				.perStat("tconstruct:ranged", $TinkerModifiers.multishot, 2)
				.perStat("tconstruct:ammo", $TinkerModifiers.impaling, 1)
		})
		.melting((builder) => {
			builder.fluid("cmi:molten_shadow_steel")
				.amount(90)
				.temperature(getMeltingPoint("shadow_steel"))
				.material("cmi:shadow_steel")
		})

	// 光辉石
	new TConMaterial("refined_radiance")
		.definition((builder) => {
			builder.craftable(true)
				.sortOrder(12)
				.tier(3)
				.hidden(false)
		})
		.stats((builder) => {
			builder.head(320, 2.5, 2.0, "minecraft:diamond")
				.binding()
				.handle(-0.3, 0.3, 0.25, 0.35)
				.grip(-0.2, -0.3, 1.5)
			// .arrowHead()
		})
		.traits((builder) => {
			builder.perStat("tconstruct:melee_harvest", $ModifierIds.lightspeed, 1)
				.perStat("tconstruct:ranged", $ModifierIds.lightspeed, 1)
				.perStat("tconstruct:ammo", $ModifierIds.keen, 2)
		})
		.melting((builder) => {
			builder.fluid("cmi:molten_refined_radiance")
				.amount(90)
				.temperature(getMeltingPoint("refined_radiance"))
				.material("cmi:refined_radiance")
		})

	// 阿迪特
	new TConMaterial("ardite")
		.definition((builder) => {
			builder.craftable(false)
				.sortOrder(12)
				.tier(3)
				.hidden(false)
		})
		.stats((builder) => {
			builder.head(650, 2.75, 8.3, "minecraft:diamond")
				.binding()
				.handle(0.2, -0.05, -0.2, 0.25)
		})
		.traits((builder) => {
			builder.perStat("default", $NTModifier.PETRAMOR, 1)
				.perStat("tconstruct:handle", $NTModifier.PETRAMOR, 1)
				.perStat("tconstruct:head", $NTModifier.PETRAMOR, 1)
		})
		.melting((builder) => {
			builder.fluid("cmi:molten_ardite")
				.amount(90)
				.temperature(getMeltingPoint("ardite"))
				.material("cmi:ardite")
		})

	// 不锈钢
	new TConMaterial("stainless_steel")
		.definition((builder) => {
			builder.craftable(false)
				.sortOrder(12)
				.tier(3)
				.hidden(false)
		})
		.stats((builder) => {
			builder.head(800, 3.76, 6, "minecraft:diamond")
				.binding()
				.handle(0.05, 0, 0.05, 0.05)
				.limb(-0.05, 0, 800, 0.15)
				.grip(0.05, -0.05, 2.75)
				.maille()
				.platingHelmet(2, 380, 0)
				.platingChestplate(7, 490, 0)
				.platingLeggings(5, 475, 0)
				.platingBoots(2, 400, 0)
				.platingShield(550, 0)
		})
		.traits((builder) => {
			builder.perStat("default", $ModifierIds.ductile, 2)
				.perStat("tconstruct:melee_harvest", $ModifierIds.ductile, 2)
				.perStat("tconstruct:melee_harvest", $ModifierIds.blockade, 1)
				.perStat("tconstruct:ranged", $ModifierIds.ductile, 2)
		})
		.melting((builder) => {
			builder.fluid("cmi:molten_stainless_steel")
				.amount(90)
				.temperature(getMeltingPoint("stainless_steel"))
				.material("cmi:stainless_steel")
		})

	// 戴斯
	new TConMaterial("desh")
		.definition((builder) => {
			builder.craftable(false)
				.sortOrder(12)
				.tier(4)
				.hidden(false)
		})
		.stats((builder) => {
			builder.head(1210, 3.25, 7.5, "minecraft:diamond")
				.binding()
				.handle(0.05, 0.1, 0.15, 0.15)
				.limb(0.15, 0.15, 1280, 0.2)
				.grip(-0.1, 0.25, 2.5)
				.maille()
				.platingShield(820, 0)
		})
		.traits((builder) => {
			builder.perStat("default", $ModifierIds.reinforced, 1)
				.perStat("tconstruct:melee_harvest", $ModifierIds.haste, 1)
				.perStat("tconstruct:armor", $ModifierIds.speedy, 1)
				.perStat("tconstruct:ranged", $ModifierIds.featherweight, 1)
		})
		.melting((builder) => {
			builder.fluid("cmi:molten_desh")
				.amount(90)
				.temperature(getMeltingPoint("desh"))
				.material("cmi:desh")
		})

	// 紫金
	new TConMaterial("ostrum")
		.definition((builder) => {
			builder.craftable(false)
				.sortOrder(12)
				.tier(4)
				.hidden(false)
		})
		.stats((builder) => {
			builder.head(1380, 4.5, 8.0, "minecraft:netherite")
				.binding()
				.handle(0.1, 0.15, 0.3, 0.15)
				.limb(0.35, 0.25, 1420, 0.65)
				.grip(0.2, 0, 3.5)
				.maille()
				.platingShield(1420, 0)
		})
		.traits((builder) => {
			builder.perStat("tconstruct:melee_harvest", $TinkerModifiers.insatiable, 1)
				.perStat("tconstruct:ranged", $ModifierIds.lightweight, 1)
		})
		.melting((builder) => {
			builder.fluid("cmi:molten_ostrum")
				.amount(90)
				.temperature(getMeltingPoint("ostrum"))
				.material("cmi:ostrum")
		})

	// 耐热金属
	new TConMaterial("calorite")
		.definition((builder) => {
			builder.craftable(false)
				.sortOrder(12)
				.tier(4)
				.hidden(false)
		})
		.stats((builder) => {
			builder.head(1500, 6.5, 8.5, "minecraft:netherite")
				.binding()
				.handle(0.35, 0.3, -0.15, 0.25)
				.grip(0, 0.4, 2.5)
				.maille()
				.platingHelmet(2, 1200, 0.2)
				.platingChestplate(7, 1420, 0.4)
				.platingLeggings(5, 1380, 0.3)
				.platingBoots(2, 1200, 0.2)
				.platingShield(1420, 0.5)
		})
		.traits((builder) => {
			builder.perStat("default", $ModifierIds.enhanced, 1)
				.perStat("tconstruct:melee_harvest", $TinkerModifiers.conducting, 1)
				.perStat("tconstruct:melee_harvest", $ModifierIds.solid, 1)
				.perStat("tconstruct:ranged", $ModifierIds.ballista, 1)
				.perStat("tconstruct:armor", $ModifierIds.fireProtection, 2)
		})
		.melting((builder) => {
			builder.fluid("cmi:molten_calorite")
				.amount(90)
				.temperature(getMeltingPoint("calorite"))
				.material("cmi:calorite")
		})

	// 紫水晶
	new TConMaterial("amethyst")
		.definition((builder) => {
			builder.craftable(true)
				.sortOrder(110)
				.tier(1)
				.hidden(false)
				.setCraftOrRepairRecipe((builder) => {
					builder.input("#forge:gems/amethyst")
				})
		})
		.stats((builder) => {
			builder.head(100, 1.6, 6.2, "minecraft:stone")
				.handle(-0.1, 0.05, 0, 0)
				.limb(0.1, -0.12, 230, -0.02)
				.grip(0.2, -1.0, 3.2)
		})
		.traits((builder) => {
			builder.perStat("tconstruct:melee_harvest", $ModifierIds.luck, 1)
				.perStat("tconstruct:ranged", $ModifierIds.crystalshot, 1)
		})
		.melting((builder) => {
			builder.fluid("tconstruct:molten_amethyst")
				.amount(90)
				.temperature(800)
				.material("cmi:amethyst")
		})
})