import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Feed from '../../views/Feed';
import Notifications from '../../views/Notifications';
import Settings from '../../views/Settings';
import Search from '../../views/Search';
import Profile from '../../views/Profile';
import Film from '../../views/Film';
import Tag from '../../views/Tag';
import DrawerBtn from './DrawerBtn';
import MyProfileBtn from './MyProfileBtn';
import IconButton from '../dom/IconButton';
import LabelBtn from './LabelBtn';
import {ThemeContext} from '../../context/theme';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const createNavOptions = (navigation, theme) => ({
  title: 'filmadder',
  headerLeft: () => <DrawerBtn />,
  headerRight: () => (
    <IconButton
      name="search"
      color="white"
      size={25}
      onPress={() => navigation.navigate('Search', {search: 'films'})}
    />
  ),
  headerStyle: {
    backgroundColor: theme.colors.accent,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily: 'Pacifico-Regular',
    fontSize: 22,
  },
});

const InnerScreens = ({route}) => {
  const initialRoute = route.params.initialRoute;
  const theme = route.params.theme;

  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={({navigation}) => createNavOptions(navigation, theme)}
      />
      <Stack.Screen
        name="Film"
        component={Film}
        options={({navigation}) => createNavOptions(navigation, theme)}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={({navigation}) => createNavOptions(navigation, theme)}
      />
      <Stack.Screen
        name="Tag"
        component={Tag}
        options={({navigation}) => createNavOptions(navigation, theme)}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({navigation}) => createNavOptions(navigation, theme)}
      />
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={({navigation}) => createNavOptions(navigation, theme)}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={({navigation}) => createNavOptions(navigation, theme)}
      />
    </Stack.Navigator>
  );
};

export default function InnerNavigation() {
  const theme = React.useContext(ThemeContext);

  return (
    <Drawer.Navigator
      initialRouteName="Feed"
      drawerType="modal"
      drawerStyle={{
        backgroundColor: theme.colors.feedCard,
      }}
      drawerContentOptions={{
        activeBackgroundColor: theme.colors.background,
        labelStyle: {
          color: theme.colors.accent,
          marginVertical: 5,
          borderRadius: 5,
          fontSize: 20,
          fontFamily: 'Pacifico-Regular',
          paddingHorizontal: 10,
        },
        itemStyle: {
          alignItems: 'center',
        },
        contentContainerStyle: {
          marginVertical: 50,
        },
      }}>
      <Drawer.Screen
        name="Me"
        component={InnerScreens}
        initialParams={{initialRoute: 'Profile', theme}}
        options={({navigation}) => ({
          drawerLabel: () => <MyProfileBtn navigation={navigation} />,
          unmountOnBlur: true,
          gestureEnabled: false,
          swipeEnabled: 'false',
        })}
      />
      <Drawer.Screen
        name="Feed"
        component={InnerScreens}
        initialParams={{initialRoute: 'Feed', theme}}
        options={{
          unmountOnBlur: true,
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={InnerScreens}
        initialParams={{initialRoute: 'Notifications', theme}}
        options={({navigation}) => ({
          drawerLabel: () => (
            <LabelBtn label="Notifications" navigation={navigation} />
          ),
          unmountOnBlur: true,
        })}
      />
      <Drawer.Screen
        name="Settings"
        component={InnerScreens}
        initialParams={{initialRoute: 'Settings', theme}}
        options={{
          unmountOnBlur: true,
        }}
      />
    </Drawer.Navigator>
  );
}
