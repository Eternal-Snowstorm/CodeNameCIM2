ServerEvents.recipes((event) => {
	let { create } = event.recipes

	create.mixing("cmi:final_mechanism_part", [
		"cmi:basic_mechanism_part",
		"cmi:mechanical_mechanism_part",
		"cmi:engineering_mechanism_part",
		"cmi:flux_mechanism_part",
		"cmi:magical_mechanism_part",
		"cmi:quantum_mechanism_part",
		"cmi:mekanism_mechanism_part",
		"cmi:space_mechanism_part"
	]).superheated()

	create.mechanical_crafting("cmi:creative_mechanism", [
		"abcdefg",
		"hijklmn",
		"op   qr",
		"st   uv",
		"wx   yz",
		"ABCDEFG",
		"HIJZKLM"
	], {
		a: "cmi:precision_mechanism_flash_drive",
		b: "cmi:redstone_mechanism_flash_drive",
		c: "cmi:nature_mechanism_flash_drive",
		d: "cmi:wooden_mechanism_flash_drive",
		e: "cmi:stone_mechanism_flash_drive",
		f: "cmi:iron_mechanism_flash_drive",
		g: "cmi:copper_mechanism_flash_drive",
		h: "cmi:andesite_mechanism_flash_drive",
		i: "cmi:photosensitive_mechanism_flash_drive",
		j: "cmi:gold_mechanism_flash_drive",
		k: "cmi:cobalt_mechanism_flash_drive",
		l: "cmi:nether_mechanism_flash_drive",
		m: "cmi:thermal_mechanism_flash_drive",
		n: "cmi:feinforced_mechanism_flash_drive",
		o: "cmi:resonant_mechanism_flash_drive",
		p: "cmi:railway_mechanism_flash_drive",
		q: "cmi:ender_mechanism_flash_drive",
		r: "cmi:light_engineering_mechanism_flash_drive",
		s: "cmi:heavy_engineering_mechanism_flash_drive",
		t: "cmi:enchanted_mechanism_flash_drive",
		u: "cmi:smart_mechanism_flash_drive",
		v: "cmi:computing_mechanism_flash_drive",
		w: "cmi:tier_1_aviation_mechanism_flash_drive",
		x: "cmi:tier_2_aviation_mechanism_flash_drive",
		y: "cmi:tier_3_aviation_mechanism_flash_drive",
		z: "cmi:tier_4_aviation_mechanism_flash_drive",
		A: "cmi:basic_mekanism_mechanism_flash_drive",
		B: "cmi:advanced_mekanism_mechanism_flash_drive",
		C: "cmi:elite_mekanism_mechanism_flash_drive",
		D: "cmi:ultimate_mekanism_mechanism_flash_drive",
		E: "cmi:air_tight_mechanism_flash_drive",
		F: "cmi:nuclear_mechanism_flash_drive",
		G: "cmi:antimatter_mechanism_flash_drive",
		H: "cmi:coil_mechanism_flash_drive",
		I: "cmi:sculk_mechanism_flash_drive",
		J: "cmi:colorful_mechanism_flash_drive",
		K: "cmi:pigiron_mechanism_flash_drive",
		L: "cmi:potion_mechanism_flash_drive",
		M: "cmi:bronze_mechanism_flash_drive",
		Z: "cmi:final_mechanism_part"
	})
})