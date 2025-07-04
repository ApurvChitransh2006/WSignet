const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const UserSchema = new Schema(
  {
    firmname: {
      type: String,
      required: true
    },
    firmcode: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    isSuperUser: {
      type: Boolean,
      required: true
    },
    refresh_token: String
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  const salt = bcrypt.genSaltSync(10);
  this.password = bcrypt.hashSync(this.password, salt);
  next();
});

UserSchema.methods.comparePass = function (pass) {
  const res = bcrypt.compareSync(pass, this.password);
  return res;
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
