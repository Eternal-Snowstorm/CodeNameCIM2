/* src
// region VARIABLES
public static int deviceAugments = 3;
public static int dynamoAugments = 4;
public static int machineAugments = 4;
public static int storageAugments = 3;
public static int toolAugments = 4;
// endregion

// region CONFIG VARIABLES
public static Supplier<Boolean> keepEnergy = TRUE;
public static Supplier<Boolean> keepItems = FALSE;
public static Supplier<Boolean> keepFluids = FALSE;
public static Supplier<Boolean> keepAugments = TRUE;
public static Supplier<Boolean> keepRSControl = TRUE;
public static Supplier<Boolean> keepSideConfig = TRUE;
public static Supplier<Boolean> keepTransferControl = TRUE;

public static Supplier<Boolean> defaultReconfigSides = TRUE;
public static Supplier<Boolean> defaultRSControl = TRUE;
public static Supplier<Boolean> defaultXPStorage = FALSE;

public static Supplier<Boolean> permanentLava = FALSE;
public static Supplier<Boolean> permanentWater = FALSE;

public static Supplier<Boolean> enableVillagerTrades = TRUE;
public static Supplier<Boolean> enableWandererTrades = TRUE;

public static Supplier<Boolean> mobBlitzLightning = TRUE;

private Supplier<Boolean> boolMobBasalz = TRUE;
private Supplier<Boolean> boolMobBlitz = TRUE;
private Supplier<Boolean> boolMobBlizz = TRUE;
*/
let $ThermalCoreConfig =
	Java.loadClass("cofh.thermal.core.common.config.ThermalCoreConfig")

StartupEvents.postInit((event) => {
	/**
	 * @type {Internal.Supplier_<Boolean>}
	 * @returns 
	 */
	const TRUE = () => true
	/**
	 * @type {Internal.Supplier_<Boolean>}
	 * @returns 
	 */
	const FALSE = () => false

	// 强化插件槽位数量(当前9)
	let augmentKeys = [
		"deviceAugments",
		"dynamoAugments",
		"machineAugments",
		"storageAugments",
		"toolAugments"
	]
	augmentKeys.forEach((config) => {
		$ThermalCoreConfig[config] = 9
	})

	$ThermalCoreConfig.keepItems = TRUE
	$ThermalCoreConfig.keepFluids = TRUE
})