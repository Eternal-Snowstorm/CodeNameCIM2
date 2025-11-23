let $BlockBehaviour$Properties =
	Java.loadClass("net.minecraft.world.level.block.state.BlockBehaviour$Properties")
let $BronzeBoilerBlock =
	Java.loadClass("com.teammoeg.steampowered.content.boiler.BronzeBoilerBlock")
// defineCustomBlock("bronze_boiler", $BronzeBoilerBlock, () => {
// 	return $BlockBehaviour$Properties.of()
// 		.sound(SoundType.METAL)
// 		.strength(5, 5)
// })