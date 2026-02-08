ServerEvents.recipes((event) => {
	let { create, farmersdelight } = event.recipes

	farmersdelight.cutting("cmi:andesite_alloy_noodle_stage0", [
		"#forge:plates/andesite_alloy"
	], "#forge:tools/knives")

	create.mixing("cmi:andesite_alloy_noodle_stage1", [
		"cmi:andesite_alloy_noodle_stage0",
		"2x #forge:dusts/andesite",
		"2x create:cinder_flour"
	])

	create.sequenced_assembly("cmi:andesite_alloy_noodle_stage2", [
		"cmi:andesite_alloy_noodle_stage1"
	], [
		create.deploying("cmi:andesite_alloy_noodle_stage1", [
			"cmi:andesite_alloy_noodle_stage1",
			"#forge:nuggets/brass"
		]),
		create.deploying("cmi:andesite_alloy_noodle_stage1", [
			"cmi:andesite_alloy_noodle_stage1",
			"create:rose_quartz"
		]),
		create.deploying("cmi:andesite_alloy_noodle_stage1", [
			"cmi:andesite_alloy_noodle_stage1",
			"create:polished_rose_quartz"
		]),
		create.filling("cmi:andesite_alloy_noodle_stage1", [
			"cmi:andesite_alloy_noodle_stage1",
			Fluid.of("minecraft:lava", 500)
		])
	]).loops(1).transitionalItem("cmi:andesite_alloy_noodle_stage1")

	create.emptying([
		"cmi:andesite_alloy_noodle",
		Fluid.of("minecraft:lava", 500)
	], "cmi:andesite_alloy_noodle_stage2")
})
/*
安山合金敲成板, 放到切割机里切成鞍山合金削面, 传到工作盆里和余烬粉末搅拌成裹粉安山面, 
加入有超级加热的烈焰人工作盆里, 再佐以黄铜锭一个, 玫瑰石英两枚, 导入250ml熔岩进行加热。
在经过搅拌后用注液器浇到桶中, 再使用分液器将熔岩分液, 就能得到一碗美味的鲜香安山面。
余烬粉可以很好的保护安山合金不被过度熔炼, 起到定型的作用同时保持面质筋道, 黄铜锭的浸润使得整碗面汤会更加入味, 
在原始的安山气味基础上更增加了一丝智能在里面, 玫瑰石英有着提鲜的作用, 同时在高温加热下里面的石英会变得酥脆美味, 
而红石的味道充斥着整碗面, 如果在红石块打制的桌子上吃饭, 还能看到汤面散发着红光。
*/