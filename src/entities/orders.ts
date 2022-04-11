import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  BaseEntity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OrderItem } from "./orderItem";

@Entity("order")
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  mobile: string;

  @Column()
  city: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, {
    onDelete: "CASCADE",
  })
  orderItems: OrderItem[];
}
