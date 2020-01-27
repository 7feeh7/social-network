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

module.exports.update = () => {}

module.exports.delete = async(req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        await post.destroy();
        return res.json({ msg:"Publicação excluida com suceso!" });
    } catch (error) {
        return res.json({ msg: "Erro ao excluir Publicação" }); 
    }
}

module.exports.getById = () => {}