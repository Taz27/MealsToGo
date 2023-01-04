import React from 'react';
import styled from 'styled-components/native';
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

export const Spacer: React.FC<{
  position: positionKeys;
  size: sizeKeys;
  theme?: Theme;
  children: any;
}> = styled.View`
  ${({ position, size, theme }: { position: positionKeys; size: sizeKeys; theme: Theme }) =>
    getVariant(position, size, theme)}
`;

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};
