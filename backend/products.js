import { DataTypes } from "@sequelize/core";
import sequelize from "./db.js";

const products = sequelize.define(
  "product",
  {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: { type: DataTypes.STRING(255), allowNull: false },
    img: { type: DataTypes.TEXT, allowNull: false },
    desc: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.DECIMAL(7, 2), allowNull: false },
    quantity: { type: DataTypes.SMALLINT, allowNull: false },
    category: { type: DataTypes.STRING(255), defaultValue: "fruits" },
  },
  { timestamps: false }
);

// await products.sync();

export default products;
