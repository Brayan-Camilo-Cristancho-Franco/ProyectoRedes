import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  padding: 6px;
  width: 100%;
  height: 70px;
  z-index: 1;
  display: flex;
  background-color: rgba(0, 0, 0, 0.7);
`

export const Wrapper = styled.div`
  background-color: #000000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  margin: auto;
`
export const Hamburguer = styled.div`
  display: none;
  color: #ffffff;
  margin-left: 10px;
  @media screen and (max-width: 960px) {
    background-color: #000000;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`

export const Menu = styled.ul`
  width: 90vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding-inline-start: 0px;
  margin: 0px;
  font-size: 1.5vw;

  @media screen and (max-width: 960px) {
    background-color: #000000;
    position: absolute;
    top: 70px;
    left: ${({ open }) => (open ? '0' : '-100%')};
    width: 100vw;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`

export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: ce;
    align-items: center;
    &:hover {
      background-color: #292929;
      cursor: pointer;
    }
  }
`

export const MenuItemLink = styled.a`
  display: flex;
  text-decoration: none;
  color: #ffffff;
  align-items: center;
  justify-content: center;
`

export const Img = styled.img`
  width: 3.2vw;
  height: 3.2vw;
`
