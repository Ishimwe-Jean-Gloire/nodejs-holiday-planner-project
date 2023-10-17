import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  const saltRounds = await bcrypt.genSalt(parseInt(process.env.saltRounds));

  let hash = await bcrypt.hash(password, saltRounds);

  return hash;
};

export const comparePassword = async (password, hashedPassword) => {
  let result = await bcrypt.compare(password, hashedPassword);
  return result;
};
