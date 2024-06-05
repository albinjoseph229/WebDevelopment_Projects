//array provides a way to store multiple values in a single variable
var arr = [12,'albin','hello',true]

console.log(arr)

//accessing array elements

var a= arr[0]

console.log(a)

console.log(arr[1])

//replacing elementts of array

arr[2]='bentley'

console.log(arr)

console.log("array length is: ",arr.length)

//inbuilt array methods

//pop and push methods

var arr2=[1,2,3,4,5,6,7,8,9,10]

arr2.pop() //removes the last element of the array  

arr2.push(11) //adds an element to the end of the array

console.log(arr2)

//shift and unshift methods

arr2.shift() //removes the first element of the array

arr2.unshift(0) //adds an element to the beginning of the array
