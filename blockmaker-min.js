function block(t,e){let a={};for(a.arguments={},a.opcode=t.split(":")[0],a.opcode.match(/\[(.*?)\]/)?(a.opcode=a.opcode.match(/\[(.*?)\]/)[1],a.blockType="command"):a.opcode.match(/\((.*?)\)/)?(a.opcode=a.opcode.match(/\((.*?)\)/)[1],a.blockType="reporter"):a.opcode.match(/\<(.*?)\>/)&&(a.opcode=a.opcode.match(/\<(.*?)\>/)[1],a.blockType="Boolean"),a.text=t.replace(t.split(":")[0]+":","");a.text.includes("[");){switch(a.text.match(/\[(.*?)\]/)[1].split(";").lenght){case 1:a.arguments[a.text.match(/\[(.*?)\]/)[1]]={type:"string"};break;case 2:a.arguments[a.text.match(/\[(.*?)\]/)[1].split(";")[0]]={type:"string",defaultValue:a.text.match(/\[(.*?)\]/)[1].split(";")[1]},a.text=a.text.replace(a.text.match(/\[(.*?)\]/)[1],a.text.match(/\[(.*?)\]/)[1].split(";")[0]);break;default:a.arguments[a.text.match(/\[(.*?)\]/)[1].split(";")[0]]={type:"string",menu:a.text.match(/\[(.*?)\]/)[1].split(";")[1],defaultValue:a.text.match(/\[(.*?)\]/)[1].split(";")[2]},a.text=a.text.replace(a.text.match(/\[(.*?)\]/)[1],a.text.match(/\[(.*?)\]/)[1].split(";")[0])}a.text=a.text.replace("[","{")}for(;a.text.includes("(");){switch(a.text.match(/\((.*?)\)/)[1].split(";").length){case 1:a.arguments[a.text.match(/\((.*?)\)/)[1]]={type:"number",defaultValue:0};break;case 2:a.arguments[a.text.match(/\((.*?)\)/)[1].split(";")[0]]={type:"number",defaultValue:Number(a.text.match(/\((.*?)\)/)[1].split(";")[1])},a.text=a.text.replace(a.text.match(/\((.*?)\)/)[1],a.text.match(/\((.*?)\)/)[1].split(";")[0]);break;default:a.arguments[a.text.match(/\((.*?)\)/)[1].split(";")[0]]={type:"number",menu:a.text.match(/\((.*?)\)/)[1].split(";")[1],defaultValue:Number(a.text.match(/\((.*?)\)/)[1].split(";")[2])},a.text=a.text.replace(a.text.match(/\((.*?)\)/)[1],a.text.match(/\((.*?)\)/)[1].split(";")[0])}a.text=a.text.replace("(","{")}for(;a.text.includes("<");){switch(a.text.match(/\<(.*?)\>/)[1].split(";").lenght){case 1:a.arguments[a.text.match(/\<(.*?)\>/)[1]]={type:"Boolean",defaultValue:!1};break;case 2:a.arguments[a.text.match(/\<(.*?)\>/)[1].split(";")[0]]={type:"Boolean",defaultValue:Boolean(a.text.match(/\<(.*?)\>/)[1].split(";")[1])},a.text=a.text.replace(a.text.match(/\<(.*?)\>/)[1],a.text.match(/\<(.*?)\>/)[1].split(";")[0]);break;default:a.arguments[a.text.match(/\<(.*?)\>/)[1].split(";")[0]]={type:"Boolean",menu:a.text.match(/\<(.*?)\>/)[1].split(";")[1],defaultValue:Boolean(a.text.match(/\<(.*?)\>/)[1].split(";")[2])},a.text=a.text.replace(a.text.match(/\<(.*?)\>/)[1],a.text.match(/\<(.*?)\>/)[1].split(";")[0])}a.text=a.text.replace("<","{")}return a.text=a.text.replaceAll("{","["),a.text=a.text.replaceAll(")","]"),a.text=a.text.replaceAll(">","]"),"object"==typeof e?Object.assign(a,e):a}
