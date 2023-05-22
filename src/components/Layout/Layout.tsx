import React, { ReactNode } from 'react';
import { StyleProp, View, ViewStyle, ScrollView } from 'react-native';
import { useStyles } from '../../hooks/useStyles';

type LayoutT = {
  children: JSX.Element | ReactNode;
  styles?: StyleProp<ViewStyle>;
  isScrollView?: boolean;
};

const Layout = ({ children, styles, isScrollView }: LayoutT) => {
  const { LAYOUT_BLOCK } = useStyles();
  return (
    <View style={[LAYOUT_BLOCK, styles]}>
      {isScrollView ? (
        <ScrollView style={styles}>{children}</ScrollView>
      ) : (
        <>{children}</>
      )}
    </View>
  );
};

export default Layout;
