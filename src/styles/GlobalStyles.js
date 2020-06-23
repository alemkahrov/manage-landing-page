import styled, { css } from "styled-components"

export const Container = styled.div`
 width: 90vw;
 max-width: 1400px;
 margin: 0 auto;
`

export const Flex = styled.div`
 display: flex;
 align-items: center;

 ${props => props.alignTop && css`
  align-items: flex-start;
 `}
 ${props => props.justifyCenter && css`
  justify-content: center;
 `}
 ${props => props.spaceBetween && css`
  justify-content: space-between;
 `}
 ${props => props.flexEnd && css`
  justify-content: flex-end;
 `}
 ${props => props.flexColumn && css`
  flex-direction: column;
 `}
`

export const ButtonWrapper = styled.div`
 background: ${props => props.theme.brightRed};
 border-radius: 50px;
 padding: 0.9rem 2rem;
 box-shadow: 0px 10px 10px 6px ${props => props.theme.paleRed, 0.5};
 display: inline-block;
 margin-top: 2rem;
 a {
  font-size: 13px;
  font-weight: 700;
  color: ${props => props.theme.lightGray};
  display: flex;
  justify-content: center;
 }
`

//Tailwind breakpoints
const size = {
 sm: '640px',
 md: '768px',
 lg: '1024px',
 xl: '1280px'
}

export const breakpoints = {
 sm: `(min-width: ${size.sm})`,
 md: `(min-width: ${size.md})`,
 lg: `(min-width: ${size.lg})`,
 xl: `(min-width: ${size.xl})`
}
