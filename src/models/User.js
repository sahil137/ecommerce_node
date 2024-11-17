import mongoose from "mongoose";
import { UserRole } from "../constants";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      index: true,
    },

    role: {
      type: String,
      default: UserRole.USER,
    },

    cart: {
      type: Array,
      default: [],
    },
    address: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
