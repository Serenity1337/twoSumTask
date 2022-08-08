const twoSum = require('./TwoSum')

test('test with negative numbers', () => {
  expect(twoSum([-1, -5, 8, 9, 10], 7)).toEqual([0, 2])
  expect(twoSum([-1, -5, 8, 9, 10], -6)).toEqual([0, 1])
})

test('test with positive numbers', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
  expect(twoSum([2, 7, 9, 20, 15], 29)).toEqual([2, 3])
})

test('test with no available sum', () => {
  expect(twoSum([5, 4, 8, 9, 10], 20)).toEqual([])
  expect(twoSum([5, 4, 8, 9, 10], 16)).toEqual([])
})

test('test what happens if we pass wrong parameters', () => {
  expect(twoSum(['', []])).toEqual(undefined)
  expect(twoSum(['9', '123', 1], 10)).toEqual([0, 2])
})
