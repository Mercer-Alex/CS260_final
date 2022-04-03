const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/heywow', {
    useNewUrlParser: true
});

const updateSchema = new mongoose.Schema({
    name: String,
    update: String,
    contact: String,
});

const Update = mongoose.model('Update', updateSchema);

app.post('/api/update', async (req, res) => {
    console.log(req.body);
    const update = new Update({
        name: req.body.name,
        update: req.body.update,
        contact: req.body.contact,
    });
    try {
        await update.save();
        res.send(update);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});


app.get('/api/update', async (req, res) => {
    try {
        let updates = await Update.find();
        res.send(updates);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.listen(2600, () => console.log('Server listening on port 2600!'));