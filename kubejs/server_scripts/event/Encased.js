let $BeltBlock =
	Java.loadClass("com.simibubi.create.content.kinetics.belt.BeltBlock")
let $Boolean =
	Java.loadClass("java.lang.Boolean")
let $ShaftBlock =
	Java.loadClass("com.simibubi.create.content.kinetics.simpleRelays.ShaftBlock")

let BeltCasing = [
	"create:brass_casing",
	"create:andesite_casing"
]

let ShaftCasingType = {
	"create:brass_casing": "create:brass_encased_shaft",
	"create:andesite_casing": "create:andesite_encased_shaft"
}

let BeltCasingType = {
	"create:brass_casing": "BRASS",
	"create:andesite_casing": "ANDESITE"
}

let InversedBeltCasingType = {
	BRASS: "create:brass_casing",
	ANDESITE: "create:andesite_casing"
}

NetworkEvents.dataReceived("isPlayerAltDown", (event) => {
	let { player, data } = event

	player.persistentData.Alt = data.Alt

	let chainedcasing = Component
		.translatable("message.cmi.chainedcasing")
		.green()
		.bold()

	let chaineduncasing = Component
		.translatable("message.cmi.chaineduncasing")
		.red()
		.bold()

	// !这里只能用弱等于
	if (data.Alt != true) {
		return
	}

	if (BeltCasing.some((i) => i == player.mainHandItem.id)) {
		player.displayClientMessage(chainedcasing, true)
	}

	if (player.mainHandItem.id == "create:wrench") {
		player.displayClientMessage(chaineduncasing, true)
	}
})


// —— 传送带连锁套壳 ——
BlockEvents.rightClicked("create:belt", (event) => {
	let { player, item, block, level } = event

	if (player === null || player.isShiftKeyDown() || (player.persistentData.Alt !== "true" && player.persistentData.Alt !== 1)) {
		return
	}

	if (!BeltCasing.some((i) => i === item.id)) {
		return
	}

	player.swing()

	let limit = 32
	let blockStates = block.blockState
	let part = blockStates.getValue($BeltBlock.PART).toString()
	let horizontalFacing = blockStates.getValue($BeltBlock.HORIZONTAL_FACING).toString()
	let slope = blockStates.getValue($BeltBlock.SLOPE).toString()

	let axisY = slope !== "HORIZONTAL"

	let toEndblock = block								
	let toEndPos = [0, 0, 0]
	let toEndVec = [0, 0, 0]	

	let toStartblock = block
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

	if (part !== "END") {
		for (let i = 0; i < limit; i++) {
			toEndPos[0] += toEndVec[0]
			toEndPos[1] += toEndVec[1]
			toEndPos[2] += toEndVec[2]

			toEndblock = block.offset(toEndPos[0], toEndPos[1], toEndPos[2])

			if (toEndblock.id !== "create:belt") {
				break
			}

			let states = toEndblock.blockState

			level.setBlockAndUpdate(
				toEndblock.pos,
				states.setValue($BeltBlock.CASING, encaseOrNot ? $Boolean.TRUE : $Boolean.FALSE)
			)

			level.server.runCommandSilent(`data modify block ${toEndblock.pos.x} ${toEndblock.pos.y} ${toEndblock.pos.z} Casing set value "${encaseOrNot ? BeltCasingType[item.id] : "NONE"}"`)

			if (states.getValue($BeltBlock.PART).toString() === "END") {
				break
			}
		}
	}

	if (part !== "START") {
		for (let i = 0; i < limit; i++) {
			toStartPos[0] += toStartVec[0]
			toStartPos[1] += toStartVec[1]
			toStartPos[2] += toStartVec[2]

			toStartblock = block.offset(toStartPos[0], toStartPos[1], toStartPos[2])

			if (toStartblock.id !== "create:belt") {
				break
			}

			let states = toStartblock.blockState

			level.setBlockAndUpdate(
				toStartblock.pos,
				states.setValue($BeltBlock.CASING, encaseOrNot ? $Boolean.TRUE : $Boolean.FALSE)
			)

			level.server.runCommandSilent(`data modify block ${toStartblock.pos.x} ${toStartblock.pos.y} ${toStartblock.pos.z} Casing set value "${encaseOrNot ? BeltCasingType[item.id] : "NONE"}"`)

			if (states.getValue($BeltBlock.PART).toString() === "START") {
				break
			}
		}
	}
})

// By 史莱姆li