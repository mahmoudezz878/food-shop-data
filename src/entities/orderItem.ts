import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  BaseEntity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./products";
import { Order } from "./orders";

@Entity("orderItem")
export class OrderItem extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  qty: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Order, (order) => order.orderItems, {
    onDelete: "CASCADE",
  })
  order: Order;

  @ManyToOne(() => Product, (product) => product.orderItems, {
    onDelete: "CASCADE",
  })
  product: Product;
}
