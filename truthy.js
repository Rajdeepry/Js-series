const userEmail= "choudhuryrajdeep975@gmail.com"

if (userEmail){
    console.log("Got user Email");
} else {
    console.log("Dont have user email");
}

//falsy value
//false,0, -0, BigInt, 0n , "", undefined, NaN

//truthy values
//"0" , 'false'," ", [],{}, function(){}

//if (userEmail.length === 0){
   // console.log("Array is empty");
//}
const emptyObj = {}

if (Object.keys(emptyObj).length===0){
     console.log("object is empty");
}

//Nulish Coalescing Operator (??) : null undefind

let val1;
val1 = 15 ?? 10 
//val1 = null ?? 10
//val1 = 20 ?? null ??10

console.log(val1);

// Ternary operator

//conditon ? true : false
