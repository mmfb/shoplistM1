// TODO: get this value from client interaction
var shoplistId = 1;

window.onload = function () {
    var itemListElem = document.getElementById("itemList");
    var intId = setInterval(getShoplistItems, 3000);

    function getShoplistItems() {
        $.ajax({
            url: "/api/shoplists/" + shoplistId + "/items/",
            method: "get",
            success: function (res, status) {
                var html = "";
                for (i in res) {
                    html += "<li>" + res[i] + "</li>";
                }
                itemListElem.innerHTML = html;
            },
            error: function () {

            }
        });
    }
}