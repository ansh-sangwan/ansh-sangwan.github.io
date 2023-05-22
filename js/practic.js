let age=prompt("enter your valid age")
age=Number.parseInt(age)
if(age<0){
    console.log("it's an invalid no...")
} else if(age<1){
    console.log("you are kid cou can't to think about it")
}else if(age<18){
    console.log("you may think about it")
}else if(age==18){
    console.log("you can drive")
}else{
    console.log("you can drive")
}
console.log(age)

// let age=prompt("enter your valid age")
// age=Number.parseInt(age)
// // console.log(typeof(age))
// if(age<18){
//   console.log("you are not colified to drive a car")
// }else if(age>=18){
//   console.log("you can drive car")
// }
// else{
//   console.log("you can not drive car")
// }
// console.log(age)