import { useState, useEffect } from "react";
import axios from "axios";
import { HomeContainer, NewsContainer, NewsCard, NewsTumb, NewsTitle, NewsDescription, NewsButton,Pagnination } from "../styles/styledHome";
import Menu from "../components/Menu";
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Home() {
  const [news, setNews] = useState([]);

  const [currentPage,setCurrentPage] = useState(1);
  const [newsPerPage, setNewsPerPage] = useState(4);
  
  const indexOfLastNew = currentPage * newsPerPage;
  const indexOfFirstNew = indexOfLastNew - newsPerPage;
  const currentNews = news.slice(indexOfFirstNew, indexOfLastNew);

  const totalPages = Math.ceil(news.length / newsPerPage);
  const pageNumbers = [];
  useEffect(() => {
    axios
      .get("https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=484e6a3d0050495193db5d20649e6c85")
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
}


const handleClick = (event, pageNumber) => {
  event.preventDefault();
  setCurrentPage(pageNumber);
};

  return (
    <>
      <Menu />
      <HomeContainer>
        <h1>Notícias de tecnologia no Brasil</h1>
        <NewsContainer>
          {currentNews.map((article, index) => {
            if (index < 20) { // Exibe no máximo 20 notícias
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
