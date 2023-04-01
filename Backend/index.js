const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

app.get('/clothes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const clothes = require('./data/clothes.json', { root: __dirname });
    const found = clothes.find((cloth) => cloth.id === id);
    res.json(found);
});

app.get('/clothes', (req, res) => {
    const clothes = require('./data/clothes.json', { root: __dirname });
    const filtered = clothes.map((cloth) => ({
        id: cloth.id,
        title: cloth.title,
        image: cloth.image,
    }));
    res.json(filtered);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    res.setHeader('Content-Type', 'application/json');
    if (username === 'admin' && password === '123') {
        res.json({ success: true });
    } else {
        res.status(401).json({ error: 'Invalid username or password' });
    }
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
