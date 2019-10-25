var express = require('express');
var router = express.Router();

router.get('/:shoplistId/items', function(req, res, next) {
    console.log(req.params.shoplistId);
    res.send(["Batatas","Cebolas","Pão"]);
});

module.exports = router;
