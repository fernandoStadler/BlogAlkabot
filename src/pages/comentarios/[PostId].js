import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import api from '../../server/api';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

import { PostTitle, CommentsContainer, CommentsCard, CommentsBody, CommentsAuthor, Pagnination } from '../../styles/syledComments';

const Comments = () => {
  const router = useRouter();
  const { PostId } = router.query;
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState({});


  useEffect(() => {
    const fetchComments = async () => {
      const response = await api.get(`/posts/${PostId}/comments`);
      setComments(response.data);
    };

    if (PostId) {
      fetchComments();
    }
  }, [PostId]);

  useEffect(() => {
    const getPost = async () => {
      const response = await api.get(`/posts/${PostId}`);
      setPost(response.data);
    };

    if (PostId) {
      getPost();
    }
  }, [PostId]);

  return (
    <>
      <title>Blog Alkabot</title>
      <Menu />
      <PostTitle>
        <span><strong>Post: </strong>{post.title}</span>
      </PostTitle>
      <CommentsContainer>
        {comments.map(comment => (
          <CommentsCard key={comment.id}>
            <CommentsBody>
              <p>{comment.body}</p>
            </CommentsBody>
            <CommentsAuthor>
              <p><strong>Por: </strong>{comment.name}</p>
            </CommentsAuthor>
          </CommentsCard>
        ))}
        <Link href={`/post`}>
          Voltar
        </Link>
      </CommentsContainer>

      <Footer />
    </>
  );
};

export default Comments;
