import styled from 'styled-components'

export const ListStyle = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  flex-wrap: wrap;
  padding: 0;

  li {
    padding: 0%;
    width: auto;
    margin: 20px 20px 0 0;
  }
`
export const Navbar = styled.div`
  width: 100%;
  height: 20px;
  margin: 0;
  padding: 0;

  background-color: ${({ theme }) => theme.colors.secundary};
`

export const Banner = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.secundary};
`
