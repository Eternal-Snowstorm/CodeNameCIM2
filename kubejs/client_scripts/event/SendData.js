let Encasable = [
	"create:shaft",
	"create:belt"
]

let Uncasingable = [
	"create:brass_encased_shaft",
	"create:andesite_encased_shaft"
]

let BeltCasing = [
	"create:brass_casing",
	"create:andesite_casing"
]

let playerAltDown = false

PlayerEvents.tick((event) => {
	let { player, level } = event

	// 控制 tick 频率
	if ((level.time & 15) !== 0) {
		return
	}

	playerAltDown = Client.isAltDown()

	let hit = player.rayTrace(
		player.getAttributeValue("forge:block_reach") + 1,
		true
	)

	if (!hit || !hit.block) {
		return
	}

	let viewBlock = hit.block
	let item = player.mainHandItem

	let isCasing = item.hasTag("cmi:beltcasing")
	let isEncasable = viewBlock.hasTag("cmi:encasable")
	let isUncasingable = viewBlock.hasTag("cmi:uncasingable")

	// Alt 按下时不提示
	if (playerAltDown) {
		return
	}

	if (isCasing && isEncasable) {
		player.setStatusMessage(Component.translatable("message.cmi.chainedcasing").green())
		return
	}

	if (item.id === "create:wrench" && isUncasingable) {
		player.setStatusMessage(Component.translatable("message.cmi.chaineduncasing").red())
		return
	}
})