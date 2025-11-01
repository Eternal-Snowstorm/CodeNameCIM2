let $ServerLevel =
	Java.loadClass("net.minecraft.server.level.ServerLevel")
let $StructurePlaceSettings =
	Java.loadClass("net.minecraft.world.level.levelgen.structure.templatesystem.StructurePlaceSettings")
let $Rotation =
	Java.loadClass("net.minecraft.world.level.block.Rotation")
let $Mirror =
	Java.loadClass("net.minecraft.world.level.block.Mirror")

ServerEvents.loaded((event) => {
	let { server } = event
	let structureNamespace = global.namespace

	function getStructureName(path) {
		return ResourceLocation.fromNamespaceAndPath(structureNamespace, path)
	}

	/**
	 * 在指定维度的特定坐标生成结构
	 * @param {String} dimId - 维度 ID (例如 "minecraft:the_nether")
	 * @param {String} structurePath - 结构路径和文件名 
	 * (展开后为 "cmi:structures/radar/radar.nbt" 实际编写时不需要写文件后缀)
	 * @param {[number, number, number]} pos - 坐标 [x, y, z]
	 */
	function placeStructure(dimId, structurePath, pos) {
		let level = server.getLevel(dimId)

		if (!(level instanceof $ServerLevel)) {
			console.warn(`Failed to find dimension: ${structureNamespace}:${dimId}`)
			return false
		}

		let manager = level.getServer().getStructureManager()
		let template = manager.get(getStructureName(structurePath))

		if (!template.isPresent()) {
			console.warn(`Structure not found: ${structureNamespace}:${structurePath}`)
			return false
		}

		let [x, y, z] = pos
		template.ifPresent((temp) => {
			temp.placeInWorld(
				level,
				new BlockPos(x, y, z),
				new BlockPos(x, y, z),
				new $StructurePlaceSettings()
					.setRotation($Rotation.NONE)
					.setMirror($Mirror.NONE),
				level.getRandom(),
				2
			)
		})

		console.info(`Placed structure ${structureNamespace}:${structurePath} at (${x}, ${y}, ${z})`)
		return true
	}

	function placeAllStructures(structures) {
		let data = server.persistentData

		structures.forEach((structure) => {
			let { id, dimId, path, pos } = structure
			let key = `structure_${id}_placed`

			if (data.getBoolean(key)) {
				console.info(`Structure "${id}" already placed, skipping.`)
				return
			}

			let level = server.getLevel(dimId)
			if (!(level instanceof $ServerLevel)) {
				console.warn(`Failed to find dimension: ${dimId}`)
				return
			}

			let success = placeStructure(dimId, path, pos)
			if (success) {
				data.putBoolean(key, true)
				console.info(`Marked structure "${id}" as placed.`)
			}
		})
	}

	let structuresToPlace = [
		{
			id: "radar_moon",
			dimId: "ad_astra:moon",
			path: "radar/radar",
			pos: [0, 80, 0]
		},
		/*
		Example
		{
			id: "lab_earth",
			dimId: "minecraft:overworld",
			path: "base/lab",
			pos: [100, 70, -50]
		},
		{
			id: "station_mars",
			dimId: "ad_astra:mars",
			path: "station/outpost",
			pos: [-200, 90, 200]
		}
		*/
	]

	placeAllStructures(structuresToPlace)
})