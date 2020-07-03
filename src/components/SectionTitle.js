import styled from 'styled-components'

export const SectionTitleWrapper = styled.h2`
 text-align: center;
 margin-bottom: 50px;
 font-size: 28px;
 line-height: 35px;
 color: ${props => props.theme.darkBlue};
 @media (min-width: 1024px) {
  font-size: 34px;
 }
`
