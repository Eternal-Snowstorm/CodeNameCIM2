new Schema("ratatouille:demolding")
	.simpleKey("results", "outputItemArray")
	.simpleKey("ingredients", "inputItemArray")

new Schema("ratatouille:freezing")
	.simpleKey("results", "outputItemArray")
	.simpleKey("ingredients", "inputItemArray")

new Schema("ratatouille:squeezing")
	.simpleKey("results", "outputFluidOrItemArray")
	.simpleKey("ingredients", "inputFluidOrItemArray")

new Schema("ratatouille:freezing")
	.simpleKey("results", "outputItemArray")
	.simpleKey("ingredients", "inputItemArray")
	.simpleKey("processingTime", "intNumber", 100)