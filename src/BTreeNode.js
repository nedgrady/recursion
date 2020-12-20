class BTreeNode {
    /** @type {BTreeNode} */
    left
    /** @type {BTreeNode} */
    right
    /** @type {number} */
    value

    constructor(value) {
        this.value = value
    }

    isLeafNode() {
        return this.left === undefined && this.right === undefined
    }
}

module.exports = {
    BTreeNode
}
