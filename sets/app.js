// SETS - Store unique values of any type

const set1 = new Set()

// Add some values to set

set1.add(100)
set1.add('String')
set1.add({ name: 'John' })
set1.add(true)
// set1.add(100) // won't add additional value- needs to be unique

console.log(set1);
console.log(set1.size)

// ---------------------------------------------------

// Check for values

// console.log(set1.has(100)); // true
// console.log(set1.has(50 + 50)); // true
// console.log(set1.has({name: 'John'})); // false

// ---------------------------------------------------

// Delete from set

  // set1.delete(100)

  // console.log(set1)

// ---------------------------------------------------

// Iterating through sets

// For ... of

// for(let item of set1) {
//   console.log(item)
// }

// ForEach Loop

// set1.forEach((value) => {
//   console.log(value)
// })

// ---------------------------------------------------

// Convert Set to array

const setArr = Array.from(set1)
console.log(setArr)

// ---------------------------------------------------

// You can also define values inside set like that:

// set2 = new Set([1, 2, 'string', true])

// console.log(set2)