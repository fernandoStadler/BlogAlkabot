import styled from "styled-components";

export const PostContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width:100vw;
    min-height: 100vh;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
`;

export const Card = styled.div`
    width: 80%;
    min-height: 250px;
    margin: 20px;
    padding: 10px;
    background: #fff;
    border:1px solid #00606c;
    border-radius: 10px;

    @media screen and (max-width: 800px) {
        width: 100%;
        }

`;
export const CardHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    img{
        max-width:100px ;
    }

    h2{
        text-align: center;
        padding: 10px;
    }
`;

export const CardResume = styled.div`
    text-align: justify;
    padding: 10px;
    p{
        font-weight:100;
    }
`;
export const CardButton = styled.button`
  
    display :flex ;
    border: none;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    background: none;

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