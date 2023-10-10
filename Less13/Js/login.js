var dataUser = [
    {
        id: 1,
        username: "devmaster",
        password: "123456@",
        fullName: "Devmaster 7",
        age :  6
    },
    {
        id: 2,
        username: "javascript",
        password: "12345678@",
        fullName: "Devmaster 8",
        age :  6
    },
    {
        id: 3,
        username: "html",
        password: "123456789@",
        fullName: "Devmaster 6",
        age :  6
    },
    {
        id: 4,
        username: "css",
        password: "123456@",
        fullName: "Devmaster 3",
        age :  6
    }
];

function getInfor(){
    var username = $('[name="uname"]').val();
    var pass = $('[name="psw"]').val();
    preCheck(username, pass)
}

function preCheck(user , pass){
    if(user == '' || user == undefined || pass == ''||pass == undefined){
        alert("username và password không được để trống");
    }else{
        alert("đang tiến hành kiểm tra");
        checkLogin(user, pass);
    }
}

function checkLogin(username, password){ 
    var count = dataUser.length;
    var check = false;
    for(let i = 0 ; i < count ; i++){
        if(username == dataUser[i].username && password == dataUser[i].password){
            // alert("tài khoản mật khẩu chính xác");
            check = true;
        }
        // else{
        //     alert("tài khoản hoặc mật khẩu không chính xác");
        // }
    }
    if(check){
         localStorage.setItem("checkIsLogin", true);
          window.location.href = "file:///D:/H%E1%BB%8CC%20L%E1%BA%ACP%20TR%C3%8CNH/Dev202308/git_dev/Dev202308/Less13/Views/Overview.html";
    } else{
        localStorage.setItem("checkIsLogin", false);
            alert("tài khoản hoặc mật khẩu không chính xác");
    }
}
function preCheckLogin(){
    
    var isLogin = localStorage.getItem("checkIsLogin");
    if(isLogin == "true"){
        alert("da dang nhap tu trc")
        window.location.href = "file:///D:/H%E1%BB%8CC%20L%E1%BA%ACP%20TR%C3%8CNH/Dev202308/git_dev/Dev202308/Less13/Views/Overview.html";
    }
    else{
        console.log("chưa đăng nhập")
    }
}
// preCheckLogin();
$.ajax({
    url: "http://priceboard.bsc.com.vn/Acc/AT",
        success: function(result){
            console.log(result);
        }
    }
  )
