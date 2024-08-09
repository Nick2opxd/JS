let arr=[1,2,3,4]
//console.log(arr[0])

//JS arrays create shallow copies i.e. any changes made to the reference of original array will also change the elements of original array 

let myarr=new Array(5,6,7,9)
//console.log(myarr)

// myarr.push(14)
// console.log(myarr)
// myarr.pop()
// console.log(myarr)

// myarr.unshift(55)
// console.log(myarr)
// myarr.shift()
// console.log(myarr)

// console.log(myarr.includes(9))
// console.log(myarr.indexOf(9))

// console.log(myarr.join(''))

// console.log(myarr.slice(0,2))
// console.log(myarr)
// console.log(myarr.splice(1,3))
// console.log(myarr)

// myarr.splice(1,0,"rome")
// console.log(myarr)
// myarr.splice(1,2)
// console.log(myarr)

const arr1=[15,88,6,22]
const arr2=[99,65,7,3]

// arr1.push(arr2)
// console.log(arr1)

let arr3=arr1.concat(arr2)
console.log(arr3)

console.log([...arr1,...arr2])











