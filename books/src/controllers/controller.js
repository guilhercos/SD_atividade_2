const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");

async function signin(req, res) {
  const { credential } = req.body;

  const user = await userGoogle(credential);

  try {
    const token = jwt.sign(
      {
        id: user.sub,
        expiresIn: 3600,
      },
      "secret"
    );
    const tokenBearer = `Bearrer ${token}`;
    req.session.user = user;

    res.cookie("acess_token", tokenBearer, { maxAge: 3600000 });
    res.set("Authorization", tokenBearer);
    return res.json({ user, token });
  } catch (error) {
    res.status(422).json("autenticação falhou");
  }
}

async function userGoogle(token) {
  const user = new OAuth2Client();

  const ticket = await user.verifyIdToken({
    idToken: token,
    audience:
      "581598292298-efnegh3oshe38g956ufdpib46nusfp10.apps.googleusercontent.com",
  });
  const userInformation = ticket.getPayload();
  return userInformation;
}

async function isAuthenticated(req, res, next) {
  const { acess_token } = req.cookies;

  if (acess_token && req.session.user) {
    try {
      const [, token] = acess_token.split(" ");
      await jwt.verify(token, "secret");

      return next();
    } catch (err) {
      console.log(err);
      res.redirect("/");
    }
  } else {
    req.session.user = null;
    res.redirect("/");
  }
}

async function searchBook(req, res) {
  const { search } = req.body;
}

module.exports = { signin, isAuthenticated, searchBook };
