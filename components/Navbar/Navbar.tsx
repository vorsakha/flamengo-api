import { useRouter } from "next/dist/client/router";
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
  const router = useRouter();

  return (
    <NavContainer>
      <NavWrapper>
        <NavLogo>
          <h1>FLAMENGO API</h1>
        </NavLogo>

        <NavList>
          <NavListItem>
            <Link href="/">
              <a
                style={
                  router.pathname == "/"
                    ? { color: "#d52424" }
                    : { color: "#ff2929" }
                }
              >
                Getting Started
              </a>
            </Link>
          </NavListItem>
          <NavListItem>
            <Link href="/squad">
              <a
                style={
                  router.pathname == "/squad"
                    ? { color: "#d52424" }
                    : { color: "#ff2929" }
                }
              >
                Squad
              </a>
            </Link>
          </NavListItem>
          <NavListItem>
            <Link href="/staff">
              <a
                style={
                  router.pathname == "/staff"
                    ? { color: "#d52424" }
                    : { color: "#ff2929" }
                }
              >
                Staff
              </a>
            </Link>
          </NavListItem>
          <NavListItem>
            <Link href="/honours">
              <a
                style={
                  router.pathname == "/honours"
                    ? { color: "#d52424" }
                    : { color: "#ff2929" }
                }
              >
                Honours
              </a>
            </Link>
          </NavListItem>
          <NavListItem>
            <Link href="/misc">
              <a
                style={
                  router.pathname == "/misc"
                    ? { color: "#d52424" }
                    : { color: "#ff2929" }
                }
              >
                Miscellaneous
              </a>
            </Link>
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
