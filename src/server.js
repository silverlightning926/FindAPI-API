import express from "express"

import animalData from './assets/animal.json';
import antiMalwareData from './assets/anti-malware.json';

const app = express();

/*
|                  |
V TODO: Return All V

app.get('/', (req, res) => {
    res.status(200).json();
});
*/

app.get('/category/:categoryName', (req, res) => {
    res.status(200).sendFile(__dirname + '/assets/' + req.params.categoryName + '.json');
});

app.listen(8000, () => console.log('Listening on PORT 8000'));