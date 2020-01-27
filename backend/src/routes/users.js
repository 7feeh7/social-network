const User = require('../controllers/User');
const { Router } = require('express');
const router = Router();

router.post('/users', (req, res) => {
    User.save(req, res);
});

module.exports = router;
