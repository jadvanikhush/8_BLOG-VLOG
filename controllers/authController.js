const User = require('../models/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Admin registration (only once)
exports.registerAdmin = async (req, res) => {
    const { email, password } = req.body;
    try {
        let admin = await User.findOne({ email });
        if (admin) return res.status(400).json({ message: 'Admin already exists' });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        admin = new User({
            email,
            password: hashedPassword,
        });

        await admin.save();
        res.json({ message: 'Admin registered successfully' });
    } catch (error) {
        res.status(500).json({ error : error.message });
    }
};

// Admin login
exports.loginAdmin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await User.findOne({ username });
        if (!admin) return res.status(404).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) return res.status(404).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: admin._id, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'Strict', maxAge: 3600000 });
        console.log("Logged in successfully")

        res.redirect("/admin/dashboard")

    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Admin logout
exports.logoutAdmin = (req, res) => {
    res.clearCookie('token');
    console.log("logout")
    res.redirect('/');
};
