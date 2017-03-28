const numbers = [4, 8, 12, 15, 16, 23, 42]

console.log(numbers)

for (let i = 0; i < numbers.length; i++) {
  console.log(i, numbers[i])
}

numbers.forEach((n) => {
  console.log(n, n * n)
})

const squares = numbers.map((n) => {
  return n * n
})

console.log('map', squares)

const odds = numbers.filter((n) => {
  return n % 2 === 1
})

console.log('filter', odds)

const firstOdd = numbers.find((n) => {
  return n % 2 === 1
})

console.log('find', firstOdd)

const sum = numbers.reduce((t, n) => {
  return t + n
})

console.log('reduce', sum)

// t  |  n
// -------
// 4  |  8
// 12 | 12
// 24 | 15
// 39 | 16
// 55 | 23
// 78 | 42
// -------
// 120
