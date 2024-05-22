// 5
let number = Number(prompt("Nhập vào 1 số bất kỳ:"));
switch (number%2) {
    case 0:
        alert("Đây là số chẵn");
        break;
    case 1:
        alert("Đây là số lẻ");
        break;
    default:
        alert("Đây không phải là 1 số");
}