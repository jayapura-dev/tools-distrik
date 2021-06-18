const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const hbs = require('hbs');
const path = require('path');
const app = express();

const assets = path.join(__dirname, './assets/');
const viewPages = path.join(__dirname, './templates/page');
const viewPartials = path.join(__dirname, './templates/partials');

// Import Routes
const public = require('./routes/public');

dotenv.config({ path: './config.env' });

const port = process.env.PORT;

// Koneksi Database
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true
}).then(() => console.log('DB Connected'));

// Set Template dan Partial View
app.set('view engine','hbs');
app.set('views', viewPages);
hbs.registerPartials(viewPartials);

// Set Static File (Assets)
app.use(express.json());
app.use(express.static(assets));

// Hit Route
app.use('/', public);

app.listen(port, () => console.log(`Server running on port ${port}`));
