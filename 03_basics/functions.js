function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("R");
    console.log("I");
}
// sayMyName()

// function AddTwoNumber(number1,number2){   //parameters
//     console.log (number1+number2)
// }
// AddTwoNumber(6,"568")  //arguments

// function AddTwoNumber(number1,number2){   //parameters
//     const result =  number1 + number2
//     console.log("Mayuri")
//     return (result)
    
// }
// const result = AddTwoNumber(6,4)
// console.log("Result ",result)


function loginuserMessage (username = "Ram"){
    if (username === undefined){
        console.log("no one is log in")
        return
    }
    return `${username} just logged in` 
} 
console.log (loginuserMessage ("check"))

function Student(studrntname = "Manya") {
    // if(studrntname==undefined){
    //     console.log("please enter the name")
    //     return
    // }
    return `${studrntname} is present today`;
}
console.log(Student())