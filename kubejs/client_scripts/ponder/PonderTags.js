Ponder.tags((event) => {
	/** 
	 * @param {String} tag Tag的注册ID
	 * @param {Internal.ItemStack_} icon 游戏内显示的图标
	 * @param {string} name
	 * @param {(
	 * 		String |
	 *  	Internal.ItemStack | 
	 * 		Internal.Ingredient_ |
	 *  	Array<
	 * 			String | 
	 * 			Internal.Ingredient_ |
	 * 			Internal.ItemStack
	 * 		>
	 * )} [item] PonderTag内包含的物品
	 * @constructor
	 */
	function PonderTag(tag, icon, name, item) {
		this.tag = tag
		this.icon = icon
		this.items = ITEMS

		icon = (typeof icon === "string") ? Item.of(icon) : icon

		const ITEMS = item ?
			(Array.isArray(item) ? item : [item]) : []

		for (let i = 0; i < ITEMS.length; i++) {
			if (typeof ITEMS[i] === "string") {
				ITEMS[i] = Item.of(ITEMS[i])
			}
		}

		let index = Component.translatable(`${id}.ponder.index`).getString()
		let id = `${CmiCore.MODID}:${tag}`
		event.createTag(id, icon, name, index, ITEMS)
	}

	new PonderTag("ponder", "cmi:creative_mechanism", [
		"cmi:accelerator",
		"cmi:water_pump",
		"minecraft:water_bucket",
		"cmi:bronze_casing",
		"mekanism:steam_boiler",
		"mekanism:steam_bucket",
	])

	new PonderTag("other", "mekanism:cardboard_box", [
		"portality:controller",
		"portality:frame",
		"portality:module_items",
		"portality:module_fluids",
		"portality:module_energy",
		"portality:module_interdimensional",
		"immersiveindustry:crucible",
		"immersiveindustry:burning_chamber",
		"immersiveengineering:blastfurnace_preheater",
		"immersiveengineering:blastbrick",
		"cmi:crucible_base",
		"cmi:crucible_tuyere",
		"mekanism:cardboard_box"
	])

	new PonderTag("ae2", "ae2:controller", [
		"ae2:fluix_glass_cable",
		"ae2:condenser",
		"ae2:controller",
		"ae2:pattern_provider",
		"ae2:crafting_unit",
		"ae2:drive",
		"ae2:me_p2p_tunnel",
		"ae2:quantum_ring",
		"ae2:spatial_io_port",
		"ae2:spatial_pylon",
		"ae2:wireless_access_point"
	])
})