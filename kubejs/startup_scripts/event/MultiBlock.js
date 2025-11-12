/*
This script can be hot reloaded with "kjs reload starup_scripts" or "-re"
这个脚本可以用"kjs reload starup_scripts"或"-re"进行热重载
*/
IEEvents.multiblockForm((event) => {
	let { player, multiblock } = event

	const IE = "immersiveengineering"
	const II = "immersiveindustry"

	/**
	 * 
	 * @param {String} namespace 命名空间
	 * @param {String} id 多方块id
	 * @returns 
	 */
	function getMultiblockId(namespace, id) {
		return ResourceLocation.fromNamespaceAndPath(namespace, `multiblocks/${id}`)
	}
	/**
	 * 
	 * @param {ResourceLocation} multiblockId 多方块id
	 * @returns 
	 */
	function disableMultiblock(multiblockId) {
		if (multiblock === multiblockId) {
			let tranKey =
				Component.translatable("message.cmi.disabled_multiblock")
					.red()
					.bold()
			player.displayClientMessage(tranKey, true)

			event.cancel()
			return true
		}
		return false
	}

	disableMultiblock(getMultiblockId(IE, "alloy_smelter"))
})