import jwt from "jsonwebtoken";

import { secret } from "./config.js";
export const generateToken = (email, city) => {
  const payload = { email, city };
  const token = jwt.sign(payload, secret, { expiresIn: "7d" }); 
  return token;
};

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (err) {

    return null;
  }
};
