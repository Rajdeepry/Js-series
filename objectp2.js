//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Raj"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regulerUser = {
    email: "choudhury975@gmail.com",
    fullName: {
        userfullname: {
            firstname:"Rajdeep",
            lastname:"choudhury"
        }
    }
}

//console.log(regulerUser.fullName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4:"b"}
const obj3 = {5: "a", 6: "b"}
//const obj9 = Object.assign(obj1,obj2)

const obj9 = {...obj1,...obj2,...obj3}
//console.log(obj9)

const user = [
    {id:1,
    email: "raj@obj1.com" 
    },
    {id:1,
    email: "raj@obj1.com" 
    },
    {id:1,
    email: "raj@obj1.com" 
    },
    {id:1,
    email: "raj@obj1.com" 
    },
]
user[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));