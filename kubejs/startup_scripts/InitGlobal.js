// priority: 100

/*
 * v代表该材料是由TCon本体添加的
 * t代表该材料是由热力工匠添加的
 * c代表该材料是由制作组自定义的
 * n代表无此材料
 */
let metals = {
	abyssal: {
		t: 1953,
		n: "t"
	},
	aluminum: {
		t: 660,
		n: "v"
	},
	amethyst_bronze: {
		t: 1043,
		n: "v"
	},
	andesite_alloy: {
		t: 760,
		n: "c"
	},
	ardite: {
		t: 1868,
		n: "c"
	},
	azure_neodymium: {
		t: 1024,
		n: "c"
	},
	brass: {
		t: 930,
		n: "v"
	},
	bronze: {
		t: 820,
		n: "v"
	},
	calorite: {
		t: 4003,
		n: "c"
	},
	cast_iron: {
		t: 1200,
		n: "c"
	},
	chromium: {
		t: 1907
	},
	cinderslime: {
		t: 1288,
		n: "v"
	},
	cobalt: {
		t: 1495,
		n: "v"
	},
	constantan: {
		t: 1200,
		n: "v"
	},
	copper: {
		t: 1085,
		n: "v"
	},
	desh: {
		t: 3094,
		n: "c"
	},
	dragonsteel: {
		t: 2115,
		n: "t"
	},
	electrum: {
		t: 1060,
		n: "v"
	},
	enderium: {
		t: 1501,
		n: "t"
	},
	etrium: {
		t: 1486
	},
	gold: {
		t: 1064,
		n: "v"
	},
	hepatizon: {
		t: 990,
		n: "v"
	},
	industrial_iron: {
		t: 1507,
		n: "c"
	},
	invar: {
		t: 1425,
		n: "v"
	},
	iron: {
		t: 1535,
		n: "v"
	},
	lead: {
		t: 327,
		n: "v"
	},
	lumium: {
		t: 993,
		n: "t"
	},
	manyullyn: {
		t: 1617,
		n: "v"
	},
	melodium: {
		t: 1755,
		n: "t"
	},
	netherite: {
		t: 2042,
		n: "v"
	},
	nickel: {
		t: 1455,
		n: "v"
	},
	osmium: {
		t: 3033,
		n: "v"
	},
	ostrum: {
		t: 3687,
		n: "c"
	},
	pig_iron: {
		t: 1145,
		n: "v"
	},
	platinum: {
		t: 1768
	},
	prismalium: {
		t: 1741,
		n: "t"
	},
	quantum_alloy: {
		t: 1024
	},
	queens_slime: {
		t: 1193,
		n: "v"
	},
	rose_gold: {
		t: 960,
		n: "v"
	},
	refined_glowstone: {
		t: 943,
		n: "v"
	},
	refined_obsidian: {
		t: 1413,
		n: "v"
	},
	refined_radiance: {
		t: 2106,
		n: "c"
	},
	sodium: {
		t: 98,
		n: "c"
	},
	scarlet_neodymium: {
		t: 1024,
		n: "c"
	},
	shadow_steel: {
		t: 2106,
		n: "c"
	},
	shellite: {
		t: 1562,
		n: "t"
	},
	signalum: {
		t: 1231,
		n: "t"
	},
	siltsteel: {
		t: 1386
	},
	silver: {
		t: 962,
		n: "v"
	},
	slimesteel: {
		t: 1098,
		n: "v"
	},
	stainless_steel: {
		t: 1510,
		n: "c"
	},
	steel: {
		t: 1370,
		n: "v"
	},
	stellarium: {
		t: 1873,
		n: "t"
	},
	soul_infused: {
		t: 1901,
		n: "t"
	},
	tin: {
		t: 232,
		n: "v"
	},
	titanium: {
		t: 1668,
		n: "c"
	},
	tungsten: {
		t: 3410,
		n: "v"
	},
	tungsten_steel: {
		t: 2524
	},
	twinite: {
		t: 1671,
		n: "t"
	},
	uranium: {
		t: 1132,
		n: "v"
	},
	vanadium: {
		t: 1910,
		n: "c"
	},
	zinc: {
		t: 419,
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
})