import cors = require('cors');
import express = require('express');

const app = express();
app.use(cors());
app.get('/ping', (req, res) => res.send('pong'));

const port = process.env.PORT || 4000;
app.listen(port);
console.log('SERVER LISTENING on port ' + port);
