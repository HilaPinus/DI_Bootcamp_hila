const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const router = express.Router();


var shopping_list = ''

router.get('/',function(req,res){
  console.log(shopping_list)
  var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
  res.send(html.replace('{items}', shopping_list));
});

router.post('/update_shopping_list', function(req,res){
  shopping_list = `${shopping_list} <li><h3>${req.body.item}: ${req.body.amount}</h3></li>\n`;
  res.redirect('/');
});


app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');