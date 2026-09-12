new Schema("fluidlogistics:bulk_cooling")
	.simpleKey("ingredients", "inputFluidOrItemArray")
	.simpleKey("results", "outputFluidOrItemArray")

new Schema("fluidlogistics:cooling_mixing")
	.simpleKey("ingredients", "inputFluidOrItemArray")
	.simpleKey("results", "outputFluidOrItemArray")
	.simpleKey("supercooled", "bool", false)