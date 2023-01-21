import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  padding: ${props => props.theme.spacing(4)};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
`;
