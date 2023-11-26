import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from '../../atom/Ionicons/Ionicons';
import colors from '../../constants/colors';
import useCartStore from '../../../provider/zustand/useCartStore';


interface Props {
  route: string;
  isFocused: boolean;
}

const BottomTabIcon = ({ route, isFocused }: Props) => {
  const count = useCartStore((state: any) => state.cart)

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const renderIcon = (route: string, isFocused: boolean) => {
    let height: number = 34;
    let width: number = 34;

    switch (route) {
      case 'Home':
        return (
          <Ionicons name='home-outline' size={24} color={isFocused ? "#fff" : colors.secondary} />
        );
      case 'Menu':
        return (
          <Ionicons name='apps-outline' size={24} color={isFocused ? "#fff" : colors.secondary} />
        );
      case 'Fav':
        return (
          <Ionicons name='heart-outline' size={24} color={isFocused ? "#fff" : colors.secondary} />
        );
      case 'More':
        return (
          <Ionicons name='ellipsis-vertical-outline' size={24} color={isFocused ? "#fff" : colors.secondary} />
        );
      default:
        break;
    }
  };

  return <View>{renderIcon(route, isFocused)}</View>;
};

export default BottomTabIcon;