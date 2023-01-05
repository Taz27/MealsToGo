import { StatusBar, SafeAreaView, Platform } from 'react-native';
import styled from 'styled-components/native';

// export const SafeArea = styled(SafeAreaView)`
//   flex: 1;
//   ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
// `;
// console.log({ StatusBarH: StatusBar.currentHeight, Platform: Platform.OS });
const isAndroid: boolean = Platform.OS === 'android';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${isAndroid ? StatusBar.currentHeight : 0}px;
  background-color: white;
`;
