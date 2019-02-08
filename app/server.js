const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const request = require('request');

const todo_App = process.env.TODO_APP;


app.get('/', (req, res) => res.send(
    `<p>Hello<p>`
));


app.get('*', (req, res) => {
    let reqUrl = `http://${process.env.DNS_NAME}:${process.env.PORT}${req.url}`;
    console.log(reqUrl);
    request.get({url: reqUrl},
        function (err, response, body) {
            res.send(body);
        }
    )
});



// app.post('*', (req, res) => {
//     let reqUrl = `http://${process.env.DNS_NAME}:${process.env.PORT}${req.url}`;
//     console.log(reqUrl);
//     request.post({url: reqUrl},
//
//         function (err, response, body) {
//             res.send(body);
//         }
//     )
// });


app.listen(PORT, () => console.log(`App listening on port ${PORT}`));