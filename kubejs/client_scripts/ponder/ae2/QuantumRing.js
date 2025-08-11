Ponder.registry((event) => {
	event.create("ae2:quantum_ring")
		.scene("ae2:quantum_ring", "Quantum Connection", "cmi:ae2/quantum_ring", (scene) => {
			scene.showBasePlate()
			scene.idle(20)

			const ENDER_DUST =
				scene.world.createItemEntity([3.5, 1.5, 5.5], [0, 0, 0], "ae2:ender_dust")
			const SINGULARITY1 =
				scene.world.createItemEntity([3.5, 1.5, 5.5], [0, 0, 0], "ae2:singularity")
			const ENDER_PEARL =
				scene.world.createItemEntity([5.5, 1.5, 3.5], [0, 0, 0], "minecraft:ender_pearl")
			const SINGULARITY2 =
				scene.world.createItemEntity([5.5, 1.5, 3.5], [0, 0, 0], "ae2:singularity")
			scene.idle(20)

			// 将奇点和末影珍珠或者末影粉丢在地上
			scene.text(60, "Throw the singularity onto the ground with an ender pearl or an ender dust", [4.5, 1.5, 4.5])
			scene.idle(80)

			// 把它们用TNT或微型TNT炸一下
			scene.text(40, "Blow them up with a TNT or a tiny tnt", [4.5, 1.5, 4.5])
			scene.world.createEntity("ae2:tiny_tnt_primed", [4.5, 1.5, 4.5])
			scene.idle(80)
			scene.world.removeEntity(ENDER_DUST)
			scene.world.removeEntity(SINGULARITY1)
			scene.world.removeEntity(SINGULARITY2)
			scene.world.removeEntity(ENDER_PEARL)
			const QUANTUM1 =
				scene.world.createItemEntity([3.5, 1.5, 5.5], [0, 0, 0], "ae2:quantum_entangled_singularity")
			const QUANTUM2 =
				scene.world.createItemEntity([3.5, 1.5, 5.5], [0, 0, 0], "ae2:quantum_entangled_singularity")
			const QUANTUM3 =
				scene.world.createItemEntity([5.5, 1.5, 3.5], [0, 0, 0], "ae2:quantum_entangled_singularity")
			const QUANTUM4 =
				scene.world.createItemEntity([5.5, 1.5, 3.5], [0, 0, 0], "ae2:quantum_entangled_singularity")
			scene.idle(40)

			// 这样就得到了一对量子缠绕态奇点！
			scene.text(40, "And here is a pair of Quantum Entangled Singularity(QES)!", [4.5, 1.5, 4.5])
			scene.idle(60)
			scene.world.removeEntity(QUANTUM1)
			scene.world.removeEntity(QUANTUM2)
			scene.world.removeEntity(QUANTUM3)
			scene.world.removeEntity(QUANTUM4)
			scene.world.showSection([0, 1, 1, 8, 3, 5], Direction.DOWN)
			scene.addKeyframe()
			scene.idle(40)

			// 把成对的缠绕态奇点分别放进量子环
			scene.text(60, "Pairs of QESs can be put into pairs of Quantum Rings")
			scene.showControls(60, [1.5, 2, 4.5], "down")
				.withItem("ae2:quantum_entangled_singularity")
			scene.showControls(60, [7.5, 3, 5.5], "down")
				.withItem("ae2:quantum_entangled_singularity")
			scene.idle(80)

			// 只有与量子链接仓紧邻的四个量子环可以传输频道
			scene.text(60, "Only the Quantum Rings right beside the Quantum Link can transmit channels")
			scene.overlay.showOutline("fast", {}, [1, 1, 3], 60)
			scene.overlay.showOutline("fast", {}, [1, 1, 5], 60)
			scene.overlay.showOutline("fast", {}, [0, 1, 4], 60)
			scene.overlay.showOutline("fast", {}, [2, 1, 4], 60)
			scene.overlay.showOutline("fast", {}, [6, 2, 5], 60)
			scene.overlay.showOutline("fast", {}, [8, 2, 5], 60)
			scene.overlay.showOutline("fast", {}, [7, 1, 5], 60)
			scene.overlay.showOutline("fast", {}, [7, 3, 5], 60)
			scene.idle(80)

			// 现在这个ME驱动器
			scene.text(40, "And now this ME Drive is connected", [7.5, 1.5, 3.5])
			scene.idle(60)

			// 就连接到了这个控制器的ME网络里
			scene.text(60, "To the ME Network of this ME Controller", [1.5, 1.5, 1.5])
			scene.idle(80)
			scene.addKeyframe()

			// 量子环支持跨维度传输频道, 也就是说可以使用量子环实现不同维度之间的物流
			scene.text(80, "Quantum Ring support inter-dimentional channel transmission, which means it can be used for the transportation between dimentions", [7.5, 2.5, 5.5])
			scene.idle(100)
		})
})