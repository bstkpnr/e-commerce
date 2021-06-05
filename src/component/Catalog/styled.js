import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
  background-color:#f9f3f3 ;
  margin-top: 10px;
  padding: 20px;
  border-radius: 5px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
`;

export const CardCol = styled.div`
  color: black;
  width: ${(props) => (props.size / 12) * 100}vw;
  margin: 10px;
`;