/**
 * @param {string} input 
 * @param {object} options 
 * @returns {object}
 */
function block(input, options) {
    let block = {};
    block.arguments = {};
    block.opcode = input.split(":")[0];
    if (block.opcode.match(/\[(.*?)\]/)) {
        block.opcode = block.opcode.match(/\[(.*?)\]/)[1];
        block.blockType = "command";
    } else if (block.opcode.match(/\((.*?)\)/)) {
        block.opcode = block.opcode.match(/\((.*?)\)/)[1];
        block.blockType = "reporter";
    } else if (block.opcode.match(/\<(.*?)\>/)) {
        block.opcode = block.opcode.match(/\<(.*?)\>/)[1];
        block.blockType = "Boolean";
    }
    block.text = input.replace(input.split(":")[0] + ":", "");
    while (block.text.includes("[")) {
        block.arguments[block.text.match(/\[(.*?)\]/)[1].split(";")[0]] = {
            type: "string",
            menu: block.text.match(/\[(.*?)\]/)[1].split(";")[1],
            defaultValue: block.text.match(/\[(.*?)\]/)[1].split(";")[2]
        };
        block.text = block.text.replace(block.text.match(/\[(.*?)\]/)[1], block.text.match(/\[(.*?)\]/)[1].split(";")[0]);
        block.text = block.text.replace("[", "{");
    }
    while (block.text.includes("(")) {
        block.arguments[block.text.match(/\((.*?)\)/)[1].split(";")[0]] = {
            type: "number",
            menu: block.text.match(/\((.*?)\)/)[1].split(";")[1],
            defaultValue: Number(block.text.match(/\((.*?)\)/)[1].split(";")[2])
        };
        block.text = block.text.replace(block.text.match(/\((.*?)\)/)[1], block.text.match(/\((.*?)\)/)[1].split(";")[0]);
        block.text = block.text.replace("(", "{");
    }
    while (block.text.includes("<")) {
        block.arguments[block.text.match(/\<(.*?)\>/)[1].split(";")[0]] = {
            type: "Boolean",
            menu: block.text.match(/\<(.*?)\>/)[1].split(";")[1],
            defaultValue: Boolean(block.text.match(/\<(.*?)\>/)[1].split(";")[2])
        };
        block.text = block.text.replace(block.text.match(/\<(.*?)\>/)[1], block.text.match(/\<(.*?)\>/)[1].split(";")[0]);
        block.text = block.text.replace("<", "{");
    }
    block.text = block.text.replaceAll("{", "[");
    block.text = block.text.replaceAll(")", "]");
    block.text = block.text.replaceAll(">", "]");

    return typeof options == "object" ? Object.assign(block, options) : block;
}
