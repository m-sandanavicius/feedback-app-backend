const express = require('express');
const passport = require('passport');
const GooglePassport = require('passport-google-oauth20').Strategy;

const app = express();

// passport.use(new GooglePassport());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening port on 3000`);
});
