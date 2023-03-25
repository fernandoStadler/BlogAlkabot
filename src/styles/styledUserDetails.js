import styled from "styled-components";


 export const Pill = styled.span`
    background:#00606c;
    color:#fff;
    padding: 20px;
    border-radius: 10px;
    text-align:center;
    margin: 10px 0;

`;

 export const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    min-height: 100vh;
    max-width: 100vw;
    padding: 20px;
`;

 export const UserHeader = styled.header`
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20px;
    border:1px solid #00606c;
    border-radius: 10px;
`;

 export const UserAvatar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
a{
    text-decoration: none;
    padding: 5px;
    color: #00606c;

   }
`;

 export const AddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20px;
    border:1px solid #00606c;
    border-radius: 10px;
    gap: 10px;

div{
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
            display: flex;
            flex-direction:column;
            padding: 5px;
            gap: 5px;
        }

}`;
 export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20px;
    border:1px solid #00606c;
    border-radius: 10px;
    gap: 10px;
div{
  display: flex;
  justify-content: space-between;
  
  @media screen and (max-width: 800px) {
            display: flex;
            flex-direction:column;
            padding: 5px;
            gap: 5px;
    }
}`;