ServerEvents.highPriorityData((event) => {
	// 录入所有金属材料类型
	let materialType = [
		"ingot",
		"plate",
		"nugget",
		"storage_block",
		"gear",
		"dust",
		"rod",
		"wire"
	]
	// 遍历金属材料类型
	materialType.forEach((type) => {
		// 遍历金属类型
		CmiMetalRegistry.getAll().forEach((metal) => {
			/**
			 * 声明所需变量
			 * 
			 * @type {String} material 材料ID
			 * @type {Internal.Ingredient_} tag 当前正在遍历的物品tag
			 * @type {Internal.Set<string>} ids tag下所有物品id
			 * @type {String} currentNamespace 当前物品的命名空间
			 * @type {String} outputId 所输出的物品id
			 * @type {Number} priorityValue 当前命名空间的优先级
			 */
			let material = metal.getId().toString()
			let tag = `#forge:${type}s/${material}`
			let ids = Ingredient.of(tag).getItemIds()

			if (ids.length > 0) {

				// 利用输出的物品id完成匹配tag的物品统一
				addJsonFile(`${material}_${type}`, addUnification(
					tag,
					getHighPriorityItem(ids)
				))

				// 输出完成统一的信息
				// console.debug(`oei:replacements/${material}_${type}.json is generated!`)
			}
		})
	})

	// 粗矿
	CmiMetalRegistry.getAll().forEach((metal) => {
		/**
		 * 声明所需变量
		 * @type {String} material 材料ID
		 * @param {String} tag 当前正在遍历的物品tag
		 * @param {Set} ids tag下所有物品id
		 * @param {String} currentNamespace 当前物品的命名空间
		 * @param {String} outputId 所输出的物品id
		 * @param {Number} priorityValue 当前命名空间的优先级
		 */
		let material = metal.getId()
		let tag = `#forge:raw_materials/${material}`
		let ids = Ingredient.of(tag).getItemIds()

		if (ids.length > 0) {

			// 利用输出的物品id完成匹配tag的物品统一
			addJsonFile(`raw_${material}`, addUnification(
				tag,
				getHighPriorityItem(ids)
			))

			// 输出完成统一的信息
			// console.debug(`oei:replacements/raw_${material}.json is generated!`)
		}
	})

	// 粗矿块
	CmiMetalRegistry.getAll().forEach((metal) => {
		/**
		 * 声明所需变量
		 * @type {String} material 材料ID
		 * @param {String} tag 当前正在遍历的物品tag
		 * @param {Set} ids tag下所有物品id
		 * @param {String} currentNamespace 当前物品的命名空间
		 * @param {String} outputId 所输出的物品id
		 * @param {Number} priorityValue 当前命名空间的优先级
		 */
		let material = metal.getId()
		let tag = `#forge:storage_blocks/raw_${material}`
		let ids = Ingredient.of(tag).getItemIds()

		if (ids.length > 0) {

			// 利用输出的物品id完成匹配tag的物品统一
			addJsonFile(`raw_${material}_block`, addUnification(
				tag,
				getHighPriorityItem(ids)
			))

			// 输出完成统一的信息
			// console.debug(`oei:replacements/raw_${material}_block.json is generated!`)
		}
	})

	/**
	 * @example addJsonFile("coal_coke", addUnification("#forge:coal_coke", "thermal:coal_coke"))
	 * @param {Internal.Item | Internal.Ingredient} match 
	 * @param {Internal.Item | Internal.Ingredient} item 
	 * @returns 
	 */
	function addUnification(match, item) {
		return {
			matchItems: [match],
			resultItems: item
		}
	}

	function addJsonFile(name, unification) {
		return event.addJson(`oei:replacements/${name}.json`, unification)
	}
})