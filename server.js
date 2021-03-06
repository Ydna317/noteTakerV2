const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./public/assets/js/noteroute');
const htmlRoutes = require('./public/assets/js/htmlroute');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
