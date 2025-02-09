const express = require('express');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const mainRoutes = require('./routes/mainRoutes');
const authRoutes = require('./routes/authRoutes');
const path = require('path');


const { logoutAdmin } = require('./controllers/authController')

require('dotenv').config();

const app = express();
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/',mainRoutes)

app.use('/admin', authRoutes);
//LogOut Admin
app.use('/logout',logoutAdmin)

// app.use('/api/auth', authRoutes);
// app.use('/api/blogs', blogRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
