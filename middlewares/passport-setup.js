const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");

const secretOrPrivateKey = process.env.secretOrPrivateKey;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "secretOrPrivateKey",
  // secretOrKey: secretOrPrivateKey,
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    const user = await User.findById(jwt_payload.id);
    user ? done(null, user) : done(null, false);
  })
);

module.exports = isAuth = () =>
  passport.authenticate("jwt", { session: false });
