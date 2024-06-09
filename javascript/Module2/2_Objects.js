//in js objecta are key value pairs
var person={
    firstname:'John',
    lastname:'Doe',
    age:50,
    ownsCar:false,
}

console.log(person);

//dot notation
console.log(person.age)
console.log(person.firstname)

//bracket notation

console.log(person['lastname'])

var man={
    car:"BMW",
    home:"USA",
    name:"jacob",
    age:21,
    friends:["jhon","jake","jason"],
    address:{
        pincode:3342,
        street:"52B",
        state:"newyork"
    }
}
 
console.log(man)

console.log(man.friends[1])//value inside array

console.log(man.address.street)//value inside the address object
