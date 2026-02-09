const express = require('express');
const cors = require('cors');
const path = require('path');
const apiRoutes = require('./api');

const app = express();

app.use(cors({
    origin: [
        'http://127.0.0.1:5173',
        'http://localhost:5173',
        'http://0.0.0.0:5173'
    ]
}));

app.use(express.json());

app.use('/api', ...apiRoutes);

app.use(express.static(path.join(__dirname, "build")));

app.use((req, res) => {
    if(req.path.startsWith('/api')) {
        return res.status(404).end();
    }
    res.sendFile(path.join(__dirname, "build", "index.html"))
});


app.listen(3001, () => {
    console.log('running');
})