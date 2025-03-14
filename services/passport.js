const passport = require('passport');
const GooglePassport = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
  new GooglePassport(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(accessToken);
      console.log('refresh token: ' + refreshToken);
      console.log(profile);
    }
  )
);
