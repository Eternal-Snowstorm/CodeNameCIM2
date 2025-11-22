let beltCasing = [
	"create:brass_casing",
	"create:andesite_casing"
]
let shaftCasingType = {
	"create:brass_casing": "create:brass_encased_shaft",
	"create:andesite_casing": "create:andesite_encased_shaft"
}
let beltCasingType = {
	"create:brass_casing": "BRASS",
	"create:andesite_casing": "ANDESITE"
}
let inversedBeltCasingType = {
	BRASS: "create:brass_casing",
	ANDESITE: "create:andesite_casing"
}

NetworkEvents.dataReceived("isPlayerAltDown", (event) => {
	let { player, data } = event

	player.persistentData.Alt = data.Alt

	if (data.Alt != true) {
		return
	}

	if (beltCasing.some((i) => {
		return i == player.mainHandItem.id
	})) {
		player.setStatusMessage(Component.translatable("message.cmi.chainedcasing").green().bold())
	}

	if (player.mainHandItem.id == "create:wrench") {
		player.setStatusMessage(Component.translatable("message.cmi.chaineduncasing").red().bold())
	}
})

// —— 传送带连锁套壳 ——
BlockEvents.rightClicked("create:belt", (event) => {
	let { player, item, block, level } = event

	if (player === null || player.isShiftKeyDown() || player.persistentData.Alt === false) {
		return
	}

	if (beltCasing.some((i) => {
		return i === item.id
	})) {
		player.swing()

		let limit = 32
		let blockStates = block.blockState
		let part = blockStates.getValue($BeltBlock.PART).toString()
		let horizontalFacing = blockStates.getValue($BeltBlock.HORIZONTAL_FACING).toString()
		let slope = blockStates.getValue($BeltBlock.SLOPE).toString()

		let axisY = false
		let toEndblock = block
		let toEndBlockStates = toEndblock.blockState
		let toEndPos = [0, 0, 0]
		let toEndVec = [0, 0, 0]

		let toStartblock = block
		let toStartBlockStates = toStartblock.blockState
		let toStartPos = [0, 0, 0]
		let toStartVec = [0, 0, 0]

		let encaseOrNot = true

		switch (horizontalFacing) {
			case "east": {
				toEndVec[0] = 1
				toStartVec[0] = -1
				break
			}
			case "west": {
				toEndVec[0] = -1
				toStartVec[0] = 1
				break
			}
			case "south": {
				toEndVec[2] = 1
				toStartVec[2] = -1
				break
			}
			case "north": {
				toEndVec[2] = -1
				toStartVec[2] = 1
				break
			}
		}

		if (slope !== "HORIZONTAL") {
			axisY = true
		}

		if (axisY) {
			switch (slope) {
				case "UPWARD": {
					toEndVec[1] = 1
					toStartVec[1] = -1
					break
				}
				case "DOWNWARD": {
					toEndVec[1] = -1
					toStartVec[1] = 1
					break
				}
			}
		}

		// —— 遍历至末端 ——
		if (part !== "END") {
			for (let i = 0; i < limit; i++) {
				toEndPos[0] += toEndVec[0]
				toEndPos[1] += toEndVec[1]
				toEndPos[2] += toEndVec[2]

				toEndblock = block.offset(toEndPos[0], toEndPos[1], toEndPos[2])

				if (toEndblock.id !== "create:belt") {
					break
				}

				toEndBlockStates = toEndblock.blockState

				level.setBlockAndUpdate(
					toEndblock.pos,
					toEndBlockStates.setValue($BeltBlock.CASING, encaseOrNot ? $Boolean.TRUE : $Boolean.FALSE)
				)

				level.server.runCommandSilent(
					`/data modify block ${toEndblock.pos.x} ${toEndblock.pos.y} ${toEndblock.pos.z} Casing set value "${encaseOrNot ? beltCasingType[item.id] : "NONE"}"`
				)

				if (toEndBlockStates.getValue($BeltBlock.PART).toString() === "END") {
					break
				}
			}
		}

		// —— 遍历至起始端 ——
		if (part !== "START") {
			for (let i = 0; i < limit; i++) {
				toStartPos[0] += toStartVec[0]
				toStartPos[1] += toStartVec[1]
				toStartPos[2] += toStartVec[2]

				toStartblock = block.offset(toStartPos[0], toStartPos[1], toStartPos[2])

				if (toStartblock.id !== "create:belt") {
					break
				}

				toStartBlockStates = toStartblock.blockState

				level.setBlockAndUpdate(
					toStartblock.pos,
					toStartBlockStates.setValue($BeltBlock.CASING, encaseOrNot ? $Boolean.TRUE : $Boolean.FALSE)
				)

				level.server.runCommandSilent(
					`/data modify block ${toStartblock.pos.x} ${toStartblock.pos.y} ${toStartblock.pos.z} Casing set value "${encaseOrNot ? beltCasingType[item.id] : "NONE"}"`
				)

				if (toStartBlockStates.getValue($BeltBlock.PART).toString() === "START") {
					break
				}
			}
		}
	}
})

// —— 传动杆连锁套壳 ——
BlockEvents.rightClicked("create:shaft", (event) => {
	let { player, item, block, level } = event

	if (player === null || player.isShiftKeyDown() || player.persistentData.Alt === false) {
		return
	}

	if (beltCasing.some((i) => {
		return i === item.id
	})) {
		player.swing()

		let limit = 64
		let blockStates = block.blockState
		let axis = blockStates.getValue($ShaftBlock.AXIS).toString()

		let toEndblock = block
		let toEndPos = [0, 0, 0]
		let toEndVec = [0, 0, 0]

		let toStartblock = block
		let toStartPos = [0, 0, 0]
		let toStartVec = [0, 0, 0]

		switch (axis) {
			case "x": {
				toEndVec[0] = 1
				toStartVec[0] = -1
				break
			}
			case "y": {
				toEndVec[1] = 1
				toStartVec[1] = -1
				break
			}
			case "z": {
				toEndVec[2] = 1
				toStartVec[2] = -1
				break
			}
		}

		// —— 遍历至末端 ——
		for (let i = 0; i < limit; i++) {
			toEndPos[0] += toEndVec[0]
			toEndPos[1] += toEndVec[1]
			toEndPos[2] += toEndVec[2]

			toEndblock = block.offset(toEndPos[0], toEndPos[1], toEndPos[2])

			if (toEndblock.id !== "create:shaft" && toEndblock.id !== shaftCasingType[item.id]) {
				break
			}

			let toEndBlockStates = toEndblock.blockState

			if (toEndBlockStates.getValue($ShaftBlock.AXIS).toString() !== axis) {
				break
			}

			level.server.runCommandSilent(
				`setblock ${toEndblock.pos.x} ${toEndblock.pos.y} ${toEndblock.pos.z} ${shaftCasingType[item.id]}[axis=${axis.toLowerCase()}]`
			)
		}

		// —— 遍历至起始端 ——
		for (let i = 0; i < limit; i++) {
			toStartPos[0] += toStartVec[0]
			toStartPos[1] += toStartVec[1]
			toStartPos[2] += toStartVec[2]

			toStartblock = block.offset(toStartPos[0], toStartPos[1], toStartPos[2])

			if (toStartblock.id !== "create:shaft" && toStartblock.id !== shaftCasingType[item.id]) {
				break
			}

			let toStartBlockStates = toStartblock.blockState

			if (toStartBlockStates.getValue($ShaftBlock.AXIS).toString() !== axis) {
				break
			}

			level.server.runCommandSilent(
				`/setblock ${toStartblock.pos.x} ${toStartblock.pos.y} ${toStartblock.pos.z} ${shaftCasingType[item.id]}[axis=${axis.toLowerCase()}]`
			)
		}
	}
})

// —— 传动杆连锁拆壳(黄铜) ——
BlockEvents.rightClicked("create:brass_encased_shaft", (event) => {
	let { player, item, block, level } = event

	if (player === null || !player.isShiftKeyDown() || item.id !== "create:wrench" || player.persistentData.Alt === false) {
		return
	}

	player.swing()

	let limit = 64
	let blockStates = block.blockState
	let axis = blockStates.getValue($ShaftBlock.AXIS).toString()

	let toEndblock = block
	let toEndPos = [0, 0, 0]
	let toEndVec = [0, 0, 0]

	let toStartblock = block
	let toStartPos = [0, 0, 0]
	let toStartVec = [0, 0, 0]

	switch (axis) {
		case "x": {
			toEndVec[0] = 1
			toStartVec[0] = -1
			break
		}
		case "y": {
			toEndVec[1] = 1
			toStartVec[1] = -1
			break
		}
		case "z": {
			toEndVec[2] = 1
			toStartVec[2] = -1
			break
		}
	}

	for (let i = 0; i < limit; i++) {
		toEndPos[0] += toEndVec[0]
		toEndPos[1] += toEndVec[1]
		toEndPos[2] += toEndVec[2]

		toEndblock = block.offset(toEndPos[0], toEndPos[1], toEndPos[2])

		if (toEndblock.id !== "create:brass_encased_shaft") {
			break
		}

		let toEndBlockStates = toEndblock.blockState

		if (toEndBlockStates.getValue($ShaftBlock.AXIS).toString() !== axis) {
			break
		}

		level.server.runCommandSilent(
			`/setblock ${toEndblock.pos.x} ${toEndblock.pos.y} ${toEndblock.pos.z} create:shaft[axis=${axis.toLowerCase()}]`
		)
	}

	for (let i = 0; i < limit; i++) {
		toStartPos[0] += toStartVec[0]
		toStartPos[1] += toStartVec[1]
		toStartPos[2] += toStartVec[2]

		toStartblock = block.offset(toStartPos[0], toStartPos[1], toStartPos[2])

		if (toStartblock.id !== "create:brass_encased_shaft") {
			break
		}

		let toStartBlockStates = toStartblock.blockState

		if (toStartBlockStates.getValue($ShaftBlock.AXIS).toString() !== axis) {
			break
		}

		level.server.runCommandSilent(
			`setblock ${toStartblock.pos.x} ${toStartblock.pos.y} ${toStartblock.pos.z} create:shaft[axis=${axis.toLowerCase()}]`
		)
	}
})

// —— 传动杆连锁拆壳(安山合金) ——
BlockEvents.rightClicked("create:andesite_encased_shaft", (event) => {
	let { player, item, block, level } = event

	if (player === null || !player.isShiftKeyDown() || item.id !== "create:wrench" || player.persistentData.Alt === false) {
		return
	}

	player.swing()

	let limit = 64
	let blockStates = block.blockState
	let axis = blockStates.getValue($ShaftBlock.AXIS).toString()

	let toEndblock = block
	let toEndPos = [0, 0, 0]
	let toEndVec = [0, 0, 0]

	let toStartblock = block
	let toStartPos = [0, 0, 0]
	let toStartVec = [0, 0, 0]

	switch (axis) {
		case "x": {
			toEndVec[0] = 1
			toStartVec[0] = -1
			break
		}
		case "y": {
			toEndVec[1] = 1
			toStartVec[1] = -1
			break
		}
		case "z": {
			toEndVec[2] = 1
			toStartVec[2] = -1
			break
		}
	}

	for (let i = 0; i < limit; i++) {
		toEndPos[0] += toEndVec[0]
		toEndPos[1] += toEndVec[1]
		toEndPos[2] += toEndVec[2]

		toEndblock = block.offset(toEndPos[0], toEndPos[1], toEndPos[2])

		if (toEndblock.id !== "create:andesite_encased_shaft") {
			break
		}

		let toEndBlockStates = toEndblock.blockState

		if (toEndBlockStates.getValue($ShaftBlock.AXIS).toString() !== axis) {
			break
		}

		level.server.runCommandSilent(
			`/setblock ${toEndblock.pos.x} ${toEndblock.pos.y} ${toEndblock.pos.z} create:shaft[axis=${axis.toLowerCase()}]`
		)
	}

	for (let i = 0; i < limit; i++) {
		toStartPos[0] += toStartVec[0]
		toStartPos[1] += toStartVec[1]
		toStartPos[2] += toStartVec[2]

		toStartblock = block.offset(toStartPos[0], toStartPos[1], toStartPos[2])

		if (toStartblock.id !== "create:andesite_encased_shaft") {
			break
		}

		let toStartBlockStates = toStartblock.blockState

		if (toStartBlockStates.getValue($ShaftBlock.AXIS).toString() !== axis) {
			break
		}

		level.server.runCommandSilent(
			`setblock ${toStartblock.pos.x} ${toStartblock.pos.y} ${toStartblock.pos.z} create:shaft[axis=${axis.toLowerCase()}]`
		)
	}
})
// By 史莱姆li