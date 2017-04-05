// const Book = function (author, title, chapters) {
//   this.author = author
//   this.title = title
//   this.chapters = chapters
// }
//
// Book.prototype.report = function () {
//   console.log(`This summer I read ${this.title} by ${this.author}.`)
// }

class Publication {
  isbn () {
    return '9781231234650'
  }
}

class Book extends Publication {
  constructor (author, title, chapters) {
    super()
    this.author = author
    this.title = title
    this.chapters = chapters
  }

  report () {
    console.log(`This summer I read ${this.title}
      by ${this.author} it has the isbn: ${this.isbn()}`)
  }
}

const main = () => {
  const bookA = new Book('Tom Sawyer', 'Mark Twain', 12)
  const bookB = new Book('Ender\'s Game', 'Orson Scott Card', 14)

  bookA.report()
  bookB.report()
}

document.addEventListener('DOMContentLoaded', main)
