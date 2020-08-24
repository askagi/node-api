const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');


// Iniciando o App
const app = express();
app.use(express.json()); // permite que dados sejam enviados no formato JSON
app.use(cors());

// Iniciando o Banco de Dados
mongoose.connect("mongodb://localhost:27017/nodeapi", {useUnifiedTopology: true, 
useNewUrlParser: true});

requireDir("./src/models");

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);