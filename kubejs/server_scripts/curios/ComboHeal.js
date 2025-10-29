const COMBO_WINDOW_TICKS = 30

let comboTimerMap = {}
let pendingAttackTimeMap = {}
let playerComboCount = {}
let playerWithoutMechanism = true

EntityEvents.hurt((event) => {
	let { entity, source, server } = event

	if (!source.actual || !source.actual.isPlayer() || !entity.isLiving()) {
		return
	}

	let player = source.actual
	let playerUuid = player.getUuid().toString()

	let attackTime = server.getTickCount()
	pendingAttackTimeMap[playerUuid] = attackTime
})

PlayerEvents.tick((event) => {
	let { player } = event
	const CURIOS = String(player.nbt["ForgeCaps"]["curios:inventory"]["Curios"])

	let getPlayerUUID = player.getUuid().toString()

	if (pendingAttackTimeMap[getPlayerUUID]) {
		comboTimerMap[getPlayerUUID] = pendingAttackTimeMap[getPlayerUUID]
		delete pendingAttackTimeMap[getPlayerUUID]
	}

	if (CURIOS.includes("cmi:thermal_mechanism") && !CURIOS.includes("display")) {
		let effectId = "minecraft:strength"
		let duration = 60
		let amplifier = 2

		playerWithoutMechanism = false
		player.potionEffects.add(effectId, duration, amplifier, false, false)
	} else {
		playerWithoutMechanism = true
	}
})

ItemEvents.firstLeftClicked((event) => {
	let { player, server } = event

	let attackSpeed = player.attributes.getValue("minecraft:generic.attack_speed")
	let playerUuid = player.getUuid().toString()
	let currentTime = server.getTickCount()
	let requiredComboCount

	if (playerWithoutMechanism) {
		return
	}

	if (attackSpeed <= 1) {
		requiredComboCount = 1
	} else if (attackSpeed < 2) {
		requiredComboCount = 3
	} else {
		requiredComboCount = 5
	}

	let isCombo = false
	if (comboTimerMap[playerUuid]) {
		let lastAttackTime = comboTimerMap[playerUuid]
		if (currentTime > lastAttackTime && (currentTime - lastAttackTime <= COMBO_WINDOW_TICKS)) {
			isCombo = true
		}
	}

	if (isCombo) {
		playerComboCount[playerUuid]++

		player.attack(2)

		if (playerComboCount[playerUuid] > requiredComboCount) {
			player.heal(requiredComboCount * 2.4)
			playerComboCount[playerUuid] = 1
		}

		damageBoostMap[playerUuid] = true

	} else {
		playerComboCount[playerUuid] = 1
		player.attack(2)
	}
})