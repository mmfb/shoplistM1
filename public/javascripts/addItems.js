function addItem() {
    var item = document.getElementById("item").value;
    $.ajax({
        url:"/api/shoplists/1/items",
        method:"post",
        data: {
            item:item
        },
        success : function(res,status) {
            if (res.status == "ok")
                 document.getElementById("msg").innerHTML = "Item "+
                                    item+" inserido";
            else console.log(res.status);
        },
        error : function(err) {
            console.log(err);
        }
    })
}