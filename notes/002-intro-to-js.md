theme: Fira, 2

## An Introduction to
# JavaScript

---

## What is JavaScript?

^ JavaScript is an expressive programming language that powers a tremendous amount of the interactivity on the web, and increasingly powers servers behind the scenes.

^ When you post an update to Facebook or Twitter, JavaScript makes it possible for the update to appear instantly, without having to refresh the page.

^ Ever notice a credit card payment form that instantly recognizes the type of card (Visa, MasterCard, etc.) as soon as you finish typing? That's JavaScript in action.

^ In almost everything you're doing online, JavaScript is playing an important role in improving the interactions you experience as a user.

![js-frontend-backend.png](https://tiy-learn-content.s3.amazonaws.com/582118e1-js-frontend-backend.png)

---

^ JavaScript written to run in a browser is often called "front-end" programming, and server-side JavaScript is usually considered "back-end" programming.

^ In particular in front-end programming, JavaScript works hand-in-hand with HTML and CSS. For a long time JavaScript was _only_ used in the browser, as a part of this powerful trio of technologies.

![js-cssshtmljs.jpg](https://tiy-learn-content.s3.amazonaws.com/98baed7f-js-cssshtmljs.jpg)

---

```html
  <script src="main.js"></script>
```

^ By now you have already created both HTML & CSS files, so let's look at how you create a JavaScript file.

^ You will start by creating a file with an extension of `.js` at the end of it. Let's create a file called `main.js`. Once that is created, we need to tell our HTML file that it exists and that it should included on our page.

---

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript</title>
  <script src="main.js"></script>
</head>
<body>

</body>
</html>
```

---

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript</title>
</head>
<body>

  <script src="main.js"></script>
</body>
</html>
```

---

## The JavaScript Console

```javascript
console.log('Hello, World!')
```

^ Try changing the text in quotation marks.

---

## Variables

^ **Variables** are named "buckets" that hold data and make that data available for reuse later. A variable can hold data of any type, but for now we'll demonstrate them using a **string**.

^ A string is a combination of letters, numbers, and special characters, surrounded by matching quote marks. We'll cover strings in more detail in the next lesson once we've covered variables.

![buckets.jpg](https://tiy-learn-content.s3.amazonaws.com/f76ab69b-buckets.jpg)

^ Before we use a variable, let's look at a few strings. If strings aren't stored in variables, they have to be retyped later when you want to use that same string. This can result in a lot of duplication. To solve this, JavaScript makes it easy to store information in variables using a syntax like this:

---

```javascript
// declare a variable and give it a value
let age = 30

// store another value in that same variable
age = 31
```

---

```javascript
// declare a variable and give it a value
var age = 30

// store another value in that same variable
age = 31
```

---

![variables.jpg](https://tiy-learn-content.s3.amazonaws.com/9e2a068b-variables.jpg)

^ `var` or `let` is a **keyword** in the JavaScript language. Keywords are words that have a particular meaning to the JavaScript language. When you write `var` you are telling JavaScript to create a variable. Be aware that `var` and `"var"` are different things to JavaScript. The first is a keyword that commands JavaScript to create a variable, while the second is just a string.
^ `bucket` is the name that we are giving the variable. It's not a keyword; we can define any name that we want. We could have named the variable `basket` or `shoe` or `thing`. Unless it's a special reserved word, the specific name that you choose for a variable doesn't matter. It's up to you to decide a name that makes sense.
^ `=` is the assignment operator. We'll discuss operators later in the crash course, but know that the assignment operator takes the value on its right and assigns it to the variable on its left. In the above code, `=` takes the string on the right and stores it in the newly created variable on the left.
^ The semicolon (`;`) at the end of the line tells JavaScript that the *statement* is complete. A JavaScript statement is a single, complete instruction to be executed.

---

```javascript
let magicNumber = 1
let sum = magicNumber + magicNumber
console.log(sum)
```

^ Notice that the number `1` doesn't have quotes around it. That's because it's not a string, it's a *number*. This also means that using the `+` will do simple addition. On line two we assign a new variable called `sum` and store the result of adding `1` to `1`. Run the code sample and make sure you understand why it prints what it does. Edit the value of `magicNumber` and re-run it.

---

## "declaration" vs. "assignment"

^ Notice what happens when we assign a new value to `basket`:

```javascript
// we declare the variable and assign a value to it
let basket = 1
console.log(basket)

// now, we assign a new value to basket
basket = 2
console.log(basket)
```

^ `basket = 2;` is an example of a variable assignment. The value `2` overwrites the existing value of `1`, and it is now stored in the variable `basket`.

---

^ What happens when we declare a variable without assigning it a value?

```javascript
let chair
console.log(chair)
```

^ Line one of the above example shows the `let` keyword so we know that a variable is being created called `chair`, but that variable isn't being assigned anything on line one.

^ This is an example of a **variable declaration**. The declaration creates the variable and gives it a name.

^ If we don't assign a value, then it is `undefined`.

---

```javascript
let favoriteAnimal = 'llama'
console.log(favoriteAnimal);

favoriteAnimal = 'river otter'
console.log(favoriteAnimal)
```

^ What happens when we run this code?

---

^ JavaScript does impose a few restrictions for naming variables, however. Here they are:

## Variable names **can**...
- contain the special characters `$` and `_`
- contain uppercase and lowercase letters
  (_case sensitive_ e.g. `Car` is different than `car`)
- include digits (`0`-`9`), except as the first character

---

## Variable names can **not**...
- start with a number
- include spaces or hyphens
- be reserved words like `return`, `if`, `else`, `for`, etc.

^ You can find a list of reserved words in JavaScript [on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords).

---

![js-variables.png](https://tiy-learn-content.s3.amazonaws.com/8600fc2c-js-variables.png)

^ the names of variables are entirely up to the programmer.

---

# Constants

^ In addition to variables, we can declare constants whose values can only be assigned once.

```javascript
const maximumOccupancy = 99
const PHI = 1.618
```

---

# Types

^ All data in JavaScript has what's known as a **type**.

^ In programming, types help distinguish data that "looks" similar, and allows the language to add functionality and performance improvements based on these distinctions.

---

```
40

"40"
```

^ For example the number 40 can be represented with the `Number` type as `40` or as a `String` type as `"40"`.


---

```
Apollo-11
```

^ While this may seem like a strange idea, consider this: "Apollo-11" is a string because we aren't trying to say "Apollo minus eleven":

---

```
Apollo-11
```

```
"Apollo-11"
```

---

^ Conversely "20 - 11" could be an actual calculation, in which `20` and `11` would have a type of `Number`.

```
20 - 11
```
---

^ Even here, "20 - 11" could represent a football score, in which case representing that as a `String` may be better.

```
"20 - 11"
```

---

## Dynamic Typing

^ As you work with information in any programming language, you'll want to think carefully about what types are available and which is the best for representing you data.

^ JavaScript is very forgiving when it comes to types. It allows variables to store data of any type at any time without us doing any special work.

---

^ We're changing the name variable from a string to a number, but there's no error:

```javascript
let name = 'Alejandra'
name = 12345
```

^ This can be a big convenience, but it can also be the source of some confusion. Many languages require types to be specified on variables, function parameters, classes, and more, which can be helpful when debugging and can make the language perform much faster.

^ JavaScript's dynamic types make it easier to learn, but does add a little additional challenge in tracking down type-related errors.

---

## Primitive Types

^ _Primitive data types_ are those that are fundamental to storing the simplest data, like numbers and letters. The following table shows some of the primitive data types available in the JavaScript language.

Type | Syntax
:--- | :---
Number | `1`, `200`, `3.14159`
String | `"hello there!"`, `'hello there!'`
Boolean | `true`, `false`
Undefined | `undefined`
Null | `null`

^ Primitive data types are called "primitive" because they are the atomic pieces of data that can get no smaller.

---

# Numbers

---

![numbers.jpg](https://tiy-learn-content.s3.amazonaws.com/7d3889ab-numbers.jpg)

^ We can't break a number up into subtypes – i.e. if we split `30.2572` by the whole integer and the remaining fraction, we still have the two numbers `30` and `0.2572`.

---

^ Numbers are represented exactly the way that you might expect: as numeric digits. The mathematical operators that you learned in school work on numbers (`+`, `-`, `*`, `/`).

```javascript
// a number
1

// another number, with decimal places
3.14159

// this operation results in the number '10'
3 + 7
```

---

^ Try some of these in your console.

```javascript
// addition and subtraction
3 + 4
2 - 1

// multiplication
4 * 8

// division
2 / 7

// modulo (remainder after division)

42 % 2
42 % 10

```

^ Value is of the modulo operation (or "mod") is sometimes called the "modulus"

---

# Strings

^ Like with numbers, the same goes for strings – if we split `"hello world"` into two words, we still have two strings: `"hello"` and `"world"`.

---

^ As we've already seen, strings are data types that store words and characters.

^ *To define a string, the words and characters need to be wrapped in single (') or double quotes (")*. Wrapping strings is important because it allows JavaScript to distinguish the string data type from an arbitrary JavaScript command.

```javascript
// A string can be any sequence of characters
'hello world'

// This is also a string, but using double quotes
"I am also a string"

// If you need to use the same kind of quote inside your string,
// use the backslash `\` to "escape" it
'It\'s great'

// ...or use another kind of quote to wrap it
"It's great"
```

---

```javascript
// Here's a tricky one. This isn't a number.
// It's a string, because it's wrapped in quotes
"3"

// This, however, is actually a number
3

// This is NOT a string! Notice the lack of quotes.
// JavaScript thinks this line is a variable called `thing`
thing
```

^ The syntax highlighting in your editor goes a long way to making these things clearer (as well as helping mistakes jump out)

---

# Booleans

```javascript
true
false
```

^ The `Boolean` type is fairly straight-forward: the values `true` and `false` are special boolean values that are neither strings nor numbers.

^ Just about any value in JavaScript can be _coerced_ into a boolean value of `true` or `false`

^ **type coercion** is the process of converting one type into another. We'll talk about that more later, but for now bear in mind that the _concepts_ of true and false are represented with booleans.

---

# Undefined

```javascript
undefined
```

^ This can be a little hard to understand at first, but basically `undefined` is the absence of value.

^ Imagine that you bought a vase from the store and decided you wanted it to go on your mantel above your fireplace. You know that eventually you want to put something in the vase but for now you are not sure what it will be.

^ In JavaScript we call that `undefined`. It's the idea of a variable declaration that will eventually hold a value being empty for now. Sometimes we might create a variable and leave it as `undefined` until a later time.

^ Sometimes undefined is the result of a JavaScript statement that doesn't otherwise evaluate to an explicit value.

---

# Null

```javascript
null
```

^ Part of why `undefined` is hard to understand is that `null` is a thing too.

^ Essentially, `null` is the _intentional_ absence of a value.

---

# Operators

---

![pemdas.jpg](https://tiy-learn-content.s3.amazonaws.com/b5c4b7c5-pemdas.jpg)

^ The order of operations will matter for calculations - so if you need to execute one operation before another, you should wrap parentheses around it (e.g. `(4 + 5) * 3`).

^ Operations will be performed in the order of "Parentheses, Exponents, Multiplication, Division, Addition, Subtraction". It can be helpful to remember this order with the phrase "Please Excuse My Dear Aunt Sally" - both share the acronym **PEMDAS**.


---

^ Let's see how wrapping parentheses around different pieces affects one equation:

```javascript
4.11 * 5.93 + -1 / 16      // 24.3098
4.11 * 5.93 + (-1 / 16))   // 24.3098
4.11 * (5.93 + -1) / 16)   // 1.26639375
```

---

^ The `+` operator also works on strings and allows us to combine multiple strings into one. Combining strings is called **concatenation** and is incredibly common in programming.

![](https://tiy-learn-content.s3.amazonaws.com/726c8c39-js-hello_world.jpg)

---

```javascript
// Add numbers with the `+` operator
2 + 10

// Concatenate strings using the same operator
'bubble' + 'gum'

// Don't forget to include spaces to separate words
'hello ' + 'world'
```


---
^ Something curious will happen if you add a number to a string. What do you think the result of this statement will be? (It's `"33"`, _not_ `6`)

```javascript
3 + "3"
```

---

^ What about this?

```javascript
"Windows" + 95
```

---

# Control Flow

^ In just about every program, you'll need your code to make decision about what to do based on some factor that will only be known later.

^ Imagine a simple guest list app written in JavaScript: user can add names to a guest list, but there are limit spaces available. After 10 guests, the user can't add anymore.

^ This would almost certainly require some logic on your part so that _if_ the limit has been exceeded, the guest can't be added, _else_ add the guest. This could also be expressed as "_while_ the guest list is less than 10, allow users to be added".

^ These basic logical constructs form the basis for control flow tools in JavaScript.

---

# Conditionals

^ Conditionals create "branches" in code where a single path of the branch is followed depending on a condition. `Boolean` values are used to determine whether that condition was met.

```javascript
const age = 42

if (age < 12) {
   console.log('You are a child.')
} else if (age < 20) {
   console.log('You are a teenager.')
} else {
   console.log('You are probably an adult.')
}
```

---

^ The `else if` and `else` blocks aren't required. Often you'll want to do nothing if a condition isn't met:

```javascript
if (warnings > 0) {
  console.log('Warnings found!')
}
```

---

# Loops

^ There are a number of ways to loop or "iterate", but today, we'll talk about just one: the for loop

```javascript
const scoops = 4

for (let i = 0; i < scoops; i++) {
  // Runs 4 times, with the value of i being 0 through 3.
  console.log('I have ' + (scoops - i) + ' scoops of ice cream left.')
}
```

---

```
for ([initialExpression]; [condition]; [incrementExpression])
  statement
```

^ The initializing expression initialExpression, if any, is executed. This expression usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity. This expression can also declare variables.
^ The condition expression is evaluated. If the value of condition is true, the loop statements execute. If the value of condition is false, the for loop terminates. If the condition expression is omitted entirely, the condition is assumed to be true.
^ The statement executes. To execute multiple statements, use a block statement ({ ... }) to group those statements.
^ The update expression incrementExpression, if there is one, executes, and control returns to step 2.
