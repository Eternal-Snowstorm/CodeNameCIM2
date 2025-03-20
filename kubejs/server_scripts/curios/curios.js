PlayerEvents.tick(event =>{
  if(event.player.age % 60 != 0) return
  let Curios = String(event.player.nbt["ForgeCaps"]["curios:inventory"]["Curios"])
  if(Curios.includes('ue_addons:photosensitive_mechanism') && !Curios.includes('display')){
    event.player.potionEffects.add('night_vision',30 * 20,0)
  }
  if(Curios.includes('ue_addons:cobalt_mechanism') && !Curios.includes('display')){
    event.player.potionEffects.add("haste",10 * 20,1)
    event.player.potionEffects.add("minecraft:speed",10 * 20,1)
  }
})

