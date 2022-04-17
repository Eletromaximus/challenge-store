import styled from 'styled-components'

export const ListStyle = styled.div`
  display: grid;
  list-style: none;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  
  div {
    margin: 10px 10px 0 0;
  }

  @media only screen and (max-width: 1450px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 630px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 40px;
  margin: 0;
  padding: 0;
  min-width: 400px;

  background-color: ${({ theme }) => theme.colors.secundary};
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-around;
  justify-content: center;
  width: 80%;
`
