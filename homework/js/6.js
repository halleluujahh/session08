// 6
let color = prompt("Nhập vào màu xanh, đỏ hoặc vàng:").toLowerCase();
if(color!=="xanh" && color!=="đỏ" && color!=="vàng"){
    alert("màu không hợp lệ!");
}else{
    alert(`${color}`);
}