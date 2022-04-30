/* 
Bài 1

Input: Nhập 3 số nguyên

Process(pseudocode)
1. DOM tới các input để lấy value
2. Sử dụng các lệnh if else lồng vào nhau để chứa các trường hợp có thể xảy ra
3. xuất kết quả ra giao diện theo thứ tự tăng dần

Output: giá trị tăng dần

*/

function sapXep() {
    var fNumber = +document.getElementById('firstNumber').value;
    var sNumber = +document.getElementById('secondNumber').value;
    var tNumber = +document.getElementById('thirdNumber').value;

    var result = document.getElementById('result');

    if (fNumber > sNumber) {
        if (sNumber > tNumber) {
            result.innerHTML = tNumber + ' < ' + sNumber + ' < ' + fNumber;
        } else if (fNumber > tNumber) {
            result.innerHTML = sNumber + ' < ' + tNumber + ' < ' + fNumber;
        } else {
            result.innerHTML = sNumber + ' < ' + fNumber + ' < ' + tNumber;
        }
    } else if (sNumber > tNumber) {
        if (tNumber > fNumber) {
            result.innerHTML = fNumber + ' < ' + tNumber + ' < ' + sNumber;
        } else {
            result.innerHTML = tNumber + ' < ' + fNumber + ' < ' + sNumber;
        }
    } else {
        result.innerHTML = fNumber + ' < ' + sNumber + ' < ' + tNumber;
    }
}