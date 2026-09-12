new Schema("fluidlogistics:bulk_cooling")
	.simpleKey("results", "outputFluidOrItemArray")
	.simpleKey("ingredients", "inputFluidOrItemArray")

new Schema("fluidlogistics:cooling_mixing")
	.simpleKey("results", "outputFluidOrItemArray")
	.simpleKey("ingredients", "inputFluidOrItemArray")
	.simpleKey("supercooled", "bool", false)

new Schema("fluidlogistics:cooling_compacting")
	.simpleKey("results", "outputFluidOrItemArray")
	.simpleKey("ingredients", "inputFluidOrItemArray")
	.simpleKey("supercooled", "bool", false)