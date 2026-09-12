ClientEvents.lang("zh_cn", (event) => {
	renameFluid("neoecoae:cryotheum_solution", "极寒之凛冰")

	function renameFluid(fluid: Internal.Fluid_, name: string) {
		let description: string = fluid.toString().replace(":", ".")

		event.add(`fluid.${description}`, name)
		event.add(`block.${description}`, name)
		event.add(`item.${description}_bucket`, `${name}桶`)
	}
})