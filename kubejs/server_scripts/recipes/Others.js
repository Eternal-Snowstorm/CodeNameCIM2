ServerEvents.recipes((event) => {
	let { create, kubejs } = event.recipes

	create.deploying("minecraft:sculk_sensor", [
		"minecraft:sculk",
		"minecraft:redstone_block"
	])

	create.deploying("minecraft:sculk_shrieker", [
		"minecraft:sculk",
		"minecraft:ender_pearl"
	])

	create.deploying("minecraft:sculk_catalyst", [
		"minecraft:sculk",
		"create:experience_block"
	])

	create.deploying("minecraft:sculk", [
		"create:experience_nugget",
		"minecraft:sculk_catalyst"
	]).keepHeldItem()

	create.mixing("2x ae2:quantum_entangled_singularity", [
		"ae2:singularity",
		"minecraft:ender_pearl"
	])

	create.mixing("2x ae2:quantum_entangled_singularity", [
		"ae2:singularity",
		"#forge:dusts/ender_pearl"
	])

	kubejs.shapeless("create:andesite_alloy", [
		"9x ue_addons:andesite_alloy_nugget"
	])
	kubejs.shapeless("9x ue_addons:andesite_alloy_nugget", [
		"create:andesite_alloy"
	])

	create.pressing("ue_addons:cinderslime_plate", "tconstruct:cinderslime_ingot")

	kubejs.shaped("createaddition:straw", [
		" AA",
		"A A",
		" A"
	], {
		A: "#forge:rods/wooden"
	})

	create.mechanical_crafting("81x minecraft:rotten_flesh", [
		"AAAAAAAAA",
		"AAAAAAAAA",
		"AAAAAAAAA",
		"AAAAAAAAA",
		"AAAAAAAAA",
		"AAAAAAAAA",
		"AAAAAAAAA",
		"AAAAAAAAA",
		"AAAAAAAAA"
	], {
		A: "minecraft:rotten_flesh"
	}).id(`${global.namespace}:what_is_this`)

	kubejs.shapeless("ue_addons:bucket", [
		"minecraft:bucket"
	])
	create.mixing('2x ue_addons:blood_slimeball',['minecraft:redstone','minecraft:bone_meal']).heated()
	let Incomplete = 'immersiveengineering:treated_wood_horizontal'
    create.sequenced_assembly('ue_addons:water_pump',[
        '#forge:treated_wood'],[
            create.pressing(Incomplete,Incomplete),
            create.deploying(Incomplete,[Incomplete,'ue_addons:copper_mechanism']),
            create.cutting(Incomplete,Incomplete),
            create.deploying(Incomplete,[Incomplete,'thermal:iron_gear']),
            create.deploying(Incomplete,[Incomplete,'tconstruct:seared_brick']),
        ]
    ).loops(1).transitionalItem(Incomplete);
})