import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

import React from 'react';

import Feed from '../../views/Feed';
import Notifications from '../../views/Notifications';
import Settings from '../../views/Settings';
import Search from '../../views/Search';
import Profile from '../../views/Profile';
import Film from '../../views/Film';
import Tag from '../../views/Tag';

import DrawerBtn from './DrawerBtn';
import LabelBtn from './LabelBtn';
import MyProfileBtn from './MyProfileBtn';
import IconButton from '../dom/IconButton';
import Hidden from './Hidden';
import {colours} from '../../colours';

const createNavOptions = navigation => ({
  title: 'filmadder',
  headerLeft: () => <DrawerBtn navigation={navigation} />,
  headerRight: () => (
    <IconButton
      name="search"
      color="white"
      size={25}
      onPress={() => navigation.navigate('Search')}
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

const FeedView = createStackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: ({navigation}) => createNavOptions(navigation),
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => createNavOptions(navigation),
  },
  Film: {
    screen: Film,
    navigationOptions: ({navigation}) => createNavOptions(navigation),
  },
  Search: {
    screen: Search,
    navigationOptions: ({navigation}) => createNavOptions(navigation),
  },
  Tag: {
    screen: Tag,
    navigationOptions: ({navigation}) => createNavOptions(navigation),
  },
});

const SettingsView = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: ({navigation}) => createNavOptions(navigation),
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => createNavOptions(navigation),
  },
});

const SearchView = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: ({navigation}) => createNavOptions(navigation),
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => createNavOptions(navigation),
  },
  Film: {
    screen: Film,
    navigationOptions: ({navigation}) => createNavOptions(navigation),
  },
});

const NotificationsView = createStackNavigator(
  {
    Notifications: {
      screen: Notifications,
      navigationOptions: ({navigation}) => createNavOptions(navigation),
    },
    Profile: {
      screen: Profile,
      navigationOptions: ({navigation}) => createNavOptions(navigation),
    },
  },
  {
    initialRouteName: 'Notifications',
  },
);

const FilmView = createStackNavigator({
  Film: {
    screen: Film,
    navigationOptions: ({navigation}) => createNavOptions(navigation),
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => createNavOptions(navigation),
  },
  Tag: {
    screen: Tag,
    navigationOptions: ({navigation}) => createNavOptions(navigation),
  },
});

const ProfileView = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => createNavOptions(navigation),
  },
  Film: {
    screen: Film,
    navigationOptions: ({navigation}) => createNavOptions(navigation),
  },
  Tag: {
    screen: Tag,
    navigationOptions: ({navigation}) => createNavOptions(navigation),
  },
});

const TagView = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => createNavOptions(navigation),
  },
  Film: {
    screen: Film,
    navigationOptions: ({navigation}) => createNavOptions(navigation),
  },
});

const FaNavigatorDrawer = createDrawerNavigator(
  {
    Profile: {
      screen: ProfileView,
      navigationOptions: ({navigation}) => ({
        drawerLabel: <MyProfileBtn navigation={navigation} />,
      }),
    },
    Feed: {
      screen: FeedView,
      navigationOptions: ({navigation}) => ({
        drawerLabel: <LabelBtn label="Feed" navigation={navigation} />,
      }),
    },
    Notifications: {
      screen: NotificationsView,
      navigationOptions: ({navigation}) => ({
        drawerLabel: <LabelBtn label="Notifications" navigation={navigation} />,
      }),
    },
    Settings: {
      screen: SettingsView,
      navigationOptions: ({navigation}) => ({
        drawerLabel: <LabelBtn label="Settings" navigation={navigation} />,
      }),
    },
    Search: {
      screen: SearchView,
      navigationOptions: {
        drawerLabel: <Hidden />,
      },
    },
    Film: {
      screen: FilmView,
      navigationOptions: {
        drawerLabel: <Hidden />,
      },
    },
    Tag: {
      screen: TagView,
      navigationOptions: {
        drawerLabel: <Hidden />,
      },
    },
  },
  {
    initialRouteName: 'Feed',
    contentOptions: {
      activeBackgroundColor: colours.blue1,
      activeTintColor: '#fff',
      itemStyle: {
        marginVertical: 10,
        borderRadius: 5,
      },
      itemsContainerStyle: {
        alignItems: 'center',
        paddingVertical: 50,
      },
    },
    drawerType: 'slide',
    unmountInactiveRoutes: true,
    edgeWidth: 0,
  },
);

export default createAppContainer(FaNavigatorDrawer);
