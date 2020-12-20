const recursion = require('./recursion')
const {LinkedListNode, createLinkedListFromArray, printLinkedList} = require('./LinkedListNode')


const startNode = new LinkedListNode(10)

printLinkedList(startNode)

startNode.nextLinkedListNode = new LinkedListNode(30)

startNode.nextLinkedListNode.nextLinkedListNode = new LinkedListNode(80)

printLinkedList(startNode)

printLinkedList(createLinkedListFromArray([10, 20, 30]))