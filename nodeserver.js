const fs = require('fs');

const path = require('path');

const mymessage = 'Hello, I am NodeJS!';

const myresponder = (req,res) => {
    let filePath = path.join(__dirname, '..', '/public/index.html');
    console.log(filePath);
    fs.readFile(filePath,null,(err,data)=>{
        if (err){
            console.log(err);
            res.end('Valami elromlott!');
            return;
        }
        res.end(data);
    });
    
};

module.exports = {
    message: mymessage,
    responder: myresponder
};