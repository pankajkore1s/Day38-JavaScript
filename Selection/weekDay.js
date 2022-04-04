let number = Math.floor(Math.random() * 7) +1;
let day;
switch (number) {
    case 1:
        day = 'Sunday';
        console.log("The day  "+number+" is " +day);
        break;
    case 2:
        day = 'Monday';
        console.log("The day "+number+" is " +day);
        break;
    case 3:
        day = 'Tuesday';
        console.log("The day  "+number+" is " +day);
        break;
    case 4:
        day = 'Wednesday';
        console.log("The day "+number+" is " +day);
        break;
    case 5:
        day = 'Thursday';
        console.log("The day "+number+" is " +day);
        break;
    case 6:
        day = 'Friday';
        console.log("The day "+number+" is " +day);
        break;
    case 7:
        day = 'Saturday';
        console.log("The day "+number+" is " +day);
        break;
    default:
        console.log("Enter the number between 0 to 9");
}