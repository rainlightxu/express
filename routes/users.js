var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = [
    {id:1,name:"张三"},
    {id:2,name:"李四"},
    {id:3,name:"王五"},
    {id:4,name:"赵六"},
  ]
  res.send(users);
});

module.exports = router;
