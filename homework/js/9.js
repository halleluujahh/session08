let toan = Number(prompt("Nhập vào điểm toán (thang điểm 10):"));
let ly = Number(prompt("Nhập vào điểm lý (thang điểm 10):"));
let hoa = Number(prompt("Nhập vào điểm hóa (thang điểm 10):"));
let van = Number(prompt("Nhập vào điểm văn (thang điểm 10):"));
let su = Number(prompt("Nhập vào điểm sử (thang điểm 10):"));
let dia = Number(prompt("Nhập vào điểm địa (thang điểm 10):"));
if(isNaN(toan)||isNaN(ly)||isNaN(hoa) ||isNaN(van)||isNaN(su)||isNaN(dia)){
    alert("Nhập tất cả các đầu điểm");
}else {
    if(toan<0||toan>10||ly<0||ly>10
        ||hoa<0||hoa>10||van<0||van>10||su<0||su>10
        ||dia<0||dia>10){
        alert("Tất cả các đầu điểm trong thang điểm 10");
    }else{
        let average = (toan+ly+hoa+van+su+dia)/6;
        if( average<5.0){
            alert("xếp loại YẾU");
        }else if(average>=5.0 && average<=6.4){
            alert("xếp loại TRUNG BÌNH");
        }else if(average>=6.5 && average<=7.9){
            alert("xếp loại KHÁ");
        }else if(average>=8.0 && average<=10){
            alert("xếp loại GIỎI");
        }
    }
}