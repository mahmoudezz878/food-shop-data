import express from "express";
import { OrderItem } from "../entities/orderItem";
import { Order } from "../entities/orders";
import { Product } from "../entities/products";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, mobile, address, city, items } = req.body;

  console.log(req.body);

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

  // for each item in items
  // search for productId in product table
  // create OrderListItem with product, order and quantity
  //save orderListItem

  return res.json(order);
});

// router.get("/", async (req, res) => {
//   const products = await Order.find({
//     relations: {
//       category: true,
//     },
//   });
//   console.log('products', products)
//   return res.json(products);
// });

export { router as ordersRouter };
