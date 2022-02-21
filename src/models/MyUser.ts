import { User } from "fakerator";

export default interface MyUser extends User {
  userId: number;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}
