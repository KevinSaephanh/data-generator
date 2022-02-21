export default interface MyComment {
  commentId: number;
  postId: number;
  userId: number;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
}
