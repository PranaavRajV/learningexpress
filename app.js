const express = require('express');
const app = express();
const path = require('path')
const bp = require('body-parser');
const adminroutes = require('./routes/admin')
const shoproutes = require('./routes/shop')
app.use(express.static(path.join(__dirname,'public')))
app.use(adminroutes);
app.use(shoproutes);
app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','404.html'));

})

app.use(bp.urlencoded());
app.listen(3000);


