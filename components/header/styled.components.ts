import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.colors.themeColor};
    padding:0px 12px ;
    width:100%;
    height:100px ;
`
export const List = styled.ul`
list-style-type: none;
    padding: 0;
    margin: 0;
        position: absolute;
    top: 9.6%;
    background:${({ theme }) => theme.colors.themeColor};
    width: 9%;

`
export const ListItems = styled.li`
padding:12px;
:hover{
background-color: #0000007a;
}
`
export const ProfileImageContainer = styled.div`
display:flex ;
justify-content:flex-start;
gap:6px;
align-items:center ;
color: #fff;
padding:15px 0px;

> img{
    width:60px ;
    height:60px ;
    border-radius:100% ;
}

`
export const LogoutContainer = styled.div`
>a{
display: flex;
justify-content: center;
align-items:center ;
gap:6px;
color:#fff;
text-decoration:none ;
}
`
