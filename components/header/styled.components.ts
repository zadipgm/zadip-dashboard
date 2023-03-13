import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.colors.themeColor};
    padding:0px 12px ;
    width:100%;
    height:50px ;
`
export const WelcomeNote = styled.div`
text-align:center ;
background: #fff;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
margin-bottom:20px;
    border-top: 0;
    padding: 10px;
> h2 {
    color:${({ theme }) => theme.colors.darkBlue};
font-size:24px ;
}
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
position: relative;
padding:15px 0px;
cursor: pointer;
> img{
    width:40px ;
    height:40px ;
    border-radius:100% ;
    cursor:default ;
}

`
export const ArrowWrapper = styled.div`
display:flex ;
justify-content:center ;
align-items:center ;
`
export const ProfileList = styled.ul`
    list-style-type: none;
    background: #d3d3d3;
    color: black;
    position: absolute;
    top: 85.6%;
    right: 29%;
    width: 100%; 
    > a {
        display:flex;
        padding:0px 12px ;
        justify-content:flex-start;
        align-items:center;
        transition:.5s ;
        text-decoration:none ;
 :hover{
    transition:.5s ;
    background-color:${({ theme }) => theme.colors.darkBlue} ;
    color:#fff ;
    > svg {
        fill:${({ theme }) => theme.colors.white};
        stroke:${({ theme }) => theme.colors.white};
        
    }
 }
    }
`
export const ProfileListItems = styled.li`
    padding: 8px 5px;
    font-size: 13px;

  
`
export const LogoutContainer = styled.div`
>a{
display: flex;
justify-content: center;
align-items:center ;
gap:6px;
color:#fff;
text-decoration:none ;
> svg {
    transform: rotate(180deg);
}
}
`
