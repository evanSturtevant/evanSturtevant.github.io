getLabs();

function getLabs(){
    var fs = require('fs');
    var files = fs.readdirSync('./Labs');
    console.log(files);
}