// import mongoose from "mongoose"

// const UserSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
//   role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
//   wishlist: [String],
//   orders: [
//     {
//       products: [String],
//       total: Number,
//       date: { type: Date, default: Date.now }
//     }
//   ]
// })

// export default mongoose.models.User || mongoose.model("User", UserSchema)
// models/User.ts
import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: "user" }
})

export default mongoose.models.User || mongoose.model("User", UserSchema)
