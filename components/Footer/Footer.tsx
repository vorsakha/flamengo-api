import { FooterContainer, FooterWrapper, LogoSpan } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <p>
          &copy;2021 <LogoSpan>Flamengo API</LogoSpan>. All rights reserved.
        </p>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
