import express from "express";
import { AppDataSource } from "./database";
import dotenv from "dotenv";
import { ordersRouter } from "./routs/orders";
import cors from "cors";
import { productsRouter } from "./routs/products";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("you are good");
});

app.use("/order", ordersRouter);
app.use("/products", productsRouter);

app.listen(process.env.port, async () => {
  console.log("now runing on port 7575");

  await AppDataSource.initialize();
  console.log("Connected to Postgres");
});
