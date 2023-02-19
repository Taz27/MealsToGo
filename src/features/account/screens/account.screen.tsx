import React from 'react';

import { Spacer } from '../../../components/spacer/spacer.component';
import { StackNavigation } from '../../../infra/navigation/account.navigator';
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
} from '../components/account.styles';

interface StackNavigationProps {
  navigation: StackNavigation;
}

export const AccountScreen: React.FC<StackNavigationProps> = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate('Login')}
        >
          Login
        </AuthButton>
        <Spacer size="large" position="top">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate('Register')}
          >
            Register
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
