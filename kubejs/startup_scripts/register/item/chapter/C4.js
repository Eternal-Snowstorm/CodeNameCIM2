StartupEvents.registry("item", (event) => {
	/**
	 * 
	 * @param {string} name 
	 * @returns 
	 */
	function addItem(name) {
		let chapter = 4
		let builder = event.create(`${global.namespace}:${name}`)

		builder.texture(`${global.namespace}:item/chapter/c${chapter.toString()}/${name}`)

		return builder
	}

	// 简易电池
	addItem("simple_battery")
		.maxStackSize(1)
		.texture("createaddition:item/capacitor")
		.attachCapability(CapabilityBuilder.ENERGY.customItemStack()
			.canExtract(() => true)
			.canReceive(() => true)
			.getEnergyStored((stack) => {
				stack.nbt?.energy || 0
			})
			.getMaxEnergyStored(() => 10000)
			.extractEnergy((stack, amount, simulate) => {
				let stored = stack.nbt?.energy || 0
				let extracted = Math.min(stored, amount)
				if (!simulate) {
					stack.nbt = stack.nbt || {}
					stack.nbt.energy = stored - extracted
				}
				return extracted
			})
			.receiveEnergy((stack, amount, simulate) => {
				let stored = stack.nbt?.energy || 0
				let max = 10000
				let received = Math.min(max - stored, amount)
				if (!simulate) {
					stack.nbt = stack.nbt || {}
					stack.nbt.energy = stored + received
				}
				return received
			})
		)

	// 充能紫水晶
	addItem("charged_amethyst")
		.rarity("epic")
		.tag("forge:gems")
		.tag("forge:gems/charged_amethyst")
})