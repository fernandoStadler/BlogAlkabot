import Link from 'next/link';
import { FooterContainer } from "./styled";

const Footer =()=>{
    return(
        <FooterContainer>
            <p>&copy; <Link href='https://www.linkedin.com/in/fernandostadler/' target='_blank'>Fernando Stadler</Link> - 2023</p>
        </FooterContainer>
    )
}
export default Footer;