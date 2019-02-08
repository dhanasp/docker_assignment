const express = require('express');
const app = express();
const PORT = 3000;


app.get('/', (req, res) => res.send(
    `<p>Hello<p>`
));



app.get('/todos', (req, res) => res.send(
    
));


app.listen(PORT, () => console.log(`App listening on port ${PORT}`));