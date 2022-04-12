import styled from 'styled-components'

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 300px;
  background-color: #FCFCFC;// ${({ theme }) => theme.colors.text};
  border-radius: 5%;
  color: ${({ theme }) => theme.colors.background};


  img {
    height: 300px;
    padding-top: 25px;
    border-radius: 5px;
  }
`
