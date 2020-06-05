const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/estadisticas', (req, res) => {
    res.render('estadisticas');
});

app.get('/contactos', (req, res) => {
    res.render('contactos');
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${ port }`);
});