Ponder.registry((event) => {
	event.create([
		"tconstruct:seared_faucet",
		"tconstruct:scorched_faucet"
	]).scene("cmi:use_faucet", "Use faucet", "cmi:tconstruct/faucet", (scene) => {
		scene.showStructure(5)
		scene.idle(20)

		scene.addKeyframe()
		scene.world.modifyBlockEntityNBT([2, 2, 3], (nbt) => {
			nbt.tank = {
				Amount: 4000,
				FluidName: "tconstruct:molten_pig_iron"
			}
		})
		scene.idle(40)
		scene.world.modifyBlockEntityNBT([2, 2, 2], (nbt) => {
			nbt.render_fluid = {
				Amount: 90,
				FluidName: "tconstruct:molten_pig_iron"
			}
		})
		scene.world.modifyBlockEntityNBT([2, 2, 2], (nbt) => {
			nbt.state = 1
		})

		scene.addKeyframe()
		scene.showControls(30, [2, 2, 2], "left")
			.rightClick()
		scene.world.modifyBlockEntityNBT([2, 1.5, 2], (nbt) => {
			nbt.recipe = "tconstruct:smeltery/casting/metal/pig_iron/block"
		})
		for (let i = 1; i < 10; i++) {
			scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
				nbt.tank = {
					capacity: 90 * i,
					filter: "tconstruct:molten_pig_iron",
					fluid: {
						Amount: 90 * i,
						FluidName: "tconstruct:molten_pig_iron"
					}
				}
			})
			scene.world.modifyBlockEntityNBT([2, 2, 3], (nbt) => {
				nbt.tank = {
					Amount: 4000 - 90 * i,
					FluidName: "tconstruct:molten_pig_iron"
				}
			})
			scene.idle(8)
		}
		scene.addKeyframe();
		scene.world.modifyBlockEntityNBT([2, 2, 2], (nbt) => {
			nbt.state = 0
		})
		for (let i = 1; i < 61; i++) {
			scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
				nbt.timer = i
			})
			scene.idle(1)
		}
		scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
			nbt.tank = {
				capacity: 0
			}
		})
		scene.world.modifyBlockEntityNBT([2, 1, 2], (nbt) => {
			nbt.Items = [{
				Count: 1,
				Slot: 1,
				id: "tconstruct:pig_iron_block"
			}]
		})
		scene.idle(20)
	})
})