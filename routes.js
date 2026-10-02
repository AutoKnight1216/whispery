const express = require('express');
const router = express.Router();
const path = require('path');
const { sendError } = require('./utils');

const error = path.join(__dirname, 'views', 'error.ejs'); 
const level1 = path.join(__dirname, 'views', 'level1.ejs'); 
const hints = path.join(__dirname, 'views', 'hints.ejs'); 
const level2 = path.join(__dirname, 'views', 'level2.ejs'); 
const level3 = path.join(__dirname, 'views', 'level3.ejs'); 
const level4 = path.join(__dirname, 'views', 'level4.ejs'); 
const level5 = path.join(__dirname, 'views', 'level5.ejs');
const level6 = path.join(__dirname, 'views', 'level6.ejs');
const level7 = path.join(__dirname, 'views', 'level7.ejs');
const level8 = path.join(__dirname, 'views', 'level8.ejs');
const level9 = path.join(__dirname, 'views', 'level9.ejs');
const level10 = path.join(__dirname, 'views', 'level10.ejs');
const thinking = path.join(__dirname, 'views', 'FATE.ejs');
const WIN = path.join(__dirname, 'views', 'win.ejs');

router.get('/', (req, res) => {
    res.render(level1)
})

router.get('/hints', (req, res) => {
    res.render(hints)
})

router.get('/jdkdjkd/1', (req, res) => {
    res.cookie('checks', JSON.stringify({
        first: true,
        second: false,
        third: false
    }), {
        signed: true,
        secure: true,
        sameSite: 'none',
        maxAge: 24 * 60 * 60 * 1000
    });
    res.redirect('/poggaming')
})

router.get('/poggaming', (req, res) => {
    res.render(level2)
})

router.get('/thisisthecodereplacepoggamer', (req, res) => {
    res.render(level3)
})

router.get('/thisisthecodereplacepoggamer/1216', (req, res) => {
    res.render(level4)
})

router.get('/jdkdjkd/2', (req, res) => {
    res.cookie('checks', JSON.stringify({
        first: true,
        second: true,
        third: false
    }), {
        signed: true,
        secure: true,
        sameSite: 'none',
        maxAge: 24 * 60 * 60 * 1000
    });
    res.redirect('/robey')
})

router.get('/robey', (req, res) => {
    res.render(level5)
})

router.get('/robey/100', (req, res) => {
    res.render(level6)
})

router.get('/robey/100/millisecond', (req, res) => {
    res.redirect('/robey/100/milliseconds')
})

router.get('/robey/100/milliseconds', (req, res) => {
    res.render(level7)
})

router.get('/theendisnear', (req, res) => {
    res.redirect('/theendishere')
})

router.get('/theendishere', (req, res) => {
    res.render(level8)
})

router.get('/theendishere/126657080', (req, res) => {
    res.render(level9)
})

router.get('/jdkdjkd/3', (req, res) => {
   res.cookie('checks', JSON.stringify({
        first: true,
        second: true,
        third: true
    }), {
        signed: true,
        secure: true,
        sameSite: 'none',
        maxAge: 24 * 60 * 60 * 1000
    });
    res.redirect('/autoknight/whispery/FATE')
})

router.get('/autoknight/whispery/FATE', (req, res) => {
    res.render(level10)
})

router.get('/jdkdjkd/thinking', (req, res) => {
    const checks = req.signedCookies.checks;

    const FirstCheck = checks?.first ?? false;
    const SecondCheck = checks?.second ?? false;
    const ThirdCheck = checks?.third ?? false;
    
    res.render(thinking, { FirstCheck, SecondCheck, ThirdCheck})
})

router.get('/husehfisuhfisf/wdjwiadiaudhuawdhuiahduid/adhadhiudhwuidhuf/GG', (req, res) => {
    res.render(WIN)
})

router.use((req, res) => {
    sendError(res, error)
})

module.exports = { router, FirstCheck, SecondCheck, ThirdCheck }
