import bcrypt from "bcryptjs";

const password = "root123";

const hash = await bcrypt.hash(password, 10);

console.log(hash);

