import React from 'react';
import { Media, Container, Col } from 'reactstrap';

const AdminInfo = (props) => {
  const { compName, logoUrl, compDiscript, users } = props
  return (
    <Container>
      <Col xs="6">
        <Media>
          <Media left href="#">
            <Media style={{ width: 100 }} src={logoUrl} alt="Company Logo" />
          </Media>
          <Media body>
            <Media heading>
              Компания: {compName}
            </Media>
            {compDiscript}
            <Media>
              Пользователи: {users}
            </Media>
          </Media>
        </Media>
      </Col>
    </Container>
  );
};

export default AdminInfo;
