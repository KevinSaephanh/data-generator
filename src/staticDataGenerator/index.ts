import { LoremIpsum } from "lorem-ipsum";

interface User {
  userId: number;
  username: string;
  name: string;
  email: string;
  avatar: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface Post {
  postId: number;
  userId: number;
  title: string;
  body: string;
}

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export const createUsers = () => {
  const users: User[] = [];
  return users;
};

export const createPosts = () => {
  const randomNum = Math.random() * (25 - 1) + 1;
  const posts: Post[] = [];

  for (let i = 0; i < 50; i++) {
    const newPost: Post = {
      postId: i,
      userId: randomNum,
      title: lorem.generateWords(1),
      body: lorem.generateSentences(5),
    };
    posts.push(newPost);
  }

  return posts;
};
