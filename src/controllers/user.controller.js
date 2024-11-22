import User from "../models/User.js";

const createUser = async (req, res) => {
  try {
    const { email, uid, displayName } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User Already exists!" });
    }
    await User.create({ email, name: displayName, uid });
    return res.status(200).json({ message: "User Created Successfully!" });
  } catch (error) {
    console.error(`Error in creating user: ${error}`);
    return res.status(500).json({ message: "Error in creating user" });
  }
};

const getCurrentUser = async (req, res) => {
  try {
    const { email } = req.user;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User found successfully", user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error in getting user detials" });
  }
};

export { createUser, getCurrentUser };
