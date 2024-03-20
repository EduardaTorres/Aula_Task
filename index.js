const express = require('express');
const db = require('./infrastructure/db');
const taskRoute = require('./routes/taskRoutes');
const app = express();
const port = 3000;

app.use(express.json());
// Rota padrão

db.sync()

app.use('/tasks', taskRoute)

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`);
});