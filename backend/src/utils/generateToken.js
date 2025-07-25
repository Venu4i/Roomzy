import jwt from "jsonwebtoken";

const generateToken = (id, role = "user") => {
  return jwt.sign(
    { id, role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};

export default generateToken;