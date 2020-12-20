import { LinkedListNode } from './LinkedListNode'
import { BTreeNode } from './BTreeNode'

// 0) Discuss recursion a bit

function thisIsARecursiveFunction(functionHasAlreadyBeenCalled) {
    console.log("Starting thisIsARecursiveFunction")
    thisIsARecursiveFunction(true);
}

// ex 0 (for ned!) implement sumOfNumbersUpTo
function sumOfNumbersUpTo(number) {
    // ex 1, how to handle 0 => 0?
}

/*
    1  => 1
    2  => 2
    3  => 6
    4  => 24
    5  => 120
    6  => 720
    10 => 3628800
*/
function factorial(number) {
    // ex 2 - complete
}

/*
    1  => 1
    2  => 1
    3  => 2
    4  => 3
    5  => 5
    6  => 8
    40 => 102334155
*/
function fibonacci(number) {
    // ex 3 - complete
}

/*
1 => 1
[2] => 2
[["test"]] => "test"
[[[3]]] => 3
[[[[[[[[[[10]]]]]]]]]] => 10
n.b. there will only ever be one 
*/
/**
 * 
 * @param {Array} arrayOfVaryingDimensions 
 */
function findFirstNonArray(arrayOfVaryingDimensions) {
    // ex 4 - Complete
}

/**
 * 
 * @param {LinkedListNode} linkedListNode 
 */
function sumLinkedList(linkedListNode) {
    // ex 5 - Complete
}

/**
 * 
 * @param {BTreeNode} bTreeNode
 * @param {number} number
 */
function numberIsInBinaryTree(bTreeNode, number) {
    if(bTreeNode.isLeafNode() && number !== bTreeNode.value)
        return false

    if(bTreeNode.value === number)
        return true

    return numberIsInBinaryTree(bTreeNode.left, number) || numberIsInBinaryTree(bTreeNode.right, number)
}


module.exports = {
    thisIsARecursiveFunction,
    sumOfNumbersUpTo,
    factorial,
    fibonacci,
    findFirstNonArray,
    sumLinkedList,
    numberIsInBinaryTree
}