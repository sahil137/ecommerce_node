import User from "../models/User.js";

const createUser = async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User Already exists!" });
    }
    await User.create({ email });
    return res.status(200).json({ message: "User Created Successfully!" });
  } catch (error) {
    console.error(`Error in creating user: ${error}`);
    return res.status(500).json({ message: "Error in creating user" });
  }
};

export { createUser };
