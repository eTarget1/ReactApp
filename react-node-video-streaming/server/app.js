const express = require('express')
const fs = require('fs')
const path = require('path')
const cors = require('cors');

const app = express();

const videos = [
    {
        id: 0,
        poster: '/video/0/poster',
        duration: '3 mins',
        name: 'Sample 1'
    },
    {
        id: 1,
        poster: '/video/1/poster',
        duration: '4 mins',
        name: 'Sample 2'
    },
    {
        id: 2,
        poster: '/video/2/poster',
        duration: '2 mins',
        name: 'Sample 3'
    },
];

// add after 'const app = express();'

app.get('/video', (req, res) => {
    res.sendFile('assets/0.mp4', {root: __dirname})
})

app.use(cors());
app.get('/videos', (req, res) => res.json(videos));

app.get('/video/:id/data', (req, res) => {
    const id = parseInt(req.params.id, 10);
    res.json(videos[id]);
});








app.listen(3500, () => {
    console.log('Listening on port 3500')
})


