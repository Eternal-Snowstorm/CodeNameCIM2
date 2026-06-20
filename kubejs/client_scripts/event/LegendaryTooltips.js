ClientEvents.highPriorityAssets((event) => {
	event.add(loadLTooltip("frame_definitions.json"), {
		"definitions": [
			{
				"image": "cmi:textures/gui/tooltip/tooltip_borders.png",
				"index": 0,
				"startColor": 0xFF00FF,
				"endColor": "red",
				"bgColor": "#222233",
				"bgStartColor": "#222233",
				"bgEndColor": "#222233",
				// "priority": 0,
				"selectors": [
					"stick",
					"oak_planks"
				]
			}
		]
	})
})

/**
 * 
 * @param {string} path 
 */
function loadLTooltip(path) {
	return ResourceLocation.fromNamespaceAndPath("legendarytooltips", path)
}