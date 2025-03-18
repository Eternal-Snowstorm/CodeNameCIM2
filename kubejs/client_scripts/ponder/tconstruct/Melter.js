Ponder.registry((event) => {
	event.create([
		"tconstruct:seared_melter",
		"tconstruct:seared_heater",
		"tconstruct:seared_fuel_tank",
		"tconstruct:seared_drain",
		"tconstruct:seared_bricks"
	])
		.tag("ue_addons:tconstruct")
		.scene("ue_addons:melter", "Melter", "ue_addons:tconstruct/melter", (scene) => {
			scene.showBasePlate()
			scene.idle(20)

			scene.addKeyframe()
			scene.world.showSection([2, 1, 2], Direction.DOWN)
			scene.idle(10)
			scene.world.showSection([2, 2, 2], Direction.DOWN)
			scene.idle(20)

			scene.text(40, "To use Melter, you need to place an Heater first", [2.5, 1.5, 2])
			scene.overlay.showOutline("blue", {}, [2, 1, 2], 45)
			scene.idle(45)

			scene.text(40, "Then place an Heater above the Melter", [2.5, 2.5, 2])
			scene.overlay.showOutline("blue", {}, [2, 2, 2], 45)
			scene.idle(45)

			scene.addKeyframe()
			scene.text(40, "Then place Ceared Table and Seared Basin on any two sides of Heater")
			scene.idle(10)
			scene.overlay.showOutline("blue", {}, [1, 1, 2], 45)
			scene.overlay.showOutline("blue", {}, [3, 1, 2], 45)
			scene.idle(40)
			scene.world.showSection([1, 1, 2], Direction.DOWN)
			scene.world.showSection([3, 1, 2], Direction.DOWN)
			scene.idle(40)

			scene.addKeyframe()
			scene.text(40, "Then place Faucet on any two sides of Melter")
			scene.idle(10)
			scene.overlay.showOutline("blue", {}, [1, 2, 2], 45)
			scene.overlay.showOutline("blue", {}, [3, 2, 2], 45)
			scene.idle(40)

			scene.world.showSection([1, 2, 2], Direction.EAST)
			scene.idle(10)
			scene.rotateCameraY(90)
			scene.idle(10)
			scene.world.showSection([3, 2, 2], Direction.WEST)
			scene.idle(30)
			scene.rotateCameraY(270)
			scene.idle(20)

			scene.addKeyframe()
			scene.idle(20)
			scene.text(40, "Then you need to add fuels to Heater", [2.5, 1.5, 2])
			scene.overlay.showOutline("blue", {}, [2, 1, 2], 45)

			scene.showControls(30, [2.5, 1.5, 2], "down")
				.withItem("minecraft:oak_planks")
			scene.idle(45)

			scene.text(40, "After adding fuels, you can add items to be smelted in Melter", [2.5, 2.5, 2])
			scene.overlay.showOutline("blue", {}, [2, 2, 2], 45)
			scene.idle(20)

			for (let i = 0; i < 3; i++) {
				scene.showControls(10, [2.5, 2.5, 2], "down")
					.withItem("minecraft:raw_iron")
				scene.idle(15)
			}
			scene.idle(5)

			scene.world.modifyBlock([2, 1, 2], (state) => state.with("active", "true"), false)

			let melterHaveItem = scene.world.showIndependentSectionImmediately([2, 4, 2])
			scene.world.moveSection(melterHaveItem, [0, -2, 0], 0)
			scene.text(60, "Wait a moment...")
			scene.idle(60)

			scene.world.setBlocks([2, 4, 2], "minecraft:air", false)
			let melterHaveFluid = scene.world.showIndependentSectionImmediately([2, 6, 2])
			scene.world.moveSection(melterHaveFluid, [0, -4, 0], 0)
			scene.idle(20)
		})
})