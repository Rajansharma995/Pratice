const User = require('../models/models.user');

exports.createUser = async (req, res, next) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password || !role) {
            throw new Error('All fields are required');
        }

        await User.create({ name, email, password, role });
        res.status(200).json({ message: 'User created successfully' });
    } catch (err) {
        next(err);
    }
};

exports.showUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        next(err);
    }
};