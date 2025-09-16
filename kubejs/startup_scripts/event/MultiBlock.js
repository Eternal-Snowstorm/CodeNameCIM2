// This script can be hot reloaded with "kjs reload starup_scripts" or "-re"
// 这个脚本可以用"kjs reload starup_scripts"或"-re"进行热重载
IEEvents.multiblockForm((event) => {
	let { player, multiblock } = event

	const IE = "immersiveengineering"
	const II = "immersiveindustry"

	function multiblockId(namespace, id) {
		// let alloySmelter = "immersiveengineering:multiblocks/alloy_smelter"
		return ResourceLocation.fromNamespaceAndPath(namespace, `multiblocks/${id}`)
	}
	function disableMultiblock(multiblockId) {
		if (multiblock === multiblockId) {
			let tran = Component.translatable("message.cmi.disabled_multiblock").bold()
			player.displayClientMessage(tran, true)
			event.cancel()
			return
		}
	}

	disableMultiblock(multiblockId(IE, "alloy_smelter"))
})