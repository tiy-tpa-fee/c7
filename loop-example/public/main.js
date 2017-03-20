for (let i = 0; i <= 42; i++) {
  i % 2 === 0 ? console.log(i) : console.log('NOPE')

  if (i % 2 === 0) {
    console.log(i)
  } else {
    console.log('NOPE')
  }
}

for (let i = 0; i <= 42; i++) {
  let even = i % 2 === 0
  let msg = even ? i : 'NOPE'
  console.log(msg)
}
