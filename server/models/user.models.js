const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const UserSchema = new Schema(
  {
    username: String,
    password: String,
  },
  { timestamps: true }
);

UserSchema.statics.hashPassword = function (pass) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(pass, salt);
  return hash;
};

UserSchema.statics.comparePass = function (pass, hash) {
  const res = bcrypt.compareSync(pass, hash);
  return res;
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
