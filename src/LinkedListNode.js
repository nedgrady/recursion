class LinkedListNode {
    nextLinkedListNode
    value

    constructor(value) {
        this.value = value
    }
}

/**
 * 
 * @param {Array} array 
 */
function createLinkedListFromArray(array) {
    const linkedListNodes = []

    array.forEach((value) => linkedListNodes.push(new LinkedListNode(value)))

    for(let i = 0; i < linkedListNodes.length; i++) {
        linkedListNodes[i].nextLinkedListNode = linkedListNodes[i+1]
    }

    return linkedListNodes[0]
}

function printLinkedList(linkedListNode) {
    let str = ""
    do
    {
        str += `(${linkedListNode.value}) -->`
        linkedListNode = linkedListNode.nextLinkedListNode
    } while(linkedListNode)
    console.log(str)
}

module.exports = {LinkedListNode,  printLinkedList, createLinkedListFromArray}