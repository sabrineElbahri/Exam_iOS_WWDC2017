//Constantes
const express = require('express');
const bodyParser = require('body-parser');
const minify = require('express-minify');
const pg = require('pg');
const app = express();

//Middleware
app.use(minify());
app.use("/public", express.static('./public/'));
app.use("/node_modules", express.static('./node_modules/'));
app.use(bodyParser.json());

//DB
const connectionString = 'postgres://user:password@localhost:5432/DB';
var client = new pg.Client(connectionString);
client.connect();


//API
app.get('/api/news', (req, res) => {
    const results = [];
    const query = client.query('SELECT data FROM datas');
    query.on('row', (row) => { results.push(row.data)});
    query.on('end', () => {
        return res.json(results);
    });
});

app.post('/api/news', (req, res) => {
    if (req.body == null) {
        return res.status(500).send('NO_DATA');
    }
    const token = req.header('Authorization').split(' ')[1];
    const results = [];
    const queryToken = client.query('SELECT id FROM tokens WHERE token=$1', [token]);
    queryToken.on('row', (row) => { results.push(row)});
    queryToken.on('end', () => {
        if (results.length > 0) {
            const query = client.query('INSERT INTO datas(data, token) values($1, $2)', [req.body, results[0].id]);
            query.on('end', () => {
                return res.send(req.body);
            });
        }
        else
            return res.status(401).send('FORBIDDEN_PUT_A_TOKEN');
    });


});

app.listen(4242, () => {
    console.log('listen on port 4242');
});