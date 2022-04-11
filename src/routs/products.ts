import express from "express";
import { Product } from "../entities/products";

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find({
    relations: {
      category: true,
    },
  });
  console.log("products", products);
  return res.json(products);
});

export { router as productsRouter };
