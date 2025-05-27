let pickaxe = global.toolType["pickaxe"]
StartupEvents.registry("block", (event) => {
	function addAloneRawMaterialBlock(name, level) {
		event.create(`${global.namespace}:raw_${name}_block`)
			.soundType(SoundType.STONE)
			.hardness(5)
			.resistance(5)
			.textureAll(`${global.namespace}:block/material/raw/${name}`)
			.tagBlock(pickaxe)
			.tagBlock(global.miningLevel[level])
			.tagItem(`${global.namespace}:raw_metals`)
			.tag("forge:storage_blocks")
			.tag(`forge:storage_blocks/raw_${name}`)
	}

	addAloneRawMaterialBlock("vanadium", "iron")
	addAloneRawMaterialBlock("platinum", "iron")
	addAloneRawMaterialBlock("chromium", "iron")
})