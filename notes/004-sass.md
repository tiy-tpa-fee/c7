theme: Fira, 2

## An Introduction to
# [fit] SASS
## [fit] Syntactically Awesome Style Sheets

---

# [fit] pre·proc·es·sor
**/prēˈpräsˌesər,-ˈprōsˌesər,-əsər/**
_noun_
> a computer program that modifies data to conform with the input requirements of another program.

^ Sass is a preprocessor for CSS. Sass adds a lot of useful features on top of CSS that make our lives as web developers and designers easier.

---


# `.scss` => `.css`

^ All Sass files end with `.scss`, this is how we know its a sass file.

^ The browser __cannot__ read (`.scss`) files, so we need to transform our `.scss` files into `.css` files.

---

## Sass (SCSS) is a "superset" of CSS.

^ You can write all regular `css` in an `scss` file.
^ You __cannot__ write `scss` in a `css` file.

---

## Nesting

^ Browsers cannot understand a nested style, but sass will allow us to write our styles nested, to save us typing and time.

---

```scss
header {
  background: blue;

  nav {
    background: white;
  }
}
```

---

```css
header {
  background: blue;
}

header nav {
  background: white;
}
```

---

```scss
ul {
  background-color: #666;

  li {
    background-color: pink;

    a {
      color: red;
    }
  }
}
```

---

```css
ul {
  background-color: #666;
}

ul li {
  background-color: pink;
}

ul li a {
  color:red;
}
```

---

## Variables

### `#A237FF` `#2BC4F2` `#477CFD`

^ Its hard to remember which color is being used where when everything is just a hex code. Its also a pain to change those colors everywhere in the code when the design changes.

^ Sass variables allows us to reuse that value everywhere in our scss. Variables must appear above the point where they are being called.  If they aren't the browser won't be able to recognize what the value is supposed to be.

---

```scss
  $primary-color: #A237FF;
  $secondary-color: #2BC4F2;

  header {
    background: $secondary-color;
    color: $primary-color
  }

  nav a:hover {
    color: $secondary-color;
  }

  .my-button {
    background-color: $primary-color;
    border-color: $secondary-color;
  }
```

---

```css

  header {
    background: #2BC4F2;
    color: #A237FF;
  }

  nav a:hover {
    color: #2BC4F2;
  }

  .my-button {
    background-color: #A237FF;
    border-color: #2BC4F2;
  }
```

---

^ You can use variables to hold any value

```scss
  $header-size: 4em;

  h1 {
    font-size: $header-size;
  }
```

---

``` css

  h1 {
    font-size: 4em;
  }

```

---

## Mix-ins

^ Some things in CSS are a bit tedious to write over and over.

^ A mix-in lets you make groups of CSS declarations that you want to reuse throughout your site.

---

```scss
  @mixin verticalCenter {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  h1, h2, h3 {
    @include verticalCenter;
  }
```

---

```css
  h1 {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  h2 {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  h3 {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
```

^ You can even pass in values to make your mixin more flexible. Think of mixins almost like functions for CSS.

---

## Partials

^ To prevent our `scss` from becoming one giant file that is hard to manage and read, Sass allows us to break up our code into multiple files and then `@import` them into our main `scss` file.


---

^ All files you want to create to be imported must start with an `_` (underscore). We refer to these as "partials", because they are a piece of the entire scss.
^ So if I wanted to keep all my variables in their own file, it would be called something like `_variables.scss`

```scss
// _variables.scss
$primary-color: #333;
```

---

^ You import a file by saying `@import NAME_OF_PARTIAL`
^  Notice there is no underscore or .scss


```scss
// main.scss
@import "variables";

nav {
  color: $primary-color;
}
```

---

```css
  nav {
    color: #333;
  }
```

---

## Extends

^ This is one of the most useful features of Sass. Using `@extend` lets you share a set of CSS properties from one selector to another. It helps keep your Sass very DRY.

---

^ In our example we're going to create a simple series of messaging for errors, warnings and successes.

``` scss
.message {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  @extend .message;
  border-color: green;
}

.error {
  @extend .message;
  border-color: red;
}

.warning {
  @extend .message;
  border-color: orange;
}
```

---

```css
.message, .success, .error, .warning {
  border: 1px solid #cccccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}
```

---

# [fit] http://sass-lang.com/guide
