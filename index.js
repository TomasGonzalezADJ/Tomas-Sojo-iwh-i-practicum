const express = require('express');
const axios = require('axios');
require('dotenv').config(); // Para manejar variables de entorno

const app = express();

// Configuración del motor de plantillas
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PRIVATE_APP_ACCESS = 'pat-na1-556adc7f-e66e-4dca-8581-58da4af5318f'; // Inserta tu token privado aquí, pero NO lo subas al repositorio.



// RUTA 1: Página principal que muestra los datos de los objetos personalizados
app.get('/', async (req, res) => {
    const customObjectsUrl = 'https://api.hubapi.com/crm/v3/objects/2-37313391?properties=nome,type,price';
    const headers = {
        Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
        'Content-Type': 'application/json',
    };

    const params = {
        properties: ['nome', 'type', 'price'] // Add the property names you want here
      }

    try {
        const response = await axios.get(customObjectsUrl, { headers, params });
        const customObjects = response.data.results || []; // Validar resultados
        console.log(customObjects)
        res.render('homepage', { title: 'Custom Objects', objects: customObjects });
    } catch (error) {
        console.error('Error al obtener los objetos:', error.response?.data || error.message);
        res.status(500).send('Error al obtener los objetos personalizados.');
    }
});

// RUTA 2: Página con formulario para crear o actualizar datos
app.get('/form', (req, res) => {
    res.render('form', { title: 'Crear/Actualizar Objeto Personalizado' });
});

// RUTA 3: Crear o actualizar datos de objetos personalizados
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
        res.redirect('/');
    } catch (error) {
        console.error('Error al crear o actualizar el objeto:', error.response?.data || error.message);
        res.status(500).send('Error al crear o actualizar el objeto personalizado.');
    }
});

// Iniciar el servidor en localhost
app.listen(3000, () => console.log('Listening on http://localhost:3000'));





