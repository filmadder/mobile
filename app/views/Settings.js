import React from 'react';
import {ScrollView, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import SettingsSection from '../components/SettingsSection';
import Avatar from '../components/user/Avatar';
import Username from '../components/user/Username';
import ViewWrapper from './ViewWrapper';
import LogoutBtn from '../views/auth/LogoutBtn';
import Loader from '../components/Loader';
import ViewTitle from '../components/ViewTitle';
import {getLoggedUser} from '../auth';
import {screen} from '../constants/device';

const Settings = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    getLoggedUser()
      .then(user => {
        setUser(user);
      })
      .catch(err => console.warn(err));
  }, []);

  const onCheckboxChange = currentState => {
    console.log('the current state is');
    console.log(currentState);
  };

  /*
        RENDER
    */
  // return the view
  if (user) {
    return (
      <ViewWrapper>
        <ScrollView
          contentContainerStyle={{
            width: '100%',
            paddingHorizontal: screen.width < 400 ? 20 : 30,
          }}>
          <ViewTitle title="Settings" />
          <SettingsSection title="Avatar">
            <Avatar
              style={{marginRight: 0}}
              name={user.name}
              size="large"
              user={user}
            />
          </SettingsSection>
          <SettingsSection title="Username">
            <Username name={user.name} size="large" />
          </SettingsSection>
          <SettingsSection title="Password" btnText="change">
            <Text>🔑🔑🔑🔑🔑🔑</Text>
          </SettingsSection>
          <SettingsSection>
            <LogoutBtn title="logout" />
          </SettingsSection>
        </ScrollView>
      </ViewWrapper>
    );
  }

  // return the loader
  return <Loader />;
};

export default Settings;
