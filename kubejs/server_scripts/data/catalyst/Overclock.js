ServerEvents.highPriorityData((event) => {

	/**
	 * 
	 * @param {String} name Catalyst 名称
	 * @returns 
	 */
	function Catalyst(name) {
		this.name = name
		this.path = Ingredient.getPath(name)

		this.data = {
			name: name,
			chance_multiplier: 1.0,
			optional: true,
			requirements: [],
			display_priority: 1000,
			representative_items: []
		}
	}

	/**
	 * 设置倍率
	 */
	Catalyst.prototype.multiplier = function (value) {
		this.data.chance_multiplier = value
		return this
	}

	/**
	 * 是否可选
	 */
	Catalyst.prototype.optional = function (bool) {
		this.data.optional = bool
		return this
	}

	/**
	 * 显示优先级
	 */
	Catalyst.prototype.priority = function (value) {
		this.data.display_priority = value
		return this
	}

	/**
	 * 设置代表物品
	 */
	Catalyst.prototype.display = function (items) {
		this.data.representative_items = items
		return this
	}

	/**
	 * 添加流体需求
	 * @param {Internal.FluidStackJS_} fluid 流体ID或Tag
	 * @param {number} amount mB
	 */
	Catalyst.prototype.fluid = function (fluid, amount) {
		this.data.requirements.push({
			type: "fluid",
			consume: {
				FluidName: fluid,
				Amount: amount
			}
		})
		return this
	}

	Catalyst.prototype.attachment = function (block, count) {
		this.data.requirements.push({
			type: "attachment",
			attachment: block,
			count: count
		})
		return this
	}

	/**
	 * hide_if_present
	 */
	Catalyst.prototype.hide = function (list) {
		this.data.hide_if_present = list
		return this
	}

	Catalyst.prototype.build = function () {
		event.addJson(Cmi.loadResource(`create_rns/catalyst/${this.path}.json`), this.data)
		return this
	}

	new Catalyst("blazing_blood_overclock")
		.multiplier(5.0)
		.priority(1005)
		.fluid("tconstruct:blazing_blood", 20)
		.display(["tconstruct:blazing_blood_bucket"])
		.build()
})