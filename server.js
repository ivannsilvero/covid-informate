require('dotenv').config();
const express = require('express');
const app = express();
const mysql = require('mysql');

app.use(express.urlencoded());

const cnn = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    db: process.env.DATABASE
});

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

app.get('/encuesta', (req, res) => {
    res.render('encuesta');
});

app.post('/resultado', (req, res) => {

    console.log('Peticion POST realizada con éxito');

    let nofiebre = req.body.nofiebre,
        sifiebre = req.body.sifiebre,
        nopolfato = req.body.nopolfato,
        sipolfato = req.body.sipolfato,
        nopgusto = req.body.nopgusto,
        sipgusto = req.body.sipgusto,
        notos = req.body.notos,
        sitos = req.body.sitos,
        nodificil = req.body.nodificil,
        sidificil = req.body.sidificil,
        embarazada = req.body.embarazada,
        cancer = req.body.cancer,
        diabetes = req.body.diabetes,
        ehepatica = req.body.ehepatica,
        renal = req.body.renal,
        respiratoria = req.body.respiratoria,
        cardiologica = req.body.cardiologica
    
    if(nofiebre === 'on'){
        nofiebre = true;
    } if(sifiebre === 'on'){
        nofiebre = false;
    } if(nopolfato === 'on'){
        nopolfato = true;
    } if(sipolfato === 'on'){
        nopolfato = false;
    } if(nopgusto === 'on'){
        nopgusto = true;
    } if(sipgusto === 'on'){
        nopgusto = false;
    } if(notos === 'on'){
        notos = true;
    } if(sitos === 'on'){
        notos = false;
    } if(nodificil === 'on'){
        nodificil = true;
    } if(sidificil === 'on'){
        nodificil = false;
    } if(embarazada === 'on') {
        embarazada = true;
    } else {
        embarazada = false;
    } if(cancer === 'on') {
        cancer = true;
    } else {
        cancer = false;
    } if(diabetes === 'on') {
        diabetes = true;
    } else {
        diabetes = false;
    } if(ehepatica === 'on') {
        ehepatica = true;
    } else {
        ehepatica = false;
    } if(renal === 'on') {
        renal = true;
    } else {
        renal = false;
    } if(respiratoria === 'on') {
        respiratoria = true;
    } else {
        respiratoria = false;
    } if(cardiologica === 'on') {
        cardiologica = true;
    } else {
        cardiologica = false;
    }

    cnn.connect((err) => {
        if(err) return;
        console.log('Conectado con éxito');
        const query = `
        INSERT INTO ${ process.env.DATABASE }.respuesta (fiebre, olfato, gusto, tos, dificultad, embarazada, cancer, diabetes, ehepatica, renal, respiratoria, cardiologica)
        VALUES (${ nofiebre }, ${ nopolfato }, ${ nopgusto }, ${ notos }, ${ nodificil }, ${ embarazada }, ${ cancer }, ${ diabetes }, ${ ehepatica }, ${ renal }, ${ respiratoria }, ${ cardiologica })`;
           
        cnn.query(query, (err, res) => {
            if (err) {
                console.log(`Error en query: ${ err }`);
                return;
            };
            console.log('Información enviada :)');
        });
    });          
    res.status(301).render('resultado');
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${ port }`);
});