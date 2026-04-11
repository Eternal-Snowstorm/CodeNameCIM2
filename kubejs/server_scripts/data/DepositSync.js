ServerEvents.highPriorityData((event) => {
	function SpecData(name) {
		this.specPath = name
		this.structureId = null
		this.dimensionName = "minecraft:overworld"
		this.iconItem = null
		return this
	}
	/**
	 * 
	 * @param {String} structure 
	 * @returns 
	 */
	SpecData.prototype.structure = function (structure) {
		this.structureId = structure
		return this
	}
	/**
	 * 
	 * @param {String} dim 
	 */
	SpecData.prototype.dimension = function (dim) {
		this.dimensionName = dim
		return this
	}
	/**
	 * 
	 * @param {InputItem_} item 
	 * @returns 
	 */
	SpecData.prototype.icon = function (item) {
		this.iconItem = item.toString()
		return this
	}
	SpecData.prototype.build = function () {
		let SpecContent = {
			"scanner_icon_item": this.iconItem,
			"dimension": this.dimensionName,
			"map_icon_item": this.iconItem,
			"structure": this.structureId
		}

		event.addJson(`create_rns:create_rns/deposit_spec/${this.specPath}`, SpecContent)
	}

	// new SpecData("coal")
	// 	.structure("cmi:ore_node/coal_node")
	// 	.icon("minecraft:coal")
	// 	.build()

	// new SpecData("copper")
	// 	.structure("cmi:ore_node/copper_node")
	// 	.icon("minecraft:raw_copper")
	// 	.build()

	// new SpecData("gold")
	// 	.structure("cmi:ore_node/gold_node")
	// 	.icon("minecraft:raw_gold")
	// 	.build()

	// new SpecData("iron")
	// 	.structure("cmi:ore_node/iron_node")
	// 	.icon("minecraft:raw_iron")
	// 	.build()

	// new SpecData("lead")
	// 	.structure("cmi:ore_node/lead_node")
	// 	.icon("thermal:raw_lead")
	// 	.build()

	// new SpecData("nickel")
	// 	.structure("cmi:ore_node/nickel_node")
	// 	.icon("thermal:raw_nickel")
	// 	.build()

	// new SpecData("oil_shale")
	// 	.structure("cmi:ore_node/oil_shale_node")
	// 	.icon("createdieselgenerators:crude_oil_bucket")
	// 	.build()

	// new SpecData("redstone")
	// 	.structure("cmi:ore_node/redstone_node")
	// 	.icon("minecraft:redstone")
	// 	.build()

	// new SpecData("silver")
	// 	.structure("cmi:ore_node/silver_node")
	// 	.icon("thermal:raw_silver")
	// 	.build()

	// new SpecData("tin")
	// 	.structure("cmi:ore_node/tin_node")
	// 	.icon("thermal:raw_tin")
	// 	.build()

	// new SpecData("uranium")
	// 	.structure("cmi:ore_node/nickel_node")
	// 	.icon("immersiveengineering:raw_uranium")
	// 	.dimension("cmi:deleted")
	// 	.build()

	// new SpecData("zinc")
	// 	.structure("cmi:ore_node/zinc_node")
	// 	.icon("create:raw_zinc")
	// 	.build()

	// new SpecData("nether_cobalt")
	// 	.structure("cmi:ore_node/cobalt_node")
	// 	.icon("tconstruct:raw_cobalt")
	// 	.dimension("cmi:deleted")
	// 	.build()

	// new SpecData("nether_gold")
	// 	.structure("cmi:ore_node/nether_gold_node")
	// 	.icon("minecraft:raw_gold")
	// 	.dimension("cmi:deleted")
	// 	.build()

	// new SpecData("nether_quartz")
	// 	.structure("cmi:ore_node/quartz_node")
	// 	.icon("minecraft:quartz")
	// 	.dimension("cmi:deleted")
	// 	.build()

	// new SpecData("nether_vanadium")
	// 	.structure("cmi:ore_node/vanadium_node")
	// 	.icon("cmi:raw_vanadium")
	// 	.dimension("minecraft:the_nether")
	// 	.build()
})