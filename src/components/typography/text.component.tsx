import styled from 'styled-components/native';
import { Theme } from '../../infra/theme/types';

const defaultTextStyles = (theme: Theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: Theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme: Theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme: Theme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme: Theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: Theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

export const Text = styled.Text`
  ${({ theme }: { theme: Theme }) => defaultTextStyles(theme)}
  ${({ variant = 'body', theme }: { variant: keyof typeof variants; theme: Theme }) =>
    variants[variant](theme)}
`;
