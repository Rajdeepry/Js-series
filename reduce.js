const myNums = [1,2,3]

//const myTotal = myNums.reduce(function (acc, currval){
  //  console.log(`acc: ${acc} and currval: ${currval}`);
  //return acc + currval
//},
//3)
const myTotal = myNums.reduce( (acc,currval) => acc+currval, 0  )
console.log(myTotal);


const shopingcart = [
      {
        itemName: "js course",
        price: 2999
      },
       {
        itemName: "Python course",
        price: 3999
      },
       {
        itemName: "java course",
        price: 4999
      },

 {
        itemName: "c++ course",
        price: 9999
      }

]


const priceTopay = shopingcart.reduce(   (acc,item) => acc+item.price, 0 )
console.log(priceTopay);
