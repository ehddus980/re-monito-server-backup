import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from './TodoContext';
import ListTimer from './Timer'

const Remove = styled.div`
  position: absolute;
  align-items: center;
  justify-content: flex-end;
  left: 90%;
  bottom: 22%;
  color: grey;
  font-size: 4vh;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  padding-left: 2vh;
  text-align: left;
  line-height: 50px;
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin: 10px;
  margin-left: 6vh;
  margin-bottom: 1vh;
  width: 68vh;
  height: 15vh;
  position: relative;
  top: 20px;
  border-radius: 20px;
  background: #f1da94;
  box-shadow: 5px 5px 10px 0px grey;
  white-space: pre-wrap;
  
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;


const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: white;
  ${props =>
    props.done &&
    css`
      color: #4DB4A9;
    `}
`;

const TextArea = styled.div`
  font-size: 18px;
  color: white;
  line-height: 130%;
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 2px solid #73635F;

  position: absolute;
  left: -8%;
  top: 30%;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 2px solid #38d9a9;
      color: #38d9a9;
    `}
`;


function TodoItem({ id, done, text, textarea }) {
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({ type: 'TOGGLE', id });
    const onRemove = () => dispatch({ type: 'REMOVE', id });
    return (
      
      <TodoItemBlock>
        <ListTimer></ListTimer>
        <CheckCircle done={done} onClick={onToggle}>
          {done && <MdDone />}
        </CheckCircle>
        <Text done={done}>
        
          {text}
          
        </Text>
        
        <TextArea>{textarea}</TextArea>
        <Remove onClick={onRemove}>
          <MdDelete />
        </Remove>
        
      </TodoItemBlock>
      
    );
}

export default React.memo(TodoItem);