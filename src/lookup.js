export default function lookup(dataObj, keyName) {
    if (keyName == '.') return dataObj
    if (!/\s/.test(keyName)) return keyName.split(".").reduce((pre, item) => pre[item], dataObj)
    return ""
}