import { Post } from "fakerator";

export default interface MyPost extends Post {
  postId: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}
