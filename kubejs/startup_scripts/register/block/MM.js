/**
 * @typedef {"item" | "fluid" | "energy"} PortType
 */

/**
 * @typedef {Object} ItemBuilder
 * @property {(rowCount: number) => ItemSlotsBuilder} rows 设置行数
 * @property {(columnCount: number) => ItemSlotsBuilder} columns 设置列数
 */

/**
 * @typedef {Object} FluidBuilder
 * @property {(rowCount: number) => FluidSlotsBuilder} rows 设置行数
 * @property {(columnCount: number) => FluidSlotsBuilder} columns 设置列数
 * @property {(capacity: number) => FluidSlotsBuilder} slotCapacity 设置每格容量
 */

/**
 * @typedef {Object} EnergyBuilder
 * @property {(value: number) => EnergySlotBuilder} capacity 设置总容量
 * @property {(value: number) => EnergySlotBuilder} maxReceive 设置最大输入
 * @property {(value: number) => EnergySlotBuilder} maxExtract 设置最大输出
 */

/**
 * @param {PortType} portType
 * @param {Object} config
 * @returns {ItemSlotsBuilder | FluidSlotsBuilder | EnergySlotBuilder}
 */
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

/**
 * @typedef {Object} MachineBuilder
 * @property {(portType: "item", handle: (builder: ItemSlotsBuilder) => void) => MachineBuilder} port
 * @property {(portType: "fluid", handle: (builder: FluidSlotsBuilder) => void) => MachineBuilder} port
 * @property {(portType: "energy", handle: (builder: EnergySlotBuilder) => void) => MachineBuilder} port
 */

/**
 * @param {string} machine
 * @returns {MachineBuilder}
 */
function addMultiBlockMachine(machine) {
	const CORLER_PATH = `config/mm/controllers/${machine}.json`
	JSIO.delete("config/mm/controllers")
	JSIO.delete("config/mm/ports")

	JsonIO.writeAndCreateDirectories(CORLER_PATH, {
		type: "mm:machine",
		id: machine,
		name: ""
	})

	return {
		/**
		 * @template {PortType} T
		 * @param {T} portType
		 * @param {(builder: (
		 *   T extends "item" ? ItemSlotsBuilder :
		 *   T extends "fluid" ? FluidSlotsBuilder :
		 *   EnergySlotBuilder
		 * )) => void} handle
		 */
		port(portType, handle) {
			let portJson = {
				id: `${machine}_${portType}`,
				controllerIds: `mm:${machine}`,
				name: "",
				type: `mm:${portType}`,
				config: {}
			}

			let builder = getBuilderFor(portType, portJson.config)
			handle(builder)

			const PORT_PATH = `config/mm/ports/${machine}/${portType}.json`
			JsonIO.writeAndCreateDirectories(PORT_PATH, portJson)
			return this
		}
	}
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