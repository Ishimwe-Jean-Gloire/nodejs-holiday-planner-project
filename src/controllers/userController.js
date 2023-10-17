import { User } from "../models/User";

// create new user
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();

    res.status(200).json({
      success: true,
      message: " successfully created",
      data: savedUser,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to create user" });
  }
};

// update user

export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "user Successfully updated",
      data: updateUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update user",
    });
  }
};
// delete user

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "user Successfully deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete user",
    });
  }
};

// getSingle user

export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);

    res.status(200).json({
      success: true,
      message: "user retrieved Successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "No user found",
    });
  }
};

// getAll user

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      success: true,
      message: "user successful retrieved",
      data: users,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "user not found",
    });
  }
};
