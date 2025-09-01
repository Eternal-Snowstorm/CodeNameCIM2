StartupEvents.registry("block", (event) => {
	function addAloneRawMaterialBlock(name, level) {
		let registerAloneRawMaterialBlock =
			event.create(`${global.namespace}:raw_${name}_block`)
				.soundType(SoundType.STONE)
				.hardness(5)
				.resistance(5)
				.textureAll(`${global.namespace}:block/material/raw/${name}`)
				.tagBlock(global.ToolType["pickaxe"])
				.tagBlock(global.MiningLevel[level])
				.tagItem(`${global.namespace}:raw_metals`)
				.tag("forge:storage_blocks")
				.tag(`forge:storage_blocks/raw_${name}`)

		return registerAloneRawMaterialBlock
	}

	addAloneRawMaterialBlock("vanadium", "iron")
	addAloneRawMaterialBlock("platinum", "iron")
	addAloneRawMaterialBlock("chromium", "iron")
})