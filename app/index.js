const express = require('express');
const { MongoClient } = require("mongodb");
const cors = require('cors');
const { PORT=3000, MONGODB_URL } = process.env;

const client = new MongoClient(MONGODB_URL);

const app = express();

app.use(cors());

app.get('/', (req, res) => res.send("Hello world!"));

app.get('/var', (req, res) => res.json({ foo: "bar" }))

client.connect().then(() => {
    console.log("Mongo DB connected");
    app.listen(PORT, () => console.log("Listening on port", PORT));
})

