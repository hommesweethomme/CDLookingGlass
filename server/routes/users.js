const { Router } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {
            username: 'hommesweethomme',
            age: 36
        },
        {
            username: 'jamesstjames',
            age: 500
        },
        {
            username: 'snubull',
            age: 33
        }
    ])
});

module.exports = router;