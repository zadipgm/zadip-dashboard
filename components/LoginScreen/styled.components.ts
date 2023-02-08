import styled, { css } from "styled-components";

export const Container = styled.div`
background:${({ theme }) => theme.colors.themeColor} ;
width:100% ;
height:100vh ;
background-attachment: fixed;
background-image:url("https://zadip.com/images/ntpbg.jpg") ;
padding:50px 0px ;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`

export const ContentWrapper = styled.div`
display:flex ;
justify-content:center ;
align-items:center ;
background:${({ theme }) => theme.colors.themeColor} ;
width:50% ;
margin:0 auto ;
position:absolute ;
top:27% ;
    padding: 20px;
left: 10%;
right:10% ;
border-radius:20px ;
&.create-account{
    width:70% ;
}
`
export const LogoWrapper = styled.div`
width:50%;
padding:15px ;
&.create-account{
    width:30% ;
}
`
export const Logo = styled.img`
width:100% ;
`
export const Form = styled.form`
width:50% ;
width:50%;
>a{
    text-decoration: none;
    color: #fff;
    transition: 0.5s ;
    :hover{
        transition:  0.5s ;
       color: #49b9ffd6;
        text-decoration: underline;
    }
}
&.create-account{
    width:70% ;
}

`
export const SvgWrapper = styled.div`
display:flex ;
justify-content:center ;
align-items:center ;
width:50px ;
height:50px ;
background-color:#fff;
>svg{

}
`
export const Wrapper = styled.div`
    margin-bottom: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &.create-account{
        width:46% ;
        margin:10px ;
        :nth-child(3){
            width:95% ;
        }

    }
    &.checkbox{
        > label{
            color:#fff ;
            margin:0px 4px ;
        }
    }
    
`
export const Input = styled.input`
    color: #5c5858;
    ${({ theme }) =>
        theme.isLTR
            ? css`
                border-radius: 0px 20px 20px 0px;
    `
            : css`
                border-radius: 20px 0px 0px 20px;
    `
    }
    width: 100%;
    padding: 15px 7px;
    border: 1px solid lightgray;
   
    font-size: 16px;
    transition: .5s;
    outline:none ;
    :focus{
        border: 1px solid #007dcbd6;
    box-shadow: 0 0 0 0.1rem #2493f5;
    }
    &.login{
    color: rgb(255, 255, 255);
    padding: 12px 9px;
    border: none;
    outline: none;
    text-decoration: none;
    display: flex;
    border-radius:10px ;
    justify-content: center;
    align-items: self-start;
    width: 156px;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    margin-top: 22px;
    transition: all 0.5s ease-in 0s;
    font-size: 16px;
    font-family: 'Cairo', sans-serif !important;
    cursor: pointer;
    :hover{
        transition: all 0.5s ease-in 0s;
        background-color: #49b9ffd6;
    }

}
`
export const Hr = styled.hr`
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
`
