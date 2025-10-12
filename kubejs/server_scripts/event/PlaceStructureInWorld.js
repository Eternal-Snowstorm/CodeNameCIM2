let $ServerLevel =
	Java.loadClass("net.minecraft.server.level.ServerLevel")
let $StructurePlaceSettings =
	Java.loadClass("net.minecraft.world.level.levelgen.structure.templatesystem.StructurePlaceSettings")
let $Rotation =
	Java.loadClass("net.minecraft.world.level.block.Rotation")
let $Mirror =
	Java.loadClass("net.minecraft.world.level.block.Mirror")

ServerEvents.loaded((event) => {
	function getStructureName(path) {
		return ResourceLocation.fromNamespaceAndPath("cmi", path)
	}
	/**
	 * 在指定维度的特定坐标生成结构
	 * @param {String} dimId - 维度 ID (例如 "minecraft:the_nether")
	 * @param {String} structurePath - 结构路径和文件名 (例如 "radar/radar")
	 * @param {[number, number, number]} pos - 坐标 [x, y, z]
	 */
	function setStructureInWorld(dimId, structurePath, pos) {
		let level = event.server.getLevel(dimId)

		if (!(level instanceof $ServerLevel)) {
			console.warn(`Failed to find dimension: ${dimId}`)
			return
		}

		let manager = level.getServer().getStructureManager()
		let template = manager.get(getStructureName(structurePath))

		if (!template.isPresent()) {
			console.warn(`Structure not found: ${structurePath}`)
			return
		}

		let [x, y, z] = pos
		template.ifPresent((temp) => {
			temp.placeInWorld(
				level,
				new BlockPos(x, y, z),
				new BlockPos(x, y, z),
				new $StructurePlaceSettings()
					.setRotation($Rotation.NONE)
					.setMirror($Mirror.NONE)
					.setIgnoreEntities(false)
					.setFinalizeEntities(true),
				level.getRandom(),
				2
			)
		})

		console.info(`Placed structure ${structurePath} in ${dimId} at (${x}, ${y}, ${z})`)
	}

	setStructureInWorld("ad_astra:moon", "radar/radar", [0, 80, 0]) // Example
})