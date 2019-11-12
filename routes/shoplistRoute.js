var express = require('express');
var router = express.Router();
var shoplistsDAO = require("../models/shoplistsDAO");


router.get('/:shoplistId/items', function(req, res, next) {
    console.log(req.params.shoplistId);
   shoplistsDAO.getItems(req.params.shoplistId, function(items) {
        res.send(items);
   })
});

router.post('/:shoplistId/items', function(req, res, next) {
    var data = req.body;
    console.log(data);
    shoplistsDAO.saveItem(req.params.shoplistId,data.item,
        function(result) {
            res.send(result);
        })    
});

module.exports = router;
