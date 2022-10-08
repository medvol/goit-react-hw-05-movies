import styled from 'styled-components';

export const MovieSearch = styled.input`
  min-width: ${p => p.theme.space[9]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.secondary};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  outline: none;
  border: none;
  min-height: ${p => p.theme.space[5]}px;
`;
