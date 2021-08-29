const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fakeData = require('./fakeData.json');
dotenv.config({ path: './config.env' });

const PORT = process.env.PORT ? process.env.PORT : 8080;
const DATA = fakeData;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/fetchall', (req, res) => {
    res.send(DATA).status(200).end();
});

app.post('/addnew', (req, res) => {
    req.body['id'] = DATA.length + 1;
    DATA.push(req.body);
    res.send(DATA).status(200).end();
});

app.delete('/delete/:id', (req, res) => {
    const index = DATA.findIndex((e) => e.id == req.params.id);
    if (index == -1)
        res.status(404).send('Product not found').end();
    else {
        DATA.splice(index, 1);
        res.send(DATA).status(200).end();
    }
});

app.put('/update/:id', (req, res) => {
    const index = DATA.findIndex((e) => e.id == req.params.id);
    if (index == -1)
        res.status(404).send('Product not found').end();
    else {
        DATA[index] = req.body;
        res.status(200).send(DATA[index]).end();
    }
});

app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
