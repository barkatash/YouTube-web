const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const usersFilePath = path.join(__dirname, 'users.json');

const loadUsers = () => {
    if (fs.existsSync(usersFilePath)) {
        const data = fs.readFileSync(usersFilePath);
        return JSON.parse(data);
    }
    return [];
};

const saveUsers = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 4));
};

app.post('/api/users', (req, res) => {
    const { username, displayName, password } = req.body;
    const users = loadUsers();
    const newUser = { username, displayName, password };
    users.push(newUser);
    saveUsers(users);
    res.status(201).json({ message: 'User added successfully!' });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const users = loadUsers();
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.status(200).json({ message: 'Login successful!' });
    } else {
        res.status(401).json({ message: 'Invalid credentials.' });
    }
});

// Serve the React frontend
app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
