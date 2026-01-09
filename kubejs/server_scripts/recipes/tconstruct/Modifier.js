ServerEvents.recipes((event) => {

    /** 
        * 
        * @param {String} modifier
        * @param {Set} inputs
        * @param {String} targetTag 
        * @returns
       */

    function addCustomModifierRecipe(modifier, inputs, targetTag) {
        let recipe = {
            "type": "tconstruct:modifier",
            "allow_crystal": true,
            "check_trait_level": true,
            "inputs": inputs,
            "level": 1,
            "result": modifier,
            "slots": {
                "abilities": 1
            },
            "tools": {
                "tag": targetTag
            }
        }
        return event.custom(recipe)
    }

    addCustomModifierRecipe("nebula_tinker:acupoint", [
        { "item": "cmi:blackstone_source_alpha" },
        { "item": "cmi:blackstone_source_beta" },
        { "item": "cmi:blackstone_source_gamma" },
        { "tag": "forge:gems/charged_amethyst" },
        { "tag": "forge:gems/charged_amethyst" }
    ],
        "tconstruct:modifiable/durability"
    ).id("nebula_tinker:tconstruct/modifier/ability/acupoint")

    addCustomModifierRecipe("nebula_tinker:frenzy", [
        { "tag": "forge:dusts/quartz" },
        { "tag": "create:mechanisms/cobalt" },
        { "tag": "forge:dusts/quartz" },
        { "tag": "forge:gems/charged_amethyst" },
        { "tag": "forge:gems/charged_amethyst" }
    ],
        "tconstruct:modifiable/durability"
    ).id("nebula_tinker:tconstruct/modifier/ability/frenzy")

    addCustomModifierRecipe("nebula_tinker:causal_truncation", [
        { "tag": "forge:plates/uranium" },
        { "tag": "create:mechanisms/nether" },
        { "tag": "forge:plates/uranium" },
        { "tag": "forge:slimeball/blood" },
        { "tag": "forge:slimeball/blood" }
    ],
        "tconstruct:modifiable/melee/primary"
    ).id("nebula_tinker:tconstruct/modifier/ability/causal_truncation")
})