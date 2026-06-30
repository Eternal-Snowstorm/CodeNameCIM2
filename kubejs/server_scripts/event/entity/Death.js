// EntityEvents.death((event) => {
// 	let { entity, source, level } = event

// 	if (entity.type != "minecraft:ender_dragon") {
// 		return
// 	}

// 	let player = source.player

// 	if (!player) {
// 		return
// 	}

// 	if (!player.stages.has("dragon_death")) {
// 		return
// 	}

// 	player.tell("Test")

// 	level.playSound(
// 		null,
// 		player.x,
// 		player.y,
// 		player.z,
// 		"cmi:final_quest_complete",
// 		"players",
// 		1,
// 		1
// 	)
// })