import User from "../models/User";

const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    // check if the required feild are required
    if (!username || !password || !email) {
      return res
        .status(400)
        .json({ error: "username and password are required" });
    }

    const hasedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hasedPassword,
    });
    res.status(200).json({ user: newUser });
  } catch (error) {
    console.error("error:", error);
    res.status(500).json({ error: "Interval server error" });
  }
};
