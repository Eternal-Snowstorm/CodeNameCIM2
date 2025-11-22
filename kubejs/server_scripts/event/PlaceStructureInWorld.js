ServerEvents.loaded((event) => {
	let { server } = event
	let structureNamespace = global.namespace

	function getStructureName(path) {
		return ResourceLocation.fromNamespaceAndPath(structureNamespace, path)
	}

	/**
	 * 获取结构的底部 Y 坐标
	 * @param {$StructureTemplate} template 结构模板
	 * @returns {number} 底部 Y 坐标
	 */
	function getStructureBaseY(template) {
		let boundingBox = template.getBoundingBox()
		return boundingBox.minY
	}

	/**
	 * 获取地面高度
	 * @param {$ServerLevel} level
	 * @param {number} x
	 * @param {number} z
	 * @returns {number} 地面高度
	 */
	function getGroundY(level, x, z) {
		let pos = new $BlockPos(x, 0, z)
		let state = level.getBlockState(pos)
		while (!state.getMaterial().isSolid()) {
			pos = pos.above() // 向上查找直到找到实心的方块
			state = level.getBlockState(pos)
		}
		return pos.getY()
	}

	/**
	 * 在指定维度的特定坐标生成结构
	 * @param {String} dimId - 维度 ID (例如 "minecraft:the_nether")
	 * @param {String} structurePath - 结构路径和文件名 
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
			// 获取结构的底部 Y 坐标
			let baseY = getStructureBaseY(temp)

			// 获取目标位置的地面高度，并调整 Y 坐标
			let groundY = getGroundY(level, x, z)

			// 计算放置位置的 Y 坐标（地面高度 - 结构底部偏移）
			let adjustedY = groundY - baseY

			// 放置结构
			temp.placeInWorld(
				level,
				new $BlockPos(x, adjustedY, z),
				new $BlockPos(x, adjustedY, z),
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
	]

	placeAllStructures(structuresToPlace)
})