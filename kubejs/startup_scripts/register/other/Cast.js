let casts = []

/**
 * 
 * @param {String} name 铸模类型
 */
function CastItem(name) {
	this.name = name
	this.types = []

	casts.push(this)
}

CastItem.prototype.gold = function () {
	this.types.push("gold")
	return this
}
CastItem.prototype.sand = function () {
	this.types.push("sand")
	this.types.push("red_sand")
	return this
}
CastItem.prototype.bronze = function () {
	this.types.push("bronze")
	return this
}

StartupEvents.registry("item", (event) => {
	casts.forEach((cast) => {
		cast.types.forEach((type) => {
			if (type === "bronze") {
				event.create(`${global.namespace}:bronze_${cast.name}_cast`)
					.texture(`${global.namespace}:item/cast/${cast.name}/bronze`)
					.tag("tconstruct:casts")
					.tag("tconstruct:casts/multi_use")
					.tag(`tconstruct:casts/multi_use/${cast.name}`)
					.tag(`thermal:crafting/casts`)
			} else if (type === "gold") {
				event.create(`${global.namespace}:${cast.name}_cast`)
					.texture(`${global.namespace}:item/cast/${cast.name}/golden`)
					.tag("tconstruct:casts")
					.tag("tconstruct:casts/gold")
					.tag("tconstruct:casts/multi_use")
					.tag(`tconstruct:casts/multi_use/${cast.name}`)
			} else if (type === "sand" || type === "red_sand") {
				event.create(`${global.namespace}:${cast.name}_${type}_cast`)
					.texture(`${global.namespace}:item/cast/${cast.name}/${type}`)
					.tag("tconstruct:casts")
					.tag(`tconstruct:casts/${type}`)
					.tag("tconstruct:casts/single_use")
					.tag(`tconstruct:casts/single_use/${cast.name}`)
			}
		})
	})
})

new CastItem("mechanism")
	.gold()
	.sand()
	.bronze()

new CastItem("nugget")
	.bronze()