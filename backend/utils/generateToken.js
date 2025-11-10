import jwt from 'jsonwebtoken';

export const generateToken = (userId, expiresIn = process.env.JWT_EXPIRES) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn,
  });
};

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
};
