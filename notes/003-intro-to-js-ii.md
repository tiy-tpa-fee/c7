theme: Fira, 2

## An Introduction to
# [fit] JavaScript
## Day 2

---

## Primitive Types

Type | Syntax
:--- | :---
`Number` | `1`, `200`, `3.14159`
`String` | `'hello there!'`, `'hello there!'`
`Boolean` | `true`, `false`
`Undefined` | `undefined`
`Null` | `null`

---

## Objects

Type | Note
:--- | :---
`Object` | Literal: `{ name: 'Alice', age: 7 }`
`Array` | `[1, 2, 3]`
`Function` | `function () {}`
`Date` |
`Math` | `Math.round(4.2)`
`Error` |
`Promise` |
`String`, `Number`, `Boolean` | wraps the primitive type
and many more... |

^ Often in programming, a need arises to represent some complex thing or idea in data. All of the types we've covered so far play important roles in doing this, but no type we've previously encountered gives us way to combine data in a way that feels natural.

---

```javascript
let dogName = 'Fluffly'
let dogAge = 8
let dogColor = 'brown'
```

^ This is cumbersome, and gets even worse if we have multiple dogs. Luckily, JavaScript has a type known as an **object**, that allows us to store nested data of any type as well as repeatable actions known as methods

---

```javascript
// create an 'object literal'
let dog = {}

// assign properties
dog.name = 'Fluffly'
dog.age = 8
dog.color = 'brown'

// and access the properties later
dog.name
```

^ Using the 'object-dot-property' notation (i.e. `dog.age`), you can _get_ the property's value, or _set_ the value of the property with `=`.

---

^ If you know the properties you'd like to set ahead of time, you can even write them directly in the **object literal**, which is a fancy term for an object created using the **curly braces** (`{}`). Observe:

```javascript
// create an 'object literal'
let dog = {
  // assign properties inside the object literal
  name: 'Fluffy',
  age: 8,
  color: 'brown'
}

// and access the properties the same as before
dog.name
```

---

^ There are a few _really_ important differences between these two ways of setting object properties. When done inside the curly braces, you don't use the object-dot-property syntax. Instead, you use 'property-colon-value-comma' syntax. This can be quite confusing at first, since flow-control sections are also wrapped in curly braces (and as you'll see, so are function bodies).

^ The second distinction is that inside an object literal, you can't write any code you feel like. See what sort of error this generates:

```javascript
// this will create quite an error!
let someExcitingCake = {
  flavor: 'chocolate lime',
  price: 20,
  console.log('wow this is going to generate an error!')
  frosting: 'vanilla'
}
```

^ Notice that the stack trace is complaining about the `console.log`. Until you learn about functions and methods, bear in mind that an object literal should only contain **properties** and their **values**.

---

## Object Properties with Square Brackets

^ There's an additional way to get and set a property of an object, and it has a bit of a special purpose. Using **square brackets** (`[]`), you can provide a property name as a string. To reprise the previous examples:

```javascript
// create an 'object literal'
let dog = {}

// assign properties
dog['name'] = 'Fluffy'
dog['age'] = 8
dog['color"] = "brown'

// and access the properties later
dog['name']
```

^ This is a little more difficult to type that the dot-property syntax, but you can do something unique with this style. If you have a variable _containing_ a string (or anything else that evaluates to a string), placing it between the brackets allows dynamic property look up.

---

```javascript
let propertyToLookUp = 'price'

let cake = {
  flavor: 'chocolate lime',
  price: 20,
  frosting: 'vanilla'
}

cake[propertyToLookUp]
```

^ JavaScript is full of 'overloaded' syntax, in which very different functionalities look almost identical to each other's syntax. Make sure to read your code carefully, as the stack trace won't often be able to tell what you meant.

---

# Arrays

^ The **array** is one of the most useful and ubiquitous data types in JavaScript. Arrays are simple lists that contain zero or more objects, and can house any data type (even more arrays!). To get an idea of array syntax, let's look first at an _empty_ array.

---

```javascript
let list = []
```

^ An empty array contains no data and is created here by the empty set of **square brackets** (`[` and `]`).

---

^ An array with more than zero values would use the same brackets and separate each value with a comma like this:

```javascript
let numbers = [1, 2, 42, 100]
```

---

^ You can mix data types together in a single array:

```javascript
// numbers and strings
[0.9, 'hi!", 56, "there!']

// even arrays of arrays
[[1,2], [3,4], [5,6]]
```

---

^ And you can check the **length** by checking the `length` property. Try running these examples:

```javascript
// Adding `.length` to the end of array
[99, 100, 101].length

// Adding `.length` on to a variable that contains
// an array works, too. Cool!
let letters = ['a', 'b', 'c']

letters.length
```

---

### Arrays Are Lists

^ Imagine that you are working on a program and need to store a list of names. We have been given a spreadsheet of names for our program to use. Without using arrays, we could store each item of data individually in our program using a series of variables.

---

```javascript
// Without an array, each name might have a unique variable
let a = 'Alejandra'
let b = 'Jesse'
let c = 'Jessica'
let d = 'Tamar'
```

---

^ Assigning each name to a different variable does what we need it to, but it's cumbersome to work with. variables need unique names or they will overwrite one another, so every string that we want to store will need its own unique variable.

^ What if we need to store thousands of names in our program and then do something with all of them, one by one? To access each string we'd need to know the variables that hold every single one of them. If we want the string `'Alejandra"`, we'd have to know about the variable `a`. For `"Jessica'`, we'd have to know it's in `c`. If we wanted to store hundreds of strings, we'd need hundreds of unique variables.

^ Arrays provide a better way to work with lists. Since arrays *hold lists of data*, all of the names from the above example can be stored in one variable instead of many:

```javascript
// Each value in an array is separated by a comma
let names = ['Alejandra', 'Jesse', 'Jessica', 'Tamar']
```

---

^ In the previous examples, we've looked at arrays that hold only five or six items, but in many programs, arrays might contain hundreds or thousands of items. For now, we'll keep things simple, so you won't be faced with complex data structures. We are just going to scratch the surface of what arrays can do.

---

### Accessing the Data Stored in an Array

^ Storing data in arrays is straightforward, but getting data from them can be a little confusing at first. See if you can understand what happens when you run this example:

```javascript
let students = ['Alejandra', 'Jesse', 'Jessica', 'Tamar']
students[3]
students[2]
students[0]
```

---

^ If the output was confusing, don't worry. Arrays are **zero-indexed**, which means each position in the array has a number, starting with zero on the far left and counting up from there. Part of what makes this confusing is that square brackets are also used to indicate the index you're referring to.

![Array Indexing Diagram](https://tiy-learn-content.s3.amazonaws.com/2f957762-js-arrayindex.png)

---

## Functions

^ In programming, being able to reuse a group of operations on different data is one of the most basic necessities. **Functions** are an important part of the JavaScript language that allow us to do just that. Let's look at some repetitive code first:

---

```javascript
// let's multiply 8 by 2
let a =  8 * 2

// now let's multiply 12 by 2
let b = 12 * 2

// now let's multiply 4 by 2
let c =  4 * 2

a
b
c
```

^ Instead of rewriting the operation multiple times, let's write a function once and then use it with different numbers.

---

```javascript
function double(a) {
  return a * 2
}

double(8)
double(12)
double(4)
```

^ There's a lot going on in that last example, so let's look more in depth at the syntax and concepts.

---

^ When you declare functions this way, the minimum code required is the `function` keyword, a function name, parentheses `()`, and curly braces `{}`:

![Function Declaration Diagram](https://tiy-learn-content.s3.amazonaws.com/ded51be5-js-function-2.jpg)

^ The keyword `function` is used to create a function.
^ `square` is the name of the function being created. Just like variables, functions can be named anything the programmer wants (within the same rules and restrictions that apply to variable naming).
^ The parentheses, `()`, are part of the function definition. **Parameters** are written between the opening and closing parenthesis. Here the parameter is `x`
^ The curly braces, `{` and `}`, define the **function body**. In between the opening and closing curly braces of the function body, we list all of the code that should be run when the function is called.
^ The keyword `return` specifies what value the function should **return**, which may be easier to think of as specifying what the function should evaluate to. In the previous example, `double(4)` returned `16`. This meant that `double(4))` would effectively be the same as `console.log(16`. Note that `return` isn't *required*, but without it the function will simply return `undefined`.

---

![Function Call Diagram](https://tiy-learn-content.s3.amazonaws.com/d7b3323f-js-mini-functioncall.png)

^ You've probably noticed in some of the previous examples that after the function declaration we do something interesting using the function name. While declaring a function makes it available for use, the code *inside* the function body won't actually run until you **call** the function.

---

^ Check out the function declaration followed by a function call below:

```javascript
// a function declaration
function addThree(x) {
  return x + 3
}

// calling that same function:
// function name, followed by a pair of parentheses
// with an 'argument' between the parentheses
let result = addThree(7)

result // 10
```

^ Calling the function looks similar to a function declaration, but there's a big difference: there's no `function` keyword and no function body. Like arrays and array indexes, JavaScript often uses similar syntax for very different purposes. This can take a little while to get used to, so make sure to read carefully.

---

## Named function

```javascript
function square(n) {
  return n * n
}
```

---

## Anonymous function assigned to a constant

```javascript
const square = function(n) {
  return n * n
}
```

---

## ES2015 "arrow" function

```javascript
const square = (n) => {
  return n * n
}
```

---

### Arrow functions can be made very terse

```javascript
const square = n => n * n
```

^ Don't worry about this too much for now.

---

^ Inside of the function body, you can do as much work as you need. You can declare variables, use operators, even declare and use other functions. Once you're done, use the `return` keyword to specify what data your function call will return.  Observe:

```javascript
function doubleAndAddTax(price) {
  let result = price * 2
  result = result * 1.07
  return result
}

doubleAndAddTax(35)
```

^ In the above function declaration, we declare a variable inside `doubleAndAddTax`, update the value stored in `result`, and then `return` the `result` variable.

---

^ If we don't tell a function what to return, it returns the value `undefined`, which is different from the string `'undefined'`. Skipping the `return` keyword can be useful if your function isn't meant to return something specific, in which case `undefined` is ok. Nearly all of the functions in this short course are meant to use the `return` keyword, however. For now, don't worry too much about `undefined`, except to know that if your functions are returning `undefined`, you probably forgot the `return` keyword somewhere.

![fit](https://tiy-learn-content.s3.amazonaws.com/e9f21754-js-mini-return.png)

---

^ Make sure you understand why the following code sample will only print `undefined`

```javascript
function multiply(a, b) {
  a * b
}

let product = multiply(3, 11)

product
```

---

## Practice!

^ Let's try writing a function that concatenates two strings _and_ returns the result. This will also require something we haven't done yet: you'll need more than one parameter. See if you can get it to work!

---

^ Parameters are variables that are only accessible inside the function and are used to represent any values that are passed in as **arguments** when the function is called. As we've already seen, parameters first appear inside the parentheses in a function declaration. That same parameter can then be used like a variable _inside_ the function body as a placeholder for the _actual_ value you that will used in the function call.


![fit](https://tiy-learn-content.s3.amazonaws.com/c9c4e657-js-mini-functiondec.png)

^ Notice that when we call the function, we specify a value that the parameter will be set to. Each time you call a function you have an opportunity to provide a new value to use in the parameters

---

#### Multiple Parameters

^ As you've already seen in the previous exercises, JavaScript functions can accept more than one parameter (or none at all). The order of the arguments will relate directly to the order of the parameters. Additional parameters and arguments (sometimes shortened to **params** and **args**) should be separated by commas.

```javascript
function announceParams(a, b, c){
  console.log('Param a is ' + a)
  console.log('Param b is ' + b)
  console.log('Param c is ' + c)
}

announceParams('root beer", 24, "$3.40')
```

^ Above, the first argument is stored in the first parameter, and the pattern continues with the second and third arguments.

---

^ You may be curious about what happens if you don't call the function with the same number of arguments as parameters. Run the code below to find out:

```javascript
function announceParams(a, b, c){
  console.log('Param a is ' + a)
  console.log('Param b is ' + b)
  console.log('Param c is ' + c)
}

// a function call with too few arguments
announceParams('root beer')

// and a function call with too many arguments
announceParams(5, 10, 15, 20)
```

^ It may surprise you that the first function call doesn't throw an error, but instead considers params `b` and `c` to have `undefined` as their value. This is actually quite useful, in that we can write functions that have 'optional' parameters. Many functions in JavaScript accept extra arguments, but don't strictly require them. In the second example, we can see that there's also no error for providing too many arguments.

---

## Global Scope

^ JavaScript **scope** is a very deep topic, so we won't have time to go very deep. With that said, it's worth looking very briefly at how scope works.

---

^ In both your browser and in Node.js, JavaScript has a **global scope**, which contains all of the variables that were created outside of functions, or that were created without the `let` keyword. In reality, this is a bit of a oversimplification, but for now this is a reasonable way to think about it.

^ Notice the following example, where we get an error trying to access a variable that was created inside a function:

```javascript
// this will throw a scope error!
let twoForOneCoupon = true
let veggieToppings = ['mushrooms', 'spinach', 'eggplant']

function twoToppingPizza(toppings) {
  let price = 10

  console.log('You\'ll get a pizza with ' + toppings[0] + ' and ' + toppings[1])

  if (twoForOneCoupon === true) {
    console.log('Nice, you get a second pizza free with this coupon!')
  }
}

twoToppingPizza(veggieToppings)
console.log('It will cost ' + price)
```

^ There's quite a bit going on here, but notice that the `twoForOneCoupon` variable is available inside the function, even those that variable wasn't used as an argument. That's because **functions have access to their parent scope**. Notice, however, that the `price` variable created inside the function isn't defined outside of that function. That's because **a function's scope isn't available outside of that function**.

^ If this makes your head spin, don't worry; you're not alone. JavaScript scope can take a while to understand.
