class Person {
  static formalTitle = 'Mx.'

  constructor (name) {
    const [given, family] = name.split(' ')
    this.givenName = given
    this.familyName = family
  }

  greet () {
    console.log('Hi, ' + this.givenName)
  }

  formallyGreet () {
    console.log(`Good day,  ${Person.formalTitle}` + this.familyName)
  }
}

class Soldier extends Person {
  constructor (name, rank) {
    super(name)
    this.rank = rank
  }

  greet () {
    console.log('Hello, ' + [this.rank, this.familyName].join(' '))
  }
}

const p1 = new Soldier('Jason Perry', 'private')
const p2 = new Soldier('Gavin Stark', 'corporal')

p1.greet()
p2.formallyGreet()
