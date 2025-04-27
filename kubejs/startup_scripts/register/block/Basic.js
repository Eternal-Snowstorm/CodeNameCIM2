StartupEvents.registry("block", (event) => {
	event.create(`${global.namespace}:the_accelerator_of_mechanism_power`)
		.soundType(SoundType.METAL)
		.tagBlock("minecraft:mineable/pickaxe")
		.tagBlock(global.miningLevel[wooden])
		.requiresTool(true)
	
	let machineBlockRegister = [
		"andesite",
		"brass",
		"copper",
		"me",
		"mekanism"
	]
	machineBlockRegister.forEach((type)=>{
		event.create(`${global.namespace}:${type}_machine`)
		.soundType(SoundType.METAL)
		.tagBlock("minecraft:mineable/pickaxe")
		.tagBlock(global.miningLevel[wooden])
		.requiresTool(true)
	})
})