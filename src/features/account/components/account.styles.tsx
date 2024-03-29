import styled from 'styled-components/native';
import { Button } from 'react-native-paper';

import { colors } from '../../../infra/theme/colors';
import { Theme } from '../../../infra/theme/types';

interface ThemeProps {
  theme: Theme;
}

export const AccountBackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/home_bg.jpg'),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props: ThemeProps) => props.theme.space[4]};
  margin-top: ${(props: ThemeProps) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  padding: ${(props: ThemeProps) => props.theme.space[2]};
`;
