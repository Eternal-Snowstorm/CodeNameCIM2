ServerEvents.recipes((event) => {

	event.recipes.stonecutting('immersiveengineering:sheetmetal_iron' ,
		"#forge:plates/iron"
	),
    	event.recipes.stonecutting( "#forge:plates/iron",
		'immersiveengineering:sheetmetal_iron'
	)
})