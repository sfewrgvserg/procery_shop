import Sequelize from "@sequelize/core";

const sequelize = new Sequelize({
  password: "0150274661@sinaG",
  database: "grocery",
  host: "localhost",
  username: "root",
  dialect: "mysql",
  logging: false,
});

try {
  await sequelize.authenticate();
  console.log("Connect");
} catch (err) {
  console.log(err.message);
  process.exit();
}
export default sequelize;
