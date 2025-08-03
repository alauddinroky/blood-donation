import jwt from 'jsonwebtoken';

export const verifyToken = (token) => {
  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("JWT_SECRET not set in env");
    return jwt.verify(token, secret);
  } catch (err) {
    console.error("JWT verification error:", err.message);
    return null;
  }
};
