/**
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else
 * construct available in Javascript.
 */

const max = (a, b) => {
  return Math.max(a, b) || Number(a) || Number(b)
}

// const max = (a, b) => {
//   if (a > b) {
//     return a
//   }
//   return b
// }

// const max = (a, b) => {
//   return a > b ? a : b
// }

/**
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

const maxOfThree = (a, b, c) => {
  return max(max(a, b), max(b, c))
}

/*
 * Define a function sum() that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

const sum = (a, b) => a + b

/*
 * Define a function sumOfArray that calculates the sum of
 * all the numbers in an array.
 */

// const sumOfArray = (numbers) => {
//   let sum = 0
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
//   }
//   return sum
// }

const sumOfArray = (numbers) => {
  return numbers.reduce((sum, n) => sum + n, 0)
}

/**
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

const isVowel = c => 'aeiouAEIOU'.includes(c)

 /**
  * Write a function rovarspraket() that will translate
  * a text into a "rövarspråket". That is, double every
  * consonant and place an occurrence of "o" in between.
  *
  * For example, rovarspraket("this is fun") should
  * return the string "tothohisos isos fofunon".
  */

const isConsonant = c => 'bcdfghjklmnpqrstvwxyz'.includes(c.toLowerCase())

const rovarspraket = (text) => {
  text = text.toString()
  let output = ''
  for (let i = 0; i < text.length; i++) {
    let character = text[i]
    if (isConsonant(character)) {
      output += character + 'o' + character
    } else {
      output += character
    }
  }
  console.log(text, output)
  return output
}

/**
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

// const reverse = (word) => {
//   return word.split('').reverse().join('')
// }

const reverse = (word) => {
  let reversed = ''
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i]
  }
  return reversed
}

 /**
  * Write a function findLongestWord() that takes an
  * string returns the first, longest word in the array.
  *
  * i.e. findLongestWord("book dogs") should return "book"
  */

// const findLongestWord = (text) => {
//   let words = text.split(' ')
//   let longestWord = ''
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i]
//     if (word.length > longestWord.length) {
//       longestWord = word
//     }
//   }
//   return longestWord
// }

const findLongestWord = (text) => {
  let words = text.split(' ')
  return words.sort((a, b) => b.length - a.length)[0]
}

/**
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from 'ava'

test('max()', (t) => {
  t.is(max(1, 3), 3)
  t.is(max(0, 3), 3)
  t.is(max(10, 3), 10)
  t.is(max(-1, -3), -1)
  t.is(max('aaa', 0), 0)
  t.true(isNaN(max('aaa', 'bbb')))
})

test('maxOfThree()', (t) => {
  t.is(maxOfThree(1, 3, 2), 3)
  t.is(maxOfThree(0, 3, -1), 3)
  t.is(maxOfThree(10, 3, 50), 50)
  t.is(maxOfThree(-1, -3, -10), -1)
  t.is(maxOfThree('aaa', 0, 1), 1)
  t.true(isNaN(maxOfThree('aaa', 'bbb', 'ccc')))
})

test('sum()', (t) => {
  t.is(sum(8, 11), 19)
  t.is(sum(4, 100), 104)
})

test('sumOfArray()', (t) => {
  t.is(sumOfArray([1, 2]), 3)
  t.is(sumOfArray([1, 2, 3]), 6)
  t.is(sumOfArray([10, 9, 8]), 27)
  t.is(sumOfArray([]), 0)
})

test('isVowel()', (t) => {
  t.is(isVowel(0), false)
  t.is(isVowel('B'), false)
  t.is(isVowel('b'), false)
  t.is(isVowel('a'), true)
  t.is(isVowel('E'), true)
})

test('rovarspraket()', (t) => {
  t.is(rovarspraket('a'), 'a')
  t.is(rovarspraket('b'), 'bob')
  t.is(rovarspraket('cat'), 'cocatot')
  t.is(rovarspraket('javascript'), 'jojavovasoscocroripoptot')
  t.is(rovarspraket(0), '0')
})

test('reverse()', (t) => {
  t.is(reverse('books'), 'skoob')
  t.is(reverse("we don't want no trouble"), "elbuort on tnaw t'nod ew")
})

test('findLongestWord()', (t) => {
  t.is(findLongestWord('book dogs'), 'book')
  t.is(findLongestWord('life the universe and everything'), 'everything')
})

/* eslint-enable */
