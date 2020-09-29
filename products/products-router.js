//2 create the router 

const express = require('express')
const router = express.Router(); 
// add endpoints

// 4 add endpionts ( products )
//Get /api/products

router.get('/', (req, res) => {
    res.status(200).json({ router: 'products' });
});

module.exports = router