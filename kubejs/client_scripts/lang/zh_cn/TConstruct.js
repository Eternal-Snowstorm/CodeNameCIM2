ClientEvents.lang("zh_cn", (event) => {
	/**
	 * 
	 * @param {String} key 
	 * @param {String*} name 
	 * @param {String} flavour 
	 * @param {String} encyclopedia 
	 */
	function addTConMaterialLang(key, name, flavour, encyclopedia) {
		event.add(`material.${Cmi.MODID}.${key}`, name)
		event.add(`material.${Cmi.MODID}.${key}.flavor`, flavour)
		event.add(`material.${Cmi.MODID}.${key}.encyclopedia`, encyclopedia)
		event.add(`material.${Cmi.MODID}.${key}.ranged`, encyclopedia)
		event.add(`material.${Cmi.MODID}.${key}.armor`, encyclopedia)
	}

	addTConMaterialLang(
		"amethyst",
		"紫水晶",
		"通电后可以发出极具规律性的振动",
		"紫水晶中流动的微弱力量会试图获取更多的稀有资源"
	)
	addTConMaterialLang(
		"andesite_alloy",
		"安山合金",
		"岩石和金属居然能变成合金? ",
		"岩石的能力, 铁器的数值"
	)
	addTConMaterialLang(
		"brass",
		"黄铜",
		"充满蒸汽的气息! ",
		"导热性与可塑性极强, 似乎可以做成搭载多个箭矢的模样"
	)
	addTConMaterialLang(
		"industrial_iron",
		"工业铁",
		"富有韧性的高纯铁",
		"通过重复排碳制成的高韧铁材料, 弹性与韧性极佳"
	)
	addTConMaterialLang(
		"cast_iron",
		"铸铁",
		"非常适合进一步加热! ",
		"含有完整碳结晶的铁材料, 耐磨性极佳"
	)
	addTConMaterialLang(
		"stainless_steel",
		"不锈钢",
		"旧仓库角落中的反光",
		"有着极强耐腐蚀性能的材料, 可以有效减慢工具的损坏"
	)
	addTConMaterialLang(
		"desh",
		"戴斯",
		"来自莫托斯的神秘金属",
		"从莫托斯开采的神秘材料, 似乎可以做出更好的升级？"
	)
	addTConMaterialLang(
		"ostrum",
		"紫金",
		"越热就越强! ",
		"来自阿瑞斯的惰性金属, 似乎在灼热环境中会变得更加优秀"
	)
	addTConMaterialLang(
		"calorite",
		"耐热金属",
		"红色的隔热板! ",
		"优秀的隔热材料, 可以承受更强的火箭尾焰, 将它送向其他星系"
	)
	addTConMaterialLang(
		"shadow_steel",
		"暗影钢",
		"从深渊中现身! ",
		"从未知的致命领域归来的化合物, 韧性异常强大, 但是抗冲击能力堪称灾难"
	)
	addTConMaterialLang(
		"refined_radiance",
		"光辉石",
		"来自天空的使者! ",
		"吸收了大量光能的化合物, 韧性令人掩面, 但可以为装备提供极大的强化"
	)

	addTConMaterialLang(
		"ardite",
		"阿迪特",
		"大啖食粮之刻",
		"它贪婪地吸收地层中的物质, 如同活物一般将其尽数化为自身"
	)
})