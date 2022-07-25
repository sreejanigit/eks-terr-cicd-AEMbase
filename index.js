const express = require('express');
const app = express();
var path = require('path');
const port = 3000;

app.get('/', function(req, res){
    var options = {
        root: path.join(__dirname)
    };
      
    //var fileName = 'apprunner-image.png';
    var fileName = 'index.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
