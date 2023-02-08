import styled from "styled-components";
export const Container = styled.div`
`
export const Title = styled.h1`
font-size:28px;
text-align:center;
margin:30px 0px ;
color:${({ theme }) => theme.colors.lightBlue} ;
`
export const Table = styled.table`
 text-align: center;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  border: 1px solid #ddd;
  width: 100%;
`
export const TableBody = styled.tbody``
export const TableRow = styled.tr`
:nth-child(even){
    background-color: #f2f2f2;
}
:hover{
    background:${({ theme }) => theme.colors.headerLightColor};
}
`
export const TableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`
export const TableHead = styled.th`
 padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background: ${({ theme }) => theme.colors.lightBlue};
  color: white;
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  padding: 8px;
`