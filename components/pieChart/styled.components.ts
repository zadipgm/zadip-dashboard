import styled from "styled-components";

export const Wrapper = styled.div`
display:flex ;
justify-content:center ;
gap:40px;
`
export const ChartWrapper = styled.div`
border:1px solid lightgray ;
margin: 0px 20px;
width:40% ;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
`
export const Title = styled.div`
text-align:center ;
border-bottom:1px solid lightgray ;
color:${({ theme }) => theme.colors.darkBlue};
font-size:24px ;
`