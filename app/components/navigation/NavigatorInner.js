import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import React from 'react';
import { Button } from 'react-native';

import Feed from '../../views/Feed';
import Notifications from '../../views/Notifications';
import Settings from '../../views/Settings';
import Search from '../../views/Search';
import Profile from '../../views/Profile';
import Film from '../../views/Film';

import DrawerBtn from './DrawerBtn';
import Hidden from './Hidden';
import Avatar from '../user/Avatar';
import { colours } from '../../colours';

const createNavOptions = (navigation) => ({
    title: 'filmadder',
    headerLeft: () => <DrawerBtn navigation={navigation} />,
    headerRight: () => <Button title='search' onPress={() => navigation.navigate('Search')} />,
    headerStyle: {
        backgroundColor: colours.blue3,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontFamily: 'Pacifico-Regular',
        fontSize: 20,
    },
})
  
const FeedView = createStackNavigator({
    Feed: {
        screen: Feed,
        navigationOptions: ({ navigation }) => createNavOptions(navigation),
    }
});

const SettingsView = createStackNavigator({
    view: {
        screen: Settings,
        navigationOptions: ({ navigation }) => createNavOptions(navigation),
    }
});

const SearchView = createStackNavigator({
    view: {
        screen: Search,
        navigationOptions: ({ navigation }) => createNavOptions(navigation),
    }
});

const NotificationsView = createStackNavigator({
    view: {
        screen: Notifications,
        navigationOptions: ({ navigation }) => createNavOptions(navigation),
    }
});

const FilmView = createStackNavigator({
    view: {
        screen: Film,
        navigationOptions: ({ navigation }) => createNavOptions(navigation),
    }
});

const ProfileView = createStackNavigator({
    view: {
        screen: Profile,
        navigationOptions: ({ navigation }) => createNavOptions(navigation),
    }
});

const FaNavigatorDrawer  = createDrawerNavigator(
    {
        Profile: {
            screen: ProfileView,
            navigationOptions: {
                drawerLabel: <Avatar />,
            }
        },
        Feed: {
            screen: FeedView,
        },
        Notifications: {
            screen: NotificationsView
        },
        Settings: {
            screen: SettingsView
        },
        Search: {
            screen: SearchView,
            navigationOptions: {
                drawerLabel: <Hidden />,
            }
        },
        Film: {
            screen: FilmView,
            navigationOptions: {
                drawerLabel: <Hidden />
            }
        }
    },
    {
        initialRouteName: 'Feed',
        contentOptions: {
            itemsContainerStyle: {
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 50,
            }
        },
        drawerType: 'slide',
    }
);

export default createAppContainer(FaNavigatorDrawer);