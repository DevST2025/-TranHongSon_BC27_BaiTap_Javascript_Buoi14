/* 
Bài 4

Input: Nhập 3 số là cạnh của hình tam giác

Process(pseudocode)
1. DOM tới các input để lấy value
2. Sử dụng cách lệnh if else để chứa các trường hợp có thể xảy ra
3. Th1:nếu 3 cạnh bằng nhau => tam giác đều
   Th2: nếu chỉ 2 canh bằng nhau => tam giác cân
   Th3: Dùng định lý pytago để tìm gia tam giác vuông
4. xuất kết quả ra giao diện kết quả

Output: Các loại tam giác

*/


function guess() {
    var fEdge = +document.getElementById('fEdge').value;
    var sEdge = +document.getElementById('sEdge').value;
    var tEdge = +document.getElementById('tEdge').value;

    var result = document.getElementById('result');
    var hypotenuseF = Math.sqrt((sEdge * sEdge) + (tEdge * tEdge));
    var hypotenuseS = Math.sqrt((fEdge * fEdge) + (tEdge * tEdge));
    var hypotenuseT = Math.sqrt((fEdge * fEdge) + (sEdge * sEdge));

    
    if (fEdge === sEdge || fEdge === tEdge || sEdge === tEdge) {
        result.innerHTML = "Đây là tam giác cân";
    } else if (fEdge === sEdge && fEdge === tEdge && sEdge === tEdge) {
        result.innerHTML = "Đây là tam giác đều";
    } else if (fEdge === hypotenuseF || sEdge === hypotenuseS || tEdge === hypotenuseT) {
        result.innerHTML = "Đây là tam giác vuông"
    } else {
        result.innerHTML = "Đây là tam giác nào đó"
    }
}