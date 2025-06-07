// This script can be hot reloaded with "kjs reload starup_scripts"
// 这个脚本可以用"kjs reload starup_scripts"进行热重载
/*
IEEvents.multiblockForm((event) => {
	let { player, multiblock } = event

	let alloySmelter = "immersiveengineering:multiblocks/alloy_smelter"
	if (!player.stages.has("lese") && multiblock === alloySmelter) {
		player.tell("aaa")
		event.cancel()
	} else {
		player.tell("bbb")
	}
})
*/