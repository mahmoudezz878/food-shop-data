import express from "express";
import { OrderItem } from "../entities/orderItem";
import { Order } from "../entities/orders";
import { Product } from "../entities/products";

const router = express.Router();

router.get("/", async (req, res) => {
  const orders = await Order.find({
    relations: {
      orderItems: { product: true },
    },
  });
  return res.json(orders);
});

router.post("/", async (req, res) => {
  const { name, mobile, address, city, items } = req.body;

  const order = Order.create({
    name,
    mobile,
    address,
    city,
  });

  await order.save();

  for (let i = 0; i < items.length; i++) {
    const product = await Product.findOneBy({ id: +items[i].id });
    const orderItem = OrderItem.create({
      product,
      qty: +items[i].qty,
      order,
    });

    await orderItem.save();
  }

  return res.json(order);
});

export { router as ordersRouter };
