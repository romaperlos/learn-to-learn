import React from 'react';
import { Media, Container, Col } from 'reactstrap';
import style from "./AdminInfo.module.css"
const AdminInfo = (props) => {
  const { compName, logoUrl, compDiscript } = props
  return (
    <Container>
      <Col xs="6">
        <Media>
          <Media left href="#">
            <Media className={style.small} src={logoUrl} alt="Company Logo" />
          </Media>
          <Media body>
            <Media heading>
            Компания: {compName}
            </Media>
            {compDiscript}
      <Media>
              users:
              </Media>
          </Media>
        </Media>
      </Col>
    </Container>
  );
};

export default AdminInfo;
