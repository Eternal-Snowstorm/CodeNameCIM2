/**
 * 
 * @param modid 
 * @param name 
 */
function modifyDisplayName(modid: Special.Mod, name: string) {
	Platform.getInfo(modid).setName(name)
}

modifyDisplayName("moreburners", "Create: More Burners")
modifyDisplayName("edenring", "Ring of Eden")