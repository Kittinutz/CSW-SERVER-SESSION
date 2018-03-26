const express = require('express')
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
app.use(bodyParser());

app.use(session({secret: 'keyboard cat', cookie: {maxAge: 60000},resave:true,saveUninitialized:true}))
app.use(function (req, res, next) {
    const sess =req.session;
    sess.desc ='foo';
    if(sess.views) {
        sess.views++
    }else{
        sess.views = 1
    }
    console.log(sess.views);
    next();
})
app.get('/',function (req,res) {
    res.send('Session'+req.session.views+req.session.desc);

})
app.listen(3000, ()=> {
    console.log('server listen on port 3000');
});
