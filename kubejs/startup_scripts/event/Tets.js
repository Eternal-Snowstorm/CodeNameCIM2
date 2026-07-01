let $EntityLeaveLevelEvent =
	Java.loadClass("net.minecraftforge.event.entity.EntityLeaveLevelEvent")

nativeEvent($EntityLeaveLevelEvent, (event) => {
	let entity = event.getEntity()
	let level = event.getLevel()
	let players = level.getPlayers()
	const STAGE_NAME = "dragon_death"

	if (level.isClientSide()) {
		return
	}

	if (entity.getType() !== "minecraft:ender_dragon") {
		return
	}

	players.forEach((entities) => {
		if (!(entities instanceof Player)) {
			return
		}

		/**
		 * @typedef {Player}
		 */
		let player = entities
		let stage = player.getStages()

		if (!player) {
			return
		}

		if (!stage.has(STAGE_NAME)) {
			level.playSound(
				null,
				player.x,
				player.y,
				player.z,
				"cmi:final_quest_complete",
				"players",
				0.5,
				1
			)
		} else {
			stage.add(STAGE_NAME)
		}
	})
})

let $TinkerModifiers =
	Java.loadClass("slimeknights.tconstruct.tools.TinkerModifiers")
let $ModifierIds =
	Java.loadClass("slimeknights.tconstruct.tools.data.ModifierIds")
let $NTModifier =
	Java.loadClass("dev.celestiacraft.tinker.common.register.NTModifier")
let $ThermalConstructModifierIds =
	Java.loadClass("mrthomas20121.thermalconstruct.ThermalConstructModifierIds")

TConJSEvents.materialDefinition((event) => {
	event.addMaterialData(
		"cmi",
		"test",
		(builder) => {
			builder.craftable(true)
				.tier(1)
				.sortOrder(110)
				.hidden(false)
		},
		(builder) => {
			builder.grip(0.2, -0.1, 3.2)
				.limb(0.1, -0.12, 230, -0.02)
				.handle(-0.10, 0.05, 0, 0)
				.head(100, 1.6, 6.2, "minecraft:stone")
		},
		(builder) => {
			builder.perStat("tconstruct:melee_harvest", $ModifierIds.luck, 1)
				.perStat("tconstruct:ranged", $ModifierIds.crystalshot, 1)
		},
		(builder) => {
			builder.fluid("tconstruct:molten_amethyst")
				.amount(90)
				.temperature(800)
		}
	)
})