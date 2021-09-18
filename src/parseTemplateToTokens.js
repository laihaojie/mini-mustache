import nestTokens from "./nestTokens";
import Scanner from "./Scanner";

export default function(tplStr) {
    const scanner = new Scanner(tplStr)
    var tokens = [];
    var work;
    while (scanner.eos()) {
        work = scanner.scanUtls("{{")
        if (work != "") {
            tokens.push(["text", work.trim()])
        }
        scanner.scan("{{")

        work = scanner.scanUtls("}}")
        if (work != "") {
            if (work[0] == "#") {
                tokens.push(["#", work.substring(1)])
            } else if (work[0] == "/") {
                tokens.push(["/", work.substring(1)])
            } else {
                tokens.push(["name", work.trim()])
            }
        }
        scanner.scan("}}")
    }
    return nestTokens(tokens)
}