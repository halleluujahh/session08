// 3
let hours =  Number(prompt("Nhập vào số giờ trong ngày:"));
if(isNaN(hours)){
    alert("Fill the prompt");
}else if(hours<10){
    alert("Good morning");
}else if(hours<20){
    alert("Good day");
}else{
    alert("Good evening");
}