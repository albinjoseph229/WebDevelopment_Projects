
//in javascript the for-in loop allows you to loop through the properties of an object
var colors={
    primary:"blue",
    secondary:"red",
    tertianary:"white",
}

for(var color in colors){
    console.log(color+'->'+colors[color])
}

var colorsarray=['yellow','red','blue']

for (var clr in colorsarray){
    console.log(clr+"->"+colorsarray[clr])
}
