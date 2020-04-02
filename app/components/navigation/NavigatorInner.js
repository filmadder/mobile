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
import {colours} from '../../colours';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const createNavOptions = navigation => ({
  title: 'filmadder',
  headerLeft: () => <DrawerBtn />,
  headerRight: () => (
    <IconButton
      name="search"
      color="white"
      size={25}
      onPress={() => navigation.navigate('Search', {search: 'film'})}
    />
  ),
  headerStyle: {
    backgroundColor: colours.blue3,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily: 'Pacifico-Regular',
    fontSize: 22,
  },
});

const InnerScreens = ({route}) => {
  const initialRoute = route.params.initialRoute;

  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={({navigation}) => createNavOptions(navigation)}
      />
      <Stack.Screen
        name="Film"
        component={Film}
        options={({navigation}) => createNavOptions(navigation)}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={({navigation}) => createNavOptions(navigation)}
      />
      <Stack.Screen
        name="Tag"
        component={Tag}
        options={({navigation}) => createNavOptions(navigation)}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({navigation}) => createNavOptions(navigation)}
      />
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={({navigation}) => createNavOptions(navigation)}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={({navigation}) => createNavOptions(navigation)}
      />
    </Stack.Navigator>
  );
};

export default function Navigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Feed"
      drawerType="slide"
      drawerContentOptions={{
        activeBackgroundColor: colours.blue1,
        labelStyle: {
          color: colours.blue3,
          marginVertical: 10,
          borderRadius: 5,
          fontFamily: 'Pacifico-Regular',
          textAlign: 'center',
          fontSize: 20,
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
        initialParams={{initialRoute: 'Profile'}}
        options={({navigation}) => ({
          drawerLabel: () => <MyProfileBtn navigation={navigation} />,
        })}
      />
      <Drawer.Screen
        name="Feed"
        component={InnerScreens}
        initialParams={{initialRoute: 'Feed'}}
      />
      <Drawer.Screen
        name="Notifications"
        component={InnerScreens}
        initialParams={{initialRoute: 'Notifications'}}
        options={({navigation}) => ({
          drawerLabel: () => (
            <LabelBtn label="Notifications" navigation={navigation} />
          ),
        })}
      />
      <Drawer.Screen
        name="Settings"
        component={InnerScreens}
        initialParams={{initialRoute: 'Settings'}}
      />
    </Drawer.Navigator>
  );
}
