import { useState, useEffect } from 'react';
import Link from 'next/link';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import api from '../server/api';
import Image from 'next/image';

import {
  PostContainer,
  Card,
  CardHeader,
  CardResume,
  CardButton,
  Pagnination,
} from '../styles/styledPost';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event, pageNumber) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const getPost = async () => {
      const result = await api.get('/posts');
      setPosts(result.data);
    };
    getPost();
  }, []);

  return (
    <>
      <Menu />
      <PostContainer>
        {currentPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <picture>
                <Image src="/FemaleAvatar.svg" alt="post icon" width={100} height={100} />
              </picture>
              <div>
                <h2>{post.title}</h2>
              </div>
            </CardHeader>
            <CardResume>
              <p>{post.body}</p>
            </CardResume>
            <CardButton>
              <Link href={`/comentarios/${post.id}`}>Comentarios</Link>
            </CardButton>
          </Card>
        ))}
      </PostContainer>
      <Pagnination>
        {pageNumbers.map((number) => (
          <a href="#" key={number} onClick={(event) => handleClick(event, number)}>
            {number}
          </a>
        ))}
      </Pagnination>
      <Footer />
    </>
  );
};

export default Post;
