ServerEvents.recipes((event) => {
	event.custom({
		"type": "buildcraftsilicon:assembly",
		"output": {
			"item": "ue_addons:programmed_flash_drive"
		},
		"requiredMicroJoules": 500000000,
		"requiredStacks": [
			{
				"count": 1,
				"ingredient": {
					"item": "ue_addons:empty_flash_drive"
				}
			}
		],
		"subType": "BASIC"
	})
})