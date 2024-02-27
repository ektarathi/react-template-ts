import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  margin-top: 10px;
  border: 1px solid black;
  
  td,
  th {
    border: none;
    text-transform: capitalize;
  }

  td {
    padding: 5px 10px;
    text-align: center;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
  }
  
  thead > tr {
    background-color: #c2c2c2;
  }
`;
