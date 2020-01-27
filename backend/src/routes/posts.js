const Post = require('../controllers/Post');
const { Router } = require('express');
const router = Router();

router.post('/posts', (req, res) => {
    Post.save(req, res);
});

module.exports = router;
