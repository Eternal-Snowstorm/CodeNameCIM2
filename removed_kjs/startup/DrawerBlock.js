// let $DrawerBlock$DrawerItem =
// 	Java.loadClass("com.buuz135.functionalstorage.block.DrawerBlock$DrawerItem")
// let $DrawerBlock =
// 	Java.loadClass("com.buuz135.functionalstorage.block.DrawerBlock")
// let $DrawerWoodType =
// 	Java.loadClass("com.buuz135.functionalstorage.util.DrawerWoodType")
// let $FunctionalStorage =
// 	Java.loadClass("com.buuz135.functionalstorage.FunctionalStorage")
// let $FunctionalStorage$DrawerType =
// 	Java.loadClass("com.buuz135.functionalstorage.FunctionalStorage$DrawerType")
// let $BlockBehaviour =
// 	Java.loadClass("net.minecraft.world.level.block.state.BlockBehaviour")
// let $BlockItem =
// 	Java.loadClass("net.minecraft.world.item.BlockItem")
// let $Item$Properties =
// 	Java.loadClass("net.minecraft.world.item.Item$Properties")
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