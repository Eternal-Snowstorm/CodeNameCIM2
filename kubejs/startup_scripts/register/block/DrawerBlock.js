// StartupEvents.registry("block", (event) => {
// 	let props = $BlockBehaviour.Properties.of()

// 	function addWoodedDrawerBlock(name) {
// 		let registerIds = {
// 			one: `${global.namespace}:${name}_1`,
// 			two: `${global.namespace}:${name}_2`,
// 			four: `${global.namespace}:${name}_4`,
// 		}

// 		event.createCustom(registerIds.one, () => {
// 			return new $DrawerBlock($DrawerWoodType.OAK, $FunctionalStorage$DrawerType.X_1, props)
// 		})
// 		event.createCustom(registerIds.two, () => {
// 			return new $DrawerBlock($DrawerWoodType.OAK, $FunctionalStorage$DrawerType.X_2, props)
// 		})
// 		event.createCustom(registerIds.four, () => {
// 			return new $DrawerBlock($DrawerWoodType.OAK, $FunctionalStorage$DrawerType.X_4, props)
// 		})
// 	}

// 	addWoodedDrawerBlock("stone")
// })

// StartupEvents.registry("item", (event) => {
// 	let drawerIds = [
// 		"stone_1",
// 		"stone_2",
// 		"stone_4"
// 	]
// 	drawerIds.forEach((id) => {
// 		event.createCustom(`${global.namespace}:${id}`, () => {
// 			let block = Block.getBlock(`${global.namespace}:${id}`)
// 			return new $BlockItem(block, new $Item$Properties())
// 		})
// 	})
// })