import React from 'react';

import { AccountBackground, AccountCover } from '../components/account.styles';

export const AccountScreen: React.FC = () => {
  return (
    <AccountBackground>
      <AccountCover />
    </AccountBackground>
  );
};
