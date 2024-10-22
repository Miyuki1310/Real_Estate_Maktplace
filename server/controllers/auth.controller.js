import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import errorHandler from "../utils/error.js";
const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.json({ message: "User created successfully" });
  } catch (error) {
    const err = errorHandler(500, "Error when sign up");
    next(err);
  }
};

export { signUp };
