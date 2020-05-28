const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const {animals} = require('./data/animals.json');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array
app.use(express.urlencoded({extended: true}));
// parse incoming JSON
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/',htmlRoutes);
//middleware to un gate files/make 'public' static resource
app.use(express.static('public'));




















app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
app.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, './public/animals.html'));
})
app.get('/zookeepers',(req,res) => {
    res.sendFile(path.join(__dirname, './public/zookeepers.html'));
})
app.listen(PORT, () => {
    console.log(`API server now on port`)
});