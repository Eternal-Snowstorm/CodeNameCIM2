// priority: 0
let $PatchouliAPI = Java.loadClass("vazkii.patchouli.api.PatchouliAPI")
let $Character = Java.loadClass("java.lang.Character")
/**
 * @param {string[][]} structure
 * @type {DefineMultiBlockStructure}
 */
function defineMultiBlockStructure(structure) {
	/**
	 * @type {any[]}
	 */
	let matcher = []
	/**
	 * 
	 * @param {any[]} matcher 
	 * @param {string} pos 
	 * @param {Internal.Block | Internal.IStateMatcher} block 
	 */
	function addMater(matcher, pos, block) {
		matcher.push(pos, block)
	}
	let self = {
		where: function (pos, block) {
			addMater(matcher, new $Character(pos), Block.getBlock(block))
			return self
		},
		build: function () {
			return $PatchouliAPI.get().makeMultiblock(structure, matcher)
		}
	}
	return self
}