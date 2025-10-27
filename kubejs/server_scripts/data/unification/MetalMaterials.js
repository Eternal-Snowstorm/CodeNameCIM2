ServerEvents.highPriorityData((event) => {
	/**
	 * 设置命名空间优先级
	 * 越往前的命名空间优先级越高
	 */
	let namespacePriority = [
		"cmi",
		"thermal",
		"thermalconstruct",
		"thermalendergy",
		"thermal_extra",
		"create",
		"createdeco",
		"immersiveengineering",
		"mekanism",
		"vintageimprovements",
		"ae2",
		"ad_astra",
		"tconstruct"
	]
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
		global.metalGroup.forEach((material) => {
			/**
			 * 声明所需变量
			 * @param {String} tag 当前正在遍历的物品tag
			 * @param {Set} ids tag下所有物品id
			 * @param {String} currentNamespace 当前物品的命名空间
			 * @param {String} outputId 所输出的物品id
			 * @param {Number} priorityValue 当前命名空间的优先级
			 */
			let tag = `#forge:${type}s/${material}`
			let ids = Ingredient.of(tag).getItemIds()
			let currentNamespace
			let outputId
			let priorityValue

			if (ids.length > 0) {
				// 遍历获取到的tag下每个物品的命名空间
				ids.forEach((id) => {
					currentNamespace = ResourceLocation.parse(id).getNamespace()

					// 获取命名空间优先级
					for (let i = 0; i < namespacePriority.length; i++) {
						if (currentNamespace === namespacePriority[i]) {
							// 判定命名空间优先级并选择性输出优先级值最小的
							if (i <= priorityValue || priorityValue == null) {
								outputId = id
								priorityValue = i
							}
						}
					}
				})

				// 利用输出的物品id完成匹配tag的物品统一
				addJsonFile(`${material}_${type}`, addUnification(
					tag,
					outputId
				))

				// 输出完成统一的信息
				console.debug(`oei:replacements/${material}_${type}.json is generated!`)
			}
		})
	})

	// 粗矿
	global.metalGroup.forEach((material) => {
		/**
		 * 声明所需变量
		 * @param {String} tag 当前正在遍历的物品tag
		 * @param {Set} ids tag下所有物品id
		 * @param {String} currentNamespace 当前物品的命名空间
		 * @param {String} outputId 所输出的物品id
		 * @param {Number} priorityValue 当前命名空间的优先级
		 */
		let tag = `#forge:raw_materials/${material}`
		let ids = Ingredient.of(tag).getItemIds()
		let currentNamespace
		let outputId
		let priorityValue

		if (ids.length > 0) {
			// 遍历获取到的tag下每个物品的命名空间
			ids.forEach((id) => {
				currentNamespace = ResourceLocation.parse(id).getNamespace()

				// 获取命名空间优先级
				for (let i = 0; i < namespacePriority.length; i++) {
					if (currentNamespace === namespacePriority[i]) {

						// 判定命名空间优先级并选择性输出优先级值最小的
						if (i <= priorityValue || priorityValue == null) {
							outputId = id
							priorityValue = i
						}
					}
				}
			})

			// 利用输出的物品id完成匹配tag的物品统一
			addJsonFile(`raw_${material}`, addUnification(
				tag,
				outputId
			))

			// 输出完成统一的信息
			console.debug(`oei:replacements/raw_${material}.json is generated!`)
		}
	})

	// 粗矿块
	global.metalGroup.forEach((material) => {
		/**
		 * 声明所需变量
		 * @param {String} tag 当前正在遍历的物品tag
		 * @param {Set} ids tag下所有物品id
		 * @param {String} currentNamespace 当前物品的命名空间
		 * @param {String} outputId 所输出的物品id
		 * @param {Number} priorityValue 当前命名空间的优先级
		 */
		let tag = `#forge:storage_blocks/raw_${material}`
		let ids = Ingredient.of(tag).getItemIds()
		let currentNamespace
		let outputId
		let priorityValue

		if (ids.length > 0) {
			// 遍历获取到的tag下每个物品的命名空间
			ids.forEach((id) => {
				currentNamespace = ResourceLocation.parse(id).getNamespace()

				// 获取命名空间优先级
				for (let i = 0; i < namespacePriority.length; i++) {
					if (currentNamespace === namespacePriority[i]) {
						// 判定命名空间优先级并选择性输出优先级值最小的
						if (i <= priorityValue || priorityValue == null) {
							outputId = id
							priorityValue = i
						}
					}
				}
			})

			// 利用输出的物品id完成匹配tag的物品统一
			addJsonFile(`raw_${material}_block`, addUnification(
				tag,
				ids[0]
			))

			// 输出完成统一的信息
			console.debug(`oei:replacements/raw_${material}_block.json is generated!`)
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
			resultItems: IngredientUtils.getFirstItemId(item)
		}
	}

	function addJsonFile(name, unification) {
		return event.addJson(`oei:replacements/${name}.json`, unification)
	}
})