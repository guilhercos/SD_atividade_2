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

    res.cookie("acess_token", tokenBearer, { maxAge: 3600000 });
    res.set("Authorization", tokenBearer);
  } catch (error) {
    res.status(422).json("autenticação falhou");
  }
  return res.json({ user, token });
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

module.exports = { signin };
