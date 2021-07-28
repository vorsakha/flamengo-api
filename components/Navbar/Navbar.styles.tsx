import styled from "styled-components";

export const NavContainer = styled.nav`
  position: fixed;
  width: 250px;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  border-right: 1px solid rgba(75, 85, 99, 0.1);
  padding-right: 1rem;
`;
export const NavWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const NavLogo = styled.div`
  /* padding: 0 1rem; */
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid rgba(75, 85, 99, 0.1);

  h1 {
    width: 100%;
    text-align: center;
  }
`;
export const NavList = styled.ul`
  padding: 0;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: start;
  align-items: center;
  list-style: none;
`;
export const NavListItem = styled.li`
  padding: 1rem;
`;
export const NavFooter = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(75, 85, 99, 0.1);
  height: 3.5rem;
`;
