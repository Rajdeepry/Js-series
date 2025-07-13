function calculatecartprice(val1, val2, ...num1){
    return num1
}

console.log(calculatecartprice(200, 400, 500))

const user1 = {
    username: "hitesh",
    price: 199
}
const user2 = {
    username: "raj",
    prices: 300
}

function handleobject (anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);
}
//handleobject(user2)

handleobject({
    username:"sam",
    prices:399
})

const myNewArray = [200, 300, 400]
function returnsecondvalue(getArray){
    return getArray[1]
}
//console.log(returnsecondvalue(myNewArray))

console.log(returnsecondvalue([200,400,500]));