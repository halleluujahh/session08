let month = prompt("Nhập vào số tháng trong năm:");
switch(month){
    /*  Nếu năm nhuận thì chia hết cho 4, 
    nếu chia hết cho 100 thì phải chia hết cho 400*/
    case "1":
        alert(`Tháng ${month} có 31 ngày`);
        break;
    case "2":
        let nam = prompt("Nhập vào số năm để tính năm nhuận:");
        let kiemTraNamNhuan = (nam%4===0||nam%100===0&&nam%400===0);
        if(kiemTraNamNhuan){
            alert(`Tháng ${month} có 29 ngày`);
        }else{
            alert(`Tháng ${month} có 28 ngày`);
        }
        break;
    case "3":
        alert(`Tháng ${month} có 31 ngày`);
        break;
    case "4":
        alert(`Tháng ${month} có 30 ngày`);
        break;
    case "5":
        alert(`Tháng ${month} có 31 ngày`);
        break;
    case "6":
        alert(`Tháng ${month} có 30 ngày`);
        break;
    case "7":
        alert(`Tháng ${month} có 31 ngày`);
        break;
    case "8":
        alert(`Tháng ${month} có 31 ngày`);
        break;
    case "9":
        alert(`Tháng ${month} có 30 ngày`);
        break;
    case "10":
        alert(`Tháng ${month} có 31 ngày`);
        break;  
    case "11":
        alert(`Tháng ${month} có 30 ngày`);
        break;  
    case "12":
        alert(`Tháng ${month} có 31 ngày`);
        break;    
    default:
        alert(`Không có tháng ${month}`);
}