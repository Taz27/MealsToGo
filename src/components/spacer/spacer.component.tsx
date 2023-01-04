import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import { Theme } from '../../infra/theme/types';

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
};

type sizeKeys = keyof typeof sizeVariant;
type positionKeys = keyof typeof positionVariant;

const getVariant = (position: positionKeys, size: sizeKeys, theme: Theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}: ${value}`;
};

const SpacerView = styled.View`
  ${({ variant }: { variant: string }) => variant}
`;

export const Spacer: React.FC<{
  position: positionKeys;
  size: sizeKeys;
  children: any;
}> = ({ position, size, children }) => {
  const theme = useTheme() as Theme;
  const variant = getVariant(position, size, theme);

  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};
