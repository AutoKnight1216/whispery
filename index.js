const express = require('express');
const { router } = require('./routes');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const COOKIE_SECRET = 'autoknight'; 
app.use(cookieParser(COOKIE_SECRET));

app.use(express.urlencoded({ extended: true }));

app.use("/static", express.static("static"));
app.use(router);

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`)
})
