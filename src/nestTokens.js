export default function(tokens) {

    var nestedTokens = []

    var sections = [] // 定义收集器

    var collector = nestedTokens

    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i]
        switch (token[0]) {
            case "#":
                collector.push(token)
                sections.push(token)
                collector = token[2] = []
                break
            case "/":
                sections.pop()
                collector = sections.length > 0 ? sections[sections.length - 1][2] : nestedTokens
                break
            default:
                collector.push(token)
        }
    }

    return nestedTokens
}