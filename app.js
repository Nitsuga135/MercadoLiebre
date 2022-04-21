const express = require('express');
const app = express();

const path = require ('path');
const publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));
app.get('/home', function(req, res){
    res.sendFile(path.join(__dirname, './views/index.html'));
});
app.listen(process.env.PORT || 5000, ()=>console.log("levantando puerto 5000"));

