type Port = "item_input"
	| "item_output"
	| "fluid_input"
	| "fluid_output"
	| "energy_input"
	| "energy_output"
	| "gas_input"
	| "gas_output"
	| "common_input"
	| "common_output"

ClientEvents.highPriorityAssets((event) => {
	const MACHINE_MODEL_PATH = "machine"
	const MACHINE_TEXTURE_PATH = "cmi:block/machine"
	const IO_TEXTURE_PATH = `${MACHINE_TEXTURE_PATH}/io`

	/**
	 * 生成一个 Orientable Block Model
	 * 
	 * @param model 
	 * @param front 
	 * @param side 
	 */
	function addOrientableModel(model: ResourceLocation_, front: string, side: string) {
		event.addModel("block", model, (generator) => {
			generator.parent("nebula_libs:block/double_layered_orientable")
			generator.texture("background", side)
			generator.texture("layered", front)
		})

		if (CmiGlobal.isDebug) {
			console.info(`[GenMBDModel] Generated: assets/cmi/models/block/${model}.json`)
		}
	}

	function addMainModel(name: string) {
		addMachineModel(name)
		addSingleFacePortModel(name)
	}

	/**
	 * 添加普通机器模型
	 * 
	 * @param name 
	 */
	function addMachineModel(name: string) {
		const SIDE = machineTexture(name, "side")

		for (const STATE of ["on", "off"]) {
			addOrientableModel(
				machineModel(name, STATE),
				machineTexture(name, STATE),
				SIDE
			)
		}
	}

	/**
	 * 所有支持的端口模型
	 *
	 * key 为生成的模型名
	 * value 为 block/machine/io 下的覆盖贴图
	 */
	const PORT_TEXTURES: Record<Port, string> = {
		item_input: "item_input",
		item_output: "item_output",

		fluid_input: "fluid_input",
		fluid_output: "fluid_output",

		energy_input: "energy_input",
		energy_output: "energy_output",

		gas_input: "gas_input",
		gas_output: "gas_output",

		common_input: "common_input",
		common_output: "common_output"
	}

	function machineModel(name: string, path: string) {
		return Cmi.loadResource(`${MACHINE_MODEL_PATH}/${name}/${path}`)
	}

	function machineTexture(name: string, texture: string) {
		return `${MACHINE_TEXTURE_PATH}/${name}/${texture}`
	}

	function portTexture(port: Port) {
		const TEXTURE = PORT_TEXTURES[port]

		return `${IO_TEXTURE_PATH}/${TEXTURE}`
	}

	/**
	 * 添加一个单面接口模型
	 *
	 * @param name
	 * @param port
	 */
	function addPortModel(name: string, port: Port) {
		addOrientableModel(
			machineModel(name, port),
			portTexture(port),
			machineTexture(name, "side")
		)
	}

	/**
	 * 添加所有单面接口模型
	 *
	 * @param name
	 */
	function addSingleFacePortModel(name: string) {
		for (const PORT of Object.keys(PORT_TEXTURES) as Port[]) {
			addPortModel(name, PORT)
		}
	}

	addMainModel("chemical_reactor")
	addMainModel("electrolyzer")
	addMainModel("electronic_blast_furnace")
	addMainModel("improved_rubber_extractor")
	addMainModel("reinforced_chemical_reactor")
	addMainModel("reinforced_coke_oven")
	addMainModel("dimensionally_transcendent_mechanism_accelerator")
})