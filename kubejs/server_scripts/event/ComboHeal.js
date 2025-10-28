const COMBO_WINDOW_TICKS = 20
const HEAL_ON_COMBO = 2.0
const PENALTY_ON_MISS = 1.0

let comboTimerMap = {}
let damageBoostMap = {}
let pendingAttackTimeMap = {}

EntityEvents.hurt(event => {
    let { entity, source, server } = event
    if (!source.actual || !source.actual.isPlayer() || !entity.isLiving()) {
      return
    }

    let player = source.actual
    let playerUuid = player.getStringUuid()
  
    let attackTime = server.getTickCount()
    pendingAttackTimeMap[playerUuid] = attackTime
})
  
PlayerEvents.tick(event => {
    let { player } = event
    let playerUuid = player.getStringUuid()
  
    if (pendingAttackTimeMap[playerUuid]) {
      comboTimerMap[playerUuid] = pendingAttackTimeMap[playerUuid]
      delete pendingAttackTimeMap[playerUuid]
    }
})
  
ItemEvents.firstLeftClicked(event => {
    let { player, server } = event
    let playerUuid = player.getStringUuid()
  
    let currentTime = server.getTickCount()

    let offHandItem = player.getOffHandItem() == "minecraft:stick"//if改成饰品判断即可，这里删去即可
    if (!offHandItem) {
        return
    }
  
    let isCombo = false
    if (comboTimerMap[playerUuid]) {
      let lastAttackTime = comboTimerMap[playerUuid]
      if (currentTime > lastAttackTime && (currentTime - lastAttackTime <= COMBO_WINDOW_TICKS)) {
        isCombo = true
      }
    }
  
    if (isCombo) {
      player.heal(HEAL_ON_COMBO)
      let effectId = "minecraft:strength"
      let duration = 60
      let amplifier = 0
  
      if (damageBoostMap[playerUuid]) {
        player.removeEffect(effectId)
      }
  
      player.potionEffects.add(effectId, duration, amplifier, false, false)
      damageBoostMap[playerUuid] = true
  
    } else {
      player.attack(PENALTY_ON_MISS)
  
      if (damageBoostMap[playerUuid]) {
        player.removeEffect("minecraft:strength")
        damageBoostMap[playerUuid] = false
      }
    }
})