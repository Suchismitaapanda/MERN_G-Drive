const express = require('express');
const router = express.Router();

// router.get('/test', (req, res) =>{
//     res.send('user Test route');
// })

router.get('/register', (req, res)=>{
    res.render('register');
})

module.exports = router;
