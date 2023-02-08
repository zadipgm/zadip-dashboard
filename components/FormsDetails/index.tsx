import * as React from "react";
import { useTheme } from "styled-components";
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
  const { translations } = useTheme();
  const data = [
    {
      id: 5,
      name: "zeshan",
      phone: "0581955852",
      email: "zeshan@email.com",
      service: "muaref",
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
      name: "Ali khan",
      phone: "0581955852",
      email: "alikhan@email.com",
      service: "nafeth",
    },
    {
      id: 5,
      name: "zeshan",
      phone: "0581955852",
      email: "zeshan@email.com",
      service: "ektefa",
    },
    {
      id: 6,
      name: "sara",
      phone: "0581955852",
      email: "sara@email.com",
      service: "nafeth",
    },
    {
      id: 7,
      name: "Simran",
      phone: "0581955852",
      email: "Simran@email.com",
      service: "muaref",
    },
    {
      id: 8,
      name: "Kamran",
      phone: "0581955852",
      email: "Kamran@email.com",
      service: "nafeth",
    },
    {
      id: 9,
      name: "Usman",
      phone: "0581955852",
      email: "usman@email.com",
      service: "ektefa",
    },
    {
      id: 10,
      name: "Amir",
      phone: "0581955852",
      email: "amir@email.com",
      service: "nafeth",
    },
    {
      id: 11,
      name: "Abdullah",
      phone: "0581955852",
      email: "abdullah@email.com",
      service: "ehtiwa",
    },
    {
      id: 12,
      name: "Muhammad",
      phone: "0581955852",
      email: "muhammad@email.com",
      service: "muaref",
    },
    {
      id: 13,
      name: "Ahmed",
      phone: "0581955852",
      email: "ahmed@email.com",
      service: "nafeth",
    },
    {
      id: 14,
      name: "Nasseer",
      phone: "0581955852",
      email: "nasseer@email.com",
      service: "Qadre",
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
      <Title>{translations?.serviceDetails}</Title>
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
