/*
This script can be hot reloaded with "kjs reload starup_scripts" or "-re"
这个脚本可以用"kjs reload starup_scripts"或"-re"进行热重载
*/
IEEvents.multiblockForm((event) => {
	let { player, multiblock } = event

	const IE = "immersiveengineering"
	const II = "immersiveindustry"

	function getMultiblockId(namespace, id) {
		return ResourceLocation.fromNamespaceAndPath(namespace, `multiblocks/${id}`)
	}
	function disableMultiblock(multiblockId) {
		if (multiblock === multiblockId) {
			let tranKey =
				Component.translatable("message.cmi.disabled_multiblock").bold()
			player.displayClientMessage(tranKey, true)

			event.cancel()
			return
		}
	}

	disableMultiblock(getMultiblockId(IE, "alloy_smelter"))
})