import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useState } from "react";
import {
  NavContainer,
  NavWrapper,
  NavLogo,
  NavList,
  NavListItem,
  NavFooter,
  NavButton,
  MobileIconOpen,
  MobileIconClose,
} from "./Navbar.styles";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const router = useRouter();

  return (
    <NavContainer>
      <NavWrapper>
        <NavLogo>
          <h1>FLAMENGO API</h1>
        </NavLogo>
        <NavButton onClick={() => setMobileMenu(!mobileMenu)}>
          {!mobileMenu && <MobileIconOpen />}
          {mobileMenu && <MobileIconClose />}
        </NavButton>
        <NavList mobileMenu={mobileMenu}>
          <NavListItem
            style={
              router.pathname == "/"
                ? {
                    backgroundColor: "#fff",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  }
                : {}
            }
          >
            <Link href="/">
              <a
                style={
                  router.pathname == "/"
                    ? {
                        color: "#d52424",
                      }
                    : { color: "#ff2929" }
                }
                onClick={() => setMobileMenu(false)}
              >
                Getting Started
              </a>
            </Link>
          </NavListItem>
          <NavListItem
            style={
              router.pathname == "/squad"
                ? {
                    backgroundColor: "#fff",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  }
                : {}
            }
          >
            <Link href="/squad">
              <a
                style={
                  router.pathname == "/squad"
                    ? {
                        color: "#d52424",
                      }
                    : { color: "#ff2929" }
                }
                onClick={() => setMobileMenu(false)}
              >
                Squad
              </a>
            </Link>
          </NavListItem>
          <NavListItem
            style={
              router.pathname == "/staff"
                ? {
                    backgroundColor: "#fff",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  }
                : {}
            }
          >
            <Link href="/staff">
              <a
                style={
                  router.pathname == "/staff"
                    ? {
                        color: "#d52424",
                      }
                    : { color: "#ff2929" }
                }
                onClick={() => setMobileMenu(false)}
              >
                Staff
              </a>
            </Link>
          </NavListItem>
          <NavListItem
            style={
              router.pathname == "/honours"
                ? {
                    backgroundColor: "#fff",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  }
                : {}
            }
          >
            <Link href="/honours">
              <a
                style={
                  router.pathname == "/honours"
                    ? {
                        color: "#d52424",
                      }
                    : { color: "#ff2929" }
                }
                onClick={() => setMobileMenu(false)}
              >
                Honours
              </a>
            </Link>
          </NavListItem>
          <NavListItem
            style={
              router.pathname == "/misc"
                ? {
                    backgroundColor: "#fff",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                  }
                : {}
            }
          >
            <Link href="/misc">
              <a
                style={
                  router.pathname == "/misc"
                    ? {
                        color: "#d52424",
                      }
                    : { color: "#ff2929" }
                }
                onClick={() => setMobileMenu(false)}
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
