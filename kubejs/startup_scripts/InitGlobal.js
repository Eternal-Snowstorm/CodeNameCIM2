// priority: 100

let metals = {
	iron: {
		t: 1535,
		n: "v",
		b: "thermal:redstone"
	},
	gold: {
		t: 1064,
		n: "v",
		b: "tconstruct:molten_quartz"
	},
	copper: {
		t: 1085,
		n: "v"
	}
}

Object.entries(metals).forEach(([id, m]) => {
	let entry = CmiMetalRegistry.getMetal(id)

	if (m.t) {
		entry.meltingPoint(m.t)
	}
	if (m.n) {
		entry.namespace(m.n)
	}
	if (m.b) {
		entry.byProduct(m.b)
	}
})