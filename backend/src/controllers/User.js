const User = require('../models/User');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

module.exports.save = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password: bcrypt.hashSync(password, salt) });
        return res.json({ msg: 'Cadastro realizado com sucesso.'});
    } catch (error) {
        return res.json({ msg: `Erro ao cadastrar: ${error}.` });
    }
}

module.exports.update = async (req, res) => { }