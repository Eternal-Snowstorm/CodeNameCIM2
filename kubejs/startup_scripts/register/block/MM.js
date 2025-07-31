function addMultiBlockMachine(machine) {
	const CORLER_PATH = `config/mm/controllers/${machine}.json`
	// 初始化目录, 避免删了机器文件还在
	JSIO.delete("config/mm/controllers")
	JSIO.delete("config/mm/ports")

	JsonIO.writeAndCreateDirectories(CORLER_PATH, {
		type: "mm:machine",
		id: machine,
		name: ""
	})

	return {
		port(portType, configureFn) {
			let portJson = {
				id: `${machine}_${portType}`,
				controllerIds: `mm:${machine}`,
				name: "",
				type: `mm:${portType}`,
				config: {}
			}

			let builder = getBuilderFor(portType, portJson.config)
			configureFn(builder)

			const PORT_PATH = `config/mm/ports/${machine}/${portType}.json`
			JsonIO.writeAndCreateDirectories(PORT_PATH, portJson)
			return this
		}
	}
}

function getBuilderFor(portType, config) {
	const builder = {}

	if (portType === "item" || portType === "fluid") {
		builder.rows = (rowCount) => {
			config.rows = rowCount
			return builder
		}
		builder.columns = (columnCount) => {
			config.columns = columnCount
			return builder
		}
	}

	if (portType === "fluid") {
		builder.slotCapacity = (capacity) => {
			config.slotCapacity = capacity
			return builder
		}
	}

	if (portType === "energy") {
		builder.capacity = (value) => {
			config.capacity = value
			return builder
		}
		builder.maxReceive = (value) => {
			config.maxReceive = value
			return builder
		}
		builder.maxExtract = (value) => {
			config.maxExtract = value
			return builder
		}
	}

	return builder
}

// 大型蒸汽锅炉
addMultiBlockMachine("large_steam_boiler")
	.port("fluid", (builder) => {
		builder.rows(1)
			.columns(1)
			.slotCapacity(10000)
	})
	.port("item", (builder) => {
		builder.rows(1)
			.columns(1)
	})

// 蒸汽矿石处理机
addMultiBlockMachine("steam_ore_processor")
	.port("fluid", (builder) => {
		builder.rows(2)
			.columns(2)
			.slotCapacity(20000)
	})
	.port("item", (builder) => {
		builder.rows(3)
			.columns(3)
	})

// 裂解机
addMultiBlockMachine("cracker")
	.port("fluid", (builder) => {
		builder.rows(1)
			.columns(3)
			.slotCapacity(10000)
	})
	.port("energy", (builder) => {
		builder.capacity(1000000)
			.maxExtract(1000000)
			.maxReceive(1000000)
	})

// 粒子碰装机
addMultiBlockMachine("particle_collision_machine")
	.port("item", (builder) => {
		builder.rows(1)
			.columns(2)
	})
	.port("energy", (builder) => {
		builder.capacity(10000000)
			.maxExtract(10000000)
			.maxReceive(10000000)
	})