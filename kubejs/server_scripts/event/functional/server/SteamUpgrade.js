const CAST_IRON_UPGRADES = {
	"steampowered:bronze_boiler": "steampowered:cast_iron_boiler",
	"steampowered:bronze_burner": "steampowered:cast_iron_burner",
	"steampowered:bronze_steam_engine": "steampowered:cast_iron_steam_engine",
	"steampowered:bronze_flywheel": "steampowered:cast_iron_flywheel",
	"cmi:bronze_fluid_burner": "cmi:cast_iron_fluid_burner",
	"cmi:bronze_solar_boiler": "cmi:cast_iron_solar_boiler"
}

const STEEL_UPGRADES = {
	"steampowered:cast_iron_boiler": "steampowered:steel_boiler",
	"steampowered:cast_iron_burner": "steampowered:steel_burner",
	"steampowered:cast_iron_steam_engine": "steampowered:steel_steam_engine",
	"steampowered:cast_iron_flywheel": "steampowered:steel_flywheel",
	"cmi:cast_iron_fluid_burner": "cmi:steel_fluid_burner",
	"cmi:cast_iron_solar_boiler": "cmi:steel_solar_boiler"
}

BlockEvents.rightClicked((event) => {
	let { item, block, hand, player } = event

	upgradeCastIron(item, block, hand, player)
	upgradeSteel(item, block, hand, player)
})

/**
 * 
 * @param {Internal.ItemStack} item 
 * @param {Internal.BlockContainerJS_} block 
 * @param {InteractionHand} hand 
 * @param {Player} player 
 * @returns 
 */
function upgradeCastIron(item, block, hand, player) {
	if (item.getId() !== "cmi:steam_cast_iron_upgrade") {
		return
	}

	if (hand !== InteractionHand.MAIN_HAND) {
		return
	}

	/**
	 * @type {Special.Block}
	 */
	let targetId = CAST_IRON_UPGRADES[block.getId()]

	if (targetId) {
		upgradeBlock(item, block, player, targetId)
	}
}

/**
 * 
 * @param {Internal.ItemStack} item 
 * @param {Internal.BlockContainerJS_} block 
 * @param {InteractionHand} hand 
 * @param {Player} player 
 * @returns 
 */
function upgradeSteel(item, block, hand, player) {
	if (item.getId() !== "cmi:steam_steel_upgrade") {
		return
	}

	if (hand !== InteractionHand.MAIN_HAND) {
		return
	}

	/**
	 * @type {Special.Block}
	 */
	let targetId = STEEL_UPGRADES[block.getId()]

	if (targetId) {
		upgradeBlock(item, block, player, targetId)
	}
}

/**
 * 
 * @param {Internal.ItemStack} item 
 * @param {Internal.BlockContainerJS_} block 
 * @param {Player} player 
 * @param {Special.Block} targetId 
 */
function upgradeBlock(item, block, player, targetId) {
	let properties = block.getProperties()
	let nbt = block.getEntityData()

	player.swing()
	block.set(targetId, properties)

	if (nbt) {
		block.setEntityData(nbt)
	}

	if (!player.isCreative()) {
		item.shrink(1)
	}
}