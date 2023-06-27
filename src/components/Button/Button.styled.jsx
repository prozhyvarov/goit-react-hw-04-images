import styled from 'styled-components';

export const LoadButton = styled.button`
  width: 140px;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 30px;
  margin-left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: black;
  background-color: gainsboro;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #efa51b;
  }
`;