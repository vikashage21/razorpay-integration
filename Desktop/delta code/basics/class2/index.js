// inbuilt obejcts in js


let firstName ='vikash'  // primitive data structure
let secondName = new String('sharma') // object

console.log(typeof firstName, secondName)



const course = [
    {
        title:"bca",
        amount:5000
    },
    {
        title:"bba",
        amount:56556
    }
]


const bbaCourses = course.find(course => course.amount==56556)

console.log(bbaCourses)