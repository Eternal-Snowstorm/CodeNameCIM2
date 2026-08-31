let $AdvancementEvent$AdvancementEarnEvent =
	Java.loadClass("net.minecraftforge.event.entity.player.AdvancementEvent$AdvancementEarnEvent")

NativeEvent.of($AdvancementEvent$AdvancementEarnEvent, (event) => {
	let player = event.getEntity()
	let advancement = event.getAdvancement()

	if (player instanceof Player) {
		if (advancement.getId() !== "cmi:academic_fraud") {
			return
		}

		let count = getIronNeeded(player)
		player.give(Item.of("minecraft:iron_ingot", count))
	}
})

/**
 * 计算填满玩家背包所需的铁锭数量
 *
 * @param {Player_} player 
 * @returns {number} 填满背包所需的铁锭数量
 */
function getIronNeeded(player) {
	let inventory = player.getInventory()
	let needed = 0

	for (let i = 0; i < 36; i++) {
		let stack = inventory.getItem(i)

		if (stack.isEmpty()) {
			needed += 64
		} else if (stack.getId() === "minecraft:iron_ingot") {
			needed += 64 - stack.getCount()
		}
	}

	return needed
}