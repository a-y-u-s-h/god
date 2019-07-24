import styled, { css } from "styled-components"

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  overflow: ${props => props.overflow || "hidden"};
  background: ${props => props.background || "transparent"};
`
