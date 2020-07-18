const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('viwes', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', (req, res) => {
    res.render('index.html');
});

app.listen(port, () => {
    console.log('Runing...\nPort: ' + port);
});
