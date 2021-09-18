import lookup from "./lookup";

export default function renderTemplate(tokens, data) {
    var resultStr = "";
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i]
        switch (token[0]) {
            case "text":
                resultStr += token[1]
                break

            case "name":
                resultStr += lookup(data, token[1])
                break

            case "#":
                let obj = data[token[1]]
                for (let s = 0; s < obj.length; s++) {
                    resultStr += renderTemplate(token[2], obj[s])
                }
                break
        }
    }
    return resultStr
}