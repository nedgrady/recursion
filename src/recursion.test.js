import {LinkedListNode, printLinkedList, createLinkedListFromArray} from './LinkedListNode'
import { BTreeNode } from './BTreeNode'
import
{
    thisIsARecursiveFunction,
    sumOfNumbersUpTo,
    factorial,
    fibonacci,
    findFirstNonArray,
    sumLinkedList,
    numberIsInBinaryTree
} from './recursion'



test.skip('My recursive function terminates after being called twice', () => {
    thisIsARecursiveFunction()
})

describe.skip('Recursively summing the numbers up to', () => {
    // ex 1
    // ${0} | ${0}
    test.each`
    input   | expectedResult
    ${1}    | ${1}
    ${2}    | ${3}
    ${3}    | ${6}
    ${10}   | ${55}
    `('$input returns $expectedResult', ({ input, expectedResult }) => {
        expect(sumOfNumbersUpTo(input)).toBe(expectedResult)
    })
})

describe.skip('Recursively calculating fibonacci', () => {
    test.each`
    input   | expectedResult
    ${1}    | ${1}
    ${2}    | ${1}
    ${3}    | ${2}
    ${4}    | ${3}
    ${5}    | ${5}
    ${6}    | ${8}
    ${35}   | ${9227465}
    `('($input) returns $expectedResult', ({ input, expectedResult }) => {
        expect(fibonacci(input)).toBe(expectedResult)
    })
})

describe.skip('Recursively calculating factorial', () => {
    test.each`
    input   | expectedResult
    ${1}    | ${1}
    ${2}    | ${2}
    ${3}    | ${6}
    ${4}    | ${24}
    ${5}    | ${120}
    ${15}   | ${1307674368000}
    
    `('($input) returns $expectedResult', ({ input, expectedResult }) => {
        expect(factorial(input)).toBe(expectedResult)
    })
})

describe.skip('Recursively finding the first thing in many arrays', () => {
    test.each`
    input   | expectedResult
    ${1}    | ${1}
    ${[2]}  | ${2}
    ${[["test"]]} | ${"test"}
    ${[[[3]]]}    | ${3}
    ${[[[[[[[[[[10]]]]]]]]]]}   | ${10}
    `('($input) returns $expectedResult', ({ input, expectedResult }) => {
        expect(findFirstNonArray(input)).toBe(expectedResult)
    })
})


describe.skip('Linked Lists', () => {
    const oneItem = new LinkedListNode(10)

    const twoItems = new LinkedListNode(20)

    twoItems.nextLinkedListNode = new LinkedListNode(30)

    const tenItems = createLinkedListFromArray([30, 60, 88, 2, -9, 23, 78, 11, 0, 9])

    test.each`
    input   | expectedResult
    ${oneItem}  | ${10}
    ${twoItems} | ${50}
    ${tenItems} | ${292}
    `('($input) returns $expectedResult', ({ input, expectedResult }) => {
        expect(sumLinkedList(input)).toBe(expectedResult)
    })
})

describe.only('Binary Tree', () => {
    const rootNode = new BTreeNode(10)

    rootNode.left = new BTreeNode(11)
    rootNode.right = new BTreeNode(12)

    rootNode.left.left = new BTreeNode(13)
    rootNode.left.right = new BTreeNode(14)
    rootNode.right.left = new BTreeNode(55)
    rootNode.right.right = new BTreeNode(88)

    test('10 should be in the tree', () => {
        expect(numberIsInBinaryTree(rootNode, 10)).toBe(true)
    })

    test('13 should be in the tree', () => {
        expect(numberIsInBinaryTree(rootNode, 13)).toBe(true)
    })

    test('88 should be in the tree', () => {
        expect(numberIsInBinaryTree(rootNode, 13)).toBe(true)
    })

    test('100 should not be in the tree', () => {
        expect(numberIsInBinaryTree(rootNode, 100)).toBe(false)
    })
})