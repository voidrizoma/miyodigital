import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Brand = () => {
  return (
    <Container>
      <Paragraph style={{ textDecoration: "none", padding:"5%"}} to="/">
        Mi Yo digital
      </Paragraph>
    </Container>
  );
};

export default Brand;

const Container = styled.div`
  height: 85%;
  padding: 2% 0;
  text-transform: uppercase;
  font-size: 30px;
  background:#0781ff;
  color:white;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;


const Paragraph = styled(NavLink)`
  height: 85%;
  margin: 2% 5;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;
