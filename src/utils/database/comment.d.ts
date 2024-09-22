type comment = {
  id: number;
  blogId: number;
  author: string;
  content: string;
  email?: string;
  replyId?: number;
  replies: comment[];
};
