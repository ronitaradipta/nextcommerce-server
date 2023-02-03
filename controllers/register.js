const bcrypt = require("bcrypt");
const { User } = require("../models");
const Validator = require("fastest-validator");
const v = new Validator();

module.exports = async (req, res) => {
  const schema = {
    name: { type: "string" },
    email: { type: "email" },
    password: { type: "string", min: 6 },
  };

  const validate = v.validate(req.body, schema);

  if (validate.length) {
    return res.status(400).json({
      status: "error",
      message: validate,
    });
  }

  const userEmail = await User.findOne({
    where: { email: req.body.email },
  });

  if (userEmail) {
    return res.status(409).json({
      status: "error",
      message: "email already exist",
    });
  }

  const password = await bcrypt.hash(req.body.password, 10);

  const data = {
    password,
    name: req.body.name,
    email: req.body.email,
    role: "user",
  };

  const createdUser = await User.create(data);
  return res.json({
    status: "success",
    data: {
      id: createdUser.id,
    },
  });
};
