# JS Basic
- Cấu trúc khai báo biến: Từ khóa khai báo biến + tên biến + dấu "=" + giá trị của biến.
- console.log dùng để hiển thị ra màn hình console
- Biến var là biến global, biến let là biến cục bộ.
- Nếu khai báo 2 biến let trùng tên trong phạm vi {} thì sẽ báo lỗi.
# Khác nhau
- const:
+ dùng để khai báo hằng số.
+ không thay đổi giá trị được.
+ khi khai báo bắt buộc phải gắn giá trị cho nó.
+ phạm vi block-scope.
+ có hoisting nhưng không truy cập được.
- let: 
+ khi khai báo không cần thiết phải gắn giá trị.
+ có thể thay đổi giá trị được.
+ không thể khai báo lại được.
+ phạm vi hoạt động là block-scope.
+ có hoisting nhưng không truy cập được.
- var:
+ khi khai báo không cần gán giá trị.
+ có thể gán lại giá trị.
+ có thể khai báo lại.
+ phạm vi hoạt động function.
+ có hoisting và truy cập được.
-Lưu ý:
+ block-scope: chỉ có thể truy cập trong phạm vi {}.
+ function: truy cập ở bất cứ đâu.
+ hoisting: việc đưa khai báo lên đầu.
# Đặt tên biến
- Quy tắc đặt tên:
+ Viết liền không dấu.
+ Ký tự đầu tiên phải là chữ cái.
+ Không chứa những ký tự đặc biệt như: @number, '', "!".
+ Tên biến sẽ phân biệt hoa, thường.
- Có 3 cách đặt tên biến:
+ camelCase: studentName (viết hoa chữ cái đầu của từ thứ 2). => ưu tiên, phổ biến nhất.
+ snake_case: student_first_name (giữa những chữ cái cách nhau bằng shift "-").
+ PascalCase: StudentName (viết hoa chữ cái đầu của từng chữ).
# Kiểu dữ liệu cơ bản: Chia thành 2 nhóm dữ liệu chính 
- kiểu đơn giản - primitive type - kiểu tham trị (kiểu tĩnh - thuộc về bộ nhớ stack):
+ Number (1, 2, 3, 4, ...) dùng để khai báo các số.
+ String ('a', 'b', 'c', ...) dùng để khai báo các chuỗi.
+ Null (null) dùng để khai báo giá trị bằng null.
+ Undefined (undefined) dùng để khai báo 1 biến mà không gắn giá trị.
+ NaN (NaN) viết tắt của not a number, khi tính toán với toán tử số học mà 1 trong 2 biến không phải 1 số.
+ Boolean (true, false) dùng để khai báo giá trị đúng hoặc sai, sau này thường sử dụng cho việc kiểm tra các điều kiện.
- kiểu phức tạp - reference type - kiểu tham chiếu (kiểu động - thuộc về bộ nhớ heap):
+ array.
+ function.
+ Object (object) khai báo 1 biến là 1 đối tượng.
# String
- Kiểu dữ liệu String sẽ được đặt trong cặp dấu "" hoặc '' hoặc ``.
- Kiểu dữ liệu String có thể nối chuỗi bằng dấu "+".
# Boolean
- Kiểu dữ liệu Boolean trả về true hoặc false.
# Null
- Kiểu dữ liệu null trả về null.
# Undefined 
- Kiểu dữ liệu undefined không có gán giá trị cho biến sẽ trả về undefined. 
# NaN
- Khi mà chia một số cho kiểu khác số sẽ trả về NaN.
# Object 
- khai báo 1 biến là 1 đối tượng.
# Toán tử
- Toán tử logic dùng trong các trường hợp để kiểm tra điều kiện.
- Toán tử toán học: +, -, *, /, %(chia lấy dư), **(bình phương).
- Toán tử gán: =, +=, -=, *=, /=, %=.
- Toán tử logic: && (và), || (hoặc), ! (phủ định)
+ && lấy điều kiện cả 2 vế.
+ || chỉ lấy điều kiện 1 vế.
+ ! phủ định trả về giá trị ngược lại kết quả ban đầu.
- Toán tử so sánh: ==, ===, !=, >, <, >=, <=
+ == so sánh giá trị.
+ === so sánh giá trị và kiểu dữ liệu.
+ != so sánh sự khác nhau về giá trị.
+ !== so sánh sự khác nhau về giá trị và kiểu dữ liệu.
- Toán tử 3 ngôi: ? :
- Toán tử nullish ?
- Toán tử tăng giảm: a++; ++a
+ VD: a++ hậu tố: cộng sau, ++a tiền tố: cộng trước.
<!-- 
let a = 5; console.log("giá trị a: ", a++); //giá trị của a sẽ là 5.

let a = 5; console.log("giá trị a: ", ++a); //giá trị của a sẽ là 6.

let result = a++ + ++a + a++ + a + a++; //kết quả sẽ là 35. 
-->
# Built-in: 1 số hàm có sẵn
- console: console.log() in ra màn hình console.
- alert: alert() in ra hộp thoại thông báo ra màn hình.
- prompt: prompt() cho phép người dùng nhập dữ liệu vào ô input.
- confirm: confirm() hiển thị thông báo cho phép xác nhận.
- document.write() hiển thị ra trình duyệt.
# Link MindMap: https://whimsical.com/js-XRXwznkrTEs1gaJox93FvE

# Điều kiện và vòng lặp
- Câu điều kiện if-else (nếu-thì):
+ Nếu điều kiện thỏa mãn thì if thực thi và ngược lại, else thực thi
+ Cú pháp:
if(điều kiện){
    //phần thực thi
}else{
    //phần thực thi
}
+ falsy và truthy:
falsy gồm các giá trị sau 0, null, NaN, undefined, false, "", ''. 
truthy không phải là falsy.
- Câu điều kiện if-else lồng:
+ trong if có if-else.
- Câu điều kiện if-else bậc thang:
+ Cú pháp:
if(điều kiện){
    //phần thực thi
}else if(điều kiện){
    //phần thực thi
}else if(điều kiện){
    //phần thực thi
}
- switch-case.
- Vòng lặp chính:
+ for: dùng để duyệt theo thứ tự
cú pháp: 
for(){
    //phần thực thi
}
cấu trúc cơ bản gồm: giá trị khởi tạo, điều kiện, bước nhảy.
+ while:
cú pháp: while(điều kiện){
    //phần thực thi
}
nếu điều kiện thỏa mãn thì phần thực thi được chạy.
nếu điều kiện không thỏa mãn thì phần thực thi không được chạy.
khi dùng while phải có điều kiện dừng vòng lặp để tránh vòng lặp vô tận.
while có thể không chạy nếu điều kiện không đúng thì không chạy.
thường dùng khi không biết số lần vòng lặp chạy.
+ do-while:
cú pháp: do{
    //phần thực thi
}while(điều kiện)
nếu điều kiện đúng hoặc sai thì do chạy ít nhất 1 lần dù điều kiện đúng hay sai.
- Từ khóa break: dùng để thoát vòng lặp.
- Từ khóa continue: bỏ qua lần lặp.
# Lưu ý:
- Đối với dạng toán yêu cầu lấy thông tin người dùng nhập (prompt):
+ let inputValue = prompt("Mời nhập giá trị:");
+ console.log("Giá trị người dùng nhập:", inputValue);
+ Kiểm tra kiểu dữ liệu dùng typeof().
+ Mặc định kết quả trả về của prompt là String.
+ Muốn ép kiểu String sang dạng Number(có 2 cách chính): 
C1: let a = "5"; Number(a); 
C2: +a; 
+ parseInt: Đây là phương thức trong JS giúp chuyển String sang dạng số nguyên.
+ parseFloat: chuyển sang dạng số thực.
+ toLowerCase(): Đây là phương thức chuyển chữ in hoa thành in thường.
+ toUpperCase(): Là phương thức chuyển chữ in thường thành chữ in hoa.
