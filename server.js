const app = require('./index.js');

const port = 3000;
app.listen(port, function(){
    console.log(`servidor corriendo en http://localhost:${port}/api`);
});