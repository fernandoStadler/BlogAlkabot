import styled from "styled-components";

export const CommentsContainer = styled.div`
display: flex;
min-height: 100vh;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px;
gap: 25px;

a{
    text-decoration: none;
    color: #00606c;
    min-width: 20px;
    padding:5px;
    margin:auto;
    width: 80px;
    text-align: center;
    bottom: 0;
    ;


}

`;

export const PostTitle = styled.div`
display: flex;
flex-direction: column;
max-width: 100%;
margin: 20px 0;
text-align: center;
font-size: 1.2em;

`;

export const CommentsCard = styled.div`
display: flex;
flex-direction: column;
width: 90vw;
min-height:auto;
gap: 25px;
justify-content: space-between;
padding: 10px;
background: #fff;
border:1px solid #00606c;
border-radius: 10px;
`;

export const CommentsBody = styled.div`
background: #00606c;
padding: 10px;
color:#fff;
border-radius: 10px;  
`;
export const CommentsAuthor = styled.div`
background:#d1d7dc;
padding: 10px;
border-radius: 10px;
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
