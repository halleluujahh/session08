let weight = Number(prompt("Nhập vào số cân nặng(kg):"));
let height = Number(prompt("Nhập vào chiều cao(m):"));
if(isNaN(weight) || isNaN(height)){
    alert("Điền cân nặng và chiều cao");
}else{
    let bmi = weight/(height**2);
    console.log(bmi);
    if(bmi<18.5){
        alert("Cân nặng thấp (gầy)");
    }else if(bmi<24.9){
        alert("Bình thường");
    }else if(bmi>=25){
        alert("Thừa cân");
    }else if(bmi>25&&bmi<29.9){
        alert("Tiền béo phì");
    }else if(bmi<34.9){
        alert("Béo phì độ I");
    }else if(bmi<39.9){
        alert("Béo phì độ II");
    }else{
        alert("Béo phì độ III");
    }
}

