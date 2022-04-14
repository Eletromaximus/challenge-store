import styled from 'styled-components'

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 270px;
  background-color: #FCFCFC;// ${({ theme }) => theme.colors.text};
  border-radius: 5%;
  /* color: ${({ theme }) => theme.colors.text}; */


  img {
    height: 300px;
    padding-top: 25px;
    border-radius: 5px;
  }
`
