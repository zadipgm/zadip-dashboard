import styled from "styled-components";

export const Container = styled.div`
    background: ${({ theme }) => theme.colors.themeColor};
    display: flex;
    flex-direction: column;
    width: 16rem;
    min-height: 100vh;
        background-size: cover;

`
export const LogoContainer = styled.div`

`
export const List = styled.ul`
    padding: 0;
    list-style-type: none;
    color: #fff;

`
export const LangButton = styled.a`

    display:flex ;
    justify-content:flex-start ;
    align-items:center ;
    gap:6px;
    width:100% ;
    color:#fff;
    text-decoration:none ;
&.mobile-lang {
  padding: 6px 12px;
    background: #fff;
    color: #044783;
    margin: 5px;
    font-size: 16px;
}
`
export const ListItems = styled.li`
 
   display:flex ;
   justify-content:flex-start;
   align-items: center;
   gap:6px;
   font-size: 18px;
   cursor: pointer;
   >a{
    padding: 10px 18px;
    display:flex ;
    justify-content:flex-start ;
    align-items:center ;
    gap:6px;
    width:100% ;
    color:#fff;
    text-decoration:none ;
    :hover{
        background-color: #00000052;
    
    }
   }

`
export const Langwrapper = styled.div`
 
 padding: 10px 18px;
    display:flex ;
    justify-content:flex-start ;
    align-items:center ;
    gap:6px;
    width:100% ;
    color:#fff;
    :hover{
        background-color: #00000052;
    
    }
   `