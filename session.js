var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('views','./views')
app.set('views engine','ejs')
app.get('/fruit',(req,res)=>{
    res.render('fruit',{
        fruits:[{name:'banana',img:'img/banana.jpg'},{name:'apple',img:'img/apple.jpg'}]
    })
});
app.listen(8000)