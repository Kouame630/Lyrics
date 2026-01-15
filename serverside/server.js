require('dotenv').config({path: '.env', quiet: true})
const express = require('express');
const cors = require('cors')
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));
app.use(express.static('../Public')); // Serve static files if needed
app.use(express.static('../Public/images')); // Serve static files if needed
app.use(express.static('../Produits')); // Serve static files if needed



// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Public', 'index.htm'));
});

// app.get('/requests', (req, res) => {
//   res.json({ message: 'Data from server' });
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../Public', 'style.css'));
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../Public', 'app.js'));
// });

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../Public', 'produits.json'));
// });

// Configure the Nodemailer transporter (using a test account from Ethereal for example)
// For production, use a real SMTP service like Gmail,

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, // Example: 'smtp.gmail.com' for Gmail
    port: process.env.EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER, // Replace with your SMTP username
        pass: process.env.EMAIL_PASS,  // Replace with your SMTP password
    }
});

// Handle the form submission
app.post('/requests', (req, res) => {
    const { name, tel, contacts, order } = req.body;

    const mailOptions = {
        from: `${name}`, // Sender address and name from the form
        to: process.env.EMAIL_USER, // Your email address to receive messages
        subject: `Nouvelle commande de ${name}`,
        html: `<p><strong>Nom:</strong> ${name}</p>
               <p><strong>Numero de telephone:</strong> ${tel}</p>
               <p><strong>Contacts:</strong> ${contacts}</p>
               <p><strong>Order:</strong> ${order}</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error:', error);
            res.send('Error sending message.');
        } else {
            console.log('Email sent:', info.response);
            res.send('Message sent successfully!');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
