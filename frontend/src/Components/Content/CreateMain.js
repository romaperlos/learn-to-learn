import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container, Col, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem,
} from 'reactstrap';

const ContentMain = (props) => {
  const { directory } = props;
  const history = useHistory();
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const [inputValue, setInputValue] = useState([]);
  const [inputTitle, setInputTitle] = useState('');
  const [inputDescription, setInputDescription] = useState('');

  function addInput(e) {
    e.persist();
    const targ = e.target.value;
    setInputValue((prev) => [...prev, { id: prev.length, type: targ, value: '' }]);
  }
  function inputFunc(e) {
    e.persist();
    setInputValue((prev) => [...prev].map((el, index) => {
      // console.log('oooooo', index.toString());
      // console.log('xxxxxx', e.target.id);
      if (index.toString() === e.target.id) {
        el.value = e.target.value;
        // console.log('?>>>>>>>', el);
      }
      return el;
    }));
  }
  function addToBase() {
    const toBase = {
      title: inputTitle,
      description: inputDescription,
      item: inputValue,
      directory,
    };
    console.log(toBase);
    (async () => {
      const res = await fetch('/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(toBase),
      });
      console.log(res);
      history.push('/');
    })();
  }

  return (
    <Container>
      <Col>
        <h5>Введите заголовок темы</h5>
        <input value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} name="title" rows size="50" placeholder="Введите заголовок темы" />
      </Col>
      <Col>
        <h6>Введите описание темы</h6>
        <textarea value={inputDescription} onChange={(e) => setInputDescription(e.target.value)} name="discription" rows="7" cols="53" placeholder="Введите описание темы" />
      </Col>
      <Col>
        {inputValue.map((e, index) => {
          let inputLabel;
          switch (e.type) {
            case 'picUrl':
              inputLabel = {
                id: inputValue[index].id,
                inputValue: inputValue[index].value,
                placeholder: 'вставляй ссылку сюда',
                text: ' Вставьте сюда, ссылку на Ваше изображение.',
              };
              break;
            case 'link':
              inputLabel = {
                id: inputValue[index].id,
                inputValue: inputValue[index].value,
                placeholder: 'вставляй ссылку сюда',
                text: ' Вставьте сюда, Вашу ссылку.',
              };
              break;
            case 'subtitle':
              inputLabel = {
                id: inputValue[index].id,
                inputValue: inputValue[index].value,
                placeholder: 'пиши подзаголовок сюда',
                text: ' Впишите сюда, Ваш подзаголовок.',
              };
              break;
            case 'textArea':
              inputLabel = {
                id: inputValue[index].id,
                inputValue: inputValue[index].value,
                textarea: true,
                text: 'Впишите сюда, Ваш подзаголовок.',
              };
              break;
            case 'videoUrl':
              inputLabel = {
                id: inputValue[index].id,
                inputValue: inputValue[index].value,
                placeholder: 'вставляй ссылку сюда',
                text: ' Вставьте сюда, ссылку на Ваше видео.',
              };
              break;
            default:
              break;
          }
          return (
            <>
              {!inputLabel.textarea && (
              <input
                id={inputLabel.id}
                onChange={inputFunc}
                value={inputLabel.inputValue}
                placeholder={inputLabel.placeholder}
              />
              )}
              {inputLabel.textarea && (
              <textarea
                id={inputLabel.id}
                onChange={inputFunc}
                value={inputLabel.inputValue}
                rows="7"
                cols="53"
                placeholder=" Впишите сюда, Ваш дополнительный текстовой блок"
              />
              )}
              <span>
                {' '}
                {inputLabel.text}
              </span>
              <br />
            </>
          );
        })}
      </Col>
      <Col>
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret color="success">
            Выберите дополнительный элемент
          </DropdownToggle>
          <DropdownMenu onClick={(e) => addInput(e)}>
            <DropdownItem value="picUrl">Изображение</DropdownItem>
            <DropdownItem value="link">Ссылка</DropdownItem>
            <DropdownItem value="subtitle">Подзаголовок</DropdownItem>
            <DropdownItem value="textArea">Текстовой блок</DropdownItem>
            <DropdownItem value="videoUrl">Ссылка на видео</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </Col>
      <Col sm="12" md={{ size: 'auto', offset: 3 }}>
        <br />
        <Button onClick={addToBase} color="success" size="lg">Добавить тему</Button>
      </Col>
    </Container>
  );
};

export default ContentMain;