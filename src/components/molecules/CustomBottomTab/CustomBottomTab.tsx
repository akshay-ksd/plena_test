/* eslint-disable react-native/no-inline-styles */
import {
    Pressable,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
  } from 'react-native';
  import React from 'react';
  import {BottomTabBarProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
  import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';
  import BottomTabIcon from './BottomTabIcon';
import colors from '../../constants/colors';
  
  const CustomBottomTab = ({
    state,
    descriptors,
    navigation,
  }: BottomTabBarProps) => {
    const {width} = useWindowDimensions();
    const MARGIN = 10;
    const TAB_BAR_WIDTH = width - 2 * MARGIN;
    const TAB_WIDTH = TAB_BAR_WIDTH / state.routes.length;
  
    const translateAnimation = useAnimatedStyle(() => {
      return {
        transform: [{translateX: withSpring(TAB_WIDTH * state.index)}],
      };
    });
  
    return (
      <View
        style={[styles.tabBarContainer, {width: TAB_BAR_WIDTH, bottom: MARGIN}]}>
        <Animated.View
          style={[
            styles.slidingTabContainer,
            {width: TAB_WIDTH},
            translateAnimation,
          ]}>
          <View style={styles.slidingTab} />
        </Animated.View>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate(route.name, {merge: true});
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <Pressable
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{flex: 1}}>
              <View style={styles.contentContainer}>
                <BottomTabIcon route={route.name} isFocused={isFocused} />
              </View>
            </Pressable>
          );
        })}
      </View>
    );
  };
  
  export default CustomBottomTab;
  
  const styles = StyleSheet.create({
    tabBarContainer: {
      flex: 1,
      flexDirection: 'row',
      height: 70,
      position: 'absolute',
      alignSelf: 'center',
      backgroundColor: '#fff',
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'space-around',
      overflow: 'hidden',
      top:"89%",
      elevation:3
    },
    slidingTabContainer: {
      ...StyleSheet.absoluteFillObject,
      alignItems: 'center',
      justifyContent: 'center',
    },
    slidingTab: {
      width: 40,
      height: 40,
      borderRadius: 100,
      backgroundColor: colors.secondary,
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 4,
    },
  });