import React, { useState } from 'react';
import { Container, Col, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const ContentMain = (props) => {
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const [state, setState] = useState([]);
  function addInput(e) {
    console.log(e.target);
    e.persist()
    const targ = e.target.value
    setState(pre => [...pre, { type: targ, value: '' }])
  }
  console.log(state, '+++++++');

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
        {state.map((e)=>{
          return (
            <>
            <input placeholder={`Вставьте ваш: ${e.type}`} />
            <br/>
            </>
            )})}
      </Col>
      <Col>
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret color="success">
            Выберите дополнительный элемент
      </DropdownToggle>
          <DropdownMenu onClick={(e)=>{
            console.log(state)
            return addInput(e)}}>
            <DropdownItem value='picUrl'>Изображение</DropdownItem>
            <DropdownItem divider />
            <DropdownItem value='link'>Ссылка</DropdownItem>
            <DropdownItem divider />
            <DropdownItem value='textArea'>Текстовой блок</DropdownItem>
            <DropdownItem divider />
            <DropdownItem value='videoUrl'>Ссылка на видео</DropdownItem>
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
