import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieItem = styled.li`
  height: 100%;
  overflow: hidden;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.secondary};
`;

export const MovieLink = styled(Link)`
  display: flex;
  flex-direction: column;
  
`;

export const ImageWrapper = styled.div`
  object-fit: cover;
  overflow: hidden;
  
`;

export const Image = styled.img`
  width: 100%;
  transition: transform 750ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.1);
    cursor: zoom-in;
  }
`;

export const MovieDescription = styled.div`
  background-color: ${p => p.theme.colors.secondary};
  padding: ${p => p.theme.space[4]}px;
`;

export const ReleaseDate = styled.span`
  margin-right: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes.s};
`;

export const Rating = styled.span`
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes.xs};
`;

export const MovieTitle = styled.p`
  margin-top: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes.m};
`;
