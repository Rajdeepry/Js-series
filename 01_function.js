function saymyName(){

    console.log("R");
    console.log("A");
    console.log("J");
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");

}
 //saymyName()

 //function addTwoNumbers(number1, number2){
  // console.log(number1 + number2);
 //}
 function addTwoNumbers(number1, number2){

    //let result = number1 + number2
    //return result
    return number1 + number2
 }

 const result = addTwoNumbers(3, 4)
 //console.log("Result: ", result);

 function loginUserMessage(username){

    if (username === undefined){
        console.log("please enter a usernmame");
        return
    }
    return`${username} just logged in`
 }

 console.log(loginUserMessage())