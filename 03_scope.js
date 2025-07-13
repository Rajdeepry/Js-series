

const a = 700
if(true)
{
    const a = 30
const b = 40
var c = 50
//console.log("INNER: ", a);
}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    //two()
}

//one()

if(true){
    const username = "hitesh"
    if(username=== "hitesh"){
        const website = " youtube"
      //  console.log(username + website);
    }
   // console.log(website);
}
//console.log(username);

//***********interesting**************
console.log(addone(5))
function addone(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num +2
}
