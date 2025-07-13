const user = {
    username: "raj",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} Welcome to website `);
        console.log(this);
    }
}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()
//console.log(this);

//function chai(){
  //  let username = "raj"
  //  console.log(this.username);
//}
//chai()

//const chai  = function(){
  //  let username = "hitesh"
  //  console.log(this.username);
//}

//chai()

const chai = () =>{
    let username = "hitesh"
    console.log(this.username);
}

//chai()


//const addtwo = (num1 , num2 ) => {
    //return num1 + num2
//}
//const addtwo = (num1 , num2 ) => num1 + num2
//const addtwo = (num1 , num2 ) => ( num1 + num2 )
const addtwo = (num1 , num2 ) => ({username:"Rajdeep"})

console.log(addtwo(5,6))

//const myArray = [1,2,3,4]
//myArray.forEach()