const express = require('express');
const app = express();
const hbs = require('hbs');

hbs.registerPartials(__dirname + '../../views/parciales');
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

app.get('/encuesta', (req, res) => {
    res.render('encuesta');
});

module.exports = {
    app
}