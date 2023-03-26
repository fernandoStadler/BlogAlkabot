import { useState, useEffect } from "react";
import { HomeContainer, NewsContainer, NewsCard, NewsTumb, NewsTitle, NewsDescription, NewsButton, Pagnination } from "../styles/styledHome";
import Menu from "../components/Menu";
import Footer from '../components/Footer';
import Image from 'next/image';
import axios from "axios";

export default function Home({ articles }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(4);
  const [currentNews, setCurrentNews] = useState([]);


  useEffect(() => {
    setCurrentNews(articles.slice(0, newsPerPage));
  }, [articles, newsPerPage]);

  const totalPages = Math.ceil(articles.length / newsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event, pageNumber) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
    setCurrentNews(articles.slice((pageNumber - 1) * newsPerPage, pageNumber * newsPerPage));
  };

  return (
    <>
      <title>Blog Alkabot</title>
      <Menu />
      <HomeContainer>
        <h1>Notícias de tecnologia no Brasil</h1>
        <NewsContainer>
          {currentNews.map((article, index) => {
            if (index < 30) {
              return (
                <NewsCard key={index}>
                  <NewsTumb>
                    <Image src='/news.svg' alt='News icon' width={100} height={100} />
                  </NewsTumb>
                  <NewsTitle>
                    <h4>
                      {article.author}
                    </h4>
                  </NewsTitle>
                  <NewsDescription>
                    <p>
                      {article.title}
                    </p>
                  </NewsDescription>
                  <NewsButton>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      Acessar notícia
                    </a>
                  </NewsButton>
                </NewsCard>
              );
            } else {
              return null;
            }
          })}
        </NewsContainer>
      </HomeContainer>
      <Pagnination>
        {pageNumbers.map(number => (
          <a
            href="#"
            key={number}
            onClick={event => handleClick(event, number)}
          >
            {number}
          </a>
        ))}
      </Pagnination>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get('https://newsapi.org/v2/top-headlines', {
    params: {
      country: 'br',
      category: 'technology',
      apiKey: '484e6a3d0050495193db5d20649e6c85',
    },
  });
  const articles = res.data.articles;

  return {
    props: {
      articles,
    },
  };
}
