import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;

`;

export const NewsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    width: 100%;
    margin: 20px 0;
    

`
export const NewsCard = styled.div`
      display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    overflow: hidden;
    width: 250px;
    min-height: 300px;
    padding: 10px;
    
`;
export const NewsTumb = styled.picture`
  align-self:center;
`;

export const NewsTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
`;

export const NewsDescription = styled.p`
  font-size: 16px;
  line-height: 1.2;
  text-align: justify;
  padding: 10px;
`;

export const NewsButton = styled.button`
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
    background: none;
    border: none;
    color: #fff;
    font-weight: bold;
    cursor: pointer;

    a{
    text-decoration: none;
    padding: 5px;
    border-radius: 5px;
    color: #00606c;
    }
`;
export const Pagnination = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    align-items: center;
    justify-content: center;;
    padding: 10px;
    a{
        min-width: 30px;
        min-height: 20px;
        color: #00606c;
        font-size:1.3em;
        border-radius: 100%;
        text-align: center;
        background:#e4e1ec ;
    }       
`;