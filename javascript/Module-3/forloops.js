//loops are the statemwnts that we can use to control the flow of the program and to do some repeatative tasks

var a="hello world"

//for loop
for(var i=0;i<10;i++){
    console.log(a)
}


//square each element in array

var num= [2,3,4,5,6,7,8]

var length=num.length
var squareArray=[]//empty array

for(var i=0;i<length;i++){
    squareArray.push(num[i]*num[i])
}

console.log(squareArray)