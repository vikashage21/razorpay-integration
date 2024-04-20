// factory function

// let createrectangle =(width , height , x ,y)=>{


//   return   rectangle ={
//         width,
//         height,
//         x,
//         y
//     }
// }


// let reactangleObj1 = createrectangle(5,5,6,5)
// console.log(reactangleObj1)


// constructor function

// function  Createrectangle  (length, width){
//     this.length=length
//     this.width=width
//     draw=()=>{
//         console.log('hello jee');
//     }
// }


// let reactangleObj1 = new Createrectangle(5,4)

// console.log(reactangleObj1)


 // how internal function work inside the constructor
// let Rectangle = new Function('length', 'width',` 

//     this.length = length,
//     this.width = width,
//     draw = () => {
//         console.log('hello jee');
//     }

// `);


// let rect = new Rectangle(2,3)

// console.log(rect)


let object={
    length: 1,
    width:2
}


// /first method  for in

// for(let key in object) {

//     // console.log(key)
//     console.log(object[key])
// }

// /second method for of

// for(let key of Object.entries(object)) {

//     // console.log(key)
//     console.log(key)
// }

// note Object.entries(object) , Object.keys(object)


// how to we know if keys is there in object

if('length' in object){
    console.log( 'length is ' + object.length)
}
else{
    console.log('no length')
}


// object cloning 


// itreation
// spread
// assign



// iteration
let obj1 ={
    value:10,
    num:55

}

// let obj2={}

// cloning by assign


// let obj2 = Object.assign({},obj1)


// for(let key in obj1){
//     obj2[key]=obj1[key]
// }
// console.log(obj1)
// console.log(obj2)

// spread
let obj2 ={...obj1}


//dynamic nature of object

// delete obj2.num


console.log(obj2)



