import express from 'express';
// supports post body requests.
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

// app will suport JSON.
app.use(bodyParser.json());

// starting path for all paths in users.js
app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send('Hello from homepage!');
});

//listen for incoming requests and the port to listen on
app.listen(PORT, () => console.log(`Server running on ${PORT} at:  http://localhost:${PORT}`));