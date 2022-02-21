import { Address } from "fakerator";

export default interface MyOrder {
  orderId: number;
  productId: number;
  userId: number;
  price: number;
  address: Address;
  createdAt: Date;
  updatedAt: Date;
}
