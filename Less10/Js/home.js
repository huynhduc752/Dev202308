// 1, biến
// khai báo: số, chuỗi, ngày tháng,...
// int x = 5
// var tên_biến = giá trị
// giá_trị => quy định kiểu dữ liệu của biến
// value = số ==> datatype: số
// value = chuỗi ==> datatype: chuỗi
var a1 = 100; // a1 có kiểu dữ liệu dạng số
var a2 = "dev"; // a2  có kiểu dữ liệu dạng chuỗi

// 2, Toán tử
// các phép số học: +, -, * , / , %

var x1 = 10;
var x2 = 50;
var x3 = x1 + x2;
// ==> quy tác phép cộng: 
// số + số ===> số
// chuỗi + chuỗi ===> chuỗi 
// chuỗi + số ===> chuỗi: 10 + '50' = '10' + '50' ='1050'

console.log("giá trị của x3 = ", x3);
console.log("giá trị của x3 = " + x3);


// các phép toán logic
// so sánh: ==, >, < , >=, <=, ===
// điều kiện: &&, ||, !

// khai báo hai số bất nguyên kỳ, tính hiệu số lớn - số bé

//2, cấu trúc điều kiện
// if - else ; switch - case
// cú pháp: đầy đủ, khuyết thiếu, if lồng

// if(điều_kiện){
//      ... các câu lệnh js sẽ đc thực thi nếu điều_kiện = true...
//} else{
//       ... các câu lệnh js sẽ đc thực thi nếu điều_kiện = false...
//}
var st1 = 500;
var st2 = 100;
var hieu;
if(st1 > st2){
    hieu = st1 - st2;
    console.log("hiệu hai số là: st1 - st2 = " + st1 + ' - ' + st2 + ' = ' +  hieu);

}else{
    hieu = st2 -st1;
    console.log("hiệu hai số là: st2 - st1 = " + st2 + ' - ' + st1 + ' = ' +  hieu);
}
//Bt1: biện luận phương trình bậc nhất 1 ẩn: a*x + b = 0 với mọi a
var a = 10;
var b = 100;

if(a == 0){
    // 0*x + b = 0
    if(b == 0){
        console.log("phương trình có vô số nghiệm");
    }else{
        console.log("phương trình có vô nghiệm");
    }
}
else{
    console.log("phương trình có một nghiệm nghiệm: ", -b/a);
}

// khai báo ba c1, c2, c3 là ba cạnh của một tam giác
// biện luận các trường hợp của tam giác

var c1 = 7;
var c2 = 7;
var c3 = 9;


if( (c1 + c2 > c3) && ( c1 + c3 > c2) && (c2 + c3 > c1) )// kiểm tra đk 3 cạnh là của 1 tam giác
{
    if(c1 == c2 && c2 == c3){
        console.log("tam giác đều");
    }else{
        if((c1*c1 + c2*c2 == c3*c3) || (c1*c1 + c3*c3 == c2*c2) || (c3*c3 + c2*c2 == c1*c1) ){
            if( c1 == c2 || c2 == c3 || c1 == c3){
                console.log("tam giác vuông cân");
            }else{
                console.log("tam giác vuông ");
            }
        }
        else{
            if( c1 == c2 || c2 == c3 || c1 == c3){
                console.log("tam giác  cân");
            }else{
                console.log("tam giác thường ");
            }
        }
    }
}
else
    console.log("ba cạnh ko thuộc tam giác");


// btvn2: biện luận pt bậc 2 một ẩn: a*x2 + b*x +c = 0 với mọi a
//

// swicth - case

// vòng lặp và mảng
// for ; while , do -while
// cú pháp
//for(đếm ; điều_kiện ; hành_động){
//          thân for: js
//}

// thứ tự for: 
// b1: khởi tạo tại biến đếm
// b2: check điều kiện : 
//          điều kiện đúng : thực thi thân for = > chạy hành_động => quay trở lại b2
//          điều kiện sai  : dừng for / kết thúc

var von = 10;
for(var i = von; i > 0; i--){
    console.log("còn đánh được");
}
console.log("hết vốn rồi, vốn = 0");
for(var i = 0; i < 10; i++){
    console.log(i);
}
console.log(1);
console.log(2);
console.log(3);

// mảng: 
// khái niệm: tập các phần tử (bất kỳ)
// đặc điểm: mỗi phần tử đc đánh index từ 0 cho tới cuối-1
//           tương tác với các phần tử qua index: tên_mảng[index]
// khai báo: 
    var array1 = new Array();
    var array2 = [1, 2 , 3 ,'8', "6", "7"];
    console.log("phần thử có index = 4 có giá trị là: ", array2[4]);
    var xx1 = array2[2]; // xx1 = 3
    var xx2 = array2[3]; // xx2 = '4'

    console.log("phần thử có index = 4 có giá trị là: ", array2[0]);

    console.log("phần thử có index = 4 có giá trị là: ", array2[1]);
    console.log("phần thử có index = 4 có giá trị là: ", array2[5]);

    for(var i = 0; i < array2.length; i++){
        console.log(array2[i]);
    }

    var arr = [1, 5, 84, 85, 9, 4, 6];
    // log ra các số lẻ trong mảng arr
    for(var i = 0; i < array2.length; i++){
        if(array2[i] %2 != 0){
            console.log('test arr: ', array2[i]);
        }
    }


// bt: cho một mảng số bất kỳ, yêu cầu tính tổng tất cả cá giá trị trong mảng
var arrNumber =  [1, 2 , 3 ,'8', "6", "7"];
var sum = "0";
for(var i = 0; i < arrNumber.length; i++){
    sum = parseInt(sum) + parseInt(arrNumber[i]);
}
console.log('tổng của mảng arrNumber là: ', sum);

//btvn1.0: tính tích tất cả các phần tử (convert về số)
//      tính tổng và tích các phần tử ở vị trí chẵn
//btvn2.0: triển khai ví dụ về switch-case/if-else (số ngày trong năm/tháng)