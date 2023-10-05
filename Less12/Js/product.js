var listItems = [
    {
        id : 1,
        name : "sản phẩm 1",
        img : "https://devmaster.edu.vn/uploads/images/2022/Devmaster-frontend%20(1).png",
        content: "test devmaster html css",
        price : 100000,
        status : true,
        cate: "sản phẩm nam",
        color: "black"
    },
    {
        id : 2,
        name : "sản phẩm 7",
        img : "https://devmaster.edu.vn/uploads/images/2022/Devmaster-frontend%20(1).png",
        content: "test devmaster html css",
        price : 200000
    },
    {
        id : 3,
        name : "sản phẩm 6",
        img : "https://devmaster.edu.vn/uploads/images/2022/Devmaster-frontend%20(1).png",
        content: "test devmaster html css",
        price : 500000
    },
    {
        id : 4,
        name : "sản phẩm 5",
        img : "https://devmaster.edu.vn/uploads/images/2022/Devmaster-frontend%20(1).png",
        content: "test devmaster html css",
        price : 800000
    },
    {
        id : 5,
        name : "sản phẩm 1",
        img : "https://devmaster.edu.vn/uploads/images/2022/Devmaster-frontend%20(1).png",
        content: "test devmaster html css",
        price : 900000
    },
    {
        id : 6,
        name : "sản phẩm 7",
        img : "https://devmaster.edu.vn/uploads/images/2022/Devmaster-frontend%20(1).png",
        content: "test devmaster html css",
        price : 5500000
    },
    {
        id : 7,
        name : "sản phẩm 6",
        img : "https://devmaster.edu.vn/uploads/images/2022/Devmaster-frontend%20(1).png",
        content: "test devmaster html css",
        price : 10000000
    },
    {
        id : 8,
        name : "sản phẩm 5",
        img : "https://devmaster.edu.vn/uploads/images/2022/Devmaster-frontend%20(1).png",
        content: "test devmaster html css",
        price :99900000
    },
]

function showItems(size){
    $('#list-items').html('');
    for(let i =0; i < size && i < listItems.length; i++){
        var item = `<div class="col-3">
                <div class="card">
                    <img  src="${listItems[i].img}" class="card-img-top w-100" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${listItems[i].name}</h5>
                    <p class="card-text">${listItems[i].content}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>`;
        $('#list-items').append(item);
        
    }
}

function search(){
    var title = $(".search").val();
    $('#list-items').html('');
// includes: "chuỗi giá trị".includes("giá trị so sánh")
// convert string: uper / lower
// "dev master"  != "dev   master" => replaceAll(" ", "")
    for(let i =0; i < listItems.length; i++){
        if(listItems[i].name.toLowerCase().includes(title.toLowerCase()) ){
            // if(listItems[i].name == title){
            var item = `<div class="col-3">
                <div class="card" id="test-${listItems[i].id}">
                    <img  src="${listItems[i].img}" class="card-img-top w-100" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${listItems[i].name}</h5>
                    <p class="card-text">${listItems[i].content}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>`;
            $('#list-items').append(item);
        }
        
    }
}
function searchPrice(){
    var max = $(".search-price").val();
    $('#list-items').html('');
    for(let i =0; i < listItems.length; i++){
        if(listItems[i].price <=  parseInt(max) ){
            var item = `<div class="col-3">
                <div class="card" id="test-${listItems[i].id}">
                    <img  src="${listItems[i].img}" class="card-img-top w-100" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${listItems[i].name}</h5>
                    <p class="card-text">${listItems[i].content}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>`;
            $('#list-items').append(item);
        }
        
    }
}