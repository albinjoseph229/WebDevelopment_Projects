//90-100 = A
//70-89 = B
//5-69 = C
//lower than 50 = F

var std_score=95

if(std_score>90){
    console.log("you got A")
}
else if(std_score>=70 && std_score<=89){
    console.log("you got B")
}
else if(std_score>=50 && std_score<=69){
    console.log("you got C")
}
else{
    console.log("you Failed")
}