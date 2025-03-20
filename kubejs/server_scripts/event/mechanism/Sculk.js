const $ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes')

const PI = 3.1415926535
const SONIC_BOOM_RANGE = 10;
const SONIC_BOOM_ANGLE = PI/13;
const SONIC_BOOM_COOLDOWN = 100;
const ITEM_ID = 'ue_addons:sculk_mechanism'

ItemEvents.rightClicked(ITEM_ID, e => {
    if(e.level.isClientSide()) return;
    fireSonicBoom(e.level,e.player)
})

ItemEvents.entityInteracted(ITEM_ID, e => {
    if(e.level.isClientSide()) return;
    fireSonicBoom(e.level,e.player)
    e.cancel()
})

/**
 * @param {Internal.ServerLevel} level 
 * @param {Internal.ServerPlayer} player 
 */

function fireSonicBoom(level, player) {
    if(player.cooldowns.isOnCooldown(ITEM_ID)) return;
    let rotation = player.getRotationVector();
    let sight = Vec3d(Math.sin(-rotation.y/180*PI)*Math.cos(-rotation.x/180*PI),-Math.sin(rotation.x/180*PI),Math.cos(rotation.y/180*PI)*Math.cos(-rotation.x/180*PI)).normalize()
    let startingPosition = player.getEyePosition();
    level.playSound(null,startingPosition.x(),startingPosition.y(),startingPosition.z(),'minecraft:entity.warden.sonic_boom','hostile',3,1)
    for (let i = 1; i <= SONIC_BOOM_RANGE; i++) {
        let pos = startingPosition.add(sight.scale(i));
        level.sendParticles($ParticleTypes.SONIC_BOOM,pos.x(),pos.y(),pos.z(),1,0,0,0,0);
    }
    level.getEntitiesWithin(player.boundingBox.inflate(SONIC_BOOM_RANGE)).forEach(entity => {
        let direction = entity.getEyePosition().subtract(startingPosition).normalize()
        if(Math.acos(direction.dot(sight)) <= SONIC_BOOM_ANGLE && entity.isLiving()) {
            entity.attack(level.damageSources().sonicBoom(player),10);
        }
    })
    player.cooldowns.addCooldown(ITEM_ID,SONIC_BOOM_COOLDOWN)
}