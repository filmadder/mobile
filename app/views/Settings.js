import React from 'react';
import {ScrollView, Text} from 'react-native';
import SettingsSection from '../components/SettingsSection';
import Avatar from '../components/user/Avatar';
import Username from '../components/user/Username';
import ViewWrapper from './ViewWrapper';
import LogoutBtn from '../views/auth/LogoutBtn';
import AppearanceSetting from '../components/AppearanceSetting';
import Loader from '../components/Loader';
import ViewTitle from '../components/ViewTitle';
import {screen} from '../constants/device';
import {useUser} from '../context/user';

const Settings = () => {
  const {user: thisUser} = useUser();
  const [, setReload] = React.useState();

  const onCheckboxChange = currentState => {};

  /*
        RENDER
    */
  // return the view
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
            name={thisUser.name}
            size="large"
            user={thisUser}
          />
        </SettingsSection>
        <SettingsSection title="Username">
          <Username name={thisUser.name} size="large" />
        </SettingsSection>
        <SettingsSection title="Password" btnText="change">
          <Text>🔑🔑🔑🔑🔑🔑</Text>
        </SettingsSection>
        <SettingsSection title="Appearance">
          <AppearanceSetting
            reloadView={() => {
              setReload({});
            }}
          />
        </SettingsSection>
        <SettingsSection>
          <LogoutBtn title="logout" />
        </SettingsSection>
      </ScrollView>
    </ViewWrapper>
  );
};

export default Settings;
