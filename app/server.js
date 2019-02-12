const express = require('express');
const app = express();
const PORT = 3000;
const request = require('request');

app.get('/', (req, res) => res.send(
    `<p>Hello<p>`
));

const getHtmlTodo = (parsedTodos) => {
    let todosHtml = parsedTodos.map((todo) => (`<li><p>Todo ${todo["task"]}</p> status : ${todo["done"]}<li>`)).join("");
    return `<h5>Your Todos:</h5><ul>${todosHtml}</ul>`;
}


app.get('/todos', (req, res) => {
    let reqUrl = `http://${process.env.DNS_NAME}:${process.env.PORT}${req.url}`;

    let inputForTodo = " <h5>Please Enter todo:</h5> " +
        "<form action='/save-todo' method='post'>  " +
        "Name: <input type='text' name='name'><br> status : <input type='text' name='details'><br> <input type='submit' value='Submit'><br> " +
        "</form><br> ";

    request.get({url: reqUrl},
        function (err, response, body) {
        if(body){res.send(inputForTodo + getHtmlTodo(JSON.parse(body)))}
        if (err) return err;
        })
});


app.post('/save-todo', (req, res) => {
    let reqUrl = `http://${process.env.DNS_NAME}:${process.env.PORT}${req.url}`;
    console.log(reqUrl);
    request.post({url: reqUrl}, {form: req.body},
        function (err, response, body) {
            res.send(body);
        }
    )
});


app.listen(PORT, () => console.log(`App listening on port ${PORT}`));