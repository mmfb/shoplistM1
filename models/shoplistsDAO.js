var items = ["Batatas","Cebolas","Pão"];

module.exports.getItems = function(shoplistId, callback) {
    callback(items);
}

module.exports.saveItem = function(shoplistId, item, callback) {
    
    items.push(item);
    callback({status:"ok",item:item});
}