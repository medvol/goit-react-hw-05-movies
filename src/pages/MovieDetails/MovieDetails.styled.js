import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieLink = styled(Link)`
  margin-right: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes.m};
  transition: transform 750ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    color: ${p => p.theme.colors.accent};
  }
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

export const MovieTitle = styled.p`
  font-weight: ${p => p.theme.fontWeights.semibold};
  margin-bottom: ${p => p.theme.space[3]}px;
  transition: transform 750ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const MovieOverview = styled.p`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  padding-right: ${p => p.theme.space[6]}px;
`;

export const GoBackButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.secondary};
  font-weight: ${p => p.theme.fontWeights.semibold};
  font-size: ${p => p.theme.fontSizes.s};
  padding: ${p => p.theme.space[3]}px;
  border: none;
  outline: none;
  border-radius: ${p => p.theme.radii.normal};
  transition: transform 750ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    color: ${p => p.theme.colors.accent};
  }
`;