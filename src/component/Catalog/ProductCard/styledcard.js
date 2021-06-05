import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

export const Wrapper = styled.div`
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 5px yellow;
  background-color:white;
  opacity: 1;
  :hover {
    opacity: 1;
    transition: 0.8s;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 100%;
  max-height: 100%;
`;

export const Paragraph = styled.p`
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  text-align: justify;
`;