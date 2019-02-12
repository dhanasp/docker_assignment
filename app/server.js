const express = require('express');
const app = express();
const PORT = 3000;
const request = require('request');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => res.send(
    `<p>Hello<p>`
));

const getHtmlTodo = (parsedTodos) => {
    let todosHtml = parsedTodos.map((todo) => (`<li><p>Todo Title: ${todo["name"]}</p> status : ${todo["status"]}</li>`)).join("");
    return `<h5>Your Todos:</h5><ul>${todosHtml}</ul>`;
}


app.get('/todo', (req, res) => {
    let reqUrl = `http://${process.env.DNS_NAME}:${process.env.PORT}${req.url}`;
    let inputForTodo = " <h5>Please Enter todo:</h5> " +
        "<form action='/todo' method='post'>  " +
        "Name: <input type='text' name='name'><br> status : <input type='text' name='status'><br> <input type='submit' value='Submit'><br> " +
        "</form><br> ";

    request.get({url: reqUrl},
        function (err, response, body) {
            if (body) {
                res.send(inputForTodo + getHtmlTodo(JSON.parse(body)))
            }
            if (err) return err;
        })
});


app.post('/todo', (req, res) => {
    let reqUrl = `http://${process.env.DNS_NAME}:${process.env.PORT}${req.url}`;
    const todo ={name: req.body.name, status: req.body.status};
    request.post({url:reqUrl,json:todo}, function(error, response, body) {
            res.send(body);
        });
});


app.listen(PORT, () => console.log(`App listening on port ${PORT}`));