export default class Scanner {
    constructor(tplStr) {
        this.tplStr = tplStr
        this.pos = 0
        this.tail = tplStr
    }

    scan(tag) {
        if (this.tail.indexOf(tag) == 0) {
            this.pos += 2
            this.tail = this.tplStr.substring(this.pos)
        }
    }

    scanUtls(tag) {
        const _pos = this.pos
        while (this.tail.indexOf(tag) != 0 && this.eos()) {
            this.pos += 1
            this.tail = this.tplStr.substring(this.pos)
        }
        return this.tplStr.substring(_pos, this.pos)
    }

    eos() {
        return this.pos < this.tplStr.length
    }

}