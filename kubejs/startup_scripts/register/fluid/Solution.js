StartupEvents.registry("fluid", (event) => {
	function addSolution(name, color) {
		return event.create(`${global.namespace}:${name}_solution`)
			.flowingTexture(`${global.namespace}:fluid/solution/flow`)
			.stillTexture(`${global.namespace}:fluid/solution/still`)
			.thinTexture(color)
			.bucketColor(color)
	}

	if (Platform.isClientEnvironment()) {
		let file = `kubejs/assets/${global.namespace}/models/item/${name}_solution_bucket.json`
		JsonIO.write(file, {
			parent: "forge:item/bucket_drip",
			loader: "forge:fluid_container",
			fluid: id
		})
	}

	console.log(`${id} 注册成功`)

	addSolution("iron_chloride", 0x5BBD7F)
	addSolution("iron_sulfate", 0x6EB49C)

	addSolution("copper_chloride", 0x00A889)
	addSolution("copper_sulfate", 0x3D67CA)

	addSolution("zinc_chloride", 0xC8C8C8)
	addSolution("zinc_sulfate", 0xE7E2E2)

	addSolution("aluminum_chloride", 0xD2CE2F)
	addSolution("aluminum_sulfate", 0xAAAAAA)

	addSolution("gold_chloride", 0xFFC800)
	addSolution("gold_sulfate", 0x979B9E)

	addSolution("silver_chloride", 0x838383)
	addSolution("silver_sulfate", 0xC2F2F2)

	addSolution("lead_chloride", 0xADEDF)
	addSolution("lead_sulfate", 0xDADEDF)

	addSolution("chromium_chloride", 0x9300FF)
	addSolution("chromium_sulfate", 0x00D468)

	addSolution("tin_chloride", 0xFFFBBF)
	addSolution("tin_sulfate", 0xEDE9AD)

	addSolution("vanadium_chloride", 0xE2EAB0)
	addSolution("vanadium_sulfate", 0x007FFF)

	addSolution("uranium_chloride", 0xDAFF00)
	addSolution("uranium_sulfate", 0xDAFF00)

	addSolution("nickel_chloride", 0x59FFD7)
	addSolution("nickel_sulfate", 0x59FFD7)

	addSolution("cobalt_chloride", 0xFFFFFF)
	addSolution("cobalt_sulfate", 0xFFFFFF)

	addSolution("osmium_chloride", 0xFF74F3)
	addSolution("osmium_sulfate", 0x001AE3)

	addSolution("platinum_chloride", 0xa81c07)
	addSolution("platinum_sulfate", 0xFFFFD0)

	addSolution("magnesium_chloride", 0xC8C8C8)
	addSolution("magnesium_sulfate", 0xE0E0E0)

	addSolution("sodium_chloride", 0xD7DDDD)
	addSolution("sodium_sulfate", 0xDADEDF)

	addSolution("calcium_sulfate", 0xE0DDC3)
	addSolution("calcium_chloride", 0xE0DDC3)

	addSolution("potassium_sulfate", 0xB8BDBD)
	addSolution("potassium_chloride", 0xB8BDBD)
})