new Schema("treetap:tap_extract")
	.simpleKey("result", "outputItem")
	.simpleKey("log", "inputItem")
	.simpleKey("display_fluid", "outputFluid")
	/**
	 * 这个key指的是收集满需要多少tick
	 */
	.simpleKey("processing_time", "intNumber", 100)
	.simpleKey("collect_bucket", "bool", true)