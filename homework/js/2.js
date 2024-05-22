// 2
let hour =  Number(prompt("Nhập vào số giờ trong ngày:"));
if(isNaN(hour)){
    alert("Fill the prompt");
}else if(hour<18){
    alert("Good day");
}else{
    alert("Good evening");
}