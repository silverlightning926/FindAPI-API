import express from "express"
import data from './data.json'

const app = express();

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data);
});

app.get('/category/:categoryName', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data[req.params.categoryName]);
});

app.listen(8000, () => console.log('Listening on PORT 8000'));