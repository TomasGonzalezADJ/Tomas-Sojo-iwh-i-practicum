const express = require('express');
const axios = require('axios');
require('dotenv').config(); // To handle environment variables

const app = express();

// Template engine configuration
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PRIVATE_APP_ACCESS = process.env.PRIVATE_APP_ACCESS; // Insert your private token here, but DO NOT push it to the repository.

// ROUTE 1: Main page that displays custom object data
app.get('/', async (req, res) => {
    const customObjectsUrl = 'https://api.hubapi.com/crm/v3/objects/2-37313391?properties=nome,type,price';
    const headers = {
        Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
        'Content-Type': 'application/json',
    };

    const params = {
        properties: ['nome', 'type', 'price'], // Add the property names you want here
    };

    try {
        const response = await axios.get(customObjectsUrl, { headers, params });
        const customObjects = response.data.results || []; // Validate results
        console.log('Custom objects fetched successfully:', customObjects);
        res.render('homepage', { title: 'Custom Objects', objects: customObjects });
    } catch (error) {
        console.error('Error fetching custom objects:', error.response?.data || error.message);
        res.status(500).send('Error fetching custom objects.');
    }
});

// ROUTE 2: Page with a form to create or update data
app.get('/update', (req, res) => {
    res.render('update', { title: 'Update Custom Object Form | Integrating With HubSpot I Practicum' });
});

// ROUTE 3: Create or update custom object data
app.post('/form', async (req, res) => {
    const createOrUpdateUrl = 'https://api.hubapi.com/crm/v3/objects/2-37313391';
    const headers = {
        Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
        'Content-Type': 'application/json',
    };

    const newObjectData = {
        properties: {
            nome: req.body.nome || '',
            type: req.body.type || '',
            price: req.body.price || '',
        },
    };

    try {
        await axios.post(createOrUpdateUrl, newObjectData, { headers });
        console.log('Custom object created/updated successfully:', newObjectData);
        res.redirect('/');
    } catch (error) {
        console.error('Error creating/updating custom object:', error.response?.data || error.message);
        res.status(500).send('Error creating/updating custom object.');
    }
});

// Start the server on localhost
app.listen(3000, () => console.log('Listening on http://localhost:3000'));
