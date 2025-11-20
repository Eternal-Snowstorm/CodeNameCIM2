/**
 * @typedef {"item" | "fluid" | "energy"} PortType
 */

/**
 * @typedef {Object} ItemSlotsBuilder
 * @property {(rowCount: number) => ItemSlotsBuilder} rows
 * @property {(columnCount: number) => ItemSlotsBuilder} columns
 */

/**
 * @typedef {Object} FluidSlotsBuilder
 * @property {(rowCount: number) => FluidSlotsBuilder} rows
 * @property {(columnCount: number) => FluidSlotsBuilder} columns
 * @property {(capacity: number) => FluidSlotsBuilder} slotCapacity
 */

/**
 * @typedef {Object} EnergySlotBuilder
 * @property {(value: number) => EnergySlotBuilder} capacity
 * @property {(value: number) => EnergySlotBuilder} maxReceive
 * @property {(value: number) => EnergySlotBuilder} maxExtract
 */

/**
 * 根据 portType 创建对应 builder
 * @param {PortType} portType
 * @param {Object} config
 * @returns {ItemSlotsBuilder | FluidSlotsBuilder | EnergySlotBuilder}
 */
function getBuilderFor(portType, config) {
	let builder = {}

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
 * MultiBlockMachine 构造函数（无需 class）
 *
 * @param {string} machine
 * @constructor
 * @returns {MachineBuilder}
 */
function MultiBlockMachine(machine) {
	if (!(this instanceof MultiBlockMachine)) {
		return new MultiBlockMachine(machine)
	}

	const CONTROLLER_PATH = `config/mm/controllers/${machine}.json`

	JSIO.delete("config/mm/controllers")
	JSIO.delete("config/mm/ports")

	JsonIO.writeAndCreateDirectories(CONTROLLER_PATH, {
		type: "mm:machine",
		id: machine,
		name: ""
	})

	/**
	 * @template {PortType} T
	 * @param {T} portType
	 * @param {(builder: (
	 *    T extends "item" ? ItemSlotsBuilder :
	 *    T extends "fluid" ? FluidSlotsBuilder :
	 *    EnergySlotBuilder
	 * )) => void} handle
	 * @returns {MachineBuilder}
	 */
	this.port = (portType, handle) => {
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

	return this
}

// 大型蒸汽锅炉
new MultiBlockMachine("large_steam_boiler")
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
new MultiBlockMachine("steam_ore_processor")
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
new MultiBlockMachine("cracker")
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
new MultiBlockMachine("particle_collision_machine")
	.port("item", (builder) => {
		builder.rows(1)
			.columns(2)
	})
	.port("energy", (builder) => {
		builder.capacity(10000000)
			.maxExtract(10000000)
			.maxReceive(10000000)
	})