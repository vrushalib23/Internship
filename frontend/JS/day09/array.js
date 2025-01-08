// Array is Growable and shirnkable
// Array store homogeneuos as well as heterogenous data
// Array is mutable
// Array is not thread-safe
// Array is not synchronized
let a = [10,20,30,40,50]
let a1 = []
let a2 = [2.5, 'Gaurav',true]

for(i=0;i<=a.length;i++){
    console.log("Value of Array is : ",a[i])
}

// for(i=0;i<=a2.length;i++){
//     console.log("Value of a2 is : ",a2[i])
// }

console.log("Array item is : ",a)
console.log("The length of Array is : ",a.length)
// Array is Growable and shirnkable
a.push(60)
console.log(a.length)

console.log(a.join("@"))
console.log(a.join("#"))
console.log(a.join(" "))
console.log(a.join())
console.log("------------------------------------------")

a.forEach((myvalue, i, arr)=> {
    console.log(myvalue+" Index is "+ i+ " Array is :"+ arr)
});

console.log("-------------------PUSH-POP---------------------")
// Push & Pop
// LIFO
let a3 = []
a3.push(10,20,30)
console.log(a3)
a3.pop(30)
console.log(a3)
a3.pop()
console.log(a3)


console.log("-------------------SPLICE-----------------------")
// Splice
let a4 = [45,20,80,10]
a4.splice(2,0,100) //without Eliminating location value
console.log(a4)
a4.splice(2,1,11) //overrite previous on that data
console.log(a4)
a4.splice(1,1) //deleted the value at the index 1
console.log(a4)
a4.splice(1,1,200)
console.log(a4)

console.log("--------------------MAP-------------------")
// Map
// Element by Element operation
// Map is used to create new array from existing array
// it is used to perform some operation on each item of array
let a5 = [1,2,3,4,5]
let a6 = a5.map((value) => {
    return value*value
    })
console.log(a5)
console.log(a6)