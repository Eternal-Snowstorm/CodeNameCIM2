// priority: 101

function splitTag(tag) {
	let tagList = []
	let splitedTag = tag.split("/")
	tagList.push(splitedTag[0])
	for (let i = 1; i < splitedTag.length; i++) {
		tagList.push(tagList[i - 1] + "/" + splitedTag[i])
	}
	return tagList
}

function advancedAdd(tags, target) {
	function tempAddTag(tag) {
		if (tag.includes("/")) {
			let tagList = splitTag(tag)
			tagList.forEach((singleTag) => {
				this.add(singleTag, target)
			})
		} else this.add(tag, target)
	}
	let addTag = tempAddTag.bind(this)
	if (typeof tags === "string") {
		addTag(tags)
	} else {
		tags.forEach((tag) => {
			addTag(tag)
		})
	}
}