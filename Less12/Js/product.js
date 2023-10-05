var listItems = [
    {
        id : 1,
        name : "sản phẩm 1",
        img : "https://devmaster.edu.vn/uploads/images/2022/Devmaster-frontend%20(1).png",
        content: "test devmaster html css"
    },
    {
        id : 2,
        name : "sản phẩm 7",
        img : "https://devmaster.edu.vn/uploads/images/2022/Devmaster-frontend%20(1).png",
        content: "test devmaster html css"
    },
    {
        id : 3,
        name : "sản phẩm 6",
        img : "https://devmaster.edu.vn/uploads/images/2022/Devmaster-frontend%20(1).png",
        content: "test devmaster html css"
    },
    {
        id : 4,
        name : "sản phẩm 5",
        img : "https://devmaster.edu.vn/uploads/images/2022/Devmaster-frontend%20(1).png",
        content: "test devmaster html css"
    },
    {
        id : 5,
        name : "sản phẩm 1",
        img : "https://devmaster.edu.vn/uploads/images/2022/Devmaster-frontend%20(1).png",
        content: "test devmaster html css"
    },
    {
        id : 6,
        name : "sản phẩm 7",
        img : "https://devmaster.edu.vn/uploads/images/2022/Devmaster-frontend%20(1).png",
        content: "test devmaster html css"
    },
    {
        id : 7,
        name : "sản phẩm 6",
        img : "https://devmaster.edu.vn/uploads/images/2022/Devmaster-frontend%20(1).png",
        content: "test devmaster html css"
    },
    {
        id : 8,
        name : "sản phẩm 5",
        img : "https://devmaster.edu.vn/uploads/images/2022/Devmaster-frontend%20(1).png",
        content: "test devmaster html css"
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

    for(let i =0; i < listItems.length; i++){
        if(listItems[i].name == title){
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
}