StartupEvents.modifyCreativeTab("kubejs:tab", (event) => {
	// 修改CMI创造模式物品栏
	event.setIcon("ue_addons:creative_mechanism")
	event.setDisplayName(Component.translate(`itemGroup.${global.namespace}.all`))
})