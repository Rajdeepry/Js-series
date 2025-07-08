//object literals
const mySym = Symbol("key1")
const jsuser = {
    name: "Rajdeep",
    fullName: "Rajdeep choudhury",
    [mySym]: "mykey1",
    age: 21,
    location: "Delhi",
    email: "choudhuryrajdeep.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "saturday"]
}


console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser[mySym])

jsuser.email = "raj420.com"
//Object.freeze(jsuser)

jsuser.greeting = function(){
    console.log("Hello js user");

    jsuser,greetingtwo = function(){
        console.log(`Hello js user,${this.name}`);
    }
}
console.log(jsuser.greeting);
