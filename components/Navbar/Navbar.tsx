import Link from "next/link";
import {
  NavContainer,
  NavWrapper,
  NavLogo,
  NavList,
  NavListItem,
  NavFooter,
} from "./Navbar.styles";

const Navbar = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <NavLogo>
          <h1>FLAMENGO API</h1>
        </NavLogo>

        <NavList>
          <NavListItem>
            <Link href="/">Getting Started</Link>
          </NavListItem>
          <NavListItem>
            <Link href="/squad">Squad</Link>
          </NavListItem>
          <NavListItem>
            <Link href="/staff">Staff</Link>
          </NavListItem>
          <NavListItem>
            <Link href="/honours">Honours</Link>
          </NavListItem>
          <NavListItem>
            <Link href="/misc">Miscellaneous</Link>
          </NavListItem>
        </NavList>

        <NavFooter>
          <a
            href="https://github.com/vorsakha/flamengo-api"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </NavFooter>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
