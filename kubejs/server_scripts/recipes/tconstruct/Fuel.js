ServerEvents.recipes((event) => {
	addFuel("ad_astra:cryo_fuel", 4225)
	addFuel("cmi:delta_unstable_solution", 1206)
	addFuel("ad_astra:fuel", 1417)
	addFuel(IngredientUtils.getFirstFluidId("forge:oil"), 1220)
	addFuel("thermal:refined_fuel", 2041)
	addFuel("cmi:turbid_waste_liquid", 1189)
	addFuel("tconstruct:blazing_blood", 2638)
	addFuel(IngredientUtils.getFirstFluidId("forge:ethanol"), 1132)
	addFuel("createdieselgenerators:plant_oil", 1027)
	addFuel("createdieselgenerators:biodiesel", 1636)
	addFuel("createdieselgenerators:diesel", 2113)
	addFuel("createdieselgenerators:gasoline", 2043)

	/**
	 * 添加匠魂流体燃料
	 * 速率由温度直接除100进行计算
	 * 例如传入1500度速率则返回15(1.5倍)
	 * 
	 * 如果想要替换默认燃料还不想破坏整体整齐性的话建议去Remove.js去删除配方
	 * 例如烈焰血的就是"tconstruct:smeltery/melting/fuel/blaze"
	 * 当然, 你要是硬要用.id()去替换我也阻止不了你
	 * 
	 * @param {String} name 流体id
	 * @param {Number} temperature 温度
	 * @returns RecipeJS
	 */
	function addFuel(name, temperature) {
		return event.custom({
			"type": "tconstruct:melting_fuel",
			"duration": 150,
			"fluid": {
				"amount": 50,
				"fluid": name
			},
			"rate": temperature / 100,
			"temperature": temperature
		})
	}

	// 固体燃料
	event.custom({
		"type": "tconstruct:melting_fuel",
		"rate": 9,
		"temperature": 937
	}).id("tconstruct:smeltery/melting/fuel/solid")
})