import * as React from "react";
import {
  Container,
  Table,
  TableBody,
  TableData,
  TableHead,
  TableRow,
  Title,
} from "./styled.components";
const FormsDetails = () => {
  const data = [
    {
      id: 1,
      name: "Wasif",
      phone: "0581955852",
      email: "wasif@email.com",
      service: "ektefa",
    },
    {
      id: 2,
      name: "Ali",
      phone: "0581955852",
      email: "ali@email.com",
      service: "Qadre",
    },
    {
      id: 3,
      name: "Saad",
      phone: "0581955852",
      email: "saad@email.com",
      service: "ehtiwa",
    },
    {
      id: 4,
      name: "zeshan",
      phone: "0581955852",
      email: "zeshan@email.com",
      service: "nafeth",
    },
  ];
  const renderTableData = () => {
    return data.map((item, index) => {
      const { id, name, phone, email, service } = item; //destructuring
      return (
        <TableRow key={id}>
          <TableData>{id}</TableData>
          <TableData>{name}</TableData>
          <TableData>{phone}</TableData>
          <TableData>{email}</TableData>
          <TableData>{service}</TableData>
        </TableRow>
      );
    });
  };
  const renderTableHeader = () => {
    let header = Object.keys(data[0]);
    return header.map((key, index) => {
      return <TableHead key={index}>{key.toUpperCase()}</TableHead>;
    });
  };
  return (
    <Container>
      <Title>Requested Services Details</Title>
      <Table id="Services" className="Services">
        <TableBody>
          <TableRow>{renderTableHeader()}</TableRow>
          {renderTableData()}
        </TableBody>
      </Table>
    </Container>
  );
};
export default FormsDetails;
