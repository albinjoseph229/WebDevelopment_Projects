//the for-of statements create a loop iterating over iterable objects
//including: built-in string ,Array ,array-like objects like NodeList and also map and set

var scores=[50,40,60,100]

//syntax

for(var score of scores){
    console.log(score)
}

var colors=['red','green','yellow','blue']

for(var[index, color]of colors.entries()){
   console.log(index+'->'+color) 
}
