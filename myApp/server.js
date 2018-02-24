/**
 * Created by amrmishr on 2/24/18.
 */
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../myApp')));
app.get('/**',function (req,res) {
   res.sendFile(__dirname+'/index.html');
});
app.listen('3000',()=>{console.log('server started at 3000 port')});


