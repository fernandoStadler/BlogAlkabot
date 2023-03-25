
import { useState } from "react";
import Link from 'next/link';
import { Nav, Avatar, DesktopMenu, MobileMenu, MobileButton, MobileLink } from "./styled";
import Image from 'next/image';

function Menu() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <Nav>
        <Avatar>
          <Link href="/">
            <Image src="/Avatar.png" width={40} height={40} alt="avatar" />
          </Link>
          <span>
            Blog Alkabot
          </span>
        </Avatar>
        <DesktopMenu>
          <ul>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/post">
                Postagens
              </Link>
            </li>
            <li>
              <Link href="/users">
                Usuários
              </Link>
            </li>
          </ul>
        </DesktopMenu>
        <MobileButton onClick={toggleMobileMenu}>
          {showMobileMenu ? "Fechar" : "Menu"}
        </MobileButton>
        <MobileMenu show={showMobileMenu}>
          <ul>
            <MobileLink>
              <Link href="/">
                Home
              </Link>
            </MobileLink>
            <MobileLink>
              <Link href="/post">
                Postagens
              </Link>
            </MobileLink>
            <MobileLink>
              <Link href="/users">
                Usuários
              </Link>
            </MobileLink>
          </ul>
        </MobileMenu>
      </Nav>
    </>
  );
}

export default Menu;

