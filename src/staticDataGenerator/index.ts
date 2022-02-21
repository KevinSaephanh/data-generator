import Fakerator from "fakerator";
import MyComment from "../models/MyComment";
import MyOrder from "../models/MyOrder";
import MyPost from "../models/MyPost";
import MyProduct from "../models/MyProduct";
import MyUser from "../models/MyUser";
import { getRandomDate } from "../utils/getRandomDate";
import { getRandomNum } from "../utils/getRandomNum";

const fakerator = Fakerator();

export const createUsers = () => {
  const users: MyUser[] = [];

  for (let i = 1; i < 51; i++) {
    const user: MyUser = {
      userId: i,
      isAdmin: Math.random() < 0.5,
      createdAt: getRandomDate(new Date(2012, 0, 1), new Date()),
      updatedAt: getRandomDate(new Date(2018, 0, 1), new Date()),
      ...fakerator.entity.user(),
    };
    users.push(user);
  }

  return users;
};

export const createPosts = () => {
  const posts: MyPost[] = [];

  for (let i = 1; i < 51; i++) {
    const randomNum = getRandomNum(1, 35);
    const post: MyPost = {
      postId: i,
      userId: randomNum,
      createdAt: getRandomDate(new Date(2012, 0, 1), new Date()),
      updatedAt: getRandomDate(new Date(2018, 0, 1), new Date()),
      ...fakerator.entity.post(),
    };
    posts.push(post);
  }

  return posts;
};

export const createComments = () => {
  const comments: MyComment[] = [];

  for (let i = 1; i < 51; i++) {
    const comment: MyComment = {
      commentId: i,
      postId: getRandomNum(1, 35),
      userId: getRandomNum(1, 20),
      title: fakerator.lorem.sentence(),
      body: fakerator.lorem.paragraph(),
      createdAt: getRandomDate(new Date(2012, 0, 1), new Date()),
      updatedAt: getRandomDate(new Date(2018, 0, 1), new Date()),
    };
    comments.push(comment);
  }

  return comments;
};

export const createProducts = () => {
  const products: MyProduct[] = [];

  for (let i = 1; i < 51; i++) {
    const product: MyProduct = {
      productId: i,
      categoryId: getRandomNum(1, 25),
      sellerId: getRandomNum(1, 50),
      title: fakerator.lorem.sentence(),
      description: fakerator.lorem.paragraph(),
      price: getRandomNum(1.5, 1050),
      createdAt: getRandomDate(new Date(2012, 0, 1), new Date()),
      updatedAt: getRandomDate(new Date(2018, 0, 1), new Date()),
    };
    products.push(product);
  }

  return products;
};

export const createOrders = () => {
  const orders: MyOrder[] = [];

  for (let i = 1; i < 51; i++) {
    const order: MyOrder = {
      orderId: i,
      productId: getRandomNum(1, 40),
      userId: getRandomNum(1, 20),
      price: getRandomNum(5.5, 1050),
      address: fakerator.entity.address(),
      createdAt: getRandomDate(new Date(2012, 0, 1), new Date()),
      updatedAt: getRandomDate(new Date(2018, 0, 1), new Date()),
    };
    orders.push(order);
  }

  return orders;
};
