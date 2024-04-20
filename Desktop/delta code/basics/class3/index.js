// function

// function sum (){
//     console.log(arguments)
//     let total =0
//     for(let value of arguments){
//         total = total + value
//     }
//     return total
// }


// let ans = sum(4,5,6)

// console.log(ans)

// rest opertors

// function sum(...args) {
//     let total = 0;

//     for (let keys of args) {
//         total = total + keys
//     }

//     return total
// }

// let ans = sum(4, 5, 6, 6)


// console.log(ans)
// default perameters

// function interest(p, r = 8, y = 10) {
//     return p * y * r / 100
// }


// console.log(interest(1000, 5, 6))

// getter and setter 

// let person = {
//     fName: "vikash ",
//     lName: 'sharma',
//     get fullName() {
//         return `${this.fName} ${this.lName}`
//     },


//     set fullName(value) {
//         if (typeof value !== 'string') {

//             throw new Error('you have enter not string')

          

//         }

//         let [fName, lName] = value.split(' ')
//         this.fName = fName
//         this.lName = lName

       
//     }
// }


// console.log(person.fullName)

 
// try {

//     person.fullName = 'rahul sharma'
// } catch (e) {
//    console.log(e)
// }

// console.log(person.fullName)


let arr =[4,45,45,46,74]


let totalSum =arr.reduce((accumulator ,currentValue)=> accumulator + currentValue ,0)

console.log(totalSum) 

