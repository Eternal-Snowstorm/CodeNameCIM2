//写在前面，这里存放我提前写好的不规范代码，这个文件不用删掉，哪行规范化之后删对应代码，部分被注释掉的可以帮我修一下qwq
ServerEvents.recipes(event=>{
    event.custom(
        {
  "type": "create:crushing",
  "ingredients": [
    {
      "item": "minecraft:netherrack"
    }
  ],
  "processingTime": 50,
  "results": [
    {
      "item": "minecraft:netherrack"
    },
    {
      "chance": 0.2,
      "item": "create:cinder_flour"
    }
  ]
}
    )

    
})