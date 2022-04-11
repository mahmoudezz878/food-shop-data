import { DataSource } from "typeorm";
import dotenv from "dotenv";
import "reflect-metadata";
import {Category} from "./entities/category";
import {Product} from "./entities/products";
import {Order} from "./entities/orders";
import {OrderItem} from "./entities/orderItem";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT!,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [Category, Product, Order, OrderItem],
});
