import { DataTypes } from "@sequelize/core";
import sequelize from "./db.js";
import products from "./products.js";

const carts = sequelize.define(
  "cart",
  {
    cart_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: { key: "product_id", table: "products" },
      allowNull: false,
    },
    quantity: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
  },
  { timestamps: false }
);
// await carts.sync();
products.hasMany(carts, { foreignKey: "product_id" });

export default carts;
