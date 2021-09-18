import parseTemplateToTokens from "./parseTemplateToTokens";
import renderTemplate from "./renderTemplate";

var templateStr = document.getElementById("tpl").innerHTML

class Mustache {
    constructor() {}
    static render(tplStr, data) {
        var tokens = parseTemplateToTokens(tplStr)
        console.log(tokens); // 生成的tokens
        var domStr = renderTemplate(tokens, data)
        // console.log(domStr); 编译后的 DOM 字符串

        return domStr
    }
}
window.Mustache = Mustache


var data = {
    text: "哈哈哈哈",
    students: [
        { "name": "小明", "hobbies": ["游泳", "健身"] },
        { "name": "小红", "hobbies": ["游泳", "篮球", "羽毛球"] },
        { "name": "小强", "hobbies": ["吃饭", "睡觉"] },
    ]
}


const { render } = Mustache

document.getElementById("app").innerHTML = render(templateStr, data)