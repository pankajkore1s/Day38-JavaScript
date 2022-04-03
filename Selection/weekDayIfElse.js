let DayNumber=Math.floor(Math.random() *7)+1;
let day;
if (DayNumber==1){
    day="Sunday";
}else if (DayNumber==2){
    day="Monday";
}else if (DayNumber==3){
    day="Tuesday";
}else if (DayNumber==4){
    day="Wednesday";
}else if (DayNumber==5){
    day="Thursday";
}else if (DayNumber==6){
    day="Friday";
}else if(DayNumber==7){
    day="Saturday";
}
console.log("The Daynumber "+DayNumber+" Is = "+day);
