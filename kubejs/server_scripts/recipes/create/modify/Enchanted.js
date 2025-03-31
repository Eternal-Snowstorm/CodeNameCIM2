ServerEvents.recipes((event) =>{
  let { kubejs,create } = event.recipes
  let mech = "ue_addons:enchanted_mechanism"
  //打印机
  kubejs.shaped("create_enchantment_industry:printer",[
    " C ",
    "BAB",
    " D "
  ],{
    A:mech,
    B:"minecraft:dried_kelp",
    C:"create:copper_casing",
    D:"minecraft:iron_block"
  }).id("create_enchantment_industry:crafting/printer")
  //附魔台
  kubejs.shaped("minecraft:enchanting_table",[
    " D ",
    "CBC",
    "BAB"
  ],{
    A:mech,
    B:"minecraft:obsidian",
    C:"minecraft:diamond",
    D:"minecraft:book"
  }).id("minecraft:enchanting_table")
  

})