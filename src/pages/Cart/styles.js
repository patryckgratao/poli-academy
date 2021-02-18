import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #232C3D;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #48B4BC;
      color: #E9EAED;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#0D9DA7')}
      }
    }
  }

`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #E9EAED;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #5A677E;
  }

  img {
    height: 100px;
  }

  strong {
    color: #E9EAED;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
    color: #E9EAED;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #2F3A4F;
      border-radius: 4px;
      color: #f3f3f3;
      background-color: #2F3A4F;
      text-align: center;
      font-weight: bold;
      padding: 7px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }

`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #E9EAED;
    font-weight: bold;
  }

  strong {
    font-size: 20px;
    margin-left: 5px;
    color: #66B5F8;
  }
`;
