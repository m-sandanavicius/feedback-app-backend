const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => console.log('Error on start: ' + err.stack));

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening port on 3000`);
});
