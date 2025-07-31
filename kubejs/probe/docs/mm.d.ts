declare type PortType = "item" | "fluid" | "energy";

declare interface PortConfig {
	rows?: number;
	columns?: number;
	slotCapacity?: number;
	capacity?: number;
	maxReceive?: number;
	maxExtract?: number;
}

declare interface PortBuilder {
	rows(value: number): PortBuilder;
	columns(value: number): PortBuilder;
	slotCapacity?(value: number): PortBuilder;
	capacity?(value: number): PortBuilder;
	maxReceive?(value: number): PortBuilder;
	maxExtract?(value: number): PortBuilder;
}

declare interface MultiBlockMachine {
	port(portType: PortType, configureFn: (builder: PortBuilder) => void): MultiBlockMachine;
}

declare function addMultiBlockMachine(machine: string): MultiBlockMachine;