const Post = require('../controllers/Post');
const { Router } = require('express');
const router = Router();

router.post('/posts', (req, res) => {
    Post.save(req, res);
});

router.delete('/posts/:id', (req, res) => {
    Post.delete(req, res);
});

module.exports = router;
