import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import UserList from '../screens/userList';
import UserProfile from '../screens/userPorfile';
import DetailsScreen from '../screens/detail-screen/detail-screen';
import CartScreen from '../screens/cart-screen/cart-screen';
import TabScreen from './tab/tab-navigations';
const Stack = createStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="TabScreen" component={TabScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{ presentation: 'modal', animationTypeForReplace: 'push' }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default Routes;
