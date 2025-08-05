ServerEvents.recipes((event) => {
	let { kubejs, create, vintageimprovements } = event.recipes

kubejs.shaped("mm:particle_collision_machine", [
		"AEA",
		"BCD",
		"AAA"
	], {
		A: "mekanism:sps_casing",
		B: '#forge:ingots/shadow_steel',
		C: 'cmi:ultimate_mekanism_mechanism',
		D: '#forge:ingots/refined_radiance',
		E: 'cmi:computer_component'
	}).id("mm:particle_collision_machine")
  
kubejs.shaped("mm:cracker", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: "cmi:pressure_resistance_casing",
		B: 'immersiveengineering:coil_lv',
		C: 'immersiveengineering:fluid_pipe',
		D: 'cmi:light_engineering_mechanism'
	}).id("mm:cracker")
  
kubejs.shaped("mm:steam_ore_processor", [
		"ABA",
		"CDC",
		"ABA"
	], {
		A: "cmi:bronze_casing",
		B: 'create:fluid_pipe',
		C: 'cmi:bronze_mechanism',
		D: '#forge:glass'
	}).id("mm:steam_ore_processor")
  
  
kubejs.shaped("cmi:flash_disk_writer", [
		"ABA",
		"CDC",
		"AEA"
	], {
		A: "cmi:stone_plate",
		B: 'cmi:computer_component',
		C: 'cmi:plasma_ingot',
		D: 'cmi:antimatter_mechanism',
		E:'mekanism:ultimate_energy_cube'
	}).id("cmi:flash_disk_writer")
  
  
kubejs.shaped("cmi:programmed_flash_drive", [
		"A",
		"B",
		"C"
	], {
		A: '#mekanismadditions:plastic_blocks',
		C: '#forge:ingots/plasma',
		B: 'cmi:antimatter_mechanism',
	}).id("cmi:programmed_flash_drive")
  
})