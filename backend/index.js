import { Op } from "@sequelize/core";
import carts from "./carts.js";
import products from "./products.js";

import cors from "cors";
import express from "express";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

// /////////////////////////////////////////////////////////////////////////////////////////

app.get("/all_products", async (req, res) => {
  try {
    const lists = await products.findAll();
    const list = lists.map((list) => list.dataValues);
    res.json(list);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Error this is from all products" });
  }
});

app.get("/all_products/:id", async (req, res) => {
  try {
    const list = await products.findByPk(req.params.id, { raw: true });
    res.json(list);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Error this is from one products!" });
  }
});

// /////////////////////////////////////////////////////////////////////////////////////////

app.get("/all_carts", async (req, res) => {
  try {
    const lists = await carts.findAll();
    const list = lists.map((list) => list.dataValues);
    res.json(list);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Error this is from all carts!" });
  }
});

app.delete("/all_carts/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await carts.destroy({
      where: { cart_id: { [Op.eq]: id } },
      logging: console.log,
    });
    console.log(result); // Now result is defined after await
    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (err) {
    console.error("Error deleting cart:", err.message);
    res.status(500).json({ message: "Error deleting cart" });
  }
});

app.post("/all_carts", async (req, res) => {
  try {
    const { product_id, quantity } = req.body;

    const product = await products.findOne({
      where: { product_id: product_id },
    });

    if (!product) {
      return res.status(400).json({ message: "product not found" });
    }

    const existingCart = await carts.findOne({ where: { product_id } });

    if (existingCart) {
      // Update existing cart
      existingCart.quantity += quantity;
      await existingCart.save();
    } else {
      // Create new cart entry
      await carts.create({ product_id, quantity });
    }

    res.status(201).json({ message: "Product added to cart" });
  } catch (err) {
    console.log("error posting cart", err.message);
  }
});

// ///////////////////////////////////////////////////////////////////////////////////////////

app.get("/cart", async (req, res) => {
  try {
    const cartItems = await carts.findAll({
      include: [
        {
          model: products,
          attributes: ["img", "title", "price"], // Select desired product attributes
        },
      ],
    });
    res.json(cartItems);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Error fetching cart items" });
  }
});

app.listen(port, () => {
  console.log("Connected to backend!");
});
