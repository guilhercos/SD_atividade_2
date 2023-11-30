const jwt = require("jsonwebtoken");
import { OAuth2Client } from "google-auth-library";

async function signin(req, res) {
  const { credential } = req.body;
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
