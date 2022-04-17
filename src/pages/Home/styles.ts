import styled from 'styled-components'

export const ListStyle = styled.div`
  display: flex;
  flex-direction: row;
  list-style: none;
  flex-wrap: wrap;
  justify-content: start;

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
