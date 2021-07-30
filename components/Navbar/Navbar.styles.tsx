import styled from "styled-components";
import { GiConvergenceTarget } from "@react-icons/all-files/gi/GiConvergenceTarget";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
interface MobileTypes {
  mobileMenu: boolean;
}

export const NavContainer = styled.nav`
  background-color: #f5f4f0;
  position: fixed;
  top: 0;
  width: calc(100vw - 32px);
  height: 56px;
  max-width: 100%;
  max-height: 100%;
  border-bottom: 1px solid rgba(75, 85, 99, 0.1);

  @media screen and (min-width: 681px) {
    height: 100vh;
    width: 200px;
    border-right: 1px solid rgba(75, 85, 99, 0.1);
    border-bottom: none;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
export const NavWrapper = styled.div`
  /* width: 100%; */
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 681px) {
    flex-direction: column;
  }
`;
export const NavLogo = styled.div`
  /* padding: 0 1rem; */
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  h1 {
    text-align: center;
    font-size: 1rem;
  }

  @media screen and (min-width: 681px) {
    flex-direction: column;
    border-bottom: 1px solid rgba(75, 85, 99, 0.1);

    h1 {
      font-size: 1.5rem;
      width: 100%;
    }
  }
`;
export const NavList = styled.ul<MobileTypes>`
  padding: 0;
  /* padding-right: 1rem; */
  width: calc(100vw);
  top: 0;
  left: 0;
  right: 0;
  height: calc(100vh - 56px);
  background-color: #f5f4f0;
  max-width: 100%;
  display: ${({ mobileMenu }) => (mobileMenu ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  list-style: none;
  position: absolute;
  margin-top: 56px;

  @media screen and (min-width: 681px) {
    position: static;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
  }
`;
export const NavListItem = styled.li`
  width: 100%;
  display: flex;

  a {
    padding: 0.8rem 2rem;
    border-radius: 4px;
    width: 100%;
  }

  :hover {
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`;
export const NavFooter = styled.div`
  display: none;

  @media screen and (min-width: 681px) {
    display: flex;
    width: 100%;
    max-width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(75, 85, 99, 0.1);
    height: 3.5rem;
  }
`;
export const MobileIconOpen = styled(GiHamburgerMenu)`
  display: flex;

  @media screen and (min-width: 681px) {
    display: none;
  }
`;
export const MobileIconClose = styled(GiConvergenceTarget)`
  display: flex;

  @media screen and (min-width: 681px) {
    display: none;
  }
`;
export const NavButton = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  font-size: 1.2rem;

  @media screen and (min-width: 681px) {
    display: none;
  }
`;
