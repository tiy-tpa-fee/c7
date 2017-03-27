const main = () => {
  let a = [43, 4, 3534, 3, 27]

  // let func = (n) => n * 2
  //
  // let newA = []
  // for (let i = 0; i < a.length; i++) {
  //   newA.push(func(a[i]))
  // }

  document.write(a.map((n) => n * 2))
}

document.addEventListener('DOMContentLoaded', main)
