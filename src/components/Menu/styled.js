

import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #00606c;
  border-bottom: 1px solid #e6e6e6;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  

  `;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 18px;

  span {
    color: #fff;
    font-weight: 600;
    padding: 0 10px;
  }
`;

export const DesktopMenu = styled.div`
  ul {
    list-style: none;
    display: flex;
    gap: 24px;
    margin: 0;
    padding: 0;

    li {
      a {
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        text-decoration: none;
        transition: 0.2s ease;

        &:hover {
            color: #fff;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
             display: none;
     } 
`;

export const MobileButton = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease;

  @media (max-width: 600px) {
    display: block;
  }

  &:hover {
    color: #fff;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 68px;
  left: 0;
  right: 0;
  background-color: #00606c;
  padding: 10px;
  text-align: center;
  display: ${(props) => (props.show ? "block" : "none")};

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 16px;
    }

    a {
        color: #fff;
        font-size: 1.5em;
      font-weight: 500;
      text-decoration: none;
      transition: 0.2s all;


    }
  }
`;

export const MobileLink = styled.li`
  display: block;
  margin-bottom: 16px;
`;
