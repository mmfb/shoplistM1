var express = require('express');
var router = express.Router();

var items = ["Batatas","Cebolas","Pão"];

router.get('/:shoplistId/items', function(req, res, next) {
    console.log(req.params.shoplistId);
    res.send(items);
});

router.post('/:shoplistId/items', function(req, res, next) {
    var data = req.body;
    console.log(data);
    items.push( data.item );
    res.send({status:"ok"});
});

module.exports = router;
