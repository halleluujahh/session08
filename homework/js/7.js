// 7
let x = Number(prompt("Nhập vào số nguyên x:"));
if(isNaN(x)){
    alert("Nhập x vào prompt");
}else if(x==0){
    alert("x có giá trị là 0");
}else if(x>0){
    alert("x là số nguyên dương");
}else{
    alert("x là số nguyên âm");
}