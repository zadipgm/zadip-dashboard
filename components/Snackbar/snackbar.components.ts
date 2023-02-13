import styled from "styled-components";

export const SnackbarWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0px 20px;
  align-items: center;
`;
export const StyledSnack = styled.div`
display: flex;
align-content: center;
gap: 10px;
width: 100%;
height: 40px;
svg {
  padding-top: 5px;
}
&.snackbar {
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  background-color: #86b820;
  color: #fff;
  padding: 15px 20px;
  position: fixed;
  z-index: 999;
  top: 0;
  font-size: 1rem;
}

&.error {
    background-color: ${({theme}) => theme.colors.Error} !important;
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;} 
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;} 
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
`

export const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`
export const StyledSuccess = styled.span `
  font-size: 14px;
`
export const StyledText = styled.span``

export const DesktopSnack = styled.div`
display: flex;
align-content: center;
gap: 10px;
width: 100%;
height: 40px;
svg {
  padding-top: 5px;
}
&.snackbar {
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  background-color: ${({theme}) => theme.colors.GreenLight};
  color: ${({theme}) => theme.colors.Green};
  padding: 15px 20px;
  position: fixed;
  z-index: 999;
  top: 0;
  font-size: 1rem;
}

&.error {
    background-color: ${({theme}) => theme.colors.Error} !important;
}
`