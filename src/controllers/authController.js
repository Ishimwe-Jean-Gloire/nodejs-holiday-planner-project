import User from "../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// user registration
export const register = async (req, res) => {
  try {
    // hashing password

    const salt = bcrypt.genSaltSync(10);

    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      email: req.body.email,
      fullNames: req.body.fullNames,
      password: hash,
      honeNumber: req.body.phoneNumber,
      location: req.body.location,
    });

    await newUser.save();

    res
      .status(200)
      .json({ success: true, message: "User successfully created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "failed to create" });
  }
};

// user login
export const login = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await User.findOne({ email });

    // if user doesnt exist

    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
    }

    // if user exist then check the password or campare password

    const checkCorrectPassword = bcrypt.compare(
      req.body.password,
      user.password
    );

    // if password is incorrect

    if (!checkCorrectPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect email or password" });
    }

    const { password, role, ...rest } = user._doc;

    // create jwt token

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" }
    );

    // set token in the browser cookies and send the response  to the client

    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        success: true,
        message: "successfully login",
        data: { ...rest },
      });
  } catch (error) {
    console.log(error)
     res.status(500).json({ success: false, message: "Failed to login" });
  }
};
