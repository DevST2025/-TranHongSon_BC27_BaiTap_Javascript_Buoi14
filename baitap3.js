/* 
Bài 3

Input: Nhập 3 số nguyên

Process(pseudocode)
1. DOM tới các input để lấy value
2. Cho 3 số nguyên vừa nhập chia lấy phần dư với 2
3. Tạo biến count = 0;
4. Sử dụng cách lệnh if để tìm ra số chẳn bằng cách phần dư ra trùng với 0 thì count sẽ tăng 1 giá trị, và số lẻ sẽ lấy 3 trừ đi
5. xuất kết quả ra giao diện kết quả 

Output: Có ? số chẳn và ? số lẻ

*/


function counting() {
    var fNumber = +document.getElementById('fNumber').value;
    var sNumber = +document.getElementById('sNumber').value;
    var tNumber = +document.getElementById('tNumber').value;

    var result = document.getElementById('result');

    var a = fNumber % 2;
    var b = sNumber % 2;
    var c = tNumber % 2;
    
    var count = 0;

    if (a === 0) {
        count++;
    }
    if (b === 0) {
        count++;
    }
    if (c === 0) {
        count++;
    }
       
    console.log(count);
    result.innerHTML = "Có " + count + " số chẳn và " + (3 - count) + " số lẻ."


}