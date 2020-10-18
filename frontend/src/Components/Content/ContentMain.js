import React, { useState } from 'react';
import { Container, Col, Row, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const ContentMain = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <Container>
      <Col>
        <h5>Введите заголовок темы</h5>
        <input size='50' placeholder='Введите заголовок темы' />
      </Col>
      <Col>
        <h6>Введите описание темы</h6>
        <textarea rows="10" cols="53" placeholder='Введите описание темы' />
      </Col>
      <Col>
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret color="success">
            Выберите дополнительный элемент
      </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Изображение</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Ссылка</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Текстовой блок</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Ссылка на видео</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </Col>
      <Col sm="12" md={{ size: 'auto', offset: 3 }}>
        <br />
        <Button color="success" size="lg">Добавить тему</Button>
      </Col>
    </Container>
  );
}

export default ContentMain;
