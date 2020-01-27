const Post = require('../models/Post');

module.exports.save = async (req, res) => {
    try {
        const { id_user, message } = req.body;
        const post = await Post.create({ id_user, message });
        return res.json(post);
    } catch (error) {
        return res.status(500);
    }
}