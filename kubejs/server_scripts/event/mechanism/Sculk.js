// 从Java里面把粒子效果挖出来（
const $ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes')

// 设定所需常数与物品id
const PI = 3.1415926535
const SONIC_BOOM_RANGE = 10;
const SONIC_BOOM_ANGLE = PI / 13;
const SONIC_BOOM_COOLDOWN = 100;
const ITEM_ID = 'ue_addons:sculk_mechanism'

// 在不会触发实体交互时直接发射音波尖啸
ItemEvents.rightClicked(ITEM_ID, e => {
    if (e.level.isClientSide()) return;
    fireSonicBoom(e.level, e.player)
})

// 在可能触发实体交互时取消实体交互并发射音波尖啸
ItemEvents.entityInteracted(ITEM_ID, e => {
    if (e.level.isClientSide()) return;
    fireSonicBoom(e.level, e.player)
    e.cancel()
})

/**
 * @param {Internal.ServerLevel} level 
 * @param {Internal.ServerPlayer} player 
 */

// 设定发出音爆粒子并伤害实体的功能
function fireSonicBoom(level, player) {
    // 判定物品是否在冷却
    if (player.cooldowns.isOnCooldown(ITEM_ID)) return;
    // 设置音爆传播方向（玩家面向坐标）与传播起点（可优化）
    let rotation = player.getRotationVector();
    let sight = Vec3d(Math.sin(-rotation.y / 180 * PI) * Math.cos(-rotation.x / 180 * PI), -Math.sin(rotation.x / 180 * PI), Math.cos(rotation.y / 180 * PI) * Math.cos(-rotation.x / 180 * PI)).normalize()
    let startingPosition = player.getEyePosition();
    // 播放音爆声音
    level.playSound(
        null,
        startingPosition.x(),
        startingPosition.y(),
        startingPosition.z(),
        'minecraft:entity.warden.sonic_boom',
        'hostile',
        3,
        1
    )
    // 生成音爆粒子
    for (let i = 1; i <= SONIC_BOOM_RANGE; i++) {
        let pos = startingPosition.add(sight.scale(i));
        level.sendParticles($ParticleTypes.SONIC_BOOM, pos.x(), pos.y(), pos.z(), 1, 0, 0, 0, 0);
    }
    // 识别音爆范围内的实体并造成伤害
    level.getEntitiesWithin(player.boundingBox.inflate(SONIC_BOOM_RANGE)).forEach(entity => {
        let direction = entity.getEyePosition().subtract(startingPosition).normalize()
        if (Math.acos(direction.dot(sight)) <= SONIC_BOOM_ANGLE && entity.isLiving()) {
            entity.attack(level.damageSources().sonicBoom(player), 10);
        }
    })
    // 使幽匿构件进入冷却
    player.cooldowns.addCooldown(ITEM_ID, SONIC_BOOM_COOLDOWN)
}