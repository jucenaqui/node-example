const app = require('./index.js');
const mongoose = require('mongoose');

const port = 3000;

mongoose.connect('mongodb://localhost:27017/musify', function(err, res){
    if (err) {
        console.log(err);
    } else {
        console.log('se conecto correctamente a la base de datos');
        app.listen(port, function() {
            console.log(`servidor corriendo en http://localhost:${port}/api`);
        });
    }
});


