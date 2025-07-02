interface DefineStructure {
	where(pos: String, block: BlockAllType): this;
	build(): this;
}

type BlockAllType = Block | string | IStateMatcher
type DefineMultiBlockStructure = (structures: string[][]) => DefineStructure;