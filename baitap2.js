/* 
Bài 2

Input: chọn đối tượng người dùng

Process(pseudocode)
1. DOM tới thẻ select để lấy giá trị
2. Sử dụng lệnh switch case để có thể lựa chọn thành viên trong gia đình
3. xuất kết quả chào thành viên đc chọn

Output: Xin chào + thành viên đc chọn

*/


function greeting() {
    var greeting = document.getElementById('greeting').value;
    var result = document.getElementById('result');

    switch (4) {
        case 1:
            result.innerHTML = "Xin chào " + greeting;
            break;
        case 2:
            result.innerHTML = "Xin chào " + greeting;
            break;
        case 3:
            result.innerHTML = "Xin chào " + greeting;
            break;
        case 4:
            result.innerHTML = "Xin chào " + greeting;
            break;
        default:
            result.innerHTML = "Xin chào ai đó";
            break;
    }
}