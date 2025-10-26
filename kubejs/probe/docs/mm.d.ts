type PortType = "item" | "fluid" | "energy"

interface ItemSlotsBuilder {
	rows(rowCount: number): ItemSlotsBuilder
	columns(columnCount: number): ItemSlotsBuilder
}

interface FluidSlotsBuilder {
	rows(rowCount: number): FluidSlotsBuilder
	columns(columnCount: number): FluidSlotsBuilder
	slotCapacity(capacity: number): FluidSlotsBuilder
}

interface EnergySlotBuilder {
	capacity(value: number): EnergySlotBuilder
	maxReceive(value: number): EnergySlotBuilder
	maxExtract(value: number): EnergySlotBuilder
}

declare function getBuilderFor(
	portType: PortType,
	config: Record<string, any>
): ItemSlotsBuilder | FluidSlotsBuilder | EnergySlotBuilder

interface MachineBuilder {
	port(
		portType: "item",
		handle: (builder: ItemSlotsBuilder) => void
	): MachineBuilder
	port(
		portType: "fluid",
		handle: (builder: FluidSlotsBuilder) => void
	): MachineBuilder
	port(
		portType: "energy",
		handle: (builder: EnergySlotBuilder) => void
	): MachineBuilder
}

declare function addMultiBlockMachine(machine: string): MachineBuilder