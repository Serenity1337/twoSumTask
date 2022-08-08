const twoSum = (numbers, target) => {
  if (!isNaN(target) && Array.isArray(numbers)) {
    const memo = {}
    for (let index = 0; index < numbers.length; index++) {
      let element = Number(numbers[index])
      if (memo[target - element] !== undefined) {
        return [memo[target - element], index]
      } else {
        memo[element] = index
      }
    }
    return []
  }
}
console.log(twoSum(['1', '123', 9], 10))
module.exports = twoSum
