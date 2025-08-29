type HeatedLevel = "heated" | "superheated" | "grilled";

declare namespace Internal {
	interface ProcessingRecipeSchema$ProcessingRecipeJS {
		heatRequirement(heatRequirement: HeatedLevel | string): this
	}
}