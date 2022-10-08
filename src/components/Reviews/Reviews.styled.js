import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: ${p => p.theme.space[5]}px;
  height: ${p => p.theme.space[5]}px;
  object-fit: cover;
  overflow: hidden;
  border-radius: ${p => p.theme.radii.round};
`;

export const User = styled.p`
  margin-right: ${p => p.theme.space[4]}px;
  margin-left: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes.s};
`;

export const UpdateTime = styled.p`
  margin-right: ${p => p.theme.space[4]}px;
  margin-left: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xs};
`;

export const Content = styled.p`
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.5;
`;
