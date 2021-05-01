const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')


const NAMES = [
    'Shmi Skywalker',
    'Anakin Skywalker',
    'Darth Vader',
    'Luke Skywalker',
    'Leia Organa',
    'Han Solo',
    'Ben Solo',
    'Kylo Ren'
];
const randomName = () => (
    NAMES[Math.floor(Math.random() * NAMES.length)]
)


const initialDbData = () => {
    try {
        const connection = mysql.createConnection(config)
        const sql = `INSERT INTO people(name) values('${randomName()}')`
        connection.query(sql)
        connection.end()
    }
    catch (err) {
        console.log(err)
    }
}
initialDbData();

app.get('/', (req, res) => {
    var html = '<h1>Full Cycle</h1>';
    try {
        const connection = mysql.createConnection(config)
        connection.query('SELECT * FROM `people`', (err, rows) => {
            connection.end()
            if (err) {
                console.log('ERR 1', err)
                return res.send(html)
            }
            html += '<ul>'
            for (let row of rows) {
                html += `<li>${row.name}</li>`;
            }
            html += '</ul>'
            return res.send(html)
        });

    } catch (err) {
        console.log('ERR 2', err)
        return res.send('deu ruim!!!')
    }

})

app.get('/health', (req, res) => {
    res.send('ok')
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})
