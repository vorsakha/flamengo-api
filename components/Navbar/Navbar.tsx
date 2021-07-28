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
            <Link href="/">Squad</Link>
          </NavListItem>
          <NavListItem>
            <Link href="/">Staff</Link>
          </NavListItem>
          <NavListItem>
            <Link href="/">Honours</Link>
          </NavListItem>
          <NavListItem>
            <Link href="/">Miscellaneous</Link>
          </NavListItem>
        </NavList>

        <NavFooter>
          <a href="" target="_blank">
            Github
          </a>
        </NavFooter>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
